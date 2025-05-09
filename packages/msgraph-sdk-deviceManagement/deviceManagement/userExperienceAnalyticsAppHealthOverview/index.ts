/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUserExperienceAnalyticsCategoryFromDiscriminatorValue, serializeUserExperienceAnalyticsCategory, type UserExperienceAnalyticsCategory } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { MetricValuesRequestBuilderNavigationMetadata, MetricValuesRequestBuilderRequestsMetadata, type MetricValuesRequestBuilder } from './metricValues/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsAppHealthOverview property of the microsoft.graph.deviceManagement entity.
 */
export interface UserExperienceAnalyticsAppHealthOverviewRequestBuilder extends BaseRequestBuilder<UserExperienceAnalyticsAppHealthOverviewRequestBuilder> {
    /**
     * Provides operations to manage the metricValues property of the microsoft.graph.userExperienceAnalyticsCategory entity.
     */
    get metricValues(): MetricValuesRequestBuilder;
    /**
     * Delete navigation property userExperienceAnalyticsAppHealthOverview for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * User experience analytics appHealth overview
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserExperienceAnalyticsCategory>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<UserExperienceAnalyticsAppHealthOverviewRequestBuilderGetQueryParameters> | undefined) : Promise<UserExperienceAnalyticsCategory | undefined>;
    /**
     * Update the navigation property userExperienceAnalyticsAppHealthOverview in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserExperienceAnalyticsCategory>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: UserExperienceAnalyticsCategory, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UserExperienceAnalyticsCategory | undefined>;
    /**
     * Delete navigation property userExperienceAnalyticsAppHealthOverview for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * User experience analytics appHealth overview
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserExperienceAnalyticsAppHealthOverviewRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property userExperienceAnalyticsAppHealthOverview in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: UserExperienceAnalyticsCategory, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * User experience analytics appHealth overview
 */
export interface UserExperienceAnalyticsAppHealthOverviewRequestBuilderGetQueryParameters {
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
export const UserExperienceAnalyticsAppHealthOverviewRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/userExperienceAnalyticsAppHealthOverview{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UserExperienceAnalyticsAppHealthOverviewRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const UserExperienceAnalyticsAppHealthOverviewRequestBuilderNavigationMetadata: Record<Exclude<keyof UserExperienceAnalyticsAppHealthOverviewRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    metricValues: {
        requestsMetadata: MetricValuesRequestBuilderRequestsMetadata,
        navigationMetadata: MetricValuesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserExperienceAnalyticsAppHealthOverviewRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: UserExperienceAnalyticsAppHealthOverviewRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: UserExperienceAnalyticsAppHealthOverviewRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserExperienceAnalyticsCategoryFromDiscriminatorValue,
        queryParametersMapper: UserExperienceAnalyticsAppHealthOverviewRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: UserExperienceAnalyticsAppHealthOverviewRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserExperienceAnalyticsCategoryFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUserExperienceAnalyticsCategory,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
