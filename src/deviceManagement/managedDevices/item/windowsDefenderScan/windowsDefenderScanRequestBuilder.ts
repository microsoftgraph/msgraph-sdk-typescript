import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {deserializeIntoWindowsDefenderScanPostRequestBody} from './deserializeIntoWindowsDefenderScanPostRequestBody';
import {serializeWindowsDefenderScanPostRequestBody} from './serializeWindowsDefenderScanPostRequestBody';
import type {WindowsDefenderScanPostRequestBody} from './windowsDefenderScanPostRequestBody';
import {WindowsDefenderScanRequestBuilderPostRequestConfiguration} from './windowsDefenderScanRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the windowsDefenderScan method.
 */
export class WindowsDefenderScanRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new WindowsDefenderScanRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/managedDevices/{managedDevice%2Did}/windowsDefenderScan");
    };
    /**
     * Not yet documented
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-devices-manageddevice-windowsdefenderscan?view=graph-rest-1.0|Find more info here}
     */
    public post(body: WindowsDefenderScanPostRequestBody, requestConfiguration?: WindowsDefenderScanRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Not yet documented
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WindowsDefenderScanPostRequestBody, requestConfiguration?: WindowsDefenderScanRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWindowsDefenderScanPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a windowsDefenderScanRequestBuilder
     */
    public withUrl(rawUrl: string) : WindowsDefenderScanRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new WindowsDefenderScanRequestBuilder(rawUrl, this.requestAdapter);
    };
}
