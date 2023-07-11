import {AccessPackageResourceScopeCollectionResponse} from '../../../../../../../../models/';
import {AccessPackageResourceScope} from '../../../../../../../../models/accessPackageResourceScope';
import {createAccessPackageResourceScopeCollectionResponseFromDiscriminatorValue} from '../../../../../../../../models/createAccessPackageResourceScopeCollectionResponseFromDiscriminatorValue';
import {createAccessPackageResourceScopeFromDiscriminatorValue} from '../../../../../../../../models/createAccessPackageResourceScopeFromDiscriminatorValue';
import {deserializeIntoAccessPackageResourceScope} from '../../../../../../../../models/deserializeIntoAccessPackageResourceScope';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeAccessPackageResourceScope} from '../../../../../../../../models/serializeAccessPackageResourceScope';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AccessPackageResourceScopeItemRequestBuilder} from './item/accessPackageResourceScopeItemRequestBuilder';
import {ScopesRequestBuilderGetRequestConfiguration} from './scopesRequestBuilderGetRequestConfiguration';
import {ScopesRequestBuilderPostRequestConfiguration} from './scopesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the scopes property of the microsoft.graph.accessPackageResource entity.
 */
export class ScopesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the scopes property of the microsoft.graph.accessPackageResource entity.
     * @param accessPackageResourceScopeId Unique identifier of the item
     * @returns a AccessPackageResourceScopeItemRequestBuilder
     */
    public byAccessPackageResourceScopeId(accessPackageResourceScopeId: string) : AccessPackageResourceScopeItemRequestBuilder {
        if(!accessPackageResourceScopeId) throw new Error("accessPackageResourceScopeId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageResourceScope%2Did"] = accessPackageResourceScopeId
        return new AccessPackageResourceScopeItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ScopesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/resourceRequests/{accessPackageResourceRequest%2Did}/catalog/resources/{accessPackageResource%2Did}/scopes{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get scopes from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceScopeCollectionResponse
     */
    public get(requestConfiguration?: ScopesRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessPackageResourceScopeCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResourceScopeCollectionResponse>(requestInfo, createAccessPackageResourceScopeCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to scopes for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceScope
     */
    public post(body: AccessPackageResourceScope | undefined, requestConfiguration?: ScopesRequestBuilderPostRequestConfiguration | undefined) : Promise<AccessPackageResourceScope | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResourceScope>(requestInfo, createAccessPackageResourceScopeFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get scopes from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ScopesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to scopes for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AccessPackageResourceScope | undefined, requestConfiguration?: ScopesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessPackageResourceScope);
        return requestInfo;
    };
}
