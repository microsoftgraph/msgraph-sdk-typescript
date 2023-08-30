import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {deserializeIntoGetPolicyNonComplianceSummaryReportPostRequestBody} from './deserializeIntoGetPolicyNonComplianceSummaryReportPostRequestBody';
import type {GetPolicyNonComplianceSummaryReportPostRequestBody} from './getPolicyNonComplianceSummaryReportPostRequestBody';
import {GetPolicyNonComplianceSummaryReportRequestBuilderPostRequestConfiguration} from './getPolicyNonComplianceSummaryReportRequestBuilderPostRequestConfiguration';
import {serializeGetPolicyNonComplianceSummaryReportPostRequestBody} from './serializeGetPolicyNonComplianceSummaryReportPostRequestBody';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getPolicyNonComplianceSummaryReport method.
 */
export class GetPolicyNonComplianceSummaryReportRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetPolicyNonComplianceSummaryReportRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/reports/getPolicyNonComplianceSummaryReport");
    };
    /**
     * Not yet documented
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     * @see {@link https://learn.microsoft.com/graph/api/intune-reporting-devicemanagementreports-getpolicynoncompliancesummaryreport?view=graph-rest-1.0|Find more info here}
     */
    public post(body: GetPolicyNonComplianceSummaryReportPostRequestBody, requestConfiguration?: GetPolicyNonComplianceSummaryReportRequestBuilderPostRequestConfiguration | undefined) : Promise<ArrayBuffer | undefined> {
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
    public toPostRequestInformation(body: GetPolicyNonComplianceSummaryReportPostRequestBody, requestConfiguration?: GetPolicyNonComplianceSummaryReportRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeGetPolicyNonComplianceSummaryReportPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a getPolicyNonComplianceSummaryReportRequestBuilder
     */
    public withUrl(rawUrl: string) : GetPolicyNonComplianceSummaryReportRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new GetPolicyNonComplianceSummaryReportRequestBuilder(rawUrl, this.requestAdapter);
    };
}
