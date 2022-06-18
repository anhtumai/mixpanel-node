export type ImportEventItem = {
  event: string;
  properties: {
    time: number;
    distinct_id: string;
    $insert_id: string;
    [key: string]: unknown;
  };
};

export type StrictImportEventResponseData = {
  code: 200 | number;
  num_records_imported: number;
  status: "OK" | string;
};

export type StrictImportEventResponseErrorData = {
  code: number;
  error: string;
  failed_records: {
    index: number;
    message: string;
    [key: string]: unknown;
  }[];
  num_records_imported: number;
  status: string;
};

export type TrackEventItem = {
  event: string;
  properties: {
    time: number;
    token: string;
    distinct_id?: string;
    $insert_id?: string;
    [key: string]: unknown;
  };
};
