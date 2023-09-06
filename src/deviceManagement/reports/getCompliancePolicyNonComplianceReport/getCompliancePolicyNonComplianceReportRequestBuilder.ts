import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { deserializeIntoGetCompliancePolicyNonComplianceReportPostRequestBody } from './deserializeIntoGetCompliancePolicyNonComplianceReportPostRequestBody';
import { type GetCompliancePolicyNonComplianceReportPostRequestBody } from './getCompliancePolicyNonComplianceReportPostRequestBody';
import { type GetCompliancePolicyNonComplianceReportRequestBuilderPostRequestConfiguration } from './getCompliancePolicyNonComplianceReportRequestBuilderPostRequestConfiguration';
import { serializeGetCompliancePolicyNonComplianceReportPostRequestBody } from './serializeGetCompliancePolicyNonComplianceReportPostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getCompliancePolicyNonComplianceReport method.
 */
export class GetCompliancePolicyNonComplianceReportRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetCompliancePolicyNonComplianceReportRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/reports/getCompliancePolicyNonComplianceReport");
    };
    /**
     * Not yet documented
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     * @see {@link https://learn.microsoft.com/graph/api/intune-reporting-devicemanagementreports-getcompliancepolicynoncompliancereport?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GetCompliancePolicyNonComplianceReportPostRequestBody, requestConfiguration?: GetCompliancePolicyNonComplianceReportRequestBuilderPostRequestConfiguration | undefined) : Promise<ArrayBuffer | undefined> {
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
    public toPostRequestInformation(body: GetCompliancePolicyNonComplianceReportPostRequestBody, requestConfiguration?: GetCompliancePolicyNonComplianceReportRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeGetCompliancePolicyNonComplianceReportPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a getCompliancePolicyNonComplianceReportRequestBuilder
     */
    public withUrl(rawUrl: string) : GetCompliancePolicyNonComplianceReportRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetCompliancePolicyNonComplianceReportRequestBuilder(rawUrl, this.requestAdapter);
    };
}
