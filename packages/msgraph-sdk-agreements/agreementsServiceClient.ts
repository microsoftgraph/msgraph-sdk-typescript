/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { AgreementsRequestBuilderNavigationMetadata, AgreementsRequestBuilderRequestsMetadata, type AgreementsRequestBuilder } from './agreements/index.js';
import { apiClientProxifier, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface AgreementsServiceClient extends BaseRequestBuilder<AgreementsServiceClient> {
    /**
     * Provides operations to manage the collection of agreement entities.
     */
    get agreements(): AgreementsRequestBuilder;
}
/**
 * Instantiates a new AgreementsServiceClient and sets the default values.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createAgreementsServiceClient(requestAdapter: RequestAdapter) {
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://graph.microsoft.com/v1.0";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    return apiClientProxifier<AgreementsServiceClient>(requestAdapter, pathParameters, AgreementsServiceClientNavigationMetadata, undefined);
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AgreementsServiceClientNavigationMetadata: Record<Exclude<keyof AgreementsServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    agreements: {
        requestsMetadata: AgreementsRequestBuilderRequestsMetadata,
        navigationMetadata: AgreementsRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const AgreementsServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
