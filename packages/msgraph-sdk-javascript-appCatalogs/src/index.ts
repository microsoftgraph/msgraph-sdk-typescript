import { GraphServiceClient, extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript/src";
import { AppCatalogsServiceClient, AppCatalogsServiceClientNavigationMetadata } from "./appCatalogsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript/src" {
	interface GraphServiceClient extends AppCatalogsServiceClient {}
}
extendGraphServiceClient(AppCatalogsServiceClientNavigationMetadata);