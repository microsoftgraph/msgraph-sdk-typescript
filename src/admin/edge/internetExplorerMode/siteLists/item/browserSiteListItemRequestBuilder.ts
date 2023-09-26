import { createBrowserSiteListFromDiscriminatorValue, deserializeIntoBrowserSiteList, serializeBrowserSiteList, type BrowserSiteList } from '../../../../../models/browserSiteList';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { PublishRequestBuilder } from './publish/publishRequestBuilder';
import { SharedCookiesRequestBuilder } from './sharedCookies/sharedCookiesRequestBuilder';
import { SitesRequestBuilder } from './sites/sitesRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface BrowserSiteListItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface BrowserSiteListItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface BrowserSiteListItemRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: BrowserSiteListItemRequestBuilderGetQueryParameters;
}
export interface BrowserSiteListItemRequestBuilderPatchRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
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
     * @see {@link https://learn.microsoft.com/graph/api/internetexplorermode-delete-sitelists?view=graph-rest-1.0|Find more info here}
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
     * @see {@link https://learn.microsoft.com/graph/api/browsersitelist-get?view=graph-rest-1.0|Find more info here}
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
     * @see {@link https://learn.microsoft.com/graph/api/browsersitelist-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: BrowserSiteList, requestConfiguration?: BrowserSiteListItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<BrowserSiteList | undefined> {
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
    public toPatchRequestInformation(body: BrowserSiteList, requestConfiguration?: BrowserSiteListItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeBrowserSiteList);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a BrowserSiteListItemRequestBuilder
     */
    public withUrl(rawUrl: string) : BrowserSiteListItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new BrowserSiteListItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
