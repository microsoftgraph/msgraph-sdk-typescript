import {UnifiedRoleEligibilityScheduleRequest, UnifiedRoleEligibilityScheduleRequestCollectionResponse} from '../../../models/';
import {createUnifiedRoleEligibilityScheduleRequestCollectionResponseFromDiscriminatorValue} from '../../../models/createUnifiedRoleEligibilityScheduleRequestCollectionResponseFromDiscriminatorValue';
import {createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue} from '../../../models/createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {FilterByCurrentUserWithOnRequestBuilder} from './filterByCurrentUserWithOn/filterByCurrentUserWithOnRequestBuilder';
import {RoleEligibilityScheduleRequestsRequestBuilderGetRequestConfiguration} from './roleEligibilityScheduleRequestsRequestBuilderGetRequestConfiguration';
import {RoleEligibilityScheduleRequestsRequestBuilderPostRequestConfiguration} from './roleEligibilityScheduleRequestsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the roleEligibilityScheduleRequests property of the microsoft.graph.rbacApplication entity. */
export class RoleEligibilityScheduleRequestsRequestBuilder {
    /** The count property */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new RoleEligibilityScheduleRequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/roleManagement/directory/roleEligibilityScheduleRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Requests for role eligibilities for principals through PIM.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: RoleEligibilityScheduleRequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Create new navigation property to roleEligibilityScheduleRequests for roleManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: UnifiedRoleEligibilityScheduleRequest | undefined, requestConfiguration?: RoleEligibilityScheduleRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
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
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<UnifiedRoleEligibilityScheduleRequestCollectionResponse>(requestInfo, createUnifiedRoleEligibilityScheduleRequestCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Create new navigation property to roleEligibilityScheduleRequests for roleManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleEligibilityScheduleRequest
     */
    public post(body: UnifiedRoleEligibilityScheduleRequest | undefined, requestConfiguration?: RoleEligibilityScheduleRequestsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleEligibilityScheduleRequest | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<UnifiedRoleEligibilityScheduleRequest>(requestInfo, createUnifiedRoleEligibilityScheduleRequestFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
}
