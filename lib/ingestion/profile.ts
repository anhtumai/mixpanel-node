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
} from "../../types/ingestion";

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

async function profilePost<ProfilePostItemType extends ProfilePostItem>(
  subdirectory: string,
  profile: ProfilePostItemType[],
  verbose?: 1,
): Promise<VerboseResponseData | ShortResponseData> {
  const response = await axios.post(subdirectory, profile, {
    headers,
    params: {
      verbose,
    },
  });

  return response.data;
}

export async function profileSetProperty(
  profile: ProfileSetItem[],
): Promise<ShortResponseData>;
export async function profileSetProperty(
  profile: ProfileSetItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profileSetProperty(
  profile: ProfileSetItem[],
  verbose?: 1,
) {
  return profilePost("/engage#profile-set", profile, verbose);
}

export async function profileSetPropertyOnce(
  profile: ProfileSetPropertyOnceItem[],
): Promise<ShortResponseData>;
export async function profileSetPropertyOnce(
  profile: ProfileSetPropertyOnceItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profileSetPropertyOnce(
  profile: ProfileSetPropertyOnceItem[],
  verbose?: 1,
) {
  return profilePost("/engage#profile-set-once", profile, verbose);
}

export async function profileNumericalAdd(
  profile: ProfileNumericalAddItem[],
): Promise<ShortResponseData>;
export async function profileNumericalAdd(
  profile: ProfileNumericalAddItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profileNumericalAdd(
  profile: ProfileNumericalAddItem[],
  verbose?: 1,
) {
  return profilePost("/engage#profile-numerical-add", profile, verbose);
}

export async function profileUnion(
  profile: ProfileUnionItem[],
): Promise<ShortResponseData>;
export async function profileUnion(
  profile: ProfileUnionItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profileUnion(profile: ProfileUnionItem[], verbose?: 1) {
  return profilePost("/engage#profile-union", profile, verbose);
}

export async function profileListAppend(
  profile: ProfileListAppendItem[],
): Promise<ShortResponseData>;
export async function profileListAppend(
  profile: ProfileListAppendItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profileListAppend(
  profile: ProfileListAppendItem[],
  verbose?: 1,
) {
  return profilePost("/engage#profile-list-append", profile, verbose);
}

export async function profileListRemove(
  profile: ProfileListRemoveItem[],
): Promise<ShortResponseData>;
export async function profileListRemove(
  profile: ProfileListRemoveItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profileListRemove(
  profile: ProfileListRemoveItem[],
  verbose?: 1,
) {
  return profilePost("/engage#profile-list-remove", profile, verbose);
}

export async function profileUnset(
  profile: ProfileDeletePropertyItem[],
): Promise<ShortResponseData>;
export async function profileUnset(
  profile: ProfileDeletePropertyItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profileUnset(
  profile: ProfileDeletePropertyItem[],
  verbose?: 1,
) {
  return profilePost("/engage#profile-unset", profile, verbose);
}

export async function profileBatchUpdate(
  profile: ProfileBatchUpdateItem[],
): Promise<ShortResponseData>;
export async function profileBatchUpdate(
  profile: ProfileBatchUpdateItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profileBatchUpdate(
  profile: ProfileBatchUpdateItem[],
  verbose?: 1,
) {
  return profilePost("/engage#profile-batch-update", profile, verbose);
}

export async function profileDelete(
  profile: DeleteProfileItem[],
): Promise<ShortResponseData>;
export async function profileDelete(
  profile: DeleteProfileItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profileDelete(profile: DeleteProfileItem[], verbose?: 1) {
  return profilePost("/engage#profile-delete", profile, verbose);
}
