/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAttributeMappingFunctionSchemaCollectionResponseFromDiscriminatorValue, createAttributeMappingFunctionSchemaFromDiscriminatorValue, serializeAttributeMappingFunctionSchema, type AttributeMappingFunctionSchema, type AttributeMappingFunctionSchemaCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { AttributeMappingFunctionSchemaItemRequestBuilderRequestsMetadata, type AttributeMappingFunctionSchemaItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of attributeMappingFunctionSchema entities.
 */
export interface FunctionsRequestBuilder extends BaseRequestBuilder<FunctionsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the collection of attributeMappingFunctionSchema entities.
     * @param attributeMappingFunctionSchemaId The unique identifier of attributeMappingFunctionSchema
     * @returns {AttributeMappingFunctionSchemaItemRequestBuilder}
     */
     byAttributeMappingFunctionSchemaId(attributeMappingFunctionSchemaId: string) : AttributeMappingFunctionSchemaItemRequestBuilder;
    /**
     * Get entities from functions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AttributeMappingFunctionSchemaCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<FunctionsRequestBuilderGetQueryParameters> | undefined) : Promise<AttributeMappingFunctionSchemaCollectionResponse | undefined>;
    /**
     * Add new entity to functions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AttributeMappingFunctionSchema>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: AttributeMappingFunctionSchema, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AttributeMappingFunctionSchema | undefined>;
    /**
     * Get entities from functions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<FunctionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Add new entity to functions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: AttributeMappingFunctionSchema, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get entities from functions
 */
export interface FunctionsRequestBuilderGetQueryParameters {
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
export const FunctionsRequestBuilderUriTemplate = "{+baseurl}/functions{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const FunctionsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const FunctionsRequestBuilderNavigationMetadata: Record<Exclude<keyof FunctionsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAttributeMappingFunctionSchemaId: {
        requestsMetadata: AttributeMappingFunctionSchemaItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["attributeMappingFunctionSchema%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const FunctionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: FunctionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAttributeMappingFunctionSchemaCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: FunctionsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: FunctionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAttributeMappingFunctionSchemaFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAttributeMappingFunctionSchema,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
