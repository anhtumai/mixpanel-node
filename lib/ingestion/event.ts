import { AxiosBasicCredentials } from "axios";

import axios from "../../lib/axiosWrapper";
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
type NonstrictImportEventResponseData = 0 | 1;

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
type VerboseTrackEventResponseData = {
  error: string | null;
  status: 0 | 1;
};
type ShortTrackEventResponseData = 0 | 1;

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
}): Promise<NonstrictImportEventResponseData>;
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
}): Promise<StrictImportEventResponseData | NonstrictImportEventResponseData> {
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
): Promise<ShortTrackEventResponseData>;
export async function trackEvents(
  events: TrackEventItem[],
  verbose: 1,
): Promise<VerboseTrackEventResponseData>;
export async function trackEvents(
  events: TrackEventItem[],
  verbose?: 0 | 1,
): Promise<VerboseTrackEventResponseData | ShortTrackEventResponseData> {
  const response = await axios.post("/track", events, {
    headers,
    params: {
      verbose,
    },
  });

  return response.data;
}
