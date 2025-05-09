/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWebPartFromDiscriminatorValue, serializeWebPart, type WebPart } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { GetPositionOfWebPartRequestBuilderRequestsMetadata, type GetPositionOfWebPartRequestBuilder } from './getPositionOfWebPart/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the webParts property of the microsoft.graph.sitePage entity.
 */
export interface WebPartItemRequestBuilder extends BaseRequestBuilder<WebPartItemRequestBuilder> {
    /**
     * Provides operations to call the getPositionOfWebPart method.
     */
    get getPositionOfWebPart(): GetPositionOfWebPartRequestBuilder;
    /**
     * Delete a webPart object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/webpart-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Collection of webparts on the SharePoint page.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WebPart>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<WebPartItemRequestBuilderGetQueryParameters> | undefined) : Promise<WebPart | undefined>;
    /**
     * Update the navigation property webParts in sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WebPart>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: WebPart, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WebPart | undefined>;
    /**
     * Delete a webPart object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Collection of webparts on the SharePoint page.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WebPartItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property webParts in sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: WebPart, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Collection of webparts on the SharePoint page.
 */
export interface WebPartItemRequestBuilderGetQueryParameters {
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
export const WebPartItemRequestBuilderUriTemplate = "{+baseurl}/sites/{site%2Did}/pages/{baseSitePage%2Did}/graph.sitePage/webParts/{webPart%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const WebPartItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WebPartItemRequestBuilderNavigationMetadata: Record<Exclude<keyof WebPartItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    getPositionOfWebPart: {
        requestsMetadata: GetPositionOfWebPartRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const WebPartItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: WebPartItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: WebPartItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWebPartFromDiscriminatorValue,
        queryParametersMapper: WebPartItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: WebPartItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWebPartFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWebPart,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
