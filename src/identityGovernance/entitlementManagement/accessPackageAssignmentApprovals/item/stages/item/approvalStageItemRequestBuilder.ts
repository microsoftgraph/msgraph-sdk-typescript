import { type ApprovalStage } from '../../../../../../models/approvalStage';
import { createApprovalStageFromDiscriminatorValue } from '../../../../../../models/createApprovalStageFromDiscriminatorValue';
import { deserializeIntoApprovalStage } from '../../../../../../models/deserializeIntoApprovalStage';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { serializeApprovalStage } from '../../../../../../models/serializeApprovalStage';
import { type ApprovalStageItemRequestBuilderDeleteRequestConfiguration } from './approvalStageItemRequestBuilderDeleteRequestConfiguration';
import { type ApprovalStageItemRequestBuilderGetRequestConfiguration } from './approvalStageItemRequestBuilderGetRequestConfiguration';
import { type ApprovalStageItemRequestBuilderPatchRequestConfiguration } from './approvalStageItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the stages property of the microsoft.graph.approval entity.
 */
export class ApprovalStageItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ApprovalStageItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/accessPackageAssignmentApprovals/{approval%2Did}/stages/{approvalStage%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property stages for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ApprovalStageItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * In Azure AD entitlement management, retrieve the properties of an approvalStage object. An approval stage is contained within an approval object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ApprovalStage
     * @see {@link https://learn.microsoft.com/graph/api/approvalstage-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ApprovalStageItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ApprovalStage | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ApprovalStage>(requestInfo, createApprovalStageFromDiscriminatorValue, errorMapping);
    };
    /**
     * In Azure AD entitlement management, approve or deny an approvalStage object in an approval.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ApprovalStage
     * @see {@link https://learn.microsoft.com/graph/api/approvalstage-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: ApprovalStage, requestConfiguration?: ApprovalStageItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ApprovalStage | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ApprovalStage>(requestInfo, createApprovalStageFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property stages for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ApprovalStageItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * In Azure AD entitlement management, retrieve the properties of an approvalStage object. An approval stage is contained within an approval object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ApprovalStageItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * In Azure AD entitlement management, approve or deny an approvalStage object in an approval.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ApprovalStage, requestConfiguration?: ApprovalStageItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeApprovalStage);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a ApprovalStageItemRequestBuilder
     */
    public withUrl(rawUrl: string) : ApprovalStageItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ApprovalStageItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
