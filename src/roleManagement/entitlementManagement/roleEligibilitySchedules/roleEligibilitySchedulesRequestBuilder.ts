import {UnifiedRoleEligibilityScheduleCollectionResponse} from '../../../models/';
import {createUnifiedRoleEligibilityScheduleCollectionResponseFromDiscriminatorValue} from '../../../models/createUnifiedRoleEligibilityScheduleCollectionResponseFromDiscriminatorValue';
import {createUnifiedRoleEligibilityScheduleFromDiscriminatorValue} from '../../../models/createUnifiedRoleEligibilityScheduleFromDiscriminatorValue';
import {deserializeIntoUnifiedRoleEligibilitySchedule} from '../../../models/deserializeIntoUnifiedRoleEligibilitySchedule';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeUnifiedRoleEligibilitySchedule} from '../../../models/serializeUnifiedRoleEligibilitySchedule';
import type {UnifiedRoleEligibilitySchedule} from '../../../models/unifiedRoleEligibilitySchedule';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {FilterByCurrentUserWithOnRequestBuilder} from './filterByCurrentUserWithOn/filterByCurrentUserWithOnRequestBuilder';
import {UnifiedRoleEligibilityScheduleItemRequestBuilder} from './item/unifiedRoleEligibilityScheduleItemRequestBuilder';
import {RoleEligibilitySchedulesRequestBuilderGetRequestConfiguration} from './roleEligibilitySchedulesRequestBuilderGetRequestConfiguration';
import {RoleEligibilitySchedulesRequestBuilderPostRequestConfiguration} from './roleEligibilitySchedulesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleEligibilitySchedules property of the microsoft.graph.rbacApplication entity.
 */
export class RoleEligibilitySchedulesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the roleEligibilitySchedules property of the microsoft.graph.rbacApplication entity.
     * @param unifiedRoleEligibilityScheduleId Unique identifier of the item
     * @returns a UnifiedRoleEligibilityScheduleItemRequestBuilder
     */
    public byUnifiedRoleEligibilityScheduleId(unifiedRoleEligibilityScheduleId: string) : UnifiedRoleEligibilityScheduleItemRequestBuilder {
        if(!unifiedRoleEligibilityScheduleId) throw new Error("unifiedRoleEligibilityScheduleId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleEligibilitySchedule%2Did"] = unifiedRoleEligibilityScheduleId
        return new UnifiedRoleEligibilityScheduleItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RoleEligibilitySchedulesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/entitlementManagement/roleEligibilitySchedules{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
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
     * Get the unifiedRoleEligibilitySchedule resources from the roleEligibilitySchedules navigation property.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleEligibilityScheduleCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/rbacapplication-list-roleeligibilityschedules?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RoleEligibilitySchedulesRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRoleEligibilityScheduleCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleEligibilityScheduleCollectionResponse>(requestInfo, createUnifiedRoleEligibilityScheduleCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to roleEligibilitySchedules for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleEligibilitySchedule
     */
    public post(body: UnifiedRoleEligibilitySchedule | undefined, requestConfiguration?: RoleEligibilitySchedulesRequestBuilderPostRequestConfiguration | undefined) : Promise<UnifiedRoleEligibilitySchedule | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleEligibilitySchedule>(requestInfo, createUnifiedRoleEligibilityScheduleFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the unifiedRoleEligibilitySchedule resources from the roleEligibilitySchedules navigation property.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RoleEligibilitySchedulesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to roleEligibilitySchedules for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnifiedRoleEligibilitySchedule | undefined, requestConfiguration?: RoleEligibilitySchedulesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUnifiedRoleEligibilitySchedule);
        return requestInfo;
    };
}
