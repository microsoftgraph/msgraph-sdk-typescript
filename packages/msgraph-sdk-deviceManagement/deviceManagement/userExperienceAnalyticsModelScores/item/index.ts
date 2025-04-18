/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUserExperienceAnalyticsModelScoresFromDiscriminatorValue, serializeUserExperienceAnalyticsModelScores, type UserExperienceAnalyticsModelScores } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsModelScores property of the microsoft.graph.deviceManagement entity.
 */
export interface UserExperienceAnalyticsModelScoresItemRequestBuilder extends BaseRequestBuilder<UserExperienceAnalyticsModelScoresItemRequestBuilder> {
    /**
     * Delete navigation property userExperienceAnalyticsModelScores for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * User experience analytics model scores
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserExperienceAnalyticsModelScores>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<UserExperienceAnalyticsModelScoresItemRequestBuilderGetQueryParameters> | undefined) : Promise<UserExperienceAnalyticsModelScores | undefined>;
    /**
     * Update the navigation property userExperienceAnalyticsModelScores in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserExperienceAnalyticsModelScores>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: UserExperienceAnalyticsModelScores, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UserExperienceAnalyticsModelScores | undefined>;
    /**
     * Delete navigation property userExperienceAnalyticsModelScores for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * User experience analytics model scores
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserExperienceAnalyticsModelScoresItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property userExperienceAnalyticsModelScores in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: UserExperienceAnalyticsModelScores, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * User experience analytics model scores
 */
export interface UserExperienceAnalyticsModelScoresItemRequestBuilderGetQueryParameters {
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
export const UserExperienceAnalyticsModelScoresItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/userExperienceAnalyticsModelScores/{userExperienceAnalyticsModelScores%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UserExperienceAnalyticsModelScoresItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserExperienceAnalyticsModelScoresItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: UserExperienceAnalyticsModelScoresItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: UserExperienceAnalyticsModelScoresItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserExperienceAnalyticsModelScoresFromDiscriminatorValue,
        queryParametersMapper: UserExperienceAnalyticsModelScoresItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: UserExperienceAnalyticsModelScoresItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserExperienceAnalyticsModelScoresFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUserExperienceAnalyticsModelScores,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
