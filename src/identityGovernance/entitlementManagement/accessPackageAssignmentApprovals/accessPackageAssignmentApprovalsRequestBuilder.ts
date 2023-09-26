import { type ApprovalCollectionResponse } from '../../../models/';
import { createApprovalFromDiscriminatorValue, deserializeIntoApproval, serializeApproval, type Approval } from '../../../models/approval';
import { createApprovalCollectionResponseFromDiscriminatorValue } from '../../../models/approvalCollectionResponse';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { FilterByCurrentUserWithOnRequestBuilder } from './filterByCurrentUserWithOn/filterByCurrentUserWithOnRequestBuilder';
import { ApprovalItemRequestBuilder } from './item/approvalItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface AccessPackageAssignmentApprovalsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface AccessPackageAssignmentApprovalsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AccessPackageAssignmentApprovalsRequestBuilderGetQueryParameters;
}
export interface AccessPackageAssignmentApprovalsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the accessPackageAssignmentApprovals property of the microsoft.graph.entitlementManagement entity.
 */
export class AccessPackageAssignmentApprovalsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the accessPackageAssignmentApprovals property of the microsoft.graph.entitlementManagement entity.
     * @param approvalId The unique identifier of approval
     * @returns a ApprovalItemRequestBuilder
     */
    public byApprovalId(approvalId: string) : ApprovalItemRequestBuilder {
        if(!approvalId) throw new Error("approvalId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["approval%2Did"] = approvalId
        return new ApprovalItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AccessPackageAssignmentApprovalsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Provides operations to call the filterByCurrentUser method.
     * @param on Usage: on='{on}'
     * @returns a filterByCurrentUserWithOnRequestBuilder
     */
    public filterByCurrentUserWithOn(on: string | undefined) : FilterByCurrentUserWithOnRequestBuilder {
        if(!on) throw new Error("on cannot be undefined");
        return new FilterByCurrentUserWithOnRequestBuilder(this.pathParameters, this.requestAdapter, on);
    };
    /**
     * In Azure AD entitlement management, retrieve the properties of an approval object.  This call can be made by an approver, providing the identifier of the access package assignment request.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ApprovalCollectionResponse
     */
    public get(requestConfiguration?: AccessPackageAssignmentApprovalsRequestBuilderGetRequestConfiguration | undefined) : Promise<ApprovalCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ApprovalCollectionResponse>(requestInfo, createApprovalCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to accessPackageAssignmentApprovals for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Approval
     */
    public post(body: Approval, requestConfiguration?: AccessPackageAssignmentApprovalsRequestBuilderPostRequestConfiguration | undefined) : Promise<Approval | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Approval>(requestInfo, createApprovalFromDiscriminatorValue, errorMapping);
    };
    /**
     * In Azure AD entitlement management, retrieve the properties of an approval object.  This call can be made by an approver, providing the identifier of the access package assignment request.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AccessPackageAssignmentApprovalsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to accessPackageAssignmentApprovals for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Approval, requestConfiguration?: AccessPackageAssignmentApprovalsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeApproval);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a accessPackageAssignmentApprovalsRequestBuilder
     */
    public withUrl(rawUrl: string) : AccessPackageAssignmentApprovalsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AccessPackageAssignmentApprovalsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
