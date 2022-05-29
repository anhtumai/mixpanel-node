import axios from "../axiosWrapper";

import { VerboseResponseData, ShortResponseData } from "../../types/ingestion";
import {
  ProfilesSetPropertyItem,
  ProfilesSetPropertyOnceItem,
  ProfilesNumericalAddItem,
  ProfilesUnion,
  ProfilesUnionItem,
  ProfilesListAppend,
  ProfilesListAppendItem,
  ProfilesListRemoveItem,
  ProfilesListRemove,
  ProfilesDeletePropertyItem,
  ProfilesDeleteProperty,
  ProfilesBatchUpdate,
  ProfilesBatchUpdateItem,
  DeleteProfilesItem,
  DeleteProfiles,
} from "../../types/ingestion";

import headers from "../sharedHeaders";

type ProfilesPostItem =
  | ProfilesSetPropertyItem
  | ProfilesSetPropertyOnceItem
  | ProfilesNumericalAddItem
  | ProfilesUnionItem
  | ProfilesListAppendItem
  | ProfilesListRemoveItem
  | ProfilesDeletePropertyItem
  | ProfilesBatchUpdateItem
  | DeleteProfilesItem;

async function profilesPost<ProfilesPostItemType extends ProfilesPostItem>(
  subdirectory: string,
  profiles: ProfilesPostItemType[],
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

export async function profilesSetProperty(
  profiles: ProfilesSetPropertyItem[],
): Promise<ShortResponseData>;
export async function profilesSetProperty(
  profiles: ProfilesSetPropertyItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profilesSetProperty(
  profiles: ProfilesSetPropertyItem[],
  verbose?: 1,
) {
  return profilesPost("/engage#profile-set", profiles, verbose);
}

export async function profilesSetPropertyOnce(
  profiles: ProfilesSetPropertyOnceItem[],
): Promise<ShortResponseData>;
export async function profilesSetPropertyOnce(
  profiles: ProfilesSetPropertyOnceItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profilesSetPropertyOnce(
  profiles: ProfilesSetPropertyOnceItem[],
  verbose?: 1,
) {
  return profilesPost("/engage#profile-set-once", profiles, verbose);
}

export async function profilesNumericalAdd(
  profiles: ProfilesNumericalAddItem[],
): Promise<ShortResponseData>;
export async function profilesNumericalAdd(
  profiles: ProfilesNumericalAddItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profilesNumericalAdd(
  profiles: ProfilesNumericalAddItem[],
  verbose?: 1,
) {
  return profilesPost("/engage#profile-numerical-add", profiles, verbose);
}

export async function profilesUnion(
  profiles: ProfilesUnionItem[],
): Promise<ShortResponseData>;
export async function profilesUnion(
  profiles: ProfilesUnionItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profilesUnion(
  profiles: ProfilesUnionItem[],
  verbose?: 1,
) {
  return profilesPost("/engage#profile-union", profiles, verbose);
}

export async function profilesListAppend(
  profiles: ProfilesListAppendItem[],
): Promise<ShortResponseData>;
export async function profilesListAppend(
  profiles: ProfilesListAppendItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profilesListAppend(
  profiles: ProfilesListAppendItem[],
  verbose?: 1,
) {
  return profilesPost("/engage#profile-list-append", profiles, verbose);
}

export async function profilesListRemove(
  profiles: ProfilesListRemoveItem[],
): Promise<ShortResponseData>;
export async function profilesListRemove(
  profiles: ProfilesListRemoveItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profilesListRemove(
  profiles: ProfilesListRemoveItem[],
  verbose?: 1,
) {
  return profilesPost("/engage#profile-list-remove", profiles, verbose);
}

export async function profilesUnset(
  profiles: ProfilesDeletePropertyItem[],
): Promise<ShortResponseData>;
export async function profilesUnset(
  profiles: ProfilesDeletePropertyItem[],
  verbose: 1,
): Promise<VerboseResponseData>;
export async function profilesUnset(
  profiles: ProfilesDeletePropertyItem[],
  verbose?: 1,
) {
  return profilesPost("/engage#profile-unset", profiles, verbose);
}
