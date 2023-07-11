import {AccessPackageResourceRoleScopeCollectionResponse} from '../../../models/';
import {AccessPackageResourceRoleScope} from '../../../models/accessPackageResourceRoleScope';
import {createAccessPackageResourceRoleScopeCollectionResponseFromDiscriminatorValue} from '../../../models/createAccessPackageResourceRoleScopeCollectionResponseFromDiscriminatorValue';
import {createAccessPackageResourceRoleScopeFromDiscriminatorValue} from '../../../models/createAccessPackageResourceRoleScopeFromDiscriminatorValue';
import {deserializeIntoAccessPackageResourceRoleScope} from '../../../models/deserializeIntoAccessPackageResourceRoleScope';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeAccessPackageResourceRoleScope} from '../../../models/serializeAccessPackageResourceRoleScope';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AccessPackageResourceRoleScopeItemRequestBuilder} from './item/accessPackageResourceRoleScopeItemRequestBuilder';
import {ResourceRoleScopesRequestBuilderGetRequestConfiguration} from './resourceRoleScopesRequestBuilderGetRequestConfiguration';
import {ResourceRoleScopesRequestBuilderPostRequestConfiguration} from './resourceRoleScopesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resourceRoleScopes property of the microsoft.graph.entitlementManagement entity.
 */
export class ResourceRoleScopesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the resourceRoleScopes property of the microsoft.graph.entitlementManagement entity.
     * @param accessPackageResourceRoleScopeId Unique identifier of the item
     * @returns a AccessPackageResourceRoleScopeItemRequestBuilder
     */
    public byAccessPackageResourceRoleScopeId(accessPackageResourceRoleScopeId: string) : AccessPackageResourceRoleScopeItemRequestBuilder {
        if(!accessPackageResourceRoleScopeId) throw new Error("accessPackageResourceRoleScopeId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageResourceRoleScope%2Did"] = accessPackageResourceRoleScopeId
        return new AccessPackageResourceRoleScopeItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ResourceRoleScopesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/resourceRoleScopes{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get resourceRoleScopes from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceRoleScopeCollectionResponse
     */
    public get(requestConfiguration?: ResourceRoleScopesRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessPackageResourceRoleScopeCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResourceRoleScopeCollectionResponse>(requestInfo, createAccessPackageResourceRoleScopeCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to resourceRoleScopes for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceRoleScope
     */
    public post(body: AccessPackageResourceRoleScope | undefined, requestConfiguration?: ResourceRoleScopesRequestBuilderPostRequestConfiguration | undefined) : Promise<AccessPackageResourceRoleScope | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResourceRoleScope>(requestInfo, createAccessPackageResourceRoleScopeFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get resourceRoleScopes from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ResourceRoleScopesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to resourceRoleScopes for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AccessPackageResourceRoleScope | undefined, requestConfiguration?: ResourceRoleScopesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessPackageResourceRoleScope);
        return requestInfo;
    };
}
