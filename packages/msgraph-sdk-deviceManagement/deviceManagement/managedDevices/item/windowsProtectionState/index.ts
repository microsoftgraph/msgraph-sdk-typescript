/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWindowsProtectionStateFromDiscriminatorValue, serializeWindowsProtectionState, type WindowsProtectionState } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { DetectedMalwareStateRequestBuilderNavigationMetadata, DetectedMalwareStateRequestBuilderRequestsMetadata, type DetectedMalwareStateRequestBuilder } from './detectedMalwareState/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the windowsProtectionState property of the microsoft.graph.managedDevice entity.
 */
export interface WindowsProtectionStateRequestBuilder extends BaseRequestBuilder<WindowsProtectionStateRequestBuilder> {
    /**
     * Provides operations to manage the detectedMalwareState property of the microsoft.graph.windowsProtectionState entity.
     */
    get detectedMalwareState(): DetectedMalwareStateRequestBuilder;
    /**
     * Delete navigation property windowsProtectionState for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The device protection status. This property is read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WindowsProtectionState>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<WindowsProtectionStateRequestBuilderGetQueryParameters> | undefined) : Promise<WindowsProtectionState | undefined>;
    /**
     * Update the navigation property windowsProtectionState in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WindowsProtectionState>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: WindowsProtectionState, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WindowsProtectionState | undefined>;
    /**
     * Delete navigation property windowsProtectionState for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The device protection status. This property is read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WindowsProtectionStateRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property windowsProtectionState in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: WindowsProtectionState, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The device protection status. This property is read-only.
 */
export interface WindowsProtectionStateRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const WindowsProtectionStateRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/managedDevices/{managedDevice%2Did}/windowsProtectionState{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const WindowsProtectionStateRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WindowsProtectionStateRequestBuilderNavigationMetadata: Record<Exclude<keyof WindowsProtectionStateRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    detectedMalwareState: {
        requestsMetadata: DetectedMalwareStateRequestBuilderRequestsMetadata,
        navigationMetadata: DetectedMalwareStateRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const WindowsProtectionStateRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: WindowsProtectionStateRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: WindowsProtectionStateRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWindowsProtectionStateFromDiscriminatorValue,
        queryParametersMapper: WindowsProtectionStateRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: WindowsProtectionStateRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWindowsProtectionStateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWindowsProtectionState,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
