/*
 * Whitelist of tokens to skip warning when swapping tokens
 */
export const SWAP_WHITE_LIST = [
  "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7", // WAVAX
  "0xc7198437980c041c805A1EDcbA50c1Ce5db95118", // USDT.e
  "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7", // USDT
  "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664", // USDC.e
  "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E", // USDC
  "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70", // DAI.e
  "0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd", // JOE
];

/*
 * Major Stablecoins
 */

// USDC is our preferred stablecoin, for DEX candle pricing
export const USDC_ADDRESS =
  "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E".toLowerCase();

// List used for determining if X-Y tokenpair has a stablecoin.
export const STABLE_COINS = [
  USDC_ADDRESS, // USDC
  "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664".toLowerCase(), // USDC.e
  "0xc7198437980c041c805A1EDcbA50c1Ce5db95118".toLowerCase(), // USDT.e
  "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7".toLowerCase(), // USDT
  "0xd586e7f844cea2f87f50152665bcbc2c279d8d70".toLowerCase(), // DAI.e
];
