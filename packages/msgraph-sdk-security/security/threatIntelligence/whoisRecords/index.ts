/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createWhoisRecordCollectionResponseFromDiscriminatorValue, createWhoisRecordFromDiscriminatorValue, serializeWhoisRecord, type WhoisRecord, type WhoisRecordCollectionResponse } from '@microsoft/msgraph-sdk/models/security/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { type WhoisRecordItemRequestBuilder, WhoisRecordItemRequestBuilderNavigationMetadata, WhoisRecordItemRequestBuilderRequestsMetadata } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the whoisRecords property of the microsoft.graph.security.threatIntelligence entity.
 */
export interface WhoisRecordsRequestBuilder extends BaseRequestBuilder<WhoisRecordsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the whoisRecords property of the microsoft.graph.security.threatIntelligence entity.
     * @param whoisRecordId The unique identifier of whoisRecord
     * @returns {WhoisRecordItemRequestBuilder}
     */
     byWhoisRecordId(whoisRecordId: string) : WhoisRecordItemRequestBuilder;
    /**
     * Get a list of whoisRecord objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WhoisRecordCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/security-threatintelligence-list-whoisrecords?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<WhoisRecordsRequestBuilderGetQueryParameters> | undefined) : Promise<WhoisRecordCollectionResponse | undefined>;
    /**
     * Create new navigation property to whoisRecords for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WhoisRecord>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: WhoisRecord, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WhoisRecord | undefined>;
    /**
     * Get a list of whoisRecord objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WhoisRecordsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to whoisRecords for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: WhoisRecord, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of whoisRecord objects.
 */
export interface WhoisRecordsRequestBuilderGetQueryParameters {
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
export const WhoisRecordsRequestBuilderUriTemplate = "{+baseurl}/security/threatIntelligence/whoisRecords{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const WhoisRecordsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const WhoisRecordsRequestBuilderNavigationMetadata: Record<Exclude<keyof WhoisRecordsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byWhoisRecordId: {
        requestsMetadata: WhoisRecordItemRequestBuilderRequestsMetadata,
        navigationMetadata: WhoisRecordItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["whoisRecord%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const WhoisRecordsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: WhoisRecordsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWhoisRecordCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: WhoisRecordsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: WhoisRecordsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWhoisRecordFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWhoisRecord,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
