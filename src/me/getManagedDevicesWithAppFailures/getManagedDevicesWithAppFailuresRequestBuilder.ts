import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {createGetManagedDevicesWithAppFailuresResponseFromDiscriminatorValue} from './createGetManagedDevicesWithAppFailuresResponseFromDiscriminatorValue';
import {GetManagedDevicesWithAppFailuresRequestBuilderGetRequestConfiguration} from './getManagedDevicesWithAppFailuresRequestBuilderGetRequestConfiguration';
import {GetManagedDevicesWithAppFailuresResponse} from './index';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

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
     * @returns a Promise of GetManagedDevicesWithAppFailuresResponse
     */
    public get(requestConfiguration?: GetManagedDevicesWithAppFailuresRequestBuilderGetRequestConfiguration | undefined) : Promise<GetManagedDevicesWithAppFailuresResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<GetManagedDevicesWithAppFailuresResponse>(requestInfo, createGetManagedDevicesWithAppFailuresResponseFromDiscriminatorValue, errorMapping);
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
