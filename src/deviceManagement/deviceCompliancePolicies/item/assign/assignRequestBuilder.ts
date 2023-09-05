import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { type AssignPostRequestBody } from './assignPostRequestBody';
import { type AssignRequestBuilderPostRequestConfiguration } from './assignRequestBuilderPostRequestConfiguration';
import { type AssignResponse } from './assignResponse';
import { createAssignResponseFromDiscriminatorValue } from './createAssignResponseFromDiscriminatorValue';
import { deserializeIntoAssignPostRequestBody } from './deserializeIntoAssignPostRequestBody';
import { deserializeIntoAssignResponse } from './deserializeIntoAssignResponse';
import { serializeAssignPostRequestBody } from './serializeAssignPostRequestBody';
import { serializeAssignResponse } from './serializeAssignResponse';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the assign method.
 */
export class AssignRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AssignRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy%2Did}/assign");
    };
    /**
     * Not yet documented
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AssignResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-devicecompliancepolicy-assign?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AssignPostRequestBody, requestConfiguration?: AssignRequestBuilderPostRequestConfiguration | undefined) : Promise<AssignResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AssignResponse>(requestInfo, createAssignResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Not yet documented
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AssignPostRequestBody, requestConfiguration?: AssignRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAssignPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a assignRequestBuilder
     */
    public withUrl(rawUrl: string) : AssignRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AssignRequestBuilder(rawUrl, this.requestAdapter);
    };
}
