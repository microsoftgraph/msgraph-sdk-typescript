/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAccessPackageQuestionFromDiscriminatorValue, serializeAccessPackageQuestion, type AccessPackageQuestion } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the questions property of the microsoft.graph.accessPackageAssignmentPolicy entity.
 */
export interface AccessPackageQuestionItemRequestBuilder extends BaseRequestBuilder<AccessPackageQuestionItemRequestBuilder> {
    /**
     * Delete navigation property questions for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Questions that are posed to the  requestor.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessPackageQuestion>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AccessPackageQuestionItemRequestBuilderGetQueryParameters> | undefined) : Promise<AccessPackageQuestion | undefined>;
    /**
     * Update the navigation property questions in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessPackageQuestion>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: AccessPackageQuestion, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessPackageQuestion | undefined>;
    /**
     * Delete navigation property questions for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Questions that are posed to the  requestor.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessPackageQuestionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property questions in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: AccessPackageQuestion, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Questions that are posed to the  requestor.
 */
export interface AccessPackageQuestionItemRequestBuilderGetQueryParameters {
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
export const AccessPackageQuestionItemRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/accessPackages/{accessPackage%2Did}/assignmentPolicies/{accessPackageAssignmentPolicy%2Did}/questions/{accessPackageQuestion%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AccessPackageQuestionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AccessPackageQuestionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: AccessPackageQuestionItemRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: AccessPackageQuestionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessPackageQuestionFromDiscriminatorValue,
        queryParametersMapper: AccessPackageQuestionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: AccessPackageQuestionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessPackageQuestionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessPackageQuestion,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
