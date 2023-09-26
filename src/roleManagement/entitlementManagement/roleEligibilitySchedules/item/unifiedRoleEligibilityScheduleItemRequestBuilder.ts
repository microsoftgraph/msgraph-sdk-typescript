import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { createUnifiedRoleEligibilityScheduleFromDiscriminatorValue, deserializeIntoUnifiedRoleEligibilitySchedule, serializeUnifiedRoleEligibilitySchedule, type UnifiedRoleEligibilitySchedule } from '../../../../models/unifiedRoleEligibilitySchedule';
import { AppScopeRequestBuilder } from './appScope/appScopeRequestBuilder';
import { DirectoryScopeRequestBuilder } from './directoryScope/directoryScopeRequestBuilder';
import { PrincipalRequestBuilder } from './principal/principalRequestBuilder';
import { RoleDefinitionRequestBuilder } from './roleDefinition/roleDefinitionRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface UnifiedRoleEligibilityScheduleItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface UnifiedRoleEligibilityScheduleItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface UnifiedRoleEligibilityScheduleItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UnifiedRoleEligibilityScheduleItemRequestBuilderGetQueryParameters;
}
export interface UnifiedRoleEligibilityScheduleItemRequestBuilderPatchRequestConfiguration {
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
 * Provides operations to manage the roleEligibilitySchedules property of the microsoft.graph.rbacApplication entity.
 */
export class UnifiedRoleEligibilityScheduleItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the appScope property of the microsoft.graph.unifiedRoleScheduleBase entity.
     */
    public get appScope(): AppScopeRequestBuilder {
        return new AppScopeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the directoryScope property of the microsoft.graph.unifiedRoleScheduleBase entity.
     */
    public get directoryScope(): DirectoryScopeRequestBuilder {
        return new DirectoryScopeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the principal property of the microsoft.graph.unifiedRoleScheduleBase entity.
     */
    public get principal(): PrincipalRequestBuilder {
        return new PrincipalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the roleDefinition property of the microsoft.graph.unifiedRoleScheduleBase entity.
     */
    public get roleDefinition(): RoleDefinitionRequestBuilder {
        return new RoleDefinitionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new UnifiedRoleEligibilityScheduleItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property roleEligibilitySchedules for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UnifiedRoleEligibilityScheduleItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the schedule for a role eligibility operation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleEligibilitySchedule
     * @see {@link https://learn.microsoft.com/graph/api/unifiedroleeligibilityschedule-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UnifiedRoleEligibilityScheduleItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRoleEligibilitySchedule | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleEligibilitySchedule>(requestInfo, createUnifiedRoleEligibilityScheduleFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property roleEligibilitySchedules in roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleEligibilitySchedule
     */
    public patch(body: UnifiedRoleEligibilitySchedule, requestConfiguration?: UnifiedRoleEligibilityScheduleItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UnifiedRoleEligibilitySchedule | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleEligibilitySchedule>(requestInfo, createUnifiedRoleEligibilityScheduleFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property roleEligibilitySchedules for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UnifiedRoleEligibilityScheduleItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the schedule for a role eligibility operation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UnifiedRoleEligibilityScheduleItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property roleEligibilitySchedules in roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UnifiedRoleEligibilitySchedule, requestConfiguration?: UnifiedRoleEligibilityScheduleItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUnifiedRoleEligibilitySchedule);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a UnifiedRoleEligibilityScheduleItemRequestBuilder
     */
    public withUrl(rawUrl: string) : UnifiedRoleEligibilityScheduleItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UnifiedRoleEligibilityScheduleItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
