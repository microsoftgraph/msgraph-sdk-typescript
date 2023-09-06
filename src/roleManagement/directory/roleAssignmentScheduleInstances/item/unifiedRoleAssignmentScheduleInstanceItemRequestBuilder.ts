import { createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue } from '../../../../models/createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue';
import { deserializeIntoUnifiedRoleAssignmentScheduleInstance } from '../../../../models/deserializeIntoUnifiedRoleAssignmentScheduleInstance';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { serializeUnifiedRoleAssignmentScheduleInstance } from '../../../../models/serializeUnifiedRoleAssignmentScheduleInstance';
import { type UnifiedRoleAssignmentScheduleInstance } from '../../../../models/unifiedRoleAssignmentScheduleInstance';
import { ActivatedUsingRequestBuilder } from './activatedUsing/activatedUsingRequestBuilder';
import { AppScopeRequestBuilder } from './appScope/appScopeRequestBuilder';
import { DirectoryScopeRequestBuilder } from './directoryScope/directoryScopeRequestBuilder';
import { PrincipalRequestBuilder } from './principal/principalRequestBuilder';
import { RoleDefinitionRequestBuilder } from './roleDefinition/roleDefinitionRequestBuilder';
import { type UnifiedRoleAssignmentScheduleInstanceItemRequestBuilderDeleteRequestConfiguration } from './unifiedRoleAssignmentScheduleInstanceItemRequestBuilderDeleteRequestConfiguration';
import { type UnifiedRoleAssignmentScheduleInstanceItemRequestBuilderGetRequestConfiguration } from './unifiedRoleAssignmentScheduleInstanceItemRequestBuilderGetRequestConfiguration';
import { type UnifiedRoleAssignmentScheduleInstanceItemRequestBuilderPatchRequestConfiguration } from './unifiedRoleAssignmentScheduleInstanceItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleAssignmentScheduleInstances property of the microsoft.graph.rbacApplication entity.
 */
export class UnifiedRoleAssignmentScheduleInstanceItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the activatedUsing property of the microsoft.graph.unifiedRoleAssignmentScheduleInstance entity.
     */
    public get activatedUsing(): ActivatedUsingRequestBuilder {
        return new ActivatedUsingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
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
     * Instantiates a new UnifiedRoleAssignmentScheduleInstanceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property roleAssignmentScheduleInstances for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UnifiedRoleAssignmentScheduleInstanceItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get the instance of an active role assignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleAssignmentScheduleInstance
     * @see {@link https://learn.microsoft.com/graph/api/unifiedroleassignmentscheduleinstance-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UnifiedRoleAssignmentScheduleInstanceItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UnifiedRoleAssignmentScheduleInstance | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleAssignmentScheduleInstance>(requestInfo, createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property roleAssignmentScheduleInstances in roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleAssignmentScheduleInstance
     */
    public patch(body: UnifiedRoleAssignmentScheduleInstance, requestConfiguration?: UnifiedRoleAssignmentScheduleInstanceItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UnifiedRoleAssignmentScheduleInstance | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnifiedRoleAssignmentScheduleInstance>(requestInfo, createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property roleAssignmentScheduleInstances for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UnifiedRoleAssignmentScheduleInstanceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get the instance of an active role assignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UnifiedRoleAssignmentScheduleInstanceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property roleAssignmentScheduleInstances in roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UnifiedRoleAssignmentScheduleInstance, requestConfiguration?: UnifiedRoleAssignmentScheduleInstanceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUnifiedRoleAssignmentScheduleInstance);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a UnifiedRoleAssignmentScheduleInstanceItemRequestBuilder
     */
    public withUrl(rawUrl: string) : UnifiedRoleAssignmentScheduleInstanceItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UnifiedRoleAssignmentScheduleInstanceItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
