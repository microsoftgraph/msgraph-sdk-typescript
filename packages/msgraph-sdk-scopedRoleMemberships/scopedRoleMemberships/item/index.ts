/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createScopedRoleMembershipFromDiscriminatorValue, serializeScopedRoleMembership, type ScopedRoleMembership } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of scopedRoleMembership entities.
 */
export interface ScopedRoleMembershipItemRequestBuilder extends BaseRequestBuilder<ScopedRoleMembershipItemRequestBuilder> {
    /**
     * Delete entity from scopedRoleMemberships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get entity from scopedRoleMemberships by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ScopedRoleMembership>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ScopedRoleMembershipItemRequestBuilderGetQueryParameters> | undefined) : Promise<ScopedRoleMembership | undefined>;
    /**
     * Update entity in scopedRoleMemberships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ScopedRoleMembership>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: ScopedRoleMembership, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ScopedRoleMembership | undefined>;
    /**
     * Delete entity from scopedRoleMemberships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get entity from scopedRoleMemberships by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ScopedRoleMembershipItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update entity in scopedRoleMemberships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: ScopedRoleMembership, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get entity from scopedRoleMemberships by key
 */
export interface ScopedRoleMembershipItemRequestBuilderGetQueryParameters {
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
export const ScopedRoleMembershipItemRequestBuilderUriTemplate = "{+baseurl}/scopedRoleMemberships/{scopedRoleMembership%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ScopedRoleMembershipItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ScopedRoleMembershipItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ScopedRoleMembershipItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ScopedRoleMembershipItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createScopedRoleMembershipFromDiscriminatorValue,
        queryParametersMapper: ScopedRoleMembershipItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ScopedRoleMembershipItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createScopedRoleMembershipFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeScopedRoleMembership,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
