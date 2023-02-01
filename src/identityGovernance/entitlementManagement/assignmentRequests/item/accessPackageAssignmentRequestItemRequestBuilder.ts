import {AccessPackageAssignmentRequest} from '../../../../models/';
import {createAccessPackageAssignmentRequestFromDiscriminatorValue} from '../../../../models/createAccessPackageAssignmentRequestFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AccessPackageRequestBuilder} from './accessPackage/accessPackageRequestBuilder';
import {AccessPackageAssignmentRequestItemRequestBuilderDeleteRequestConfiguration} from './accessPackageAssignmentRequestItemRequestBuilderDeleteRequestConfiguration';
import {AccessPackageAssignmentRequestItemRequestBuilderGetRequestConfiguration} from './accessPackageAssignmentRequestItemRequestBuilderGetRequestConfiguration';
import {AccessPackageAssignmentRequestItemRequestBuilderPatchRequestConfiguration} from './accessPackageAssignmentRequestItemRequestBuilderPatchRequestConfiguration';
import {AssignmentRequestBuilder} from './assignment/assignmentRequestBuilder';
import {CancelRequestBuilder} from './microsoftGraphCancel/cancelRequestBuilder';
import {ReprocessRequestBuilder} from './microsoftGraphReprocess/reprocessRequestBuilder';
import {RequestorRequestBuilder} from './requestor/requestorRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignmentRequests property of the microsoft.graph.entitlementManagement entity.
 */
export class AccessPackageAssignmentRequestItemRequestBuilder {
    /** Provides operations to manage the accessPackage property of the microsoft.graph.accessPackageAssignmentRequest entity. */
    public get accessPackage(): AccessPackageRequestBuilder {
        return new AccessPackageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the assignment property of the microsoft.graph.accessPackageAssignmentRequest entity. */
    public get assignment(): AssignmentRequestBuilder {
        return new AssignmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the cancel method. */
    public get microsoftGraphCancel(): CancelRequestBuilder {
        return new CancelRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the reprocess method. */
    public get microsoftGraphReprocess(): ReprocessRequestBuilder {
        return new ReprocessRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the requestor property of the microsoft.graph.accessPackageAssignmentRequest entity. */
    public get requestor(): RequestorRequestBuilder {
        return new RequestorRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new AccessPackageAssignmentRequestItemRequestBuilder and sets the default values.
     * @param accessPackageAssignmentRequestId key: id of accessPackageAssignmentRequest
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, accessPackageAssignmentRequestId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityGovernance/entitlementManagement/assignmentRequests/{accessPackageAssignmentRequest%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["accessPackageAssignmentRequest%2Did"] = accessPackageAssignmentRequestId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property assignmentRequests for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: AccessPackageAssignmentRequestItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Access package assignment requests created by or on behalf of a subject.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessPackageAssignmentRequest
     */
    public get(requestConfiguration?: AccessPackageAssignmentRequestItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessPackageAssignmentRequest | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AccessPackageAssignmentRequest>(requestInfo, createAccessPackageAssignmentRequestFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property assignmentRequests in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessPackageAssignmentRequest
     */
    public patch(body: AccessPackageAssignmentRequest | undefined, requestConfiguration?: AccessPackageAssignmentRequestItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessPackageAssignmentRequest | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AccessPackageAssignmentRequest>(requestInfo, createAccessPackageAssignmentRequestFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property assignmentRequests for identityGovernance
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
     * Access package assignment requests created by or on behalf of a subject.
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
    public toPatchRequestInformation(body: AccessPackageAssignmentRequest | undefined, requestConfiguration?: AccessPackageAssignmentRequestItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
