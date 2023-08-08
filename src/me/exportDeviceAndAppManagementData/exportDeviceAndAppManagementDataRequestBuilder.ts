import {DeviceAndAppManagementData} from '../../models/';
import {createDeviceAndAppManagementDataFromDiscriminatorValue} from '../../models/createDeviceAndAppManagementDataFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {ExportDeviceAndAppManagementDataRequestBuilderGetRequestConfiguration} from './exportDeviceAndAppManagementDataRequestBuilderGetRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the exportDeviceAndAppManagementData method.
 */
export class ExportDeviceAndAppManagementDataRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ExportDeviceAndAppManagementDataRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/exportDeviceAndAppManagementData()");
    };
    /**
     * Invoke function exportDeviceAndAppManagementData
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceAndAppManagementData
     */
    public get(requestConfiguration?: ExportDeviceAndAppManagementDataRequestBuilderGetRequestConfiguration | undefined) : Promise<DeviceAndAppManagementData | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DeviceAndAppManagementData>(requestInfo, createDeviceAndAppManagementDataFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function exportDeviceAndAppManagementData
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ExportDeviceAndAppManagementDataRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
