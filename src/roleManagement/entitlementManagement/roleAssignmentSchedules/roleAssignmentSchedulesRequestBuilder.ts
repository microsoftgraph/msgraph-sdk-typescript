import { type UnifiedRoleAssignmentScheduleCollectionResponse } from '../../../models/';
import { createUnifiedRoleAssignmentScheduleCollectionResponseFromDiscriminatorValue } from '../../../models/createUnifiedRoleAssignmentScheduleCollectionResponseFromDiscriminatorValue';
import { createUnifiedRoleAssignmentScheduleFromDiscriminatorValue } from '../../../models/createUnifiedRoleAssignmentScheduleFromDiscriminatorValue';
import { deserializeIntoUnifiedRoleAssignmentSchedule } from '../../../models/deserializeIntoUnifiedRoleAssignmentSchedule';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeUnifiedRoleAssignmentSchedule } from '../../../models/serializeUnifiedRoleAssignmentSchedule';
import { type UnifiedRoleAssignmentSchedule } from '../../../models/unifiedRoleAssignmentSchedule';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { FilterByCurrentUserWithOnRequestBuilder } from './filterByCurrentUserWithOn/filterByCurrentUserWithOnRequestBuilder';
import { UnifiedRoleAssignmentScheduleItemRequestBuilder } from './item/unifiedRoleAssignmentScheduleItemRequestBuilder';
import { type RoleAssignmentSchedulesRequestBuilderGetRequestConfiguration } from './roleAssignmentSchedulesRequestBuilderGetRequestConfiguration';
import { type RoleAssignmentSchedulesRequestBuilderPostRequestConfiguration } from './roleAssignmentSchedulesRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleAssignmentSchedules property of the microsoft.graph.rbacApplication entity.
 */
export class RoleAssignmentSchedulesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the roleAssignmentSchedules property of the microsoft.graph.rbacApplication entity.
     * @param unifiedRoleAssignmentScheduleId The unique identifier of unifiedRoleAssignmentSchedule
     * @returns a UnifiedRoleAssignmentScheduleItemRequestBuilder
     */
    public byUnifiedRoleAssignmentScheduleId(unifiedRoleAssignmentScheduleId: string) : UnifiedRoleAssignmentScheduleItemRequestBuilder {
        if(!unifiedRoleAssignmentScheduleId) throw new Error("unifiedRoleAssignmentScheduleId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleAssignmentSchedule%2Did"] = unifiedRoleAssignmentScheduleId
        return new UnifiedRoleAssignmentScheduleItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RoleAssignmentSchedulesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/entitlementManagement/roleAssignmentSchedules{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
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
     * Get the schedules for active role assignment operations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleAssignmentScheduleCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/rbacapplication-list-roleassignmentschedules?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RoleAssignmentSchedulesRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRoleAssignmentScheduleCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleAssignmentScheduleCollectionResponse>(requestInfo, createUnifiedRoleAssignmentScheduleCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to roleAssignmentSchedules for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleAssignmentSchedule
     */
    public post(body: UnifiedRoleAssignmentSchedule, requestConfiguration?: RoleAssignmentSchedulesRequestBuilderPostRequestConfiguration | undefined) : Promise<UnifiedRoleAssignmentSchedule | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleAssignmentSchedule>(requestInfo, createUnifiedRoleAssignmentScheduleFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the schedules for active role assignment operations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RoleAssignmentSchedulesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to roleAssignmentSchedules for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnifiedRoleAssignmentSchedule, requestConfiguration?: RoleAssignmentSchedulesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUnifiedRoleAssignmentSchedule);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a roleAssignmentSchedulesRequestBuilder
     */
    public withUrl(rawUrl: string) : RoleAssignmentSchedulesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RoleAssignmentSchedulesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
