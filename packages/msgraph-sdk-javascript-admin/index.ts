import { extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";

import {
  type AppCatalogsServiceClient,
  AppCatalogsServiceClientNavigationMetadata,
} from "./appCatalogsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
  interface GraphServiceClient extends AppCatalogsServiceClient {}
}
extendGraphServiceClient(AppCatalogsServiceClientNavigationMetadata);

