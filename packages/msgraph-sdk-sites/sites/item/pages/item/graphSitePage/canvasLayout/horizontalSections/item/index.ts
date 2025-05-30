/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createHorizontalSectionFromDiscriminatorValue, serializeHorizontalSection, type HorizontalSection } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ColumnsRequestBuilderNavigationMetadata, ColumnsRequestBuilderRequestsMetadata, type ColumnsRequestBuilder } from './columns/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the horizontalSections property of the microsoft.graph.canvasLayout entity.
 */
export interface HorizontalSectionItemRequestBuilder extends BaseRequestBuilder<HorizontalSectionItemRequestBuilder> {
    /**
     * Provides operations to manage the columns property of the microsoft.graph.horizontalSection entity.
     */
    get columns(): ColumnsRequestBuilder;
    /**
     * Delete navigation property horizontalSections for sites
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Collection of horizontal sections on the SharePoint page.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HorizontalSection>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<HorizontalSectionItemRequestBuilderGetQueryParameters> | undefined) : Promise<HorizontalSection | undefined>;
    /**
     * Update the navigation property horizontalSections in sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HorizontalSection>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: HorizontalSection, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<HorizontalSection | undefined>;
    /**
     * Delete navigation property horizontalSections for sites
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Collection of horizontal sections on the SharePoint page.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<HorizontalSectionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property horizontalSections in sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: HorizontalSection, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Collection of horizontal sections on the SharePoint page.
 */
export interface HorizontalSectionItemRequestBuilderGetQueryParameters {
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
export const HorizontalSectionItemRequestBuilderUriTemplate = "{+baseurl}/sites/{site%2Did}/pages/{baseSitePage%2Did}/graph.sitePage/canvasLayout/horizontalSections/{horizontalSection%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const HorizontalSectionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const HorizontalSectionItemRequestBuilderNavigationMetadata: Record<Exclude<keyof HorizontalSectionItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    columns: {
        requestsMetadata: ColumnsRequestBuilderRequestsMetadata,
        navigationMetadata: ColumnsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const HorizontalSectionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: HorizontalSectionItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: HorizontalSectionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHorizontalSectionFromDiscriminatorValue,
        queryParametersMapper: HorizontalSectionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: HorizontalSectionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHorizontalSectionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeHorizontalSection,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
