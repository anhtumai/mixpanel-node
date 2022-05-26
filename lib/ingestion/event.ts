import { AxiosBasicCredentials } from "axios";

import {
  ImportEvents,
  ImportEventItem,
  TrackEvents,
  TrackEventItem,
} from "../../types/ingestion";

import axios from "../../lib/axiosWrapper";
import headers from "../sharedHeaders";

export async function importEvents({
  projectId,
  events,
  auth,
  strict = "1",
}: {
  projectId: string;
  events: ImportEventItem[];
  auth: AxiosBasicCredentials;
  strict?: "0" | "1";
}): Promise<ImportEvents["ResponseData"]> {
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

export async function trackEvents({
  events,
  queryParams = {},
}: {
  events: TrackEventItem[];
  queryParams?: TrackEvents["QueryParams"];
}): Promise<TrackEvents["ResponseData"]> {
  const response = await axios.post("/track", events, {
    headers,
    params: queryParams,
  });

  return response.data;
}
