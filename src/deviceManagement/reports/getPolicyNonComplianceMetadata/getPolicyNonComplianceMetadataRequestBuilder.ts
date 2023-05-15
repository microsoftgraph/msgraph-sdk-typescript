import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {deserializeIntoGetPolicyNonComplianceMetadataPostRequestBody} from './deserializeIntoGetPolicyNonComplianceMetadataPostRequestBody';
import {GetPolicyNonComplianceMetadataPostRequestBody} from './getPolicyNonComplianceMetadataPostRequestBody';
import {GetPolicyNonComplianceMetadataRequestBuilderPostRequestConfiguration} from './getPolicyNonComplianceMetadataRequestBuilderPostRequestConfiguration';
import {serializeGetPolicyNonComplianceMetadataPostRequestBody} from './serializeGetPolicyNonComplianceMetadataPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the getPolicyNonComplianceMetadata method.
 */
export class GetPolicyNonComplianceMetadataRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new GetPolicyNonComplianceMetadataRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/reports/getPolicyNonComplianceMetadata");
    };
    /**
     * Invoke action getPolicyNonComplianceMetadata
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ArrayBuffer
     */
    public post(body: GetPolicyNonComplianceMetadataPostRequestBody | undefined, requestConfiguration?: GetPolicyNonComplianceMetadataRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ArrayBuffer | undefined> {
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
     * Invoke action getPolicyNonComplianceMetadata
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: GetPolicyNonComplianceMetadataPostRequestBody | undefined, requestConfiguration?: GetPolicyNonComplianceMetadataRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeGetPolicyNonComplianceMetadataPostRequestBody);
        return requestInfo;
    };
}
