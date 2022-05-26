import { operations } from "./openapi_schema";

export interface ImportEvents {
  QueryParams: operations["import-events"]["parameters"]["query"];
  BodyParams: operations["import-events"]["requestBody"]["content"]["application/json"];
  HeaderParams: operations["import-events"]["parameters"]["header"];

  ResponseData: operations["import-events"]["responses"][200]["content"]["application/json"];
}
export type ImportEventItem = ImportEvents["BodyParams"][0];

export interface TrackEvents {
  QueryParams: operations["track-event"]["parameters"]["query"];
  BodyParams: operations["track-event"]["requestBody"]["content"]["application/json"];

  ResponseData: operations["track-event"]["responses"][200]["content"]["text/plain"];
}
export type TrackEventItem = TrackEvents["BodyParams"][0];

export interface ProfilesSetProperty {
  QueryParams: operations["profile-set"]["parameters"]["query"];
  BodyParams: operations["profile-set"]["requestBody"]["content"]["application/json"];

  ResponseData: operations["profile-set"]["responses"][200]["content"]["text/plain"];
}
export type ProfilesSetPropertyItem = ProfilesSetProperty["BodyParams"][0];

export interface ProfilesSetPropertyOnce {
  QueryParams: operations["profile-set-property-once"]["parameters"]["query"];
  BodyParams: operations["profile-set-property-once"]["requestBody"]["content"]["application/json"];

  ResponseData: operations["profile-set-property-once"]["responses"][200]["content"]["text/plain"];
}
export type ProfilesSetPropertyOnceItem =
  ProfilesSetPropertyOnce["BodyParams"][0];

export interface ProfilesNumericalAdd {
  QueryParams: operations["profile-numerical-add"]["parameters"]["query"];
  BodyParams: operations["profile-numerical-add"]["requestBody"]["content"]["application/json"];

  ResponseData: operations["profile-numerical-add"]["responses"][200]["content"]["text/plain"];
}
export type ProfilesNumericalAddItem = ProfilesNumericalAdd["BodyParams"][0];

export interface ProfilesUnion {
  QueryParams: operations["user-profile-union"]["parameters"]["query"];
  BodyParams: operations["user-profile-union"]["requestBody"]["content"]["application/json"];

  ResponseData: operations["user-profile-union"]["responses"][200]["content"]["text/plain"];
}
export type ProfilesUnionItem = ProfilesUnion["BodyParams"][0];

export interface ProfilesListAppend {
  QueryParams: operations["profile-append-to-list-property"]["parameters"]["query"];
  BodyParams: operations["profile-append-to-list-property"]["requestBody"]["content"]["application/json"];

  ResponseData: operations["profile-append-to-list-property"]["responses"][200]["content"]["text/plain"];
}
export type ProfilesListAppendItem = ProfilesListAppend["BodyParams"][0];

export interface ProfilesListRemove {
  QueryParams: operations["profile-remove-from-list-property"]["parameters"]["query"];
  BodyParams: operations["profile-remove-from-list-property"]["requestBody"]["content"]["application/json"];

  ResponseData: operations["profile-remove-from-list-property"]["responses"][200]["content"]["text/plain"];
}
export type ProfilesListRemoveItem = ProfilesListRemove["BodyParams"][0];

export interface ProfilesDeleteProperty {
  QueryParams: operations["profile-delete-property"]["parameters"]["query"];
  BodyParams: operations["profile-delete-property"]["requestBody"]["content"]["application/json"];

  ResponseData: operations["profile-delete-property"]["responses"][200]["content"]["text/plain"];
}
export type ProfilesDeletePropertyItem = ProfilesListRemove["BodyParams"][0];

export interface ProfilesBatchUpdate {
  QueryParams: operations["profile-batch-update"]["parameters"]["query"];
  BodyParams: operations["profile-batch-update"]["requestBody"]["content"]["application/json"];

  ResponseData: operations["profile-batch-update"]["responses"][200]["content"]["text/plain"];
}
export type ProfilesBatchUpdateItem = ProfilesBatchUpdate["BodyParams"][0];

export interface DeleteProfiles {
  QueryParams: operations["delete-profile"]["parameters"]["query"];
  BodyParams: operations["delete-profile"]["requestBody"]["content"]["application/json"];

  ResponseData: operations["delete-profile"]["responses"][200]["content"]["text/plain"];
}
export type DeleteProfilesItem = DeleteProfiles["BodyParams"][0];
