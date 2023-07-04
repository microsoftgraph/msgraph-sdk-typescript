import {BrowserSiteList} from '../../../../../models/browserSiteList';
import {createBrowserSiteListFromDiscriminatorValue} from '../../../../../models/createBrowserSiteListFromDiscriminatorValue';
import {deserializeIntoBrowserSiteList} from '../../../../../models/deserializeIntoBrowserSiteList';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeBrowserSiteList} from '../../../../../models/serializeBrowserSiteList';
import {BrowserSiteListItemRequestBuilderDeleteRequestConfiguration} from './browserSiteListItemRequestBuilderDeleteRequestConfiguration';
import {BrowserSiteListItemRequestBuilderGetRequestConfiguration} from './browserSiteListItemRequestBuilderGetRequestConfiguration';
import {BrowserSiteListItemRequestBuilderPatchRequestConfiguration} from './browserSiteListItemRequestBuilderPatchRequestConfiguration';
import {PublishRequestBuilder} from './publish/publishRequestBuilder';
import {SharedCookiesRequestBuilder} from './sharedCookies/sharedCookiesRequestBuilder';
import {SitesRequestBuilder} from './sites/sitesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the siteLists property of the microsoft.graph.internetExplorerMode entity.
 */
export class BrowserSiteListItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the publish method.
     */
    public get publish(): PublishRequestBuilder {
        return new PublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sharedCookies property of the microsoft.graph.browserSiteList entity.
     */
    public get sharedCookies(): SharedCookiesRequestBuilder {
        return new SharedCookiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sites property of the microsoft.graph.browserSiteList entity.
     */
    public get sites(): SitesRequestBuilder {
        return new SitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new BrowserSiteListItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin/edge/internetExplorerMode/siteLists/{browserSiteList%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a browserSiteList object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/internetexplorermode-delete-sitelists?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: BrowserSiteListItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get a browserSiteList that contains browserSite and browserSharedCookie resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BrowserSiteList
     * @see {@link https://docs.microsoft.com/graph/api/browsersitelist-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: BrowserSiteListItemRequestBuilderGetRequestConfiguration | undefined) : Promise<BrowserSiteList | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BrowserSiteList>(requestInfo, createBrowserSiteListFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a browserSiteList object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BrowserSiteList
     * @see {@link https://docs.microsoft.com/graph/api/browsersitelist-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: BrowserSiteList | undefined, requestConfiguration?: BrowserSiteListItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<BrowserSiteList | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BrowserSiteList>(requestInfo, createBrowserSiteListFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a browserSiteList object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: BrowserSiteListItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get a browserSiteList that contains browserSite and browserSharedCookie resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: BrowserSiteListItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a browserSiteList object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: BrowserSiteList | undefined, requestConfiguration?: BrowserSiteListItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeBrowserSiteList);
        return requestInfo;
    };
}
