type ExtensionValue = string | number | boolean | null | undefined;

export enum TokenlistTabNames {
  LARGE_CAP = "Large Cap",
  TOP_TOKENS = "Top Tokens",
  AVALANCHE = "Avalanche",
  STABLECOINS = "Stablecoins",
  DEFI = "DeFi",
  GAMEFI = "GameFi",
  MEME = "Meme",
}

export interface TokenInfo {
  readonly chainId: number;
  readonly address: string;
  readonly name: string;
  readonly decimals: number;
  readonly symbol: string;
  readonly logoURI?: string;
  readonly tags?: TokenlistTabNames[];
  readonly extensions?: {
    readonly [key: string]:
      | {
          [key: string]:
            | {
                [key: string]: ExtensionValue;
              }
            | ExtensionValue;
        }
      | ExtensionValue;
  };
}

export interface Version {
  readonly major: number;
  readonly minor: number;
  readonly patch: number;
}

export interface TokenList {
  readonly name: string;
  readonly timestamp: string;
  readonly version: Version;
  readonly tokens: TokenInfo[];
  readonly keywords?: string[];
  readonly tags?: any;
  readonly logoURI?: string;
}
