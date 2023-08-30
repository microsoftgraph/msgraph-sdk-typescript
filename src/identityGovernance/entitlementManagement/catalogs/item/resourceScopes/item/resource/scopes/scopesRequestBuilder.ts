import {AccessPackageResourceScopeCollectionResponse} from '../../../../../../../../models/';
import type {AccessPackageResourceScope} from '../../../../../../../../models/accessPackageResourceScope';
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
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

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
     * @param accessPackageResourceScopeId1 The unique identifier of accessPackageResourceScope
     * @returns a AccessPackageResourceScopeItemRequestBuilder
     */
    public byAccessPackageResourceScopeId1(accessPackageResourceScopeId1: string) : AccessPackageResourceScopeItemRequestBuilder {
        if(!accessPackageResourceScopeId1) throw new Error("accessPackageResourceScopeId1 cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageResourceScope%2Did1"] = accessPackageResourceScopeId1
        return new AccessPackageResourceScopeItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ScopesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog%2Did}/resourceScopes/{accessPackageResourceScope%2Did}/resource/scopes{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Read-only. Nullable. Supports $expand.
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
    public post(body: AccessPackageResourceScope, requestConfiguration?: ScopesRequestBuilderPostRequestConfiguration | undefined) : Promise<AccessPackageResourceScope | undefined> {
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
     * Read-only. Nullable. Supports $expand.
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
    public toPostRequestInformation(body: AccessPackageResourceScope, requestConfiguration?: ScopesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAccessPackageResourceScope);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a scopesRequestBuilder
     */
    public withUrl(rawUrl: string) : ScopesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ScopesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
