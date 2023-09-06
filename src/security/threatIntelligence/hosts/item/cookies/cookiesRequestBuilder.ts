import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { type HostCookieCollectionResponse } from '../../../../../models/security/';
import { createHostCookieCollectionResponseFromDiscriminatorValue } from '../../../../../models/security/createHostCookieCollectionResponseFromDiscriminatorValue';
import { type CookiesRequestBuilderGetRequestConfiguration } from './cookiesRequestBuilderGetRequestConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { HostCookieItemRequestBuilder } from './item/hostCookieItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the cookies property of the microsoft.graph.security.host entity.
 */
export class CookiesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the cookies property of the microsoft.graph.security.host entity.
     * @param hostCookieId The unique identifier of hostCookie
     * @returns a HostCookieItemRequestBuilder
     */
    public byHostCookieId(hostCookieId: string) : HostCookieItemRequestBuilder {
        if(!hostCookieId) throw new Error("hostCookieId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["hostCookie%2Did"] = hostCookieId
        return new HostCookieItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CookiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/hosts/{host%2Did}/cookies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of hostCookie resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HostCookieCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-host-list-cookies?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: CookiesRequestBuilderGetRequestConfiguration | undefined) : Promise<HostCookieCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<HostCookieCollectionResponse>(requestInfo, createHostCookieCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of hostCookie resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CookiesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a cookiesRequestBuilder
     */
    public withUrl(rawUrl: string) : CookiesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CookiesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
