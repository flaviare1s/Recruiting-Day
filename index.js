// --- Formatação ---
const fmtEth = (wei) => ethers.utils.formatEther(wei);
const fmtWei = (wei) => wei.toString();
const fmtGwei = (wei) =>
  Number(ethers.utils.formatUnits(wei, "gwei")).toFixed(2) + " gwei";
const tz = "America/Fortaleza";

// --- Helpers ---
const el = (id) => document.getElementById(id);
const set = (id, val) => {
  const element = el(id);
  if (element) element.textContent = val ?? "—";
};

// --- Variáveis ---
let provider = null;

document
  .getElementById("connect-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const endpoint = el("endpoint")?.value.trim();
    const address = el("address")?.value.trim();

    set("acct-address", address || "—");
    set("status", "🔌 conectando…");

    if (!endpoint) {
      set("status", "Informe o endpoint Alchemy");
      return;
    }

    try {
      provider = new ethers.providers.JsonRpcProvider(endpoint);

      // --- Validação básica da conexão ---
      let network, clientVersion;
      try {
        network = await provider.getNetwork();
      } catch {
        network = null;
      }

      try {
        clientVersion = await provider.send("web3_clientVersion", []);
      } catch {
        clientVersion = "—";
      }

      set(
        "chainid",
        network?.chainId != null ? network.chainId.toString() : "—"
      );
      set("network-name", network?.name || "—");
      set("client-version", clientVersion);

      set("status", "Conectado. carregando dados…");

      // --- Último bloco e dados ---
      const latestNumber = await provider.getBlockNumber();

      // pode usar null se não estiver disponível
      let priorityFee = await provider
        .send("eth_maxPriorityFeePerGas", [])
        .catch(() => null);

      let balanceWei, txCount, gasPrice, latestBlock, feeHistory;

      try {
        balanceWei = await provider.getBalance(address);
      } catch {
        balanceWei = null;
      }

      try {
        txCount = await provider.getTransactionCount(address, "latest");
      } catch {
        txCount = null;
      }

      try {
        gasPrice = await provider.getGasPrice();
      } catch {
        gasPrice = null;
      }

      try {
        priorityFee = await provider.send("eth_maxPriorityFeePerGas", []);
      } catch {
        priorityFee = null;
      }

      try {
        latestBlock = await provider.getBlock(latestNumber);
      } catch {
        latestBlock = null;
      }

      try {
        feeHistory = await provider.send("eth_feeHistory", [5, "latest", [50]]);
      } catch {
        feeHistory = null;
      }

      // --- Conta ---
      set("balance-wei", balanceWei != null ? fmtWei(balanceWei) : "—");
      set(
        "balance-eth",
        balanceWei != null ? fmtEth(balanceWei) + " ETH" : "—"
      );
      set("txcount", txCount != null ? txCount.toString() : "—");

      // --- Gas ---
      set("gas-price", gasPrice != null ? fmtGwei(gasPrice) : "—");
      set("priority-fee", priorityFee != null ? fmtGwei(priorityFee) : "—");
      set(
        "base-fee",
        latestBlock?.baseFeePerGas != null
          ? fmtGwei(latestBlock.baseFeePerGas)
          : "—"
      );

      // --- Último bloco ---
      set(
        "block-number",
        latestBlock?.number != null ? latestBlock.number.toString() : "—"
      );
      set("block-hash", latestBlock?.hash || "—");
      if (latestBlock?.timestamp) {
        const when = new Date(latestBlock.timestamp * 1000);
        set("block-time", when.toLocaleString("pt-BR", { timeZone: tz }));
      } else set("block-time", "—");
      set(
        "block-txs",
        Array.isArray(latestBlock?.transactions)
          ? latestBlock.transactions.length
          : "—"
      );

      // --- Fee History ---
      if (feeHistory && feeHistory.baseFeePerGas) {
        const bases = feeHistory.baseFeePerGas.map((v) => fmtGwei(v));
        set("feehistory-base", bases.join("  ·  "));
        const rewards = feeHistory.reward?.map((arr) => fmtGwei(arr[0])) ?? [];
        set("feehistory-rew", rewards.length ? rewards.join("  ·  ") : "—");
      } else {
        set("feehistory-base", "—");
        set("feehistory-rew", "—");
      }

      set("status", "Pronto!");
    } catch (err) {
      console.error(err);
      set("status", "Erro: " + (err?.message || err));
    }
  });
  