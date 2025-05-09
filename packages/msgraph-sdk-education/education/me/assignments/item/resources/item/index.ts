/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createEducationAssignmentResourceFromDiscriminatorValue, serializeEducationAssignmentResource, type EducationAssignmentResource } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resources property of the microsoft.graph.educationAssignment entity.
 */
export interface EducationAssignmentResourceItemRequestBuilder extends BaseRequestBuilder<EducationAssignmentResourceItemRequestBuilder> {
    /**
     * Delete navigation property resources for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Learning objects that are associated with this assignment. Only teachers can modify this list. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EducationAssignmentResource>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<EducationAssignmentResourceItemRequestBuilderGetQueryParameters> | undefined) : Promise<EducationAssignmentResource | undefined>;
    /**
     * Update the navigation property resources in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EducationAssignmentResource>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: EducationAssignmentResource, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EducationAssignmentResource | undefined>;
    /**
     * Delete navigation property resources for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Learning objects that are associated with this assignment. Only teachers can modify this list. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<EducationAssignmentResourceItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property resources in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: EducationAssignmentResource, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Learning objects that are associated with this assignment. Only teachers can modify this list. Nullable.
 */
export interface EducationAssignmentResourceItemRequestBuilderGetQueryParameters {
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
export const EducationAssignmentResourceItemRequestBuilderUriTemplate = "{+baseurl}/education/me/assignments/{educationAssignment%2Did}/resources/{educationAssignmentResource%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const EducationAssignmentResourceItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const EducationAssignmentResourceItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: EducationAssignmentResourceItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: EducationAssignmentResourceItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEducationAssignmentResourceFromDiscriminatorValue,
        queryParametersMapper: EducationAssignmentResourceItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: EducationAssignmentResourceItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEducationAssignmentResourceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEducationAssignmentResource,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
