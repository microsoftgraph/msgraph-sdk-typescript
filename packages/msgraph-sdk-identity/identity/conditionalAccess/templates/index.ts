/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createConditionalAccessTemplateCollectionResponseFromDiscriminatorValue, type ConditionalAccessTemplateCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { ConditionalAccessTemplateItemRequestBuilderRequestsMetadata, type ConditionalAccessTemplateItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the templates property of the microsoft.graph.conditionalAccessRoot entity.
 */
export interface TemplatesRequestBuilder extends BaseRequestBuilder<TemplatesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the templates property of the microsoft.graph.conditionalAccessRoot entity.
     * @param conditionalAccessTemplateId The unique identifier of conditionalAccessTemplate
     * @returns {ConditionalAccessTemplateItemRequestBuilder}
     */
     byConditionalAccessTemplateId(conditionalAccessTemplateId: string) : ConditionalAccessTemplateItemRequestBuilder;
    /**
     * Get a list of the conditionalAccessTemplate objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ConditionalAccessTemplateCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/conditionalaccessroot-list-templates?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TemplatesRequestBuilderGetQueryParameters> | undefined) : Promise<ConditionalAccessTemplateCollectionResponse | undefined>;
    /**
     * Get a list of the conditionalAccessTemplate objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TemplatesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get a list of the conditionalAccessTemplate objects and their properties.
 */
export interface TemplatesRequestBuilderGetQueryParameters {
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
export const TemplatesRequestBuilderUriTemplate = "{+baseurl}/identity/conditionalAccess/templates{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TemplatesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const TemplatesRequestBuilderNavigationMetadata: Record<Exclude<keyof TemplatesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byConditionalAccessTemplateId: {
        requestsMetadata: ConditionalAccessTemplateItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["conditionalAccessTemplate%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TemplatesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: TemplatesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createConditionalAccessTemplateCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: TemplatesRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
