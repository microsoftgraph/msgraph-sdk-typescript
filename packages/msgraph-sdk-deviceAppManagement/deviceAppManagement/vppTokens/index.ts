/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createVppTokenCollectionResponseFromDiscriminatorValue, createVppTokenFromDiscriminatorValue, serializeVppToken, type VppToken, type VppTokenCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { type VppTokenItemRequestBuilder, VppTokenItemRequestBuilderNavigationMetadata, VppTokenItemRequestBuilderRequestsMetadata } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the vppTokens property of the microsoft.graph.deviceAppManagement entity.
 */
export interface VppTokensRequestBuilder extends BaseRequestBuilder<VppTokensRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the vppTokens property of the microsoft.graph.deviceAppManagement entity.
     * @param vppTokenId The unique identifier of vppToken
     * @returns {VppTokenItemRequestBuilder}
     */
     byVppTokenId(vppTokenId: string) : VppTokenItemRequestBuilder;
    /**
     * List properties and relationships of the vppToken objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<VppTokenCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-vpptoken-list?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<VppTokensRequestBuilderGetQueryParameters> | undefined) : Promise<VppTokenCollectionResponse | undefined>;
    /**
     * Create a new vppToken object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<VppToken>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-vpptoken-create?view=graph-rest-1.0|Find more info here}
     */
     post(body: VppToken, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<VppToken | undefined>;
    /**
     * List properties and relationships of the vppToken objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<VppTokensRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new vppToken object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: VppToken, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * List properties and relationships of the vppToken objects.
 */
export interface VppTokensRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const VppTokensRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/vppTokens{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const VppTokensRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const VppTokensRequestBuilderNavigationMetadata: Record<Exclude<keyof VppTokensRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byVppTokenId: {
        requestsMetadata: VppTokenItemRequestBuilderRequestsMetadata,
        navigationMetadata: VppTokenItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["vppToken%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const VppTokensRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: VppTokensRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createVppTokenCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: VppTokensRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: VppTokensRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createVppTokenFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeVppToken,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
