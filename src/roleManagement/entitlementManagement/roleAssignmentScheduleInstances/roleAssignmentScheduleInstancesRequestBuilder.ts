import { type UnifiedRoleAssignmentScheduleInstanceCollectionResponse } from '../../../models/';
import { createUnifiedRoleAssignmentScheduleInstanceCollectionResponseFromDiscriminatorValue } from '../../../models/createUnifiedRoleAssignmentScheduleInstanceCollectionResponseFromDiscriminatorValue';
import { createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue } from '../../../models/createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue';
import { deserializeIntoUnifiedRoleAssignmentScheduleInstance } from '../../../models/deserializeIntoUnifiedRoleAssignmentScheduleInstance';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeUnifiedRoleAssignmentScheduleInstance } from '../../../models/serializeUnifiedRoleAssignmentScheduleInstance';
import { type UnifiedRoleAssignmentScheduleInstance } from '../../../models/unifiedRoleAssignmentScheduleInstance';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { FilterByCurrentUserWithOnRequestBuilder } from './filterByCurrentUserWithOn/filterByCurrentUserWithOnRequestBuilder';
import { UnifiedRoleAssignmentScheduleInstanceItemRequestBuilder } from './item/unifiedRoleAssignmentScheduleInstanceItemRequestBuilder';
import { type RoleAssignmentScheduleInstancesRequestBuilderGetRequestConfiguration } from './roleAssignmentScheduleInstancesRequestBuilderGetRequestConfiguration';
import { type RoleAssignmentScheduleInstancesRequestBuilderPostRequestConfiguration } from './roleAssignmentScheduleInstancesRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleAssignmentScheduleInstances property of the microsoft.graph.rbacApplication entity.
 */
export class RoleAssignmentScheduleInstancesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the roleAssignmentScheduleInstances property of the microsoft.graph.rbacApplication entity.
     * @param unifiedRoleAssignmentScheduleInstanceId The unique identifier of unifiedRoleAssignmentScheduleInstance
     * @returns a UnifiedRoleAssignmentScheduleInstanceItemRequestBuilder
     */
    public byUnifiedRoleAssignmentScheduleInstanceId(unifiedRoleAssignmentScheduleInstanceId: string) : UnifiedRoleAssignmentScheduleInstanceItemRequestBuilder {
        if(!unifiedRoleAssignmentScheduleInstanceId) throw new Error("unifiedRoleAssignmentScheduleInstanceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleAssignmentScheduleInstance%2Did"] = unifiedRoleAssignmentScheduleInstanceId
        return new UnifiedRoleAssignmentScheduleInstanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RoleAssignmentScheduleInstancesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/entitlementManagement/roleAssignmentScheduleInstances{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
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
     * Get the instances of active role assignments in your tenant. The active assignments include those made through assignments and activation requests, and directly through the role assignments API.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleAssignmentScheduleInstanceCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/rbacapplication-list-roleassignmentscheduleinstances?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RoleAssignmentScheduleInstancesRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRoleAssignmentScheduleInstanceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleAssignmentScheduleInstanceCollectionResponse>(requestInfo, createUnifiedRoleAssignmentScheduleInstanceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to roleAssignmentScheduleInstances for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleAssignmentScheduleInstance
     */
    public post(body: UnifiedRoleAssignmentScheduleInstance, requestConfiguration?: RoleAssignmentScheduleInstancesRequestBuilderPostRequestConfiguration | undefined) : Promise<UnifiedRoleAssignmentScheduleInstance | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleAssignmentScheduleInstance>(requestInfo, createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the instances of active role assignments in your tenant. The active assignments include those made through assignments and activation requests, and directly through the role assignments API.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RoleAssignmentScheduleInstancesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to roleAssignmentScheduleInstances for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnifiedRoleAssignmentScheduleInstance, requestConfiguration?: RoleAssignmentScheduleInstancesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUnifiedRoleAssignmentScheduleInstance);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a roleAssignmentScheduleInstancesRequestBuilder
     */
    public withUrl(rawUrl: string) : RoleAssignmentScheduleInstancesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RoleAssignmentScheduleInstancesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
