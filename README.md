# Mixpanel SDK

A **type-safe** TypeScript library provides **stateless async functions** to access Mixpanel API.
These functions should be easy to test and easy to mock (in case you need to write unit test for your application).

It is created to replace `https://github.com/mixpanel/mixpanel-node`, which is weakly-typed, complicated and buggy. To fix these problems, this project is written entirely in TypeScript, generates types directly from [Mixpanel OpenAPI schema](https://dash.readme.com/api/v1/api-registry/260uf4wkzq3unav) and stays close to the API.

## Installation

```bash
npm install mixpanel-node
```

## Quick start

Sample usage:

```typescript
import { ImportEventItem } from "mixpanel-node/types/ingestion/event";

import { configureMixpanelRegion, mixpanelIngestion } from "mixpanel-node";

configureMixpanelRegion("us");

console.log(mixpanelIngestion.profile);

async function main() {
  const importEvent: ImportEventItem = {
    event: "random-event",
    properties: {
      time: Date.now(),
      distinct_id: "sample-distinct_id",
      $insert_id: "sample-insert-id",
    },
  };
  const strictResponse = await mixpanelIngestion.event.importEvents({
    projectId: "sample-project-id",
    auth: {
      username: "username",
      password: "password",
    },
    events: [importEvent],
    strict: 1,
  });
  // type of strictResponse is StrictImportEventResponseData
  console.log(strictResponse.code);
  console.log(strictResponse.status);
  console.log(strictResponse.num_records_imported);

  const nonstrictResponse = await mixpanelIngestion.event.importEvents({
    projectId: "sample-project-id",
    auth: {
      username: "username",
      password: "password",
    },
    events: [importEvent],
  });
  // type of nonstrictResponse is 0 | 1
}
```

## Documentation

### Code

List of functions:

- mixpanelIngestion

  - 1. event

       - [importEvents](https://developer.mixpanel.com/reference/import-events)
       - [trackEvents](https://developer.mixpanel.com/reference/track-event)

  - 2. profile

    - [setProperty](https://developer.mixpanel.com/reference/profile-set)
    - [setPropertyOnce](https://developer.mixpanel.com/reference/profile-set-property-once)
    - [numericalAdd](https://developer.mixpanel.com/reference/profile-numerical-add)
    - [union](https://developer.mixpanel.com/reference/user-profile-union)
    - [listAppend](https://developer.mixpanel.com/reference/profile-append-to-list-property)
    - [listRemove](https://developer.mixpanel.com/reference/profile-remove-from-list-property)
    - [batchUpdate](https://developer.mixpanel.com/reference/profile-batch-update)
    - [unset](https://developer.mixpanel.com/reference/profile-delete-property)
    - [profileDelete](https://developer.mixpanel.com/reference/delete-profile)

Types are imported from `mixpanel-node/types`

### Configure

To configure mixpanel region:

```typescript
import { configureMixpanelRegion, mixpanelIngestion } from "mixpanel-node";
configureMixpanelRegion("eu"); // value can either be `eu` or `us`
```

To configure axios, you can import `mixpanelAxios` from `mixpanel-node`

```typescript
import axiosRetry from "axios-retry";

import { axiosWrapper } from "mixpanel-node";

axiosRetry(axiosWrapper, { retries: 3 });
```
