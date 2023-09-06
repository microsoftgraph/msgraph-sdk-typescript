import { type AccessPackageCatalogCollectionResponse } from '../../../models/';
import { type AccessPackageCatalog } from '../../../models/accessPackageCatalog';
import { createAccessPackageCatalogCollectionResponseFromDiscriminatorValue } from '../../../models/createAccessPackageCatalogCollectionResponseFromDiscriminatorValue';
import { createAccessPackageCatalogFromDiscriminatorValue } from '../../../models/createAccessPackageCatalogFromDiscriminatorValue';
import { deserializeIntoAccessPackageCatalog } from '../../../models/deserializeIntoAccessPackageCatalog';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeAccessPackageCatalog } from '../../../models/serializeAccessPackageCatalog';
import { type CatalogsRequestBuilderGetRequestConfiguration } from './catalogsRequestBuilderGetRequestConfiguration';
import { type CatalogsRequestBuilderPostRequestConfiguration } from './catalogsRequestBuilderPostRequestConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { AccessPackageCatalogItemRequestBuilder } from './item/accessPackageCatalogItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the catalogs property of the microsoft.graph.entitlementManagement entity.
 */
export class CatalogsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the catalogs property of the microsoft.graph.entitlementManagement entity.
     * @param accessPackageCatalogId The unique identifier of accessPackageCatalog
     * @returns a AccessPackageCatalogItemRequestBuilder
     */
    public byAccessPackageCatalogId(accessPackageCatalogId: string) : AccessPackageCatalogItemRequestBuilder {
        if(!accessPackageCatalogId) throw new Error("accessPackageCatalogId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageCatalog%2Did"] = accessPackageCatalogId
        return new AccessPackageCatalogItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CatalogsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/catalogs{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of accessPackageCatalog objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageCatalogCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/entitlementmanagement-list-catalogs?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: CatalogsRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessPackageCatalogCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageCatalogCollectionResponse>(requestInfo, createAccessPackageCatalogCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new accessPackageCatalog object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageCatalog
     * @see {@link https://learn.microsoft.com/graph/api/entitlementmanagement-post-catalogs?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AccessPackageCatalog, requestConfiguration?: CatalogsRequestBuilderPostRequestConfiguration | undefined) : Promise<AccessPackageCatalog | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageCatalog>(requestInfo, createAccessPackageCatalogFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of accessPackageCatalog objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CatalogsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new accessPackageCatalog object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AccessPackageCatalog, requestConfiguration?: CatalogsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAccessPackageCatalog);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a catalogsRequestBuilder
     */
    public withUrl(rawUrl: string) : CatalogsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CatalogsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
