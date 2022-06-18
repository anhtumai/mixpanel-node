import axios from "../axiosWrapper";

import {
  VerboseResponseData,
  ShortResponseData,
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

export async function profileSetProperty(
  profiles: ProfileSetItem[],
): Promise<ShortResponseData>;
export async function profileSetProperty(
  profiles: ProfileSetItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profileSetProperty(
  profiles: ProfileSetItem[],
  verbose?: 1,
) {
  return profilePost("/engage#profile-set", profiles, verbose);
}

export async function profileSetPropertyOnce(
  profiles: ProfileSetPropertyOnceItem[],
): Promise<ShortResponseData>;
export async function profileSetPropertyOnce(
  profiles: ProfileSetPropertyOnceItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profileSetPropertyOnce(
  profiles: ProfileSetPropertyOnceItem[],
  verbose?: 1,
) {
  return profilePost("/engage#profile-set-once", profiles, verbose);
}

export async function profileNumericalAdd(
  profiles: ProfileNumericalAddItem[],
): Promise<ShortResponseData>;
export async function profileNumericalAdd(
  profiles: ProfileNumericalAddItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profileNumericalAdd(
  profiles: ProfileNumericalAddItem[],
  verbose?: 1,
) {
  return profilePost("/engage#profile-numerical-add", profiles, verbose);
}

export async function profileUnion(
  profiles: ProfileUnionItem[],
): Promise<ShortResponseData>;
export async function profileUnion(
  profiles: ProfileUnionItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profileUnion(profiles: ProfileUnionItem[], verbose?: 1) {
  return profilePost("/engage#profile-union", profiles, verbose);
}

export async function profileListAppend(
  profiles: ProfileListAppendItem[],
): Promise<ShortResponseData>;
export async function profileListAppend(
  profiles: ProfileListAppendItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profileListAppend(
  profiles: ProfileListAppendItem[],
  verbose?: 1,
) {
  return profilePost("/engage#profile-list-append", profiles, verbose);
}

export async function profileListRemove(
  profiles: ProfileListRemoveItem[],
): Promise<ShortResponseData>;
export async function profileListRemove(
  profiles: ProfileListRemoveItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profileListRemove(
  profiles: ProfileListRemoveItem[],
  verbose?: 1,
) {
  return profilePost("/engage#profile-list-remove", profiles, verbose);
}

export async function profileUnset(
  profiles: ProfileDeletePropertyItem[],
): Promise<ShortResponseData>;
export async function profileUnset(
  profiles: ProfileDeletePropertyItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profileUnset(
  profiles: ProfileDeletePropertyItem[],
  verbose?: 1,
) {
  return profilePost("/engage#profile-unset", profiles, verbose);
}

export async function profileBatchUpdate(
  profiles: ProfileBatchUpdateItem[],
): Promise<ShortResponseData>;
export async function profileBatchUpdate(
  profiles: ProfileBatchUpdateItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profileBatchUpdate(
  profiles: ProfileBatchUpdateItem[],
  verbose?: 1,
) {
  return profilePost("/engage#profile-batch-update", profiles, verbose);
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
  return profilePost("/engage#profile-delete", profiles, verbose);
}
