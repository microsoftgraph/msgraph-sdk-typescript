import { type WindowsUniversalAppXCollectionResponse } from '../../../models/';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { createWindowsUniversalAppXCollectionResponseFromDiscriminatorValue } from '../../../models/windowsUniversalAppXCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface GraphWindowsUniversalAppXRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface GraphWindowsUniversalAppXRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GraphWindowsUniversalAppXRequestBuilderGetQueryParameters;
}
/**
 * Casts the previous resource to windowsUniversalAppX.
 */
export class GraphWindowsUniversalAppXRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new GraphWindowsUniversalAppXRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mobileApps/graph.windowsUniversalAppX{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the items of type microsoft.graph.windowsUniversalAppX in the microsoft.graph.mobileApp collection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsUniversalAppXCollectionResponse
     */
    public get(requestConfiguration?: GraphWindowsUniversalAppXRequestBuilderGetRequestConfiguration | undefined) : Promise<WindowsUniversalAppXCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsUniversalAppXCollectionResponse>(requestInfo, createWindowsUniversalAppXCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the items of type microsoft.graph.windowsUniversalAppX in the microsoft.graph.mobileApp collection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GraphWindowsUniversalAppXRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a graphWindowsUniversalAppXRequestBuilder
     */
    public withUrl(rawUrl: string) : GraphWindowsUniversalAppXRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GraphWindowsUniversalAppXRequestBuilder(rawUrl, this.requestAdapter);
    };
}
