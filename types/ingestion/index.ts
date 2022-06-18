export * from "./event";
export * from "./profile";

export type VerboseResponseData = {
  error: string | null;
  status: 0 | 1;
};

export type ShortResponseData = 0 | 1;
