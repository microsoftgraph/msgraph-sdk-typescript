import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue, deserializeIntoTargetedManagedAppPolicyAssignment, serializeTargetedManagedAppPolicyAssignment, type TargetedManagedAppPolicyAssignment } from '../../../../../models/targetedManagedAppPolicyAssignment';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface TargetedManagedAppPolicyAssignmentItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface TargetedManagedAppPolicyAssignmentItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface TargetedManagedAppPolicyAssignmentItemRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: TargetedManagedAppPolicyAssignmentItemRequestBuilderGetQueryParameters;
}
export interface TargetedManagedAppPolicyAssignmentItemRequestBuilderPatchRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the assignments property of the microsoft.graph.windowsInformationProtection entity.
 */
export class TargetedManagedAppPolicyAssignmentItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new TargetedManagedAppPolicyAssignmentItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mdmWindowsInformationProtectionPolicies/{mdmWindowsInformationProtectionPolicy%2Did}/assignments/{targetedManagedAppPolicyAssignment%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property assignments for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: TargetedManagedAppPolicyAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Navigation property to list of security groups targeted for policy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TargetedManagedAppPolicyAssignment
     */
    public get(requestConfiguration?: TargetedManagedAppPolicyAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : Promise<TargetedManagedAppPolicyAssignment | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TargetedManagedAppPolicyAssignment>(requestInfo, createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property assignments in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TargetedManagedAppPolicyAssignment
     */
    public patch(body: TargetedManagedAppPolicyAssignment, requestConfiguration?: TargetedManagedAppPolicyAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<TargetedManagedAppPolicyAssignment | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TargetedManagedAppPolicyAssignment>(requestInfo, createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property assignments for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: TargetedManagedAppPolicyAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Navigation property to list of security groups targeted for policy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TargetedManagedAppPolicyAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property assignments in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: TargetedManagedAppPolicyAssignment, requestConfiguration?: TargetedManagedAppPolicyAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTargetedManagedAppPolicyAssignment);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a TargetedManagedAppPolicyAssignmentItemRequestBuilder
     */
    public withUrl(rawUrl: string) : TargetedManagedAppPolicyAssignmentItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TargetedManagedAppPolicyAssignmentItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
