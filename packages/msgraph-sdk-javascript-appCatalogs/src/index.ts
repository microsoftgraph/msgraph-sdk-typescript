import { GraphServiceClient, extendGraphServiceClient } from "@microsoft/msgraph-sdk-javascript";
import { AppCatalogsServiceClient, AppCatalogsServiceClientNavigationMetadata } from "./appCatalogsServiceClient";

declare module "@microsoft/msgraph-sdk-javascript" {
	interface GraphServiceClient extends AppCatalogsServiceClient {}
}
extendGraphServiceClient(AppCatalogsServiceClientNavigationMetadata);