/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue, serializeManagedAppPolicyDeploymentSummary, type ManagedAppPolicyDeploymentSummary } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deploymentSummary property of the microsoft.graph.iosManagedAppProtection entity.
 */
export interface DeploymentSummaryRequestBuilder extends BaseRequestBuilder<DeploymentSummaryRequestBuilder> {
    /**
     * Delete navigation property deploymentSummary for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read properties and relationships of the managedAppPolicyDeploymentSummary object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ManagedAppPolicyDeploymentSummary>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-managedapppolicydeploymentsummary-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<DeploymentSummaryRequestBuilderGetQueryParameters> | undefined) : Promise<ManagedAppPolicyDeploymentSummary | undefined>;
    /**
     * Update the properties of a managedAppPolicyDeploymentSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ManagedAppPolicyDeploymentSummary>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-managedapppolicydeploymentsummary-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: ManagedAppPolicyDeploymentSummary, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ManagedAppPolicyDeploymentSummary | undefined>;
    /**
     * Delete navigation property deploymentSummary for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read properties and relationships of the managedAppPolicyDeploymentSummary object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeploymentSummaryRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a managedAppPolicyDeploymentSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: ManagedAppPolicyDeploymentSummary, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read properties and relationships of the managedAppPolicyDeploymentSummary object.
 */
export interface DeploymentSummaryRequestBuilderGetQueryParameters {
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
export const DeploymentSummaryRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection%2Did}/deploymentSummary{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DeploymentSummaryRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeploymentSummaryRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: DeploymentSummaryRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: DeploymentSummaryRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue,
        queryParametersMapper: DeploymentSummaryRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: DeploymentSummaryRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createManagedAppPolicyDeploymentSummaryFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeManagedAppPolicyDeploymentSummary,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
