/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAccessReviewScheduleDefinitionCollectionResponseFromDiscriminatorValue, createAccessReviewScheduleDefinitionFromDiscriminatorValue, serializeAccessReviewScheduleDefinition, type AccessReviewScheduleDefinition, type AccessReviewScheduleDefinitionCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { FilterByCurrentUserWithOnRequestBuilderRequestsMetadata, type FilterByCurrentUserWithOnRequestBuilder } from './filterByCurrentUserWithOn/index.js';
// @ts-ignore
import { AccessReviewScheduleDefinitionItemRequestBuilderNavigationMetadata, AccessReviewScheduleDefinitionItemRequestBuilderRequestsMetadata, type AccessReviewScheduleDefinitionItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the definitions property of the microsoft.graph.accessReviewSet entity.
 */
export interface DefinitionsRequestBuilder extends BaseRequestBuilder<DefinitionsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the definitions property of the microsoft.graph.accessReviewSet entity.
     * @param accessReviewScheduleDefinitionId The unique identifier of accessReviewScheduleDefinition
     * @returns {AccessReviewScheduleDefinitionItemRequestBuilder}
     */
     byAccessReviewScheduleDefinitionId(accessReviewScheduleDefinitionId: string) : AccessReviewScheduleDefinitionItemRequestBuilder;
    /**
     * Provides operations to call the filterByCurrentUser method.
     * @param on Usage: on='{on}'
     * @returns {FilterByCurrentUserWithOnRequestBuilder}
     */
     filterByCurrentUserWithOn(on: string | undefined) : FilterByCurrentUserWithOnRequestBuilder;
    /**
     * Get a list of the accessReviewScheduleDefinition objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessReviewScheduleDefinitionCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewset-list-definitions?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<DefinitionsRequestBuilderGetQueryParameters> | undefined) : Promise<AccessReviewScheduleDefinitionCollectionResponse | undefined>;
    /**
     * Create a new accessReviewScheduleDefinition object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessReviewScheduleDefinition>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewset-post-definitions?view=graph-rest-1.0|Find more info here}
     */
     post(body: AccessReviewScheduleDefinition, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessReviewScheduleDefinition | undefined>;
    /**
     * Get a list of the accessReviewScheduleDefinition objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DefinitionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new accessReviewScheduleDefinition object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: AccessReviewScheduleDefinition, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the accessReviewScheduleDefinition objects and their properties.
 */
export interface DefinitionsRequestBuilderGetQueryParameters {
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
export const DefinitionsRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/accessReviews/definitions{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DefinitionsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const DefinitionsRequestBuilderNavigationMetadata: Record<Exclude<keyof DefinitionsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAccessReviewScheduleDefinitionId: {
        requestsMetadata: AccessReviewScheduleDefinitionItemRequestBuilderRequestsMetadata,
        navigationMetadata: AccessReviewScheduleDefinitionItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["accessReviewScheduleDefinition%2Did"],
    },
    filterByCurrentUserWithOn: {
        requestsMetadata: FilterByCurrentUserWithOnRequestBuilderRequestsMetadata,
        pathParametersMappings: ["on"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DefinitionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: DefinitionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessReviewScheduleDefinitionCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: DefinitionsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: DefinitionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessReviewScheduleDefinitionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessReviewScheduleDefinition,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
