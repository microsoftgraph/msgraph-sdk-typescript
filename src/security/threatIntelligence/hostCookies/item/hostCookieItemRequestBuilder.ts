import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { createHostCookieFromDiscriminatorValue, deserializeIntoHostCookie, serializeHostCookie, type HostCookie } from '../../../../models/security/hostCookie';
import { HostRequestBuilder } from './host/hostRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface HostCookieItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface HostCookieItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface HostCookieItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: HostCookieItemRequestBuilderGetQueryParameters;
}
export interface HostCookieItemRequestBuilderPatchRequestConfiguration {
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
 * Provides operations to manage the hostCookies property of the microsoft.graph.security.threatIntelligence entity.
 */
export class HostCookieItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the host property of the microsoft.graph.security.hostCookie entity.
     */
    public get host(): HostRequestBuilder {
        return new HostRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new HostCookieItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/hostCookies/{hostCookie%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property hostCookies for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: HostCookieItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a hostCookie object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HostCookie
     * @see {@link https://learn.microsoft.com/graph/api/security-hostcookie-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: HostCookieItemRequestBuilderGetRequestConfiguration | undefined) : Promise<HostCookie | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<HostCookie>(requestInfo, createHostCookieFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property hostCookies in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HostCookie
     */
    public patch(body: HostCookie, requestConfiguration?: HostCookieItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<HostCookie | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<HostCookie>(requestInfo, createHostCookieFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property hostCookies for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: HostCookieItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a hostCookie object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: HostCookieItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property hostCookies in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: HostCookie, requestConfiguration?: HostCookieItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeHostCookie);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a HostCookieItemRequestBuilder
     */
    public withUrl(rawUrl: string) : HostCookieItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new HostCookieItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
