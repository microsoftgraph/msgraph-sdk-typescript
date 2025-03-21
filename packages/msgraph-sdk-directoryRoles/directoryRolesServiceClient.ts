/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { DirectoryRolesRequestBuilderNavigationMetadata, DirectoryRolesRequestBuilderRequestsMetadata, type DirectoryRolesRequestBuilder } from './directoryRoles/index.js';
import { apiClientProxifier, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface DirectoryRolesServiceClient extends BaseRequestBuilder<DirectoryRolesServiceClient> {
    /**
     * Provides operations to manage the collection of directoryRole entities.
     */
    get directoryRoles(): DirectoryRolesRequestBuilder;
}
/**
 * Instantiates a new DirectoryRolesServiceClient and sets the default values.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createDirectoryRolesServiceClient(requestAdapter: RequestAdapter) {
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://graph.microsoft.com/v1.0";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    return apiClientProxifier<DirectoryRolesServiceClient>(requestAdapter, pathParameters, DirectoryRolesServiceClientNavigationMetadata, undefined);
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DirectoryRolesServiceClientNavigationMetadata: Record<Exclude<keyof DirectoryRolesServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    directoryRoles: {
        requestsMetadata: DirectoryRolesRequestBuilderRequestsMetadata,
        navigationMetadata: DirectoryRolesRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const DirectoryRolesServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
