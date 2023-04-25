import {UnifiedRoleEligibilityScheduleRequest, UnifiedRoleEligibilityScheduleRequestCollectionResponse} from '../../../models/';
import {createUnifiedRoleEligibilityScheduleRequestCollectionResponseFromDiscriminatorValue} from '../../../models/createUnifiedRoleEligibilityScheduleRequestCollectionResponseFromDiscriminatorValue';
import {createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue} from '../../../models/createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {FilterByCurrentUserWithOnRequestBuilder} from './filterByCurrentUserWithOn/filterByCurrentUserWithOnRequestBuilder';
import {UnifiedRoleEligibilityScheduleRequestItemRequestBuilder} from './item/unifiedRoleEligibilityScheduleRequestItemRequestBuilder';
import {RoleEligibilityScheduleRequestsRequestBuilderGetRequestConfiguration} from './roleEligibilityScheduleRequestsRequestBuilderGetRequestConfiguration';
import {RoleEligibilityScheduleRequestsRequestBuilderPostRequestConfiguration} from './roleEligibilityScheduleRequestsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleEligibilityScheduleRequests property of the microsoft.graph.rbacApplication entity.
 */
export class RoleEligibilityScheduleRequestsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the roleEligibilityScheduleRequests property of the microsoft.graph.rbacApplication entity.
     * @param unifiedRoleEligibilityScheduleRequestId Unique identifier of the item
     * @returns a UnifiedRoleEligibilityScheduleRequestItemRequestBuilder
     */
    public byUnifiedRoleEligibilityScheduleRequestId(unifiedRoleEligibilityScheduleRequestId: string) : UnifiedRoleEligibilityScheduleRequestItemRequestBuilder {
        if(!unifiedRoleEligibilityScheduleRequestId) throw new Error("unifiedRoleEligibilityScheduleRequestId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleEligibilityScheduleRequest%2Did"] = unifiedRoleEligibilityScheduleRequestId
        return new UnifiedRoleEligibilityScheduleRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RoleEligibilityScheduleRequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/directory/roleEligibilityScheduleRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
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
     * Requests for role eligibilities for principals through PIM.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleEligibilityScheduleRequestCollectionResponse
     */
    public get(requestConfiguration?: RoleEligibilityScheduleRequestsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleEligibilityScheduleRequestCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<UnifiedRoleEligibilityScheduleRequestCollectionResponse>(requestInfo, createUnifiedRoleEligibilityScheduleRequestCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to roleEligibilityScheduleRequests for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleEligibilityScheduleRequest
     */
    public post(body: UnifiedRoleEligibilityScheduleRequest | undefined, requestConfiguration?: RoleEligibilityScheduleRequestsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleEligibilityScheduleRequest | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<UnifiedRoleEligibilityScheduleRequest>(requestInfo, createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Requests for role eligibilities for principals through PIM.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RoleEligibilityScheduleRequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to roleEligibilityScheduleRequests for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnifiedRoleEligibilityScheduleRequest | undefined, requestConfiguration?: RoleEligibilityScheduleRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
