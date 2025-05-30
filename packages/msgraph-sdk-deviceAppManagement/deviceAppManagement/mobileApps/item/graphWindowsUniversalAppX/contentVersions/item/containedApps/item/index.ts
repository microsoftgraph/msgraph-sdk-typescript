/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMobileContainedAppFromDiscriminatorValue, serializeMobileContainedApp, type MobileContainedApp } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the containedApps property of the microsoft.graph.mobileAppContent entity.
 */
export interface MobileContainedAppItemRequestBuilder extends BaseRequestBuilder<MobileContainedAppItemRequestBuilder> {
    /**
     * Delete navigation property containedApps for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The collection of contained apps in a MobileLobApp acting as a package.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MobileContainedApp>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<MobileContainedAppItemRequestBuilderGetQueryParameters> | undefined) : Promise<MobileContainedApp | undefined>;
    /**
     * Update the navigation property containedApps in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MobileContainedApp>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: MobileContainedApp, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MobileContainedApp | undefined>;
    /**
     * Delete navigation property containedApps for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The collection of contained apps in a MobileLobApp acting as a package.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MobileContainedAppItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property containedApps in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: MobileContainedApp, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The collection of contained apps in a MobileLobApp acting as a package.
 */
export interface MobileContainedAppItemRequestBuilderGetQueryParameters {
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
export const MobileContainedAppItemRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/mobileApps/{mobileApp%2Did}/graph.windowsUniversalAppX/contentVersions/{mobileAppContent%2Did}/containedApps/{mobileContainedApp%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MobileContainedAppItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MobileContainedAppItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: MobileContainedAppItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: MobileContainedAppItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMobileContainedAppFromDiscriminatorValue,
        queryParametersMapper: MobileContainedAppItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: MobileContainedAppItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMobileContainedAppFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMobileContainedApp,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
