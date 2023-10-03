import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../models/oDataErrors/oDataError';
import { type HostPair } from '../../../../../../models/security/';
import { createHostPairFromDiscriminatorValue } from '../../../../../../models/security/hostPair';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface HostPairItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface HostPairItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: HostPairItemRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the parentHostPairs property of the microsoft.graph.security.host entity.
 */
export class HostPairItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new HostPairItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/hosts/{host%2Did}/parentHostPairs/{hostPair%2Did}{?%24select,%24expand}");
    };
    /**
     * The hostPairs that are associated with a host, where that host is the childHost and has an incoming pairing with a parentHost.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HostPair
     */
    public get(requestConfiguration?: HostPairItemRequestBuilderGetRequestConfiguration | undefined) : Promise<HostPair | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<HostPair>(requestInfo, createHostPairFromDiscriminatorValue, errorMapping);
    };
    /**
     * The hostPairs that are associated with a host, where that host is the childHost and has an incoming pairing with a parentHost.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: HostPairItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a HostPairItemRequestBuilder
     */
    public withUrl(rawUrl: string) : HostPairItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new HostPairItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
