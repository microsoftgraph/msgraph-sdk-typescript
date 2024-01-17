import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type AdminServiceClient,
  AdminServiceClientNavigationMetadata,
} from "./adminServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient extends AdminServiceClient {}
}
extendGraphServiceClient(AdminServiceClientNavigationMetadata);
