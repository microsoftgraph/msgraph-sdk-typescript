/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createActivityBasedTimeoutPolicyFromDiscriminatorValue, serializeActivityBasedTimeoutPolicy, type ActivityBasedTimeoutPolicy } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { AppliesToRequestBuilderNavigationMetadata, AppliesToRequestBuilderRequestsMetadata, type AppliesToRequestBuilder } from './appliesTo/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the activityBasedTimeoutPolicies property of the microsoft.graph.policyRoot entity.
 */
export interface ActivityBasedTimeoutPolicyItemRequestBuilder extends BaseRequestBuilder<ActivityBasedTimeoutPolicyItemRequestBuilder> {
    /**
     * Provides operations to manage the appliesTo property of the microsoft.graph.stsPolicy entity.
     */
    get appliesTo(): AppliesToRequestBuilder;
    /**
     * Delete an activityBasedTimeoutPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/activitybasedtimeoutpolicy-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get the properties of an activityBasedTimeoutPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ActivityBasedTimeoutPolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/activitybasedtimeoutpolicy-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ActivityBasedTimeoutPolicyItemRequestBuilderGetQueryParameters> | undefined) : Promise<ActivityBasedTimeoutPolicy | undefined>;
    /**
     * Update the properties of an activityBasedTimeoutPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ActivityBasedTimeoutPolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/activitybasedtimeoutpolicy-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: ActivityBasedTimeoutPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ActivityBasedTimeoutPolicy | undefined>;
    /**
     * Delete an activityBasedTimeoutPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get the properties of an activityBasedTimeoutPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ActivityBasedTimeoutPolicyItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of an activityBasedTimeoutPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: ActivityBasedTimeoutPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the properties of an activityBasedTimeoutPolicy object.
 */
export interface ActivityBasedTimeoutPolicyItemRequestBuilderGetQueryParameters {
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
export const ActivityBasedTimeoutPolicyItemRequestBuilderUriTemplate = "{+baseurl}/policies/activityBasedTimeoutPolicies/{activityBasedTimeoutPolicy%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ActivityBasedTimeoutPolicyItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ActivityBasedTimeoutPolicyItemRequestBuilderNavigationMetadata: Record<Exclude<keyof ActivityBasedTimeoutPolicyItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    appliesTo: {
        requestsMetadata: AppliesToRequestBuilderRequestsMetadata,
        navigationMetadata: AppliesToRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ActivityBasedTimeoutPolicyItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ActivityBasedTimeoutPolicyItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ActivityBasedTimeoutPolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createActivityBasedTimeoutPolicyFromDiscriminatorValue,
        queryParametersMapper: ActivityBasedTimeoutPolicyItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ActivityBasedTimeoutPolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createActivityBasedTimeoutPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeActivityBasedTimeoutPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
