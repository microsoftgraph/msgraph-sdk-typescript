import { createBrowserSiteListFromDiscriminatorValue, deserializeIntoBrowserSiteList, serializeBrowserSiteList, type BrowserSiteList } from '../../../../../../models/browserSiteList';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../models/oDataErrors/oDataError';
import { deserializeIntoPublishPostRequestBody, serializePublishPostRequestBody, type PublishPostRequestBody } from './publishPostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface PublishRequestBuilderPostRequestConfiguration {
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
 * Provides operations to call the publish method.
 */
export class PublishRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new PublishRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin/edge/internetExplorerMode/siteLists/{browserSiteList%2Did}/publish");
    };
    /**
     * Publish the specified browserSiteList for devices to download.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BrowserSiteList
     * @see {@link https://learn.microsoft.com/graph/api/browsersitelist-publish?view=graph-rest-1.0|Find more info here}
     */
    public post(body: PublishPostRequestBody, requestConfiguration?: PublishRequestBuilderPostRequestConfiguration | undefined) : Promise<BrowserSiteList | undefined> {
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
     * Publish the specified browserSiteList for devices to download.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PublishPostRequestBody, requestConfiguration?: PublishRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePublishPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a publishRequestBuilder
     */
    public withUrl(rawUrl: string) : PublishRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PublishRequestBuilder(rawUrl, this.requestAdapter);
    };
}
