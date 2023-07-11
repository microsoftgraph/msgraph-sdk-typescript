import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {deserializeIntoGetComplianceSettingNonComplianceReportPostRequestBody} from './deserializeIntoGetComplianceSettingNonComplianceReportPostRequestBody';
import {GetComplianceSettingNonComplianceReportPostRequestBody} from './getComplianceSettingNonComplianceReportPostRequestBody';
import {GetComplianceSettingNonComplianceReportRequestBuilderPostRequestConfiguration} from './getComplianceSettingNonComplianceReportRequestBuilderPostRequestConfiguration';
import {serializeGetComplianceSettingNonComplianceReportPostRequestBody} from './serializeGetComplianceSettingNonComplianceReportPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getComplianceSettingNonComplianceReport method.
 */
export class GetComplianceSettingNonComplianceReportRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetComplianceSettingNonComplianceReportRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/reports/getComplianceSettingNonComplianceReport");
    };
    /**
     * Invoke action getComplianceSettingNonComplianceReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
    public post(body: GetComplianceSettingNonComplianceReportPostRequestBody | undefined, requestConfiguration?: GetComplianceSettingNonComplianceReportRequestBuilderPostRequestConfiguration | undefined) : Promise<ArrayBuffer | undefined> {
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
     * Invoke action getComplianceSettingNonComplianceReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GetComplianceSettingNonComplianceReportPostRequestBody | undefined, requestConfiguration?: GetComplianceSettingNonComplianceReportRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeGetComplianceSettingNonComplianceReportPostRequestBody);
        return requestInfo;
    };
}
