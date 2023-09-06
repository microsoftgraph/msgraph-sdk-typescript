import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { type AvailableProviderTypesRequestBuilderGetRequestConfiguration } from './availableProviderTypesRequestBuilderGetRequestConfiguration';
import { createAvailableProviderTypesResponseFromDiscriminatorValue } from './createAvailableProviderTypesResponseFromDiscriminatorValue';
import { type AvailableProviderTypesResponse } from './index';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the availableProviderTypes method.
 */
export class AvailableProviderTypesRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AvailableProviderTypesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/directory/federationConfigurations/availableProviderTypes(){?%24top,%24skip,%24search,%24filter,%24count}");
    };
    /**
     * Invoke function availableProviderTypes
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AvailableProviderTypesResponse
     */
    public get(requestConfiguration?: AvailableProviderTypesRequestBuilderGetRequestConfiguration | undefined) : Promise<AvailableProviderTypesResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AvailableProviderTypesResponse>(requestInfo, createAvailableProviderTypesResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function availableProviderTypes
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AvailableProviderTypesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a availableProviderTypesRequestBuilder
     */
    public withUrl(rawUrl: string) : AvailableProviderTypesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AvailableProviderTypesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
