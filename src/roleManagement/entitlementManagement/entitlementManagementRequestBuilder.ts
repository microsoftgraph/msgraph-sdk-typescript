import {createRbacApplicationFromDiscriminatorValue} from '../../models/createRbacApplicationFromDiscriminatorValue';
import {deserializeIntoRbacApplication} from '../../models/deserializeIntoRbacApplication';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {RbacApplication} from '../../models/rbacApplication';
import {serializeRbacApplication} from '../../models/serializeRbacApplication';
import {EntitlementManagementRequestBuilderDeleteRequestConfiguration} from './entitlementManagementRequestBuilderDeleteRequestConfiguration';
import {EntitlementManagementRequestBuilderGetRequestConfiguration} from './entitlementManagementRequestBuilderGetRequestConfiguration';
import {EntitlementManagementRequestBuilderPatchRequestConfiguration} from './entitlementManagementRequestBuilderPatchRequestConfiguration';
import {ResourceNamespacesRequestBuilder} from './resourceNamespaces/resourceNamespacesRequestBuilder';
import {RoleAssignmentsRequestBuilder} from './roleAssignments/roleAssignmentsRequestBuilder';
import {RoleAssignmentScheduleInstancesRequestBuilder} from './roleAssignmentScheduleInstances/roleAssignmentScheduleInstancesRequestBuilder';
import {RoleAssignmentScheduleRequestsRequestBuilder} from './roleAssignmentScheduleRequests/roleAssignmentScheduleRequestsRequestBuilder';
import {RoleAssignmentSchedulesRequestBuilder} from './roleAssignmentSchedules/roleAssignmentSchedulesRequestBuilder';
import {RoleDefinitionsRequestBuilder} from './roleDefinitions/roleDefinitionsRequestBuilder';
import {RoleEligibilityScheduleInstancesRequestBuilder} from './roleEligibilityScheduleInstances/roleEligibilityScheduleInstancesRequestBuilder';
import {RoleEligibilityScheduleRequestsRequestBuilder} from './roleEligibilityScheduleRequests/roleEligibilityScheduleRequestsRequestBuilder';
import {RoleEligibilitySchedulesRequestBuilder} from './roleEligibilitySchedules/roleEligibilitySchedulesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the entitlementManagement property of the microsoft.graph.roleManagement entity.
 */
export class EntitlementManagementRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the resourceNamespaces property of the microsoft.graph.rbacApplication entity. */
    public get resourceNamespaces(): ResourceNamespacesRequestBuilder {
        return new ResourceNamespacesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the roleAssignments property of the microsoft.graph.rbacApplication entity. */
    public get roleAssignments(): RoleAssignmentsRequestBuilder {
        return new RoleAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the roleAssignmentScheduleInstances property of the microsoft.graph.rbacApplication entity. */
    public get roleAssignmentScheduleInstances(): RoleAssignmentScheduleInstancesRequestBuilder {
        return new RoleAssignmentScheduleInstancesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the roleAssignmentScheduleRequests property of the microsoft.graph.rbacApplication entity. */
    public get roleAssignmentScheduleRequests(): RoleAssignmentScheduleRequestsRequestBuilder {
        return new RoleAssignmentScheduleRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the roleAssignmentSchedules property of the microsoft.graph.rbacApplication entity. */
    public get roleAssignmentSchedules(): RoleAssignmentSchedulesRequestBuilder {
        return new RoleAssignmentSchedulesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the roleDefinitions property of the microsoft.graph.rbacApplication entity. */
    public get roleDefinitions(): RoleDefinitionsRequestBuilder {
        return new RoleDefinitionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the roleEligibilityScheduleInstances property of the microsoft.graph.rbacApplication entity. */
    public get roleEligibilityScheduleInstances(): RoleEligibilityScheduleInstancesRequestBuilder {
        return new RoleEligibilityScheduleInstancesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the roleEligibilityScheduleRequests property of the microsoft.graph.rbacApplication entity. */
    public get roleEligibilityScheduleRequests(): RoleEligibilityScheduleRequestsRequestBuilder {
        return new RoleEligibilityScheduleRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the roleEligibilitySchedules property of the microsoft.graph.rbacApplication entity. */
    public get roleEligibilitySchedules(): RoleEligibilitySchedulesRequestBuilder {
        return new RoleEligibilitySchedulesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new EntitlementManagementRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement/entitlementManagement{?%24select,%24expand}");
    };
    /**
     * Delete navigation property entitlementManagement for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: EntitlementManagementRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Container for roles and assignments for entitlement management resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of RbacApplication
     */
    public get(requestConfiguration?: EntitlementManagementRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<RbacApplication | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<RbacApplication>(requestInfo, createRbacApplicationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property entitlementManagement in roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of RbacApplication
     */
    public patch(body: RbacApplication | undefined, requestConfiguration?: EntitlementManagementRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<RbacApplication | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<RbacApplication>(requestInfo, createRbacApplicationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property entitlementManagement for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EntitlementManagementRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Container for roles and assignments for entitlement management resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EntitlementManagementRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property entitlementManagement in roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: RbacApplication | undefined, requestConfiguration?: EntitlementManagementRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeRbacApplication);
        return requestInfo;
    };
}
