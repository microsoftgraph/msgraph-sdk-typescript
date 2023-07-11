import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {deserializeIntoGetPolicyNonComplianceReportPostRequestBody} from './deserializeIntoGetPolicyNonComplianceReportPostRequestBody';
import {GetPolicyNonComplianceReportPostRequestBody} from './getPolicyNonComplianceReportPostRequestBody';
import {GetPolicyNonComplianceReportRequestBuilderPostRequestConfiguration} from './getPolicyNonComplianceReportRequestBuilderPostRequestConfiguration';
import {serializeGetPolicyNonComplianceReportPostRequestBody} from './serializeGetPolicyNonComplianceReportPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getPolicyNonComplianceReport method.
 */
export class GetPolicyNonComplianceReportRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetPolicyNonComplianceReportRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/reports/getPolicyNonComplianceReport");
    };
    /**
     * Invoke action getPolicyNonComplianceReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
    public post(body: GetPolicyNonComplianceReportPostRequestBody | undefined, requestConfiguration?: GetPolicyNonComplianceReportRequestBuilderPostRequestConfiguration | undefined) : Promise<ArrayBuffer | undefined> {
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
     * Invoke action getPolicyNonComplianceReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GetPolicyNonComplianceReportPostRequestBody | undefined, requestConfiguration?: GetPolicyNonComplianceReportRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeGetPolicyNonComplianceReportPostRequestBody);
        return requestInfo;
    };
}
