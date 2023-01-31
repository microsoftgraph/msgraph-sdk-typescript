import {AccessPackage} from '../../../../../../models/';
import {createAccessPackageFromDiscriminatorValue} from '../../../../../../models/createAccessPackageFromDiscriminatorValue';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AccessPackageItemRequestBuilderDeleteRequestConfiguration} from './accessPackageItemRequestBuilderDeleteRequestConfiguration';
import {AccessPackageItemRequestBuilderGetRequestConfiguration} from './accessPackageItemRequestBuilderGetRequestConfiguration';
import {AccessPackageItemRequestBuilderPatchRequestConfiguration} from './accessPackageItemRequestBuilderPatchRequestConfiguration';
import {AccessPackagesIncompatibleWithRequestBuilder} from './accessPackagesIncompatibleWith/accessPackagesIncompatibleWithRequestBuilder';
import {AccessPackageItemRequestBuilder as I0f7e6b283e479d72a6d9d336ee5e2552141f4d76a9a6ac81fe249c4bc7bcd2e5} from './accessPackagesIncompatibleWith/item/accessPackageItemRequestBuilder';
import {AssignmentPoliciesRequestBuilder} from './assignmentPolicies/assignmentPoliciesRequestBuilder';
import {AccessPackageAssignmentPolicyItemRequestBuilder} from './assignmentPolicies/item/accessPackageAssignmentPolicyItemRequestBuilder';
import {CatalogRequestBuilder} from './catalog/catalogRequestBuilder';
import {IncompatibleAccessPackagesRequestBuilder} from './incompatibleAccessPackages/incompatibleAccessPackagesRequestBuilder';
import {AccessPackageItemRequestBuilder as I8cfc274500b86997c5a1d8da7cc7aabfd9284b78e1a192fee878c6c9bff1e764} from './incompatibleAccessPackages/item/accessPackageItemRequestBuilder';
import {IncompatibleGroupsRequestBuilder} from './incompatibleGroups/incompatibleGroupsRequestBuilder';
import {GroupItemRequestBuilder} from './incompatibleGroups/item/groupItemRequestBuilder';
import {GetApplicablePolicyRequirementsRequestBuilder} from './microsoftGraphGetApplicablePolicyRequirements/getApplicablePolicyRequirementsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessPackages property of the microsoft.graph.accessPackageCatalog entity.
 */
export class AccessPackageItemRequestBuilder {
    /** Provides operations to manage the accessPackagesIncompatibleWith property of the microsoft.graph.accessPackage entity. */
    public get accessPackagesIncompatibleWith(): AccessPackagesIncompatibleWithRequestBuilder {
        return new AccessPackagesIncompatibleWithRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the assignmentPolicies property of the microsoft.graph.accessPackage entity. */
    public get assignmentPolicies(): AssignmentPoliciesRequestBuilder {
        return new AssignmentPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the catalog property of the microsoft.graph.accessPackage entity. */
    public get catalog(): CatalogRequestBuilder {
        return new CatalogRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the incompatibleAccessPackages property of the microsoft.graph.accessPackage entity. */
    public get incompatibleAccessPackages(): IncompatibleAccessPackagesRequestBuilder {
        return new IncompatibleAccessPackagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the incompatibleGroups property of the microsoft.graph.accessPackage entity. */
    public get incompatibleGroups(): IncompatibleGroupsRequestBuilder {
        return new IncompatibleGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getApplicablePolicyRequirements method. */
    public get microsoftGraphGetApplicablePolicyRequirements(): GetApplicablePolicyRequirementsRequestBuilder {
        return new GetApplicablePolicyRequirementsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Provides operations to manage the accessPackagesIncompatibleWith property of the microsoft.graph.accessPackage entity.
     * @param id Unique identifier of the item
     * @returns a AccessPackageItemRequestBuilder
     */
    public accessPackagesIncompatibleWithById(id: string) : I0f7e6b283e479d72a6d9d336ee5e2552141f4d76a9a6ac81fe249c4bc7bcd2e5 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackage%2Did1"] = id
        return new I0f7e6b283e479d72a6d9d336ee5e2552141f4d76a9a6ac81fe249c4bc7bcd2e5(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the assignmentPolicies property of the microsoft.graph.accessPackage entity.
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
     * Instantiates a new AccessPackageItemRequestBuilder and sets the default values.
     * @param accessPackageId key: id of accessPackage
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, accessPackageId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog%2Did}/accessPackages/{accessPackage%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["accessPackage%2Did"] = accessPackageId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property accessPackages for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: AccessPackageItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The access packages in this catalog. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessPackage
     */
    public get(requestConfiguration?: AccessPackageItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessPackage | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AccessPackage>(requestInfo, createAccessPackageFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.identityGovernance.entitlementManagement.catalogs.item.accessPackages.item.incompatibleAccessPackages.item collection
     * @param id Unique identifier of the item
     * @returns a AccessPackageItemRequestBuilder
     */
    public incompatibleAccessPackagesById(id: string) : I8cfc274500b86997c5a1d8da7cc7aabfd9284b78e1a192fee878c6c9bff1e764 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackage%2Did1"] = id
        return new I8cfc274500b86997c5a1d8da7cc7aabfd9284b78e1a192fee878c6c9bff1e764(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.identityGovernance.entitlementManagement.catalogs.item.accessPackages.item.incompatibleGroups.item collection
     * @param id Unique identifier of the item
     * @returns a GroupItemRequestBuilder
     */
    public incompatibleGroupsById(id: string) : GroupItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["group%2Did"] = id
        return new GroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property accessPackages in identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessPackage
     */
    public patch(body: AccessPackage | undefined, requestConfiguration?: AccessPackageItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessPackage | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AccessPackage>(requestInfo, createAccessPackageFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property accessPackages for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AccessPackageItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The access packages in this catalog. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AccessPackageItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property accessPackages in identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AccessPackage | undefined, requestConfiguration?: AccessPackageItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
