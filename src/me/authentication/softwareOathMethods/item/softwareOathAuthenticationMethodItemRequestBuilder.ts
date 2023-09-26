import { type SoftwareOathAuthenticationMethod } from '../../../../models/';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { createSoftwareOathAuthenticationMethodFromDiscriminatorValue } from '../../../../models/softwareOathAuthenticationMethod';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface SoftwareOathAuthenticationMethodItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface SoftwareOathAuthenticationMethodItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface SoftwareOathAuthenticationMethodItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SoftwareOathAuthenticationMethodItemRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the softwareOathMethods property of the microsoft.graph.authentication entity.
 */
export class SoftwareOathAuthenticationMethodItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SoftwareOathAuthenticationMethodItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/authentication/softwareOathMethods/{softwareOathAuthenticationMethod%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a user's Software OATH token authentication method object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/softwareoathauthenticationmethod-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: SoftwareOathAuthenticationMethodItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve a user's single Software OATH token authentication method object and its properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SoftwareOathAuthenticationMethod
     * @see {@link https://learn.microsoft.com/graph/api/softwareoathauthenticationmethod-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SoftwareOathAuthenticationMethodItemRequestBuilderGetRequestConfiguration | undefined) : Promise<SoftwareOathAuthenticationMethod | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SoftwareOathAuthenticationMethod>(requestInfo, createSoftwareOathAuthenticationMethodFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a user's Software OATH token authentication method object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: SoftwareOathAuthenticationMethodItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve a user's single Software OATH token authentication method object and its properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SoftwareOathAuthenticationMethodItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a SoftwareOathAuthenticationMethodItemRequestBuilder
     */
    public withUrl(rawUrl: string) : SoftwareOathAuthenticationMethodItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SoftwareOathAuthenticationMethodItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
