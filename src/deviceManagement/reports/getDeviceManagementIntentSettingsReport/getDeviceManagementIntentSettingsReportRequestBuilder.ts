import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {deserializeIntoGetDeviceManagementIntentSettingsReportPostRequestBody} from './deserializeIntoGetDeviceManagementIntentSettingsReportPostRequestBody';
import type {GetDeviceManagementIntentSettingsReportPostRequestBody} from './getDeviceManagementIntentSettingsReportPostRequestBody';
import {GetDeviceManagementIntentSettingsReportRequestBuilderPostRequestConfiguration} from './getDeviceManagementIntentSettingsReportRequestBuilderPostRequestConfiguration';
import {serializeGetDeviceManagementIntentSettingsReportPostRequestBody} from './serializeGetDeviceManagementIntentSettingsReportPostRequestBody';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getDeviceManagementIntentSettingsReport method.
 */
export class GetDeviceManagementIntentSettingsReportRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetDeviceManagementIntentSettingsReportRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/reports/getDeviceManagementIntentSettingsReport");
    };
    /**
     * Not yet documented
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     * @see {@link https://learn.microsoft.com/graph/api/intune-reporting-devicemanagementreports-getdevicemanagementintentsettingsreport?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GetDeviceManagementIntentSettingsReportPostRequestBody, requestConfiguration?: GetDeviceManagementIntentSettingsReportRequestBuilderPostRequestConfiguration | undefined) : Promise<ArrayBuffer | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendPrimitiveAsync<ArrayBuffer>(requestInfo, "ArrayBuffer", errorMapping);
    };
    /**
     * Not yet documented
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GetDeviceManagementIntentSettingsReportPostRequestBody, requestConfiguration?: GetDeviceManagementIntentSettingsReportRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeGetDeviceManagementIntentSettingsReportPostRequestBody);
        return requestInfo;
    };
}
