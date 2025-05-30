/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue, serializeWindowsInformationProtectionAppLockerFile, type WindowsInformationProtectionAppLockerFile } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the protectedAppLockerFiles property of the microsoft.graph.windowsInformationProtection entity.
 */
export interface WindowsInformationProtectionAppLockerFileItemRequestBuilder extends BaseRequestBuilder<WindowsInformationProtectionAppLockerFileItemRequestBuilder> {
    /**
     * Delete navigation property protectedAppLockerFiles for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Another way to input protected apps through xml files
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WindowsInformationProtectionAppLockerFile>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<WindowsInformationProtectionAppLockerFileItemRequestBuilderGetQueryParameters> | undefined) : Promise<WindowsInformationProtectionAppLockerFile | undefined>;
    /**
     * Update the navigation property protectedAppLockerFiles in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WindowsInformationProtectionAppLockerFile>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: WindowsInformationProtectionAppLockerFile, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WindowsInformationProtectionAppLockerFile | undefined>;
    /**
     * Delete navigation property protectedAppLockerFiles for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Another way to input protected apps through xml files
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WindowsInformationProtectionAppLockerFileItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property protectedAppLockerFiles in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: WindowsInformationProtectionAppLockerFile, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Another way to input protected apps through xml files
 */
export interface WindowsInformationProtectionAppLockerFileItemRequestBuilderGetQueryParameters {
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
export const WindowsInformationProtectionAppLockerFileItemRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy%2Did}/protectedAppLockerFiles/{windowsInformationProtectionAppLockerFile%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const WindowsInformationProtectionAppLockerFileItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const WindowsInformationProtectionAppLockerFileItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: WindowsInformationProtectionAppLockerFileItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: WindowsInformationProtectionAppLockerFileItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue,
        queryParametersMapper: WindowsInformationProtectionAppLockerFileItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: WindowsInformationProtectionAppLockerFileItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWindowsInformationProtectionAppLockerFileFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWindowsInformationProtectionAppLockerFile,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
