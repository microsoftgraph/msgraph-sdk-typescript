import {DeviceAndAppManagementData} from '../../models/';
import {createDeviceAndAppManagementDataFromDiscriminatorValue} from '../../models/createDeviceAndAppManagementDataFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {ExportDeviceAndAppManagementDataWithSkipWithTopRequestBuilderGetRequestConfiguration} from './exportDeviceAndAppManagementDataWithSkipWithTopRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the exportDeviceAndAppManagementData method.
 */
export class ExportDeviceAndAppManagementDataWithSkipWithTopRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ExportDeviceAndAppManagementDataWithSkipWithTopRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param skip Usage: skip={skip}
     * @param top Usage: top={top}
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, skip?: number | undefined, top?: number | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/exportDeviceAndAppManagementData(skip={skip},top={top})");
        this.pathParameters["skip"] = skip
        this.pathParameters["top"] = top
    };
    /**
     * Invoke function exportDeviceAndAppManagementData
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeviceAndAppManagementData
     */
    public get(requestConfiguration?: ExportDeviceAndAppManagementDataWithSkipWithTopRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeviceAndAppManagementData | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<DeviceAndAppManagementData>(requestInfo, createDeviceAndAppManagementDataFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Invoke function exportDeviceAndAppManagementData
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ExportDeviceAndAppManagementDataWithSkipWithTopRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
}
