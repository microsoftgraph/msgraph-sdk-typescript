/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { IdentityGovernanceRequestBuilderNavigationMetadata, IdentityGovernanceRequestBuilderRequestsMetadata, type IdentityGovernanceRequestBuilder } from './identityGovernance/index.js';
import { apiClientProxifier, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface IdentityGovernanceServiceClient extends BaseRequestBuilder<IdentityGovernanceServiceClient> {
    /**
     * Provides operations to manage the identityGovernance singleton.
     */
    get identityGovernance(): IdentityGovernanceRequestBuilder;
}
/**
 * Instantiates a new IdentityGovernanceServiceClient and sets the default values.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createIdentityGovernanceServiceClient(requestAdapter: RequestAdapter) {
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://graph.microsoft.com/v1.0";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    return apiClientProxifier<IdentityGovernanceServiceClient>(requestAdapter, pathParameters, IdentityGovernanceServiceClientNavigationMetadata, undefined);
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const IdentityGovernanceServiceClientNavigationMetadata: Record<Exclude<keyof IdentityGovernanceServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    identityGovernance: {
        requestsMetadata: IdentityGovernanceRequestBuilderRequestsMetadata,
        navigationMetadata: IdentityGovernanceRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const IdentityGovernanceServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
