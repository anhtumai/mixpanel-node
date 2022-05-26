import axios from "../axiosWrapper";

import {
  ProfilesSetProperty,
  ProfilesSetPropertyItem,
  ProfilesSetPropertyOnce,
  ProfilesSetPropertyOnceItem,
  ProfilesNumericalAdd,
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

export async function profilesSetProperty({
  profiles,
  queryParams = {},
}: {
  profiles: ProfilesSetPropertyItem[];
  queryParams?: ProfilesSetProperty["QueryParams"];
}): Promise<ProfilesSetProperty["ResponseData"]> {
  const response = await axios.post("/engage#profile-set", profiles, {
    headers,
    params: queryParams,
  });

  return response.data;
}

export async function profilesSetPropertyOnce({
  profiles,
  queryParams = {},
}: {
  profiles: ProfilesSetPropertyOnceItem[];
  queryParams?: ProfilesSetPropertyOnce["QueryParams"];
}): Promise<ProfilesSetPropertyOnce["ResponseData"]> {
  const response = await axios.post("/engage#profile-set-once", profiles, {
    headers,
    params: queryParams,
  });

  return response.data;
}

export async function profilesNumericalAdd({
  profiles,
  queryParams = {},
}: {
  profiles: ProfilesNumericalAddItem[];
  queryParams?: ProfilesNumericalAdd["QueryParams"];
}): Promise<ProfilesNumericalAdd["ResponseData"]> {
  const response = await axios.post("/engage#profile-numerical-add", profiles, {
    headers,
    params: queryParams,
  });

  return response.data;
}

export async function profilesUnion({
  profiles,
  queryParams = {},
}: {
  profiles: ProfilesUnionItem[];
  queryParams?: ProfilesUnion["QueryParams"];
}): Promise<ProfilesUnion["ResponseData"]> {
  const response = await axios.post("/engage#profile-union", profiles, {
    headers,
    params: queryParams,
  });

  return response.data;
}

export async function profilesListAppend({
  profiles,
  queryParams = {},
}: {
  profiles: ProfilesListAppendItem[];
  queryParams?: ProfilesListAppend["QueryParams"];
}): Promise<ProfilesListAppend["ResponseData"]> {
  const response = await axios.post("/engage#profile-list-append", profiles, {
    headers,
    params: queryParams,
  });

  return response.data;
}

export async function profilesListRemove({
  profiles,
  queryParams = {},
}: {
  profiles: ProfilesListRemoveItem[];
  queryParams?: ProfilesListRemove["QueryParams"];
}): Promise<ProfilesListRemove["ResponseData"]> {
  const response = await axios.post("/engage#profile-list-remove", profiles, {
    headers,
    params: queryParams,
  });

  return response.data;
}

export async function profilesDeleteProperty({
  profiles,
  queryParams = {},
}: {
  profiles: ProfilesDeletePropertyItem[];
  queryParams?: ProfilesDeleteProperty["QueryParams"];
}): Promise<ProfilesDeleteProperty["ResponseData"]> {
  const response = await axios.post("/engage#profile-unset", profiles, {
    headers,
    params: queryParams,
  });

  return response.data;
}

export async function profilesBatchUpdate({
  profiles,
  queryParams = {},
}: {
  profiles: ProfilesBatchUpdateItem[];
  queryParams?: ProfilesBatchUpdate["QueryParams"];
}): Promise<ProfilesBatchUpdate["ResponseData"]> {
  const response = await axios.post("/engage#profile-batch-update", profiles, {
    headers,
    params: queryParams,
  });

  return response.data;
}

export async function deleteProfiles({
  profiles,
  queryParams = {},
}: {
  profiles: DeleteProfilesItem[];
  queryParams?: DeleteProfiles["QueryParams"];
}): Promise<DeleteProfiles["ResponseData"]> {
  const response = await axios.post("/engage#delete-profile", profiles, {
    headers,
    params: queryParams,
  });

  return response.data;
}
