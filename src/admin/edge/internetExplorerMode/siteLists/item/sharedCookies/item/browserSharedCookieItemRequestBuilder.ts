import type {BrowserSharedCookie} from '../../../../../../../models/browserSharedCookie';
import {createBrowserSharedCookieFromDiscriminatorValue} from '../../../../../../../models/createBrowserSharedCookieFromDiscriminatorValue';
import {deserializeIntoBrowserSharedCookie} from '../../../../../../../models/deserializeIntoBrowserSharedCookie';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {serializeBrowserSharedCookie} from '../../../../../../../models/serializeBrowserSharedCookie';
import {BrowserSharedCookieItemRequestBuilderDeleteRequestConfiguration} from './browserSharedCookieItemRequestBuilderDeleteRequestConfiguration';
import {BrowserSharedCookieItemRequestBuilderGetRequestConfiguration} from './browserSharedCookieItemRequestBuilderGetRequestConfiguration';
import {BrowserSharedCookieItemRequestBuilderPatchRequestConfiguration} from './browserSharedCookieItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sharedCookies property of the microsoft.graph.browserSiteList entity.
 */
export class BrowserSharedCookieItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new BrowserSharedCookieItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin/edge/internetExplorerMode/siteLists/{browserSiteList%2Did}/sharedCookies/{browserSharedCookie%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a browserSharedCookie from a browserSiteList.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/browsersitelist-delete-sharedcookies?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: BrowserSharedCookieItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get a session cookie that can be shared between a Microsoft Edge process and an Internet Explorer process, while using Internet Explorer mode.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BrowserSharedCookie
     * @see {@link https://learn.microsoft.com/graph/api/browsersharedcookie-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: BrowserSharedCookieItemRequestBuilderGetRequestConfiguration | undefined) : Promise<BrowserSharedCookie | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BrowserSharedCookie>(requestInfo, createBrowserSharedCookieFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a browserSharedCookie object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BrowserSharedCookie
     * @see {@link https://learn.microsoft.com/graph/api/browsersharedcookie-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: BrowserSharedCookie, requestConfiguration?: BrowserSharedCookieItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<BrowserSharedCookie | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BrowserSharedCookie>(requestInfo, createBrowserSharedCookieFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a browserSharedCookie from a browserSiteList.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: BrowserSharedCookieItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get a session cookie that can be shared between a Microsoft Edge process and an Internet Explorer process, while using Internet Explorer mode.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: BrowserSharedCookieItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a browserSharedCookie object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: BrowserSharedCookie, requestConfiguration?: BrowserSharedCookieItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeBrowserSharedCookie);
        return requestInfo;
    };
}
