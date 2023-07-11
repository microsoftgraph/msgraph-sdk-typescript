import {AccessPackageResourceRoleScope} from '../../../../models/accessPackageResourceRoleScope';
import {createAccessPackageResourceRoleScopeFromDiscriminatorValue} from '../../../../models/createAccessPackageResourceRoleScopeFromDiscriminatorValue';
import {deserializeIntoAccessPackageResourceRoleScope} from '../../../../models/deserializeIntoAccessPackageResourceRoleScope';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeAccessPackageResourceRoleScope} from '../../../../models/serializeAccessPackageResourceRoleScope';
import {AccessPackageResourceRoleScopeItemRequestBuilderDeleteRequestConfiguration} from './accessPackageResourceRoleScopeItemRequestBuilderDeleteRequestConfiguration';
import {AccessPackageResourceRoleScopeItemRequestBuilderGetRequestConfiguration} from './accessPackageResourceRoleScopeItemRequestBuilderGetRequestConfiguration';
import {AccessPackageResourceRoleScopeItemRequestBuilderPatchRequestConfiguration} from './accessPackageResourceRoleScopeItemRequestBuilderPatchRequestConfiguration';
import {RoleRequestBuilder} from './role/roleRequestBuilder';
import {ScopeRequestBuilder} from './scope/scopeRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resourceRoleScopes property of the microsoft.graph.entitlementManagement entity.
 */
export class AccessPackageResourceRoleScopeItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the role property of the microsoft.graph.accessPackageResourceRoleScope entity.
     */
    public get role(): RoleRequestBuilder {
        return new RoleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the scope property of the microsoft.graph.accessPackageResourceRoleScope entity.
     */
    public get scope(): ScopeRequestBuilder {
        return new ScopeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AccessPackageResourceRoleScopeItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/resourceRoleScopes/{accessPackageResourceRoleScope%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property resourceRoleScopes for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AccessPackageResourceRoleScopeItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get resourceRoleScopes from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceRoleScope
     */
    public get(requestConfiguration?: AccessPackageResourceRoleScopeItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessPackageResourceRoleScope | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResourceRoleScope>(requestInfo, createAccessPackageResourceRoleScopeFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property resourceRoleScopes in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceRoleScope
     */
    public patch(body: AccessPackageResourceRoleScope | undefined, requestConfiguration?: AccessPackageResourceRoleScopeItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AccessPackageResourceRoleScope | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResourceRoleScope>(requestInfo, createAccessPackageResourceRoleScopeFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property resourceRoleScopes for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AccessPackageResourceRoleScopeItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get resourceRoleScopes from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AccessPackageResourceRoleScopeItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property resourceRoleScopes in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AccessPackageResourceRoleScope | undefined, requestConfiguration?: AccessPackageResourceRoleScopeItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessPackageResourceRoleScope);
        return requestInfo;
    };
}
