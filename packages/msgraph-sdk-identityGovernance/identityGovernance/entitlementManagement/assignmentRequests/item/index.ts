/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAccessPackageAssignmentRequestFromDiscriminatorValue, serializeAccessPackageAssignmentRequest, type AccessPackageAssignmentRequest } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { AccessPackageRequestBuilderRequestsMetadata, type AccessPackageRequestBuilder } from './accessPackage/index.js';
// @ts-ignore
import { AssignmentRequestBuilderRequestsMetadata, type AssignmentRequestBuilder } from './assignment/index.js';
// @ts-ignore
import { CancelRequestBuilderRequestsMetadata, type CancelRequestBuilder } from './cancel/index.js';
// @ts-ignore
import { ReprocessRequestBuilderRequestsMetadata, type ReprocessRequestBuilder } from './reprocess/index.js';
// @ts-ignore
import { RequestorRequestBuilderRequestsMetadata, type RequestorRequestBuilder } from './requestor/index.js';
// @ts-ignore
import { ResumeRequestBuilderRequestsMetadata, type ResumeRequestBuilder } from './resume/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignmentRequests property of the microsoft.graph.entitlementManagement entity.
 */
export interface AccessPackageAssignmentRequestItemRequestBuilder extends BaseRequestBuilder<AccessPackageAssignmentRequestItemRequestBuilder> {
    /**
     * Provides operations to manage the accessPackage property of the microsoft.graph.accessPackageAssignmentRequest entity.
     */
    get accessPackage(): AccessPackageRequestBuilder;
    /**
     * Provides operations to manage the assignment property of the microsoft.graph.accessPackageAssignmentRequest entity.
     */
    get assignment(): AssignmentRequestBuilder;
    /**
     * Provides operations to call the cancel method.
     */
    get cancel(): CancelRequestBuilder;
    /**
     * Provides operations to call the reprocess method.
     */
    get reprocess(): ReprocessRequestBuilder;
    /**
     * Provides operations to manage the requestor property of the microsoft.graph.accessPackageAssignmentRequest entity.
     */
    get requestor(): RequestorRequestBuilder;
    /**
     * Provides operations to call the resume method.
     */
    get resume(): ResumeRequestBuilder;
    /**
     * Delete an accessPackageAssignmentRequest object. This request can be made to remove a denied or completed request.  You cannot delete an access package assignment request if it has any accessPackageAssignment objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/accesspackageassignmentrequest-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * In Microsoft Entra entitlement management, retrieve the properties and relationships of an  accessPackageAssignmentRequest object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessPackageAssignmentRequest>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/accesspackageassignmentrequest-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AccessPackageAssignmentRequestItemRequestBuilderGetQueryParameters> | undefined) : Promise<AccessPackageAssignmentRequest | undefined>;
    /**
     * Update the navigation property assignmentRequests in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessPackageAssignmentRequest>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: AccessPackageAssignmentRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessPackageAssignmentRequest | undefined>;
    /**
     * Delete an accessPackageAssignmentRequest object. This request can be made to remove a denied or completed request.  You cannot delete an access package assignment request if it has any accessPackageAssignment objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * In Microsoft Entra entitlement management, retrieve the properties and relationships of an  accessPackageAssignmentRequest object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessPackageAssignmentRequestItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property assignmentRequests in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: AccessPackageAssignmentRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * In Microsoft Entra entitlement management, retrieve the properties and relationships of an  accessPackageAssignmentRequest object.
 */
export interface AccessPackageAssignmentRequestItemRequestBuilderGetQueryParameters {
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
export const AccessPackageAssignmentRequestItemRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AccessPackageAssignmentRequestItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AccessPackageAssignmentRequestItemRequestBuilderNavigationMetadata: Record<Exclude<keyof AccessPackageAssignmentRequestItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    accessPackage: {
        requestsMetadata: AccessPackageRequestBuilderRequestsMetadata,
    },
    assignment: {
        requestsMetadata: AssignmentRequestBuilderRequestsMetadata,
    },
    cancel: {
        requestsMetadata: CancelRequestBuilderRequestsMetadata,
    },
    reprocess: {
        requestsMetadata: ReprocessRequestBuilderRequestsMetadata,
    },
    requestor: {
        requestsMetadata: RequestorRequestBuilderRequestsMetadata,
    },
    resume: {
        requestsMetadata: ResumeRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AccessPackageAssignmentRequestItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: AccessPackageAssignmentRequestItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: AccessPackageAssignmentRequestItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessPackageAssignmentRequestFromDiscriminatorValue,
        queryParametersMapper: AccessPackageAssignmentRequestItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: AccessPackageAssignmentRequestItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessPackageAssignmentRequestFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessPackageAssignmentRequest,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
