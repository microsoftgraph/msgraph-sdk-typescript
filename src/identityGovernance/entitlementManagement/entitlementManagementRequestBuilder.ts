import {EntitlementManagement} from '../../models/';
import {createEntitlementManagementFromDiscriminatorValue} from '../../models/createEntitlementManagementFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AccessPackageAssignmentApprovalsRequestBuilder} from './accessPackageAssignmentApprovals/accessPackageAssignmentApprovalsRequestBuilder';
import {ApprovalItemRequestBuilder} from './accessPackageAssignmentApprovals/item/approvalItemRequestBuilder';
import {AccessPackagesRequestBuilder} from './accessPackages/accessPackagesRequestBuilder';
import {AccessPackageItemRequestBuilder} from './accessPackages/item/accessPackageItemRequestBuilder';
import {AssignmentPoliciesRequestBuilder} from './assignmentPolicies/assignmentPoliciesRequestBuilder';
import {AccessPackageAssignmentPolicyItemRequestBuilder} from './assignmentPolicies/item/accessPackageAssignmentPolicyItemRequestBuilder';
import {AssignmentRequestsRequestBuilder} from './assignmentRequests/assignmentRequestsRequestBuilder';
import {AccessPackageAssignmentRequestItemRequestBuilder} from './assignmentRequests/item/accessPackageAssignmentRequestItemRequestBuilder';
import {AssignmentsRequestBuilder} from './assignments/assignmentsRequestBuilder';
import {AccessPackageAssignmentItemRequestBuilder} from './assignments/item/accessPackageAssignmentItemRequestBuilder';
import {CatalogsRequestBuilder} from './catalogs/catalogsRequestBuilder';
import {AccessPackageCatalogItemRequestBuilder} from './catalogs/item/accessPackageCatalogItemRequestBuilder';
import {ConnectedOrganizationsRequestBuilder} from './connectedOrganizations/connectedOrganizationsRequestBuilder';
import {ConnectedOrganizationItemRequestBuilder} from './connectedOrganizations/item/connectedOrganizationItemRequestBuilder';
import {EntitlementManagementRequestBuilderDeleteRequestConfiguration} from './entitlementManagementRequestBuilderDeleteRequestConfiguration';
import {EntitlementManagementRequestBuilderGetRequestConfiguration} from './entitlementManagementRequestBuilderGetRequestConfiguration';
import {EntitlementManagementRequestBuilderPatchRequestConfiguration} from './entitlementManagementRequestBuilderPatchRequestConfiguration';
import {SettingsRequestBuilder} from './settings/settingsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the entitlementManagement property of the microsoft.graph.identityGovernance entity. */
export class EntitlementManagementRequestBuilder {
    /** Provides operations to manage the accessPackageAssignmentApprovals property of the microsoft.graph.entitlementManagement entity. */
    public get accessPackageAssignmentApprovals(): AccessPackageAssignmentApprovalsRequestBuilder {
        return new AccessPackageAssignmentApprovalsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the accessPackages property of the microsoft.graph.entitlementManagement entity. */
    public get accessPackages(): AccessPackagesRequestBuilder {
        return new AccessPackagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the assignmentPolicies property of the microsoft.graph.entitlementManagement entity. */
    public get assignmentPolicies(): AssignmentPoliciesRequestBuilder {
        return new AssignmentPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the assignmentRequests property of the microsoft.graph.entitlementManagement entity. */
    public get assignmentRequests(): AssignmentRequestsRequestBuilder {
        return new AssignmentRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the assignments property of the microsoft.graph.entitlementManagement entity. */
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the catalogs property of the microsoft.graph.entitlementManagement entity. */
    public get catalogs(): CatalogsRequestBuilder {
        return new CatalogsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the connectedOrganizations property of the microsoft.graph.entitlementManagement entity. */
    public get connectedOrganizations(): ConnectedOrganizationsRequestBuilder {
        return new ConnectedOrganizationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Provides operations to manage the settings property of the microsoft.graph.entitlementManagement entity. */
    public get settings(): SettingsRequestBuilder {
        return new SettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Provides operations to manage the accessPackageAssignmentApprovals property of the microsoft.graph.entitlementManagement entity.
     * @param id Unique identifier of the item
     * @returns a ApprovalItemRequestBuilder
     */
    public accessPackageAssignmentApprovalsById(id: string) : ApprovalItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["approval%2Did"] = id
        return new ApprovalItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the accessPackages property of the microsoft.graph.entitlementManagement entity.
     * @param id Unique identifier of the item
     * @returns a AccessPackageItemRequestBuilder
     */
    public accessPackagesById(id: string) : AccessPackageItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackage%2Did"] = id
        return new AccessPackageItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the assignmentPolicies property of the microsoft.graph.entitlementManagement entity.
     * @param id Unique identifier of the item
     * @returns a AccessPackageAssignmentPolicyItemRequestBuilder
     */
    public assignmentPoliciesById(id: string) : AccessPackageAssignmentPolicyItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageAssignmentPolicy%2Did"] = id
        return new AccessPackageAssignmentPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the assignmentRequests property of the microsoft.graph.entitlementManagement entity.
     * @param id Unique identifier of the item
     * @returns a AccessPackageAssignmentRequestItemRequestBuilder
     */
    public assignmentRequestsById(id: string) : AccessPackageAssignmentRequestItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageAssignmentRequest%2Did"] = id
        return new AccessPackageAssignmentRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.entitlementManagement entity.
     * @param id Unique identifier of the item
     * @returns a AccessPackageAssignmentItemRequestBuilder
     */
    public assignmentsById(id: string) : AccessPackageAssignmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageAssignment%2Did"] = id
        return new AccessPackageAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the catalogs property of the microsoft.graph.entitlementManagement entity.
     * @param id Unique identifier of the item
     * @returns a AccessPackageCatalogItemRequestBuilder
     */
    public catalogsById(id: string) : AccessPackageCatalogItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageCatalog%2Did"] = id
        return new AccessPackageCatalogItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the connectedOrganizations property of the microsoft.graph.entitlementManagement entity.
     * @param id Unique identifier of the item
     * @returns a ConnectedOrganizationItemRequestBuilder
     */
    public connectedOrganizationsById(id: string) : ConnectedOrganizationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["connectedOrganization%2Did"] = id
        return new ConnectedOrganizationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new EntitlementManagementRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityGovernance/entitlementManagement{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property entitlementManagement for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: EntitlementManagementRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
    public createGetRequestInformation(requestConfiguration?: EntitlementManagementRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property entitlementManagement in identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: EntitlementManagement | undefined, requestConfiguration?: EntitlementManagementRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Delete navigation property entitlementManagement for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: EntitlementManagementRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get entitlementManagement from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EntitlementManagement
     */
    public get(requestConfiguration?: EntitlementManagementRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EntitlementManagement | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EntitlementManagement>(requestInfo, createEntitlementManagementFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property entitlementManagement in identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EntitlementManagement
     */
    public patch(body: EntitlementManagement | undefined, requestConfiguration?: EntitlementManagementRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EntitlementManagement | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EntitlementManagement>(requestInfo, createEntitlementManagementFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
}
