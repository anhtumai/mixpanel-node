import { AxiosBasicCredentials } from "axios";

import { ShortResponseData, VerboseResponseData } from "../types/ingestion";

import axios from "../axiosWrapper";
import headers from "../sharedHeaders";

type ImportEventItem = {
  event: string;
  properties: {
    time: number;
    distinct_id: string;
    $insert_id: string;
    [key: string]: unknown;
  };
};
type StrictImportEventResponseData = {
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

type TrackEventItem = {
  event: string;
  properties: {
    time: number;
    token: string;
    distinct_id?: string;
    $insert_id?: string;
    [key: string]: unknown;
  };
};

export async function importEvents({
  projectId,
  events,
  auth,
  strict,
}: {
  projectId: string;
  events: ImportEventItem[];
  auth: AxiosBasicCredentials;
  strict?: 0;
}): Promise<ShortResponseData>;
export async function importEvents({
  projectId,
  events,
  auth,
  strict,
}: {
  projectId: string;
  events: ImportEventItem[];
  auth: AxiosBasicCredentials;
  strict: 1;
}): Promise<StrictImportEventResponseData>;
export async function importEvents({
  projectId,
  events,
  auth,
  strict,
}: {
  projectId: string;
  events: ImportEventItem[];
  auth: AxiosBasicCredentials;
  strict?: 0 | 1;
}): Promise<StrictImportEventResponseData | ShortResponseData> {
  const response = await axios.post("/import", events, {
    headers,
    params: {
      strict,
      project_id: projectId,
    },
    auth,
  });

  return response.data;
}

export async function trackEvents(
  events: TrackEventItem[],
  verbose?: 0,
): Promise<ShortResponseData>;
export async function trackEvents(
  events: TrackEventItem[],
  verbose: 1,
): Promise<ShortResponseData>;
export async function trackEvents(
  events: TrackEventItem[],
  verbose?: 0 | 1,
): Promise<VerboseResponseData | ShortResponseData> {
  const response = await axios.post("/track", events, {
    headers,
    params: {
      verbose,
    },
  });

  return response.data;
}
