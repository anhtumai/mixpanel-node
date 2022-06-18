import axios from "../axiosWrapper";

import { VerboseResponseData, ShortResponseData } from "../../types/ingestion";
import {
  ProfileSetItem,
  ProfileSetPropertyOnceItem,
  ProfileNumericalAddItem,
  ProfileUnionItem,
  ProfileListAppendItem,
  ProfileListRemoveItem,
  ProfileDeletePropertyItem,
  ProfileBatchUpdateItem,
  DeleteProfileItem,
} from "../../types/ingestion/profile";

import headers from "../sharedHeaders";

type ProfilePostItem =
  | ProfileSetItem
  | ProfileSetPropertyOnceItem
  | ProfileNumericalAddItem
  | ProfileUnionItem
  | ProfileListAppendItem
  | ProfileListRemoveItem
  | ProfileDeletePropertyItem
  | ProfileBatchUpdateItem
  | DeleteProfileItem;

async function post<ProfilePostItemType extends ProfilePostItem>(
  subdirectory: string,
  profiles: ProfilePostItemType[],
  verbose?: 1,
): Promise<VerboseResponseData | ShortResponseData> {
  const response = await axios.post(subdirectory, profiles, {
    headers,
    params: {
      verbose,
    },
  });

  return response.data;
}

export async function setProperty(
  profiles: ProfileSetItem[],
): Promise<ShortResponseData>;
export async function setProperty(
  profiles: ProfileSetItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function setProperty(profiles: ProfileSetItem[], verbose?: 1) {
  return post("/engage#profile-set", profiles, verbose);
}

export async function setPropertyOnce(
  profiles: ProfileSetPropertyOnceItem[],
): Promise<ShortResponseData>;
export async function setPropertyOnce(
  profiles: ProfileSetPropertyOnceItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function setPropertyOnce(
  profiles: ProfileSetPropertyOnceItem[],
  verbose?: 1,
) {
  return post("/engage#profile-set-once", profiles, verbose);
}

export async function numericalAdd(
  profiles: ProfileNumericalAddItem[],
): Promise<ShortResponseData>;
export async function numericalAdd(
  profiles: ProfileNumericalAddItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function numericalAdd(
  profiles: ProfileNumericalAddItem[],
  verbose?: 1,
) {
  return post("/engage#profile-numerical-add", profiles, verbose);
}

export async function union(
  profiles: ProfileUnionItem[],
): Promise<ShortResponseData>;
export async function union(
  profiles: ProfileUnionItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function union(profiles: ProfileUnionItem[], verbose?: 1) {
  return post("/engage#profile-union", profiles, verbose);
}

export async function listAppend(
  profiles: ProfileListAppendItem[],
): Promise<ShortResponseData>;
export async function listAppend(
  profiles: ProfileListAppendItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function listAppend(
  profiles: ProfileListAppendItem[],
  verbose?: 1,
) {
  return post("/engage#profile-list-append", profiles, verbose);
}

export async function listRemove(
  profiles: ProfileListRemoveItem[],
): Promise<ShortResponseData>;
export async function listRemove(
  profiles: ProfileListRemoveItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function listRemove(
  profiles: ProfileListRemoveItem[],
  verbose?: 1,
) {
  return post("/engage#profile-list-remove", profiles, verbose);
}

export async function unset(
  profiles: ProfileDeletePropertyItem[],
): Promise<ShortResponseData>;
export async function unset(
  profiles: ProfileDeletePropertyItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function unset(
  profiles: ProfileDeletePropertyItem[],
  verbose?: 1,
) {
  return post("/engage#profile-unset", profiles, verbose);
}

export async function batchUpdate(
  profiles: ProfileBatchUpdateItem[],
): Promise<ShortResponseData>;
export async function batchUpdate(
  profiles: ProfileBatchUpdateItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function batchUpdate(
  profiles: ProfileBatchUpdateItem[],
  verbose?: 1,
) {
  return post("/engage#profile-batch-update", profiles, verbose);
}

export async function profileDelete(
  profiles: DeleteProfileItem[],
): Promise<ShortResponseData>;
export async function profileDelete(
  profiles: DeleteProfileItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profileDelete(
  profiles: DeleteProfileItem[],
  verbose?: 1,
) {
  return post("/engage#profile-delete", profiles, verbose);
}
