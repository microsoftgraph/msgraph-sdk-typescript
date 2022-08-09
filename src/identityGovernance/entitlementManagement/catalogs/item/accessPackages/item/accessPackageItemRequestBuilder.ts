import {AccessPackage} from '../../../../../../models/';
import {createAccessPackageFromDiscriminatorValue} from '../../../../../../models/createAccessPackageFromDiscriminatorValue';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AccessPackageItemRequestBuilderDeleteRequestConfiguration} from './accessPackageItemRequestBuilderDeleteRequestConfiguration';
import {AccessPackageItemRequestBuilderGetRequestConfiguration} from './accessPackageItemRequestBuilderGetRequestConfiguration';
import {AccessPackageItemRequestBuilderPatchRequestConfiguration} from './accessPackageItemRequestBuilderPatchRequestConfiguration';
import {AssignmentPoliciesRequestBuilder} from './assignmentPolicies/assignmentPoliciesRequestBuilder';
import {AccessPackageAssignmentPolicyItemRequestBuilder} from './assignmentPolicies/item/accessPackageAssignmentPolicyItemRequestBuilder';
import {CatalogRequestBuilder} from './catalog/catalogRequestBuilder';
import {GetApplicablePolicyRequirementsRequestBuilder} from './getApplicablePolicyRequirements/getApplicablePolicyRequirementsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the accessPackages property of the microsoft.graph.accessPackageCatalog entity. */
export class AccessPackageItemRequestBuilder {
    /** The assignmentPolicies property */
    public get assignmentPolicies(): AssignmentPoliciesRequestBuilder {
        return new AssignmentPoliciesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The catalog property */
    public get catalog(): CatalogRequestBuilder {
        return new CatalogRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getApplicablePolicyRequirements property */
    public get getApplicablePolicyRequirements(): GetApplicablePolicyRequirementsRequestBuilder {
        return new GetApplicablePolicyRequirementsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.identityGovernance.entitlementManagement.catalogs.item.accessPackages.item.assignmentPolicies.item collection
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
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog%2Did}/accessPackages/{accessPackage%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property accessPackages for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: AccessPackageItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The access packages in this catalog. Read-only. Nullable. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: AccessPackageItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property accessPackages in identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: AccessPackage | undefined, requestConfiguration?: AccessPackageItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Delete navigation property accessPackages for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: AccessPackageItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * The access packages in this catalog. Read-only. Nullable. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessPackage
     */
    public get(requestConfiguration?: AccessPackageItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessPackage | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AccessPackage>(requestInfo, createAccessPackageFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the navigation property accessPackages in identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: AccessPackage | undefined, requestConfiguration?: AccessPackageItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
}
