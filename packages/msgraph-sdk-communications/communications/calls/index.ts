/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createCallCollectionResponseFromDiscriminatorValue, createCallFromDiscriminatorValue, serializeCall, type Call, type CallCollectionResponse } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { CallItemRequestBuilderNavigationMetadata, CallItemRequestBuilderRequestsMetadata, type CallItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { LogTeleconferenceDeviceQualityRequestBuilderRequestsMetadata, type LogTeleconferenceDeviceQualityRequestBuilder } from './logTeleconferenceDeviceQuality/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the calls property of the microsoft.graph.cloudCommunications entity.
 */
export interface CallsRequestBuilder extends BaseRequestBuilder<CallsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the logTeleconferenceDeviceQuality method.
     */
    get logTeleconferenceDeviceQuality(): LogTeleconferenceDeviceQualityRequestBuilder;
    /**
     * Provides operations to manage the calls property of the microsoft.graph.cloudCommunications entity.
     * @param callId The unique identifier of call
     * @returns {CallItemRequestBuilder}
     */
     byCallId(callId: string) : CallItemRequestBuilder;
    /**
     * Retrieve the properties and relationships of a call object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CallCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<CallsRequestBuilderGetQueryParameters> | undefined) : Promise<CallCollectionResponse | undefined>;
    /**
     * Create call enables your bot to create a new outgoing peer-to-peer or group call, or join an existing meeting. You need to register the calling bot and go through the list of permissions needed. This API supports the following PSTN scenarios:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Call>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/application-post-calls?view=graph-rest-1.0|Find more info here}
     */
     post(body: Call, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Call | undefined>;
    /**
     * Retrieve the properties and relationships of a call object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CallsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create call enables your bot to create a new outgoing peer-to-peer or group call, or join an existing meeting. You need to register the calling bot and go through the list of permissions needed. This API supports the following PSTN scenarios:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Call, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the properties and relationships of a call object.
 */
export interface CallsRequestBuilderGetQueryParameters {
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
export const CallsRequestBuilderUriTemplate = "{+baseurl}/communications/calls{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CallsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const CallsRequestBuilderNavigationMetadata: Record<Exclude<keyof CallsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byCallId: {
        requestsMetadata: CallItemRequestBuilderRequestsMetadata,
        navigationMetadata: CallItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["call%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    logTeleconferenceDeviceQuality: {
        requestsMetadata: LogTeleconferenceDeviceQualityRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CallsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: CallsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCallCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: CallsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: CallsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCallFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCall,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
