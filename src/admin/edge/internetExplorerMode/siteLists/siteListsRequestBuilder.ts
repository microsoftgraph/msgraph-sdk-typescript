import {BrowserSiteListCollectionResponse} from '../../../../models/';
import type {BrowserSiteList} from '../../../../models/browserSiteList';
import {createBrowserSiteListCollectionResponseFromDiscriminatorValue} from '../../../../models/createBrowserSiteListCollectionResponseFromDiscriminatorValue';
import {createBrowserSiteListFromDiscriminatorValue} from '../../../../models/createBrowserSiteListFromDiscriminatorValue';
import {deserializeIntoBrowserSiteList} from '../../../../models/deserializeIntoBrowserSiteList';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeBrowserSiteList} from '../../../../models/serializeBrowserSiteList';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {BrowserSiteListItemRequestBuilder} from './item/browserSiteListItemRequestBuilder';
import {SiteListsRequestBuilderGetRequestConfiguration} from './siteListsRequestBuilderGetRequestConfiguration';
import {SiteListsRequestBuilderPostRequestConfiguration} from './siteListsRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the siteLists property of the microsoft.graph.internetExplorerMode entity.
 */
export class SiteListsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the siteLists property of the microsoft.graph.internetExplorerMode entity.
     * @param browserSiteListId The unique identifier of browserSiteList
     * @returns a BrowserSiteListItemRequestBuilder
     */
    public byBrowserSiteListId(browserSiteListId: string) : BrowserSiteListItemRequestBuilder {
        if(!browserSiteListId) throw new Error("browserSiteListId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["browserSiteList%2Did"] = browserSiteListId
        return new BrowserSiteListItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SiteListsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin/edge/internetExplorerMode/siteLists{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the browserSiteList objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BrowserSiteListCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/internetexplorermode-list-sitelists?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SiteListsRequestBuilderGetRequestConfiguration | undefined) : Promise<BrowserSiteListCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BrowserSiteListCollectionResponse>(requestInfo, createBrowserSiteListCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new browserSiteList object to support Internet Explorer mode.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BrowserSiteList
     * @see {@link https://learn.microsoft.com/graph/api/internetexplorermode-post-sitelists?view=graph-rest-1.0|Find more info here}
     */
    public post(body: BrowserSiteList, requestConfiguration?: SiteListsRequestBuilderPostRequestConfiguration | undefined) : Promise<BrowserSiteList | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BrowserSiteList>(requestInfo, createBrowserSiteListFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the browserSiteList objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SiteListsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new browserSiteList object to support Internet Explorer mode.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: BrowserSiteList, requestConfiguration?: SiteListsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeBrowserSiteList);
        return requestInfo;
    };
}
