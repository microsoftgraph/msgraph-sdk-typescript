import { type ODataError } from '../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../models/oDataErrors/serializeODataError';
import { createGetCompatibleHubContentTypesResponseFromDiscriminatorValue } from './createGetCompatibleHubContentTypesResponseFromDiscriminatorValue';
import { type GetCompatibleHubContentTypesRequestBuilderGetRequestConfiguration } from './getCompatibleHubContentTypesRequestBuilderGetRequestConfiguration';
import { type GetCompatibleHubContentTypesResponse } from './index';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getCompatibleHubContentTypes method.
 */
export class GetCompatibleHubContentTypesRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetCompatibleHubContentTypesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/lists/{list%2Did}/contentTypes/getCompatibleHubContentTypes(){?%24top,%24skip,%24search,%24filter,%24count,%24select,%24orderby}");
    };
    /**
     * Invoke function getCompatibleHubContentTypes
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetCompatibleHubContentTypesResponse
     */
    public get(requestConfiguration?: GetCompatibleHubContentTypesRequestBuilderGetRequestConfiguration | undefined) : Promise<GetCompatibleHubContentTypesResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetCompatibleHubContentTypesResponse>(requestInfo, createGetCompatibleHubContentTypesResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function getCompatibleHubContentTypes
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GetCompatibleHubContentTypesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a getCompatibleHubContentTypesRequestBuilder
     */
    public withUrl(rawUrl: string) : GetCompatibleHubContentTypesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetCompatibleHubContentTypesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
