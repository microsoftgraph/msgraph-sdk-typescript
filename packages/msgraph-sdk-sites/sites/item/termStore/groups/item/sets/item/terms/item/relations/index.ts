/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createRelationCollectionResponseFromDiscriminatorValue, createRelationFromDiscriminatorValue, serializeRelation, type Relation, type RelationCollectionResponse } from '@microsoft/msgraph-sdk/models/termStore/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { RelationItemRequestBuilderNavigationMetadata, RelationItemRequestBuilderRequestsMetadata, type RelationItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the relations property of the microsoft.graph.termStore.term entity.
 */
export interface RelationsRequestBuilder extends BaseRequestBuilder<RelationsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the relations property of the microsoft.graph.termStore.term entity.
     * @param relationId The unique identifier of relation
     * @returns {RelationItemRequestBuilder}
     */
     byRelationId(relationId: string) : RelationItemRequestBuilder;
    /**
     * To indicate which terms are related to the current term as either pinned or reused.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<RelationCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<RelationsRequestBuilderGetQueryParameters> | undefined) : Promise<RelationCollectionResponse | undefined>;
    /**
     * Create new navigation property to relations for sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Relation>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: Relation, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Relation | undefined>;
    /**
     * To indicate which terms are related to the current term as either pinned or reused.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RelationsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to relations for sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Relation, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * To indicate which terms are related to the current term as either pinned or reused.
 */
export interface RelationsRequestBuilderGetQueryParameters {
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
export const RelationsRequestBuilderUriTemplate = "{+baseurl}/sites/{site%2Did}/termStore/groups/{group%2Did}/sets/{set%2Did}/terms/{term%2Did}/relations{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const RelationsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const RelationsRequestBuilderNavigationMetadata: Record<Exclude<keyof RelationsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byRelationId: {
        requestsMetadata: RelationItemRequestBuilderRequestsMetadata,
        navigationMetadata: RelationItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["relation%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RelationsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: RelationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createRelationCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: RelationsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: RelationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createRelationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRelation,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
