import {BrowserSiteCollectionResponse} from '../../../../../../models/';
import {BrowserSite} from '../../../../../../models/browserSite';
import {createBrowserSiteCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createBrowserSiteCollectionResponseFromDiscriminatorValue';
import {createBrowserSiteFromDiscriminatorValue} from '../../../../../../models/createBrowserSiteFromDiscriminatorValue';
import {deserializeIntoBrowserSite} from '../../../../../../models/deserializeIntoBrowserSite';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeBrowserSite} from '../../../../../../models/serializeBrowserSite';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {BrowserSiteItemRequestBuilder} from './item/browserSiteItemRequestBuilder';
import {SitesRequestBuilderGetRequestConfiguration} from './sitesRequestBuilderGetRequestConfiguration';
import {SitesRequestBuilderPostRequestConfiguration} from './sitesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sites property of the microsoft.graph.browserSiteList entity.
 */
export class SitesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sites property of the microsoft.graph.browserSiteList entity.
     * @param browserSiteId Unique identifier of the item
     * @returns a BrowserSiteItemRequestBuilder
     */
    public byBrowserSiteId(browserSiteId: string) : BrowserSiteItemRequestBuilder {
        if(!browserSiteId) throw new Error("browserSiteId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["browserSite%2Did"] = browserSiteId
        return new BrowserSiteItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SitesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin/edge/internetExplorerMode/siteLists/{browserSiteList%2Did}/sites{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the browserSite objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BrowserSiteCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/browsersitelist-list-sites?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SitesRequestBuilderGetRequestConfiguration | undefined) : Promise<BrowserSiteCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BrowserSiteCollectionResponse>(requestInfo, createBrowserSiteCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new browserSite object in a browserSiteList.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BrowserSite
     * @see {@link https://docs.microsoft.com/graph/api/browsersitelist-post-sites?view=graph-rest-1.0|Find more info here}
     */
    public post(body: BrowserSite | undefined, requestConfiguration?: SitesRequestBuilderPostRequestConfiguration | undefined) : Promise<BrowserSite | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BrowserSite>(requestInfo, createBrowserSiteFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the browserSite objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SitesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new browserSite object in a browserSiteList.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: BrowserSite | undefined, requestConfiguration?: SitesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeBrowserSite);
        return requestInfo;
    };
}
