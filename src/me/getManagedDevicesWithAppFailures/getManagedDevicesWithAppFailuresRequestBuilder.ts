import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { createGetManagedDevicesWithAppFailuresGetResponseFromDiscriminatorValue } from './getManagedDevicesWithAppFailuresGetResponse';
import { type GetManagedDevicesWithAppFailuresGetResponse } from './index';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface GetManagedDevicesWithAppFailuresRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface GetManagedDevicesWithAppFailuresRequestBuilderGetRequestConfiguration {
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
    queryParameters?: GetManagedDevicesWithAppFailuresRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to call the getManagedDevicesWithAppFailures method.
 */
export class GetManagedDevicesWithAppFailuresRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetManagedDevicesWithAppFailuresRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/getManagedDevicesWithAppFailures(){?%24top,%24skip,%24search,%24filter,%24count}");
    };
    /**
     * Retrieves the list of devices with failed apps
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetManagedDevicesWithAppFailuresGetResponse
     */
    public get(requestConfiguration?: GetManagedDevicesWithAppFailuresRequestBuilderGetRequestConfiguration | undefined) : Promise<GetManagedDevicesWithAppFailuresGetResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetManagedDevicesWithAppFailuresGetResponse>(requestInfo, createGetManagedDevicesWithAppFailuresGetResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieves the list of devices with failed apps
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: GetManagedDevicesWithAppFailuresRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a getManagedDevicesWithAppFailuresRequestBuilder
     */
    public withUrl(rawUrl: string) : GetManagedDevicesWithAppFailuresRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetManagedDevicesWithAppFailuresRequestBuilder(rawUrl, this.requestAdapter);
    };
}
