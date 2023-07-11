import {createEntitlementManagementFromDiscriminatorValue} from '../../models/createEntitlementManagementFromDiscriminatorValue';
import {deserializeIntoEntitlementManagement} from '../../models/deserializeIntoEntitlementManagement';
import {EntitlementManagement} from '../../models/entitlementManagement';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeEntitlementManagement} from '../../models/serializeEntitlementManagement';
import {AccessPackageAssignmentApprovalsRequestBuilder} from './accessPackageAssignmentApprovals/accessPackageAssignmentApprovalsRequestBuilder';
import {AccessPackagesRequestBuilder} from './accessPackages/accessPackagesRequestBuilder';
import {AssignmentPoliciesRequestBuilder} from './assignmentPolicies/assignmentPoliciesRequestBuilder';
import {AssignmentRequestsRequestBuilder} from './assignmentRequests/assignmentRequestsRequestBuilder';
import {AssignmentsRequestBuilder} from './assignments/assignmentsRequestBuilder';
import {CatalogsRequestBuilder} from './catalogs/catalogsRequestBuilder';
import {ConnectedOrganizationsRequestBuilder} from './connectedOrganizations/connectedOrganizationsRequestBuilder';
import {EntitlementManagementRequestBuilderDeleteRequestConfiguration} from './entitlementManagementRequestBuilderDeleteRequestConfiguration';
import {EntitlementManagementRequestBuilderGetRequestConfiguration} from './entitlementManagementRequestBuilderGetRequestConfiguration';
import {EntitlementManagementRequestBuilderPatchRequestConfiguration} from './entitlementManagementRequestBuilderPatchRequestConfiguration';
import {ResourceEnvironmentsRequestBuilder} from './resourceEnvironments/resourceEnvironmentsRequestBuilder';
import {ResourceRequestsRequestBuilder} from './resourceRequests/resourceRequestsRequestBuilder';
import {ResourceRoleScopesRequestBuilder} from './resourceRoleScopes/resourceRoleScopesRequestBuilder';
import {ResourcesRequestBuilder} from './resources/resourcesRequestBuilder';
import {SettingsRequestBuilder} from './settings/settingsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the entitlementManagement property of the microsoft.graph.identityGovernance entity.
 */
export class EntitlementManagementRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the accessPackageAssignmentApprovals property of the microsoft.graph.entitlementManagement entity.
     */
    public get accessPackageAssignmentApprovals(): AccessPackageAssignmentApprovalsRequestBuilder {
        return new AccessPackageAssignmentApprovalsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the accessPackages property of the microsoft.graph.entitlementManagement entity.
     */
    public get accessPackages(): AccessPackagesRequestBuilder {
        return new AccessPackagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignmentPolicies property of the microsoft.graph.entitlementManagement entity.
     */
    public get assignmentPolicies(): AssignmentPoliciesRequestBuilder {
        return new AssignmentPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignmentRequests property of the microsoft.graph.entitlementManagement entity.
     */
    public get assignmentRequests(): AssignmentRequestsRequestBuilder {
        return new AssignmentRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.entitlementManagement entity.
     */
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the catalogs property of the microsoft.graph.entitlementManagement entity.
     */
    public get catalogs(): CatalogsRequestBuilder {
        return new CatalogsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the connectedOrganizations property of the microsoft.graph.entitlementManagement entity.
     */
    public get connectedOrganizations(): ConnectedOrganizationsRequestBuilder {
        return new ConnectedOrganizationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the resourceEnvironments property of the microsoft.graph.entitlementManagement entity.
     */
    public get resourceEnvironments(): ResourceEnvironmentsRequestBuilder {
        return new ResourceEnvironmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the resourceRequests property of the microsoft.graph.entitlementManagement entity.
     */
    public get resourceRequests(): ResourceRequestsRequestBuilder {
        return new ResourceRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the resourceRoleScopes property of the microsoft.graph.entitlementManagement entity.
     */
    public get resourceRoleScopes(): ResourceRoleScopesRequestBuilder {
        return new ResourceRoleScopesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the resources property of the microsoft.graph.entitlementManagement entity.
     */
    public get resources(): ResourcesRequestBuilder {
        return new ResourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the settings property of the microsoft.graph.entitlementManagement entity.
     */
    public get settings(): SettingsRequestBuilder {
        return new SettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new EntitlementManagementRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement{?%24select,%24expand}");
    };
    /**
     * Delete navigation property entitlementManagement for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: EntitlementManagementRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get entitlementManagement from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EntitlementManagement
     */
    public get(requestConfiguration?: EntitlementManagementRequestBuilderGetRequestConfiguration | undefined) : Promise<EntitlementManagement | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EntitlementManagement>(requestInfo, createEntitlementManagementFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property entitlementManagement in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EntitlementManagement
     */
    public patch(body: EntitlementManagement | undefined, requestConfiguration?: EntitlementManagementRequestBuilderPatchRequestConfiguration | undefined) : Promise<EntitlementManagement | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EntitlementManagement>(requestInfo, createEntitlementManagementFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property entitlementManagement for identityGovernance
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
     * Get entitlementManagement from identityGovernance
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
     * Update the navigation property entitlementManagement in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EntitlementManagement | undefined, requestConfiguration?: EntitlementManagementRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeEntitlementManagement);
        return requestInfo;
    };
}
