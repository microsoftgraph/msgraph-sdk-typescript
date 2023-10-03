import { type PrivilegedAccessGroupAssignmentScheduleRequestCollectionResponse } from '../../../../models/';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { createPrivilegedAccessGroupAssignmentScheduleRequestFromDiscriminatorValue, deserializeIntoPrivilegedAccessGroupAssignmentScheduleRequest, serializePrivilegedAccessGroupAssignmentScheduleRequest, type PrivilegedAccessGroupAssignmentScheduleRequest } from '../../../../models/privilegedAccessGroupAssignmentScheduleRequest';
import { createPrivilegedAccessGroupAssignmentScheduleRequestCollectionResponseFromDiscriminatorValue } from '../../../../models/privilegedAccessGroupAssignmentScheduleRequestCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { FilterByCurrentUserWithOnRequestBuilder } from './filterByCurrentUserWithOn/filterByCurrentUserWithOnRequestBuilder';
import { PrivilegedAccessGroupAssignmentScheduleRequestItemRequestBuilder } from './item/privilegedAccessGroupAssignmentScheduleRequestItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface AssignmentScheduleRequestsRequestBuilderGetQueryParameters {
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
export interface AssignmentScheduleRequestsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AssignmentScheduleRequestsRequestBuilderGetQueryParameters;
}
export interface AssignmentScheduleRequestsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the assignmentScheduleRequests property of the microsoft.graph.privilegedAccessGroup entity.
 */
export class AssignmentScheduleRequestsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignmentScheduleRequests property of the microsoft.graph.privilegedAccessGroup entity.
     * @param privilegedAccessGroupAssignmentScheduleRequestId The unique identifier of privilegedAccessGroupAssignmentScheduleRequest
     * @returns a PrivilegedAccessGroupAssignmentScheduleRequestItemRequestBuilder
     */
    public byPrivilegedAccessGroupAssignmentScheduleRequestId(privilegedAccessGroupAssignmentScheduleRequestId: string) : PrivilegedAccessGroupAssignmentScheduleRequestItemRequestBuilder {
        if(!privilegedAccessGroupAssignmentScheduleRequestId) throw new Error("privilegedAccessGroupAssignmentScheduleRequestId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["privilegedAccessGroupAssignmentScheduleRequest%2Did"] = privilegedAccessGroupAssignmentScheduleRequestId
        return new PrivilegedAccessGroupAssignmentScheduleRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AssignmentScheduleRequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/privilegedAccess/group/assignmentScheduleRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
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
     * Get assignmentScheduleRequests from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrivilegedAccessGroupAssignmentScheduleRequestCollectionResponse
     */
    public get(requestConfiguration?: AssignmentScheduleRequestsRequestBuilderGetRequestConfiguration | undefined) : Promise<PrivilegedAccessGroupAssignmentScheduleRequestCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrivilegedAccessGroupAssignmentScheduleRequestCollectionResponse>(requestInfo, createPrivilegedAccessGroupAssignmentScheduleRequestCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to assignmentScheduleRequests for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrivilegedAccessGroupAssignmentScheduleRequest
     */
    public post(body: PrivilegedAccessGroupAssignmentScheduleRequest, requestConfiguration?: AssignmentScheduleRequestsRequestBuilderPostRequestConfiguration | undefined) : Promise<PrivilegedAccessGroupAssignmentScheduleRequest | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PrivilegedAccessGroupAssignmentScheduleRequest>(requestInfo, createPrivilegedAccessGroupAssignmentScheduleRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get assignmentScheduleRequests from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AssignmentScheduleRequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to assignmentScheduleRequests for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PrivilegedAccessGroupAssignmentScheduleRequest, requestConfiguration?: AssignmentScheduleRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePrivilegedAccessGroupAssignmentScheduleRequest);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a assignmentScheduleRequestsRequestBuilder
     */
    public withUrl(rawUrl: string) : AssignmentScheduleRequestsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AssignmentScheduleRequestsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
