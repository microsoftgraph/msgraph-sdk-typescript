import {BrowserSharedCookieCollectionResponse} from '../../../../../../models/';
import type {BrowserSharedCookie} from '../../../../../../models/browserSharedCookie';
import {createBrowserSharedCookieCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createBrowserSharedCookieCollectionResponseFromDiscriminatorValue';
import {createBrowserSharedCookieFromDiscriminatorValue} from '../../../../../../models/createBrowserSharedCookieFromDiscriminatorValue';
import {deserializeIntoBrowserSharedCookie} from '../../../../../../models/deserializeIntoBrowserSharedCookie';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeBrowserSharedCookie} from '../../../../../../models/serializeBrowserSharedCookie';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {BrowserSharedCookieItemRequestBuilder} from './item/browserSharedCookieItemRequestBuilder';
import {SharedCookiesRequestBuilderGetRequestConfiguration} from './sharedCookiesRequestBuilderGetRequestConfiguration';
import {SharedCookiesRequestBuilderPostRequestConfiguration} from './sharedCookiesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sharedCookies property of the microsoft.graph.browserSiteList entity.
 */
export class SharedCookiesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sharedCookies property of the microsoft.graph.browserSiteList entity.
     * @param browserSharedCookieId Unique identifier of the item
     * @returns a BrowserSharedCookieItemRequestBuilder
     */
    public byBrowserSharedCookieId(browserSharedCookieId: string) : BrowserSharedCookieItemRequestBuilder {
        if(!browserSharedCookieId) throw new Error("browserSharedCookieId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["browserSharedCookie%2Did"] = browserSharedCookieId
        return new BrowserSharedCookieItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SharedCookiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin/edge/internetExplorerMode/siteLists/{browserSiteList%2Did}/sharedCookies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the browserSharedCookie objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BrowserSharedCookieCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/browsersitelist-list-sharedcookies?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SharedCookiesRequestBuilderGetRequestConfiguration | undefined) : Promise<BrowserSharedCookieCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BrowserSharedCookieCollectionResponse>(requestInfo, createBrowserSharedCookieCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new browserSharedCookie object in a browserSiteList.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BrowserSharedCookie
     * @see {@link https://learn.microsoft.com/graph/api/browsersitelist-post-sharedcookies?view=graph-rest-1.0|Find more info here}
     */
    public post(body: BrowserSharedCookie | undefined, requestConfiguration?: SharedCookiesRequestBuilderPostRequestConfiguration | undefined) : Promise<BrowserSharedCookie | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BrowserSharedCookie>(requestInfo, createBrowserSharedCookieFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the browserSharedCookie objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SharedCookiesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new browserSharedCookie object in a browserSiteList.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: BrowserSharedCookie | undefined, requestConfiguration?: SharedCookiesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeBrowserSharedCookie);
        return requestInfo;
    };
}
