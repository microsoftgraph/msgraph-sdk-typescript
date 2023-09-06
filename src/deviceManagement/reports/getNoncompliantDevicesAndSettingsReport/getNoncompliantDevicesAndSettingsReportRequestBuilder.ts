import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { deserializeIntoGetNoncompliantDevicesAndSettingsReportPostRequestBody } from './deserializeIntoGetNoncompliantDevicesAndSettingsReportPostRequestBody';
import { type GetNoncompliantDevicesAndSettingsReportPostRequestBody } from './getNoncompliantDevicesAndSettingsReportPostRequestBody';
import { type GetNoncompliantDevicesAndSettingsReportRequestBuilderPostRequestConfiguration } from './getNoncompliantDevicesAndSettingsReportRequestBuilderPostRequestConfiguration';
import { serializeGetNoncompliantDevicesAndSettingsReportPostRequestBody } from './serializeGetNoncompliantDevicesAndSettingsReportPostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getNoncompliantDevicesAndSettingsReport method.
 */
export class GetNoncompliantDevicesAndSettingsReportRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetNoncompliantDevicesAndSettingsReportRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/reports/getNoncompliantDevicesAndSettingsReport");
    };
    /**
     * Not yet documented
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     * @see {@link https://learn.microsoft.com/graph/api/intune-reporting-devicemanagementreports-getnoncompliantdevicesandsettingsreport?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GetNoncompliantDevicesAndSettingsReportPostRequestBody, requestConfiguration?: GetNoncompliantDevicesAndSettingsReportRequestBuilderPostRequestConfiguration | undefined) : Promise<ArrayBuffer | undefined> {
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
    public toPostRequestInformation(body: GetNoncompliantDevicesAndSettingsReportPostRequestBody, requestConfiguration?: GetNoncompliantDevicesAndSettingsReportRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeGetNoncompliantDevicesAndSettingsReportPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a getNoncompliantDevicesAndSettingsReportRequestBuilder
     */
    public withUrl(rawUrl: string) : GetNoncompliantDevicesAndSettingsReportRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetNoncompliantDevicesAndSettingsReportRequestBuilder(rawUrl, this.requestAdapter);
    };
}
