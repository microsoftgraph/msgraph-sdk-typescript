import {AccessPackage} from '../../../../../../models/';
import {createAccessPackageFromDiscriminatorValue} from '../../../../../../models/createAccessPackageFromDiscriminatorValue';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AccessPackageItemRequestBuilderDeleteRequestConfiguration} from './accessPackageItemRequestBuilderDeleteRequestConfiguration';
import {AccessPackageItemRequestBuilderGetRequestConfiguration} from './accessPackageItemRequestBuilderGetRequestConfiguration';
import {AccessPackageItemRequestBuilderPatchRequestConfiguration} from './accessPackageItemRequestBuilderPatchRequestConfiguration';
import {AccessPackagesIncompatibleWithRequestBuilder} from './accessPackagesIncompatibleWith/accessPackagesIncompatibleWithRequestBuilder';
import {AssignmentPoliciesRequestBuilder} from './assignmentPolicies/assignmentPoliciesRequestBuilder';
import {CatalogRequestBuilder} from './catalog/catalogRequestBuilder';
import {GetApplicablePolicyRequirementsRequestBuilder} from './getApplicablePolicyRequirements/getApplicablePolicyRequirementsRequestBuilder';
import {IncompatibleAccessPackagesRequestBuilder} from './incompatibleAccessPackages/incompatibleAccessPackagesRequestBuilder';
import {IncompatibleGroupsRequestBuilder} from './incompatibleGroups/incompatibleGroupsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessPackages property of the microsoft.graph.accessPackageCatalog entity.
 */
export class AccessPackageItemRequestBuilder extends BaseRequestBuilder {
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
    /** Provides operations to call the getApplicablePolicyRequirements method. */
    public get getApplicablePolicyRequirements(): GetApplicablePolicyRequirementsRequestBuilder {
        return new GetApplicablePolicyRequirementsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the incompatibleAccessPackages property of the microsoft.graph.accessPackage entity. */
    public get incompatibleAccessPackages(): IncompatibleAccessPackagesRequestBuilder {
        return new IncompatibleAccessPackagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the incompatibleGroups property of the microsoft.graph.accessPackage entity. */
    public get incompatibleGroups(): IncompatibleGroupsRequestBuilder {
        return new IncompatibleGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AccessPackageItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog%2Did}/accessPackages/{accessPackage%2Did}{?%24select,%24expand}");
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
     * Update the navigation property accessPackages in identityGovernance
     * @param body The request body
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
     * @param body The request body
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
