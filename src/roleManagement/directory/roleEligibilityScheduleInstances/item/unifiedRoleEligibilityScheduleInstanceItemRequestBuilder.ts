import {createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue} from '../../../../models/createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue';
import {deserializeIntoUnifiedRoleEligibilityScheduleInstance} from '../../../../models/deserializeIntoUnifiedRoleEligibilityScheduleInstance';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeUnifiedRoleEligibilityScheduleInstance} from '../../../../models/serializeUnifiedRoleEligibilityScheduleInstance';
import type {UnifiedRoleEligibilityScheduleInstance} from '../../../../models/unifiedRoleEligibilityScheduleInstance';
import {AppScopeRequestBuilder} from './appScope/appScopeRequestBuilder';
import {DirectoryScopeRequestBuilder} from './directoryScope/directoryScopeRequestBuilder';
import {PrincipalRequestBuilder} from './principal/principalRequestBuilder';
import {RoleDefinitionRequestBuilder} from './roleDefinition/roleDefinitionRequestBuilder';
import {UnifiedRoleEligibilityScheduleInstanceItemRequestBuilderDeleteRequestConfiguration} from './unifiedRoleEligibilityScheduleInstanceItemRequestBuilderDeleteRequestConfiguration';
import {UnifiedRoleEligibilityScheduleInstanceItemRequestBuilderGetRequestConfiguration} from './unifiedRoleEligibilityScheduleInstanceItemRequestBuilderGetRequestConfiguration';
import {UnifiedRoleEligibilityScheduleInstanceItemRequestBuilderPatchRequestConfiguration} from './unifiedRoleEligibilityScheduleInstanceItemRequestBuilderPatchRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleEligibilityScheduleInstances property of the microsoft.graph.rbacApplication entity.
 */
export class UnifiedRoleEligibilityScheduleInstanceItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the appScope property of the microsoft.graph.unifiedRoleScheduleInstanceBase entity.
     */
    public get appScope(): AppScopeRequestBuilder {
        return new AppScopeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the directoryScope property of the microsoft.graph.unifiedRoleScheduleInstanceBase entity.
     */
    public get directoryScope(): DirectoryScopeRequestBuilder {
        return new DirectoryScopeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the principal property of the microsoft.graph.unifiedRoleScheduleInstanceBase entity.
     */
    public get principal(): PrincipalRequestBuilder {
        return new PrincipalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the roleDefinition property of the microsoft.graph.unifiedRoleScheduleInstanceBase entity.
     */
    public get roleDefinition(): RoleDefinitionRequestBuilder {
        return new RoleDefinitionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new UnifiedRoleEligibilityScheduleInstanceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/directory/roleEligibilityScheduleInstances/{unifiedRoleEligibilityScheduleInstance%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property roleEligibilityScheduleInstances for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UnifiedRoleEligibilityScheduleInstanceItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get the instance of a role eligibility.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleEligibilityScheduleInstance
     * @see {@link https://learn.microsoft.com/graph/api/unifiedroleeligibilityscheduleinstance-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UnifiedRoleEligibilityScheduleInstanceItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRoleEligibilityScheduleInstance | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleEligibilityScheduleInstance>(requestInfo, createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property roleEligibilityScheduleInstances in roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleEligibilityScheduleInstance
     */
    public patch(body: UnifiedRoleEligibilityScheduleInstance, requestConfiguration?: UnifiedRoleEligibilityScheduleInstanceItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UnifiedRoleEligibilityScheduleInstance | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleEligibilityScheduleInstance>(requestInfo, createUnifiedRoleEligibilityScheduleInstanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property roleEligibilityScheduleInstances for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UnifiedRoleEligibilityScheduleInstanceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get the instance of a role eligibility.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UnifiedRoleEligibilityScheduleInstanceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property roleEligibilityScheduleInstances in roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UnifiedRoleEligibilityScheduleInstance, requestConfiguration?: UnifiedRoleEligibilityScheduleInstanceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUnifiedRoleEligibilityScheduleInstance);
        return requestInfo;
    };
}
