import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {createRecentResponseFromDiscriminatorValue} from './createRecentResponseFromDiscriminatorValue';
import {RecentResponse} from './index';
import {RecentRequestBuilderGetRequestConfiguration} from './recentRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the recent method.
 */
export class RecentRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new RecentRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/recent(){?%24top,%24skip,%24search,%24filter,%24count,%24select,%24orderby}");
    };
    /**
     * Invoke function recent
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RecentResponse
     */
    public get(requestConfiguration?: RecentRequestBuilderGetRequestConfiguration | undefined) : Promise<RecentResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RecentResponse>(requestInfo, createRecentResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function recent
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RecentRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a recentRequestBuilder
     */
    public withUrl(rawUrl: string) : RecentRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RecentRequestBuilder(rawUrl, this.requestAdapter);
    };
}
