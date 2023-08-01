import {UnifiedRoleEligibilityScheduleInstanceCollectionResponse} from '../../../models/';
import {createUnifiedRoleEligibilityScheduleInstanceCollectionResponseFromDiscriminatorValue} from '../../../models/createUnifiedRoleEligibilityScheduleInstanceCollectionResponseFromDiscriminatorValue';
import {createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue} from '../../../models/createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue';
import {deserializeIntoUnifiedRoleEligibilityScheduleInstance} from '../../../models/deserializeIntoUnifiedRoleEligibilityScheduleInstance';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeUnifiedRoleEligibilityScheduleInstance} from '../../../models/serializeUnifiedRoleEligibilityScheduleInstance';
import type {UnifiedRoleEligibilityScheduleInstance} from '../../../models/unifiedRoleEligibilityScheduleInstance';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {FilterByCurrentUserWithOnRequestBuilder} from './filterByCurrentUserWithOn/filterByCurrentUserWithOnRequestBuilder';
import {UnifiedRoleEligibilityScheduleInstanceItemRequestBuilder} from './item/unifiedRoleEligibilityScheduleInstanceItemRequestBuilder';
import {RoleEligibilityScheduleInstancesRequestBuilderGetRequestConfiguration} from './roleEligibilityScheduleInstancesRequestBuilderGetRequestConfiguration';
import {RoleEligibilityScheduleInstancesRequestBuilderPostRequestConfiguration} from './roleEligibilityScheduleInstancesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleEligibilityScheduleInstances property of the microsoft.graph.rbacApplication entity.
 */
export class RoleEligibilityScheduleInstancesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the roleEligibilityScheduleInstances property of the microsoft.graph.rbacApplication entity.
     * @param unifiedRoleEligibilityScheduleInstanceId Unique identifier of the item
     * @returns a UnifiedRoleEligibilityScheduleInstanceItemRequestBuilder
     */
    public byUnifiedRoleEligibilityScheduleInstanceId(unifiedRoleEligibilityScheduleInstanceId: string) : UnifiedRoleEligibilityScheduleInstanceItemRequestBuilder {
        if(!unifiedRoleEligibilityScheduleInstanceId) throw new Error("unifiedRoleEligibilityScheduleInstanceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleEligibilityScheduleInstance%2Did"] = unifiedRoleEligibilityScheduleInstanceId
        return new UnifiedRoleEligibilityScheduleInstanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RoleEligibilityScheduleInstancesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/directory/roleEligibilityScheduleInstances{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
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
     * Get the instances of role eligibilities.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleEligibilityScheduleInstanceCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/rbacapplication-list-roleeligibilityscheduleinstances?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RoleEligibilityScheduleInstancesRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRoleEligibilityScheduleInstanceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleEligibilityScheduleInstanceCollectionResponse>(requestInfo, createUnifiedRoleEligibilityScheduleInstanceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to roleEligibilityScheduleInstances for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleEligibilityScheduleInstance
     */
    public post(body: UnifiedRoleEligibilityScheduleInstance | undefined, requestConfiguration?: RoleEligibilityScheduleInstancesRequestBuilderPostRequestConfiguration | undefined) : Promise<UnifiedRoleEligibilityScheduleInstance | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleEligibilityScheduleInstance>(requestInfo, createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the instances of role eligibilities.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RoleEligibilityScheduleInstancesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to roleEligibilityScheduleInstances for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnifiedRoleEligibilityScheduleInstance | undefined, requestConfiguration?: RoleEligibilityScheduleInstancesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUnifiedRoleEligibilityScheduleInstance);
        return requestInfo;
    };
}
