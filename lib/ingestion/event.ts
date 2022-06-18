import { AxiosBasicCredentials } from "axios";

import { ShortResponseData, VerboseResponseData } from "../../types/ingestion";
import {
  ImportEventItem,
  StrictImportEventResponseData,
  TrackEventItem,
} from "../../types/ingestion/event";

import axios from "../axiosWrapper";
import headers from "../sharedHeaders";

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
