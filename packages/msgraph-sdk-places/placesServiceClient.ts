/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { PlacesRequestBuilderNavigationMetadata, type PlacesRequestBuilder } from './places/index.js';
import { apiClientProxifier, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
/**
 * Instantiates a new PlacesServiceClient and sets the default values.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createPlacesServiceClient(requestAdapter: RequestAdapter) {
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://graph.microsoft.com/v1.0";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    return apiClientProxifier<PlacesServiceClient>(requestAdapter, pathParameters, PlacesServiceClientNavigationMetadata, undefined);
}
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface PlacesServiceClient extends BaseRequestBuilder<PlacesServiceClient> {
    /**
     * The places property
     */
    get places(): PlacesRequestBuilder;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const PlacesServiceClientNavigationMetadata: Record<Exclude<keyof PlacesServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    places: {
        navigationMetadata: PlacesRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const PlacesServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
