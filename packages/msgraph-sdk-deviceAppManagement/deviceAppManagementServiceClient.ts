/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { DeviceAppManagementRequestBuilderNavigationMetadata, DeviceAppManagementRequestBuilderRequestsMetadata, type DeviceAppManagementRequestBuilder } from './deviceAppManagement/index.js';
import { apiClientProxifier, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface DeviceAppManagementServiceClient extends BaseRequestBuilder<DeviceAppManagementServiceClient> {
    /**
     * Provides operations to manage the deviceAppManagement singleton.
     */
    get deviceAppManagement(): DeviceAppManagementRequestBuilder;
}
/**
 * Instantiates a new DeviceAppManagementServiceClient and sets the default values.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createDeviceAppManagementServiceClient(requestAdapter: RequestAdapter) {
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://graph.microsoft.com/v1.0";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    return apiClientProxifier<DeviceAppManagementServiceClient>(requestAdapter, pathParameters, DeviceAppManagementServiceClientNavigationMetadata, undefined);
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DeviceAppManagementServiceClientNavigationMetadata: Record<Exclude<keyof DeviceAppManagementServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    deviceAppManagement: {
        requestsMetadata: DeviceAppManagementRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceAppManagementRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const DeviceAppManagementServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
