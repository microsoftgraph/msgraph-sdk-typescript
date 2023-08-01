import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {deserializeIntoGetDevicesWithoutCompliancePolicyReportPostRequestBody} from './deserializeIntoGetDevicesWithoutCompliancePolicyReportPostRequestBody';
import type {GetDevicesWithoutCompliancePolicyReportPostRequestBody} from './getDevicesWithoutCompliancePolicyReportPostRequestBody';
import {GetDevicesWithoutCompliancePolicyReportRequestBuilderPostRequestConfiguration} from './getDevicesWithoutCompliancePolicyReportRequestBuilderPostRequestConfiguration';
import {serializeGetDevicesWithoutCompliancePolicyReportPostRequestBody} from './serializeGetDevicesWithoutCompliancePolicyReportPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getDevicesWithoutCompliancePolicyReport method.
 */
export class GetDevicesWithoutCompliancePolicyReportRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetDevicesWithoutCompliancePolicyReportRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/reports/getDevicesWithoutCompliancePolicyReport");
    };
    /**
     * Not yet documented
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     * @see {@link https://learn.microsoft.com/graph/api/intune-reporting-devicemanagementreports-getdeviceswithoutcompliancepolicyreport?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GetDevicesWithoutCompliancePolicyReportPostRequestBody | undefined, requestConfiguration?: GetDevicesWithoutCompliancePolicyReportRequestBuilderPostRequestConfiguration | undefined) : Promise<ArrayBuffer | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
    public toPostRequestInformation(body: GetDevicesWithoutCompliancePolicyReportPostRequestBody | undefined, requestConfiguration?: GetDevicesWithoutCompliancePolicyReportRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeGetDevicesWithoutCompliancePolicyReportPostRequestBody);
        return requestInfo;
    };
}
