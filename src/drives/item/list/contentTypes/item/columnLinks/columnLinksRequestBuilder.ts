import { type ColumnLinkCollectionResponse } from '../../../../../../models/';
import { type ColumnLink } from '../../../../../../models/columnLink';
import { createColumnLinkCollectionResponseFromDiscriminatorValue } from '../../../../../../models/createColumnLinkCollectionResponseFromDiscriminatorValue';
import { createColumnLinkFromDiscriminatorValue } from '../../../../../../models/createColumnLinkFromDiscriminatorValue';
import { deserializeIntoColumnLink } from '../../../../../../models/deserializeIntoColumnLink';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { serializeColumnLink } from '../../../../../../models/serializeColumnLink';
import { type ColumnLinksRequestBuilderGetRequestConfiguration } from './columnLinksRequestBuilderGetRequestConfiguration';
import { type ColumnLinksRequestBuilderPostRequestConfiguration } from './columnLinksRequestBuilderPostRequestConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { ColumnLinkItemRequestBuilder } from './item/columnLinkItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the columnLinks property of the microsoft.graph.contentType entity.
 */
export class ColumnLinksRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the columnLinks property of the microsoft.graph.contentType entity.
     * @param columnLinkId The unique identifier of columnLink
     * @returns a ColumnLinkItemRequestBuilder
     */
    public byColumnLinkId(columnLinkId: string) : ColumnLinkItemRequestBuilder {
        if(!columnLinkId) throw new Error("columnLinkId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["columnLink%2Did"] = columnLinkId
        return new ColumnLinkItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ColumnLinksRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/list/contentTypes/{contentType%2Did}/columnLinks{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The collection of columns that are required by this content type.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ColumnLinkCollectionResponse
     */
    public get(requestConfiguration?: ColumnLinksRequestBuilderGetRequestConfiguration | undefined) : Promise<ColumnLinkCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ColumnLinkCollectionResponse>(requestInfo, createColumnLinkCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to columnLinks for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ColumnLink
     */
    public post(body: ColumnLink, requestConfiguration?: ColumnLinksRequestBuilderPostRequestConfiguration | undefined) : Promise<ColumnLink | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ColumnLink>(requestInfo, createColumnLinkFromDiscriminatorValue, errorMapping);
    };
    /**
     * The collection of columns that are required by this content type.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ColumnLinksRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to columnLinks for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ColumnLink, requestConfiguration?: ColumnLinksRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeColumnLink);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a columnLinksRequestBuilder
     */
    public withUrl(rawUrl: string) : ColumnLinksRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ColumnLinksRequestBuilder(rawUrl, this.requestAdapter);
    };
}
