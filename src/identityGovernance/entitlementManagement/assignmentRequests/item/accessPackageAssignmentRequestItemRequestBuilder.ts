import { type AccessPackageAssignmentRequest } from '../../../../models/accessPackageAssignmentRequest';
import { createAccessPackageAssignmentRequestFromDiscriminatorValue } from '../../../../models/createAccessPackageAssignmentRequestFromDiscriminatorValue';
import { deserializeIntoAccessPackageAssignmentRequest } from '../../../../models/deserializeIntoAccessPackageAssignmentRequest';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { serializeAccessPackageAssignmentRequest } from '../../../../models/serializeAccessPackageAssignmentRequest';
import { AccessPackageRequestBuilder } from './accessPackage/accessPackageRequestBuilder';
import { type AccessPackageAssignmentRequestItemRequestBuilderDeleteRequestConfiguration } from './accessPackageAssignmentRequestItemRequestBuilderDeleteRequestConfiguration';
import { type AccessPackageAssignmentRequestItemRequestBuilderGetRequestConfiguration } from './accessPackageAssignmentRequestItemRequestBuilderGetRequestConfiguration';
import { type AccessPackageAssignmentRequestItemRequestBuilderPatchRequestConfiguration } from './accessPackageAssignmentRequestItemRequestBuilderPatchRequestConfiguration';
import { AssignmentRequestBuilder } from './assignment/assignmentRequestBuilder';
import { CancelRequestBuilder } from './cancel/cancelRequestBuilder';
import { ReprocessRequestBuilder } from './reprocess/reprocessRequestBuilder';
import { RequestorRequestBuilder } from './requestor/requestorRequestBuilder';
import { ResumeRequestBuilder } from './resume/resumeRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignmentRequests property of the microsoft.graph.entitlementManagement entity.
 */
export class AccessPackageAssignmentRequestItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the accessPackage property of the microsoft.graph.accessPackageAssignmentRequest entity.
     */
    public get accessPackage(): AccessPackageRequestBuilder {
        return new AccessPackageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignment property of the microsoft.graph.accessPackageAssignmentRequest entity.
     */
    public get assignment(): AssignmentRequestBuilder {
        return new AssignmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the cancel method.
     */
    public get cancel(): CancelRequestBuilder {
        return new CancelRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the reprocess method.
     */
    public get reprocess(): ReprocessRequestBuilder {
        return new ReprocessRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the requestor property of the microsoft.graph.accessPackageAssignmentRequest entity.
     */
    public get requestor(): RequestorRequestBuilder {
        return new RequestorRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the resume method.
     */
    public get resume(): ResumeRequestBuilder {
        return new ResumeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AccessPackageAssignmentRequestItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete an accessPackageAssignmentRequest object. This request can be made to remove a denied or completed request.  You cannot delete an access package assignment request if it has any accessPackageAssignment objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/accesspackageassignmentrequest-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: AccessPackageAssignmentRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * In Azure AD entitlement management, retrieve the properties and relationships of an  accessPackageAssignmentRequest object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageAssignmentRequest
     * @see {@link https://learn.microsoft.com/graph/api/accesspackageassignmentrequest-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AccessPackageAssignmentRequestItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessPackageAssignmentRequest | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageAssignmentRequest>(requestInfo, createAccessPackageAssignmentRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property assignmentRequests in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageAssignmentRequest
     */
    public patch(body: AccessPackageAssignmentRequest, requestConfiguration?: AccessPackageAssignmentRequestItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AccessPackageAssignmentRequest | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageAssignmentRequest>(requestInfo, createAccessPackageAssignmentRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete an accessPackageAssignmentRequest object. This request can be made to remove a denied or completed request.  You cannot delete an access package assignment request if it has any accessPackageAssignment objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AccessPackageAssignmentRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * In Azure AD entitlement management, retrieve the properties and relationships of an  accessPackageAssignmentRequest object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AccessPackageAssignmentRequestItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property assignmentRequests in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AccessPackageAssignmentRequest, requestConfiguration?: AccessPackageAssignmentRequestItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAccessPackageAssignmentRequest);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a AccessPackageAssignmentRequestItemRequestBuilder
     */
    public withUrl(rawUrl: string) : AccessPackageAssignmentRequestItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AccessPackageAssignmentRequestItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
