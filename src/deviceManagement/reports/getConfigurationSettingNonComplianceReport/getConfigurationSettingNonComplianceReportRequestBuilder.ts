import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {deserializeIntoGetConfigurationSettingNonComplianceReportPostRequestBody} from './deserializeIntoGetConfigurationSettingNonComplianceReportPostRequestBody';
import {GetConfigurationSettingNonComplianceReportPostRequestBody} from './getConfigurationSettingNonComplianceReportPostRequestBody';
import {GetConfigurationSettingNonComplianceReportRequestBuilderPostRequestConfiguration} from './getConfigurationSettingNonComplianceReportRequestBuilderPostRequestConfiguration';
import {serializeGetConfigurationSettingNonComplianceReportPostRequestBody} from './serializeGetConfigurationSettingNonComplianceReportPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getConfigurationSettingNonComplianceReport method.
 */
export class GetConfigurationSettingNonComplianceReportRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetConfigurationSettingNonComplianceReportRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/reports/getConfigurationSettingNonComplianceReport");
    };
    /**
     * Invoke action getConfigurationSettingNonComplianceReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ArrayBuffer
     */
    public post(body: GetConfigurationSettingNonComplianceReportPostRequestBody | undefined, requestConfiguration?: GetConfigurationSettingNonComplianceReportRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ArrayBuffer | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendPrimitiveAsync<ArrayBuffer>(requestInfo, "ArrayBuffer", responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Invoke action getConfigurationSettingNonComplianceReport
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GetConfigurationSettingNonComplianceReportPostRequestBody | undefined, requestConfiguration?: GetConfigurationSettingNonComplianceReportRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeGetConfigurationSettingNonComplianceReportPostRequestBody);
        return requestInfo;
    };
}
