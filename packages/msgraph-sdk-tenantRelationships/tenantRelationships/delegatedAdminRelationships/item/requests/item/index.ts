/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDelegatedAdminRelationshipRequestFromDiscriminatorValue, serializeDelegatedAdminRelationshipRequest, type DelegatedAdminRelationshipRequest } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the requests property of the microsoft.graph.delegatedAdminRelationship entity.
 */
export interface DelegatedAdminRelationshipRequestItemRequestBuilder extends BaseRequestBuilder<DelegatedAdminRelationshipRequestItemRequestBuilder> {
    /**
     * Delete navigation property requests for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a delegatedAdminRelationshipRequest object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DelegatedAdminRelationshipRequest>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/delegatedadminrelationshiprequest-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<DelegatedAdminRelationshipRequestItemRequestBuilderGetQueryParameters> | undefined) : Promise<DelegatedAdminRelationshipRequest | undefined>;
    /**
     * Update the navigation property requests in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DelegatedAdminRelationshipRequest>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: DelegatedAdminRelationshipRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DelegatedAdminRelationshipRequest | undefined>;
    /**
     * Delete navigation property requests for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a delegatedAdminRelationshipRequest object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DelegatedAdminRelationshipRequestItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property requests in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: DelegatedAdminRelationshipRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a delegatedAdminRelationshipRequest object.
 */
export interface DelegatedAdminRelationshipRequestItemRequestBuilderGetQueryParameters {
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
export const DelegatedAdminRelationshipRequestItemRequestBuilderUriTemplate = "{+baseurl}/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship%2Did}/requests/{delegatedAdminRelationshipRequest%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DelegatedAdminRelationshipRequestItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DelegatedAdminRelationshipRequestItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: DelegatedAdminRelationshipRequestItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: DelegatedAdminRelationshipRequestItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDelegatedAdminRelationshipRequestFromDiscriminatorValue,
        queryParametersMapper: DelegatedAdminRelationshipRequestItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: DelegatedAdminRelationshipRequestItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDelegatedAdminRelationshipRequestFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDelegatedAdminRelationshipRequest,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
