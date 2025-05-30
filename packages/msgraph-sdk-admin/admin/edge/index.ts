/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createEdgeFromDiscriminatorValue, serializeEdge, type Edge } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { InternetExplorerModeRequestBuilderNavigationMetadata, InternetExplorerModeRequestBuilderRequestsMetadata, type InternetExplorerModeRequestBuilder } from './internetExplorerMode/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the edge property of the microsoft.graph.admin entity.
 */
export interface EdgeRequestBuilder extends BaseRequestBuilder<EdgeRequestBuilder> {
    /**
     * Provides operations to manage the internetExplorerMode property of the microsoft.graph.edge entity.
     */
    get internetExplorerMode(): InternetExplorerModeRequestBuilder;
    /**
     * Delete navigation property edge for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * A container for Microsoft Edge resources. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Edge>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<EdgeRequestBuilderGetQueryParameters> | undefined) : Promise<Edge | undefined>;
    /**
     * Update the navigation property edge in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Edge>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: Edge, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Edge | undefined>;
    /**
     * Delete navigation property edge for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * A container for Microsoft Edge resources. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<EdgeRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property edge in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Edge, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A container for Microsoft Edge resources. Read-only.
 */
export interface EdgeRequestBuilderGetQueryParameters {
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
export const EdgeRequestBuilderUriTemplate = "{+baseurl}/admin/edge{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const EdgeRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const EdgeRequestBuilderNavigationMetadata: Record<Exclude<keyof EdgeRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    internetExplorerMode: {
        requestsMetadata: InternetExplorerModeRequestBuilderRequestsMetadata,
        navigationMetadata: InternetExplorerModeRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const EdgeRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: EdgeRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: EdgeRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEdgeFromDiscriminatorValue,
        queryParametersMapper: EdgeRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: EdgeRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEdgeFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEdge,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
