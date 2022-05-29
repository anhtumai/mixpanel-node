import { operations } from "./openapi_schema";

export type VerboseResponseData = {
  error: string | null;
  status: 0 | 1;
};

export type ShortResponseData = 0 | 1;

type ProfileSetBodyParams =
  operations["profile-set"]["requestBody"]["content"]["application/json"];
export type ProfileSetItem = ProfileSetBodyParams[0];

type ProfileSetPropertyOnceBodyParams =
  operations["profile-set-property-once"]["requestBody"]["content"]["application/json"];
export type ProfileSetPropertyOnceItem = ProfileSetPropertyOnceBodyParams[0];

type ProfileNumericalAddBodyParams =
  operations["profile-numerical-add"]["requestBody"]["content"]["application/json"];
export type ProfileNumericalAddItem = ProfileNumericalAddBodyParams[0];

type ProfileUnionBodyParams =
  operations["user-profile-union"]["requestBody"]["content"]["application/json"];
export type ProfileUnionItem = ProfileUnionBodyParams[0];

type ProfileListAppendBodyParams =
  operations["profile-append-to-list-property"]["requestBody"]["content"]["application/json"];
export type ProfileListAppendItem = ProfileListAppendBodyParams[0];

type ProfileListRemoveBodyParams =
  operations["profile-remove-from-list-property"]["requestBody"]["content"]["application/json"];
export type ProfileListRemoveItem = ProfileListRemoveBodyParams[0];

type ProfileDeletePropertyBodyParams =
  operations["profile-delete-property"]["requestBody"]["content"]["application/json"];
export type ProfileDeletePropertyItem = ProfileDeletePropertyBodyParams[0];

type ProfileBatchUpdateBodyParams =
  operations["profile-batch-update"]["requestBody"]["content"]["application/json"];
export type ProfileBatchUpdateItem = ProfileBatchUpdateBodyParams[0];

type DeleteProfileBodyParams =
  operations["delete-profile"]["requestBody"]["content"]["application/json"];
export type DeleteProfileItem = DeleteProfileBodyParams[0];
