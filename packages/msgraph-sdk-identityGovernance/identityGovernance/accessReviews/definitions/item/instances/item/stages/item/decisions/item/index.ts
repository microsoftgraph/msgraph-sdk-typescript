/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAccessReviewInstanceDecisionItemFromDiscriminatorValue, serializeAccessReviewInstanceDecisionItem, type AccessReviewInstanceDecisionItem } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { InsightsRequestBuilderNavigationMetadata, InsightsRequestBuilderRequestsMetadata, type InsightsRequestBuilder } from './insights/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the decisions property of the microsoft.graph.accessReviewStage entity.
 */
export interface AccessReviewInstanceDecisionItemItemRequestBuilder extends BaseRequestBuilder<AccessReviewInstanceDecisionItemItemRequestBuilder> {
    /**
     * Provides operations to manage the insights property of the microsoft.graph.accessReviewInstanceDecisionItem entity.
     */
    get insights(): InsightsRequestBuilder;
    /**
     * Delete navigation property decisions for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of an accessReviewInstanceDecisionItem object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessReviewInstanceDecisionItem>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewinstancedecisionitem-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AccessReviewInstanceDecisionItemItemRequestBuilderGetQueryParameters> | undefined) : Promise<AccessReviewInstanceDecisionItem | undefined>;
    /**
     * Update access decisions, known as accessReviewInstanceDecisionItems, for which the user is the reviewer.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessReviewInstanceDecisionItem>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewinstancedecisionitem-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: AccessReviewInstanceDecisionItem, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessReviewInstanceDecisionItem | undefined>;
    /**
     * Delete navigation property decisions for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of an accessReviewInstanceDecisionItem object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessReviewInstanceDecisionItemItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update access decisions, known as accessReviewInstanceDecisionItems, for which the user is the reviewer.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: AccessReviewInstanceDecisionItem, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of an accessReviewInstanceDecisionItem object.
 */
export interface AccessReviewInstanceDecisionItemItemRequestBuilderGetQueryParameters {
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
export const AccessReviewInstanceDecisionItemItemRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition%2Did}/instances/{accessReviewInstance%2Did}/stages/{accessReviewStage%2Did}/decisions/{accessReviewInstanceDecisionItem%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AccessReviewInstanceDecisionItemItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AccessReviewInstanceDecisionItemItemRequestBuilderNavigationMetadata: Record<Exclude<keyof AccessReviewInstanceDecisionItemItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    insights: {
        requestsMetadata: InsightsRequestBuilderRequestsMetadata,
        navigationMetadata: InsightsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AccessReviewInstanceDecisionItemItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: AccessReviewInstanceDecisionItemItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: AccessReviewInstanceDecisionItemItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessReviewInstanceDecisionItemFromDiscriminatorValue,
        queryParametersMapper: AccessReviewInstanceDecisionItemItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: AccessReviewInstanceDecisionItemItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessReviewInstanceDecisionItemFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessReviewInstanceDecisionItem,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
