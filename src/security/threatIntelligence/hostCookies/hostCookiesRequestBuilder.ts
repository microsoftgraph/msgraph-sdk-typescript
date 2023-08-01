import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {HostCookieCollectionResponse} from '../../../models/security/';
import {createHostCookieCollectionResponseFromDiscriminatorValue} from '../../../models/security/createHostCookieCollectionResponseFromDiscriminatorValue';
import {createHostCookieFromDiscriminatorValue} from '../../../models/security/createHostCookieFromDiscriminatorValue';
import {deserializeIntoHostCookie} from '../../../models/security/deserializeIntoHostCookie';
import type {HostCookie} from '../../../models/security/hostCookie';
import {serializeHostCookie} from '../../../models/security/serializeHostCookie';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {HostCookiesRequestBuilderGetRequestConfiguration} from './hostCookiesRequestBuilderGetRequestConfiguration';
import {HostCookiesRequestBuilderPostRequestConfiguration} from './hostCookiesRequestBuilderPostRequestConfiguration';
import {HostCookieItemRequestBuilder} from './item/hostCookieItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the hostCookies property of the microsoft.graph.security.threatIntelligence entity.
 */
export class HostCookiesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the hostCookies property of the microsoft.graph.security.threatIntelligence entity.
     * @param hostCookieId Unique identifier of the item
     * @returns a HostCookieItemRequestBuilder
     */
    public byHostCookieId(hostCookieId: string) : HostCookieItemRequestBuilder {
        if(!hostCookieId) throw new Error("hostCookieId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["hostCookie%2Did"] = hostCookieId
        return new HostCookieItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new HostCookiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/hostCookies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Read the properties and relationships of a hostCookie object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HostCookieCollectionResponse
     */
    public get(requestConfiguration?: HostCookiesRequestBuilderGetRequestConfiguration | undefined) : Promise<HostCookieCollectionResponse | undefined> {
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
     * Create new navigation property to hostCookies for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HostCookie
     */
    public post(body: HostCookie | undefined, requestConfiguration?: HostCookiesRequestBuilderPostRequestConfiguration | undefined) : Promise<HostCookie | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<HostCookie>(requestInfo, createHostCookieFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read the properties and relationships of a hostCookie object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: HostCookiesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to hostCookies for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: HostCookie | undefined, requestConfiguration?: HostCookiesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeHostCookie);
        return requestInfo;
    };
}
