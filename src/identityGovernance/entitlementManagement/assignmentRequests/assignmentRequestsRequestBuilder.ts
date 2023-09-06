import { type AccessPackageAssignmentRequestCollectionResponse } from '../../../models/';
import { type AccessPackageAssignmentRequest } from '../../../models/accessPackageAssignmentRequest';
import { createAccessPackageAssignmentRequestCollectionResponseFromDiscriminatorValue } from '../../../models/createAccessPackageAssignmentRequestCollectionResponseFromDiscriminatorValue';
import { createAccessPackageAssignmentRequestFromDiscriminatorValue } from '../../../models/createAccessPackageAssignmentRequestFromDiscriminatorValue';
import { deserializeIntoAccessPackageAssignmentRequest } from '../../../models/deserializeIntoAccessPackageAssignmentRequest';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeAccessPackageAssignmentRequest } from '../../../models/serializeAccessPackageAssignmentRequest';
import { type AssignmentRequestsRequestBuilderGetRequestConfiguration } from './assignmentRequestsRequestBuilderGetRequestConfiguration';
import { type AssignmentRequestsRequestBuilderPostRequestConfiguration } from './assignmentRequestsRequestBuilderPostRequestConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { FilterByCurrentUserWithOnRequestBuilder } from './filterByCurrentUserWithOn/filterByCurrentUserWithOnRequestBuilder';
import { AccessPackageAssignmentRequestItemRequestBuilder } from './item/accessPackageAssignmentRequestItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignmentRequests property of the microsoft.graph.entitlementManagement entity.
 */
export class AssignmentRequestsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignmentRequests property of the microsoft.graph.entitlementManagement entity.
     * @param accessPackageAssignmentRequestId The unique identifier of accessPackageAssignmentRequest
     * @returns a AccessPackageAssignmentRequestItemRequestBuilder
     */
    public byAccessPackageAssignmentRequestId(accessPackageAssignmentRequestId: string) : AccessPackageAssignmentRequestItemRequestBuilder {
        if(!accessPackageAssignmentRequestId) throw new Error("accessPackageAssignmentRequestId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageAssignmentRequest%2Did"] = accessPackageAssignmentRequestId
        return new AccessPackageAssignmentRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AssignmentRequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/assignmentRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
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
     * In Azure AD entitlement management, retrieve a list of accessPackageAssignmentRequest objects.  The resulting list includes all the assignment requests, current and well as expired, that the caller has access to read, across all catalogs and access packages.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageAssignmentRequestCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/entitlementmanagement-list-assignmentrequests?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AssignmentRequestsRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessPackageAssignmentRequestCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageAssignmentRequestCollectionResponse>(requestInfo, createAccessPackageAssignmentRequestCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * In Azure AD Entitlement Management, create a new accessPackageAssignmentRequest object.  This operation is used to assign a user to an access package, update the assignment, or to remove an access package assignment.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageAssignmentRequest
     * @see {@link https://learn.microsoft.com/graph/api/entitlementmanagement-post-assignmentrequests?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AccessPackageAssignmentRequest, requestConfiguration?: AssignmentRequestsRequestBuilderPostRequestConfiguration | undefined) : Promise<AccessPackageAssignmentRequest | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageAssignmentRequest>(requestInfo, createAccessPackageAssignmentRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * In Azure AD entitlement management, retrieve a list of accessPackageAssignmentRequest objects.  The resulting list includes all the assignment requests, current and well as expired, that the caller has access to read, across all catalogs and access packages.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AssignmentRequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * In Azure AD Entitlement Management, create a new accessPackageAssignmentRequest object.  This operation is used to assign a user to an access package, update the assignment, or to remove an access package assignment.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AccessPackageAssignmentRequest, requestConfiguration?: AssignmentRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAccessPackageAssignmentRequest);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a assignmentRequestsRequestBuilder
     */
    public withUrl(rawUrl: string) : AssignmentRequestsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AssignmentRequestsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
