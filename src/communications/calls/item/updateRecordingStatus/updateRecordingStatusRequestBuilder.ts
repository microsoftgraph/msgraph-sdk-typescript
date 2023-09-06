import { createUpdateRecordingStatusOperationFromDiscriminatorValue } from '../../../../models/createUpdateRecordingStatusOperationFromDiscriminatorValue';
import { deserializeIntoUpdateRecordingStatusOperation } from '../../../../models/deserializeIntoUpdateRecordingStatusOperation';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { serializeUpdateRecordingStatusOperation } from '../../../../models/serializeUpdateRecordingStatusOperation';
import { type UpdateRecordingStatusOperation } from '../../../../models/updateRecordingStatusOperation';
import { deserializeIntoUpdateRecordingStatusPostRequestBody } from './deserializeIntoUpdateRecordingStatusPostRequestBody';
import { serializeUpdateRecordingStatusPostRequestBody } from './serializeUpdateRecordingStatusPostRequestBody';
import { type UpdateRecordingStatusPostRequestBody } from './updateRecordingStatusPostRequestBody';
import { type UpdateRecordingStatusRequestBuilderPostRequestConfiguration } from './updateRecordingStatusRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the updateRecordingStatus method.
 */
export class UpdateRecordingStatusRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UpdateRecordingStatusRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/calls/{call%2Did}/updateRecordingStatus");
    };
    /**
     * Update the application's recording status associated with a call. This requires the use of the Teams policy-based recording solution.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UpdateRecordingStatusOperation
     * @see {@link https://learn.microsoft.com/graph/api/call-updaterecordingstatus?view=graph-rest-1.0|Find more info here}
     */
    public post(body: UpdateRecordingStatusPostRequestBody, requestConfiguration?: UpdateRecordingStatusRequestBuilderPostRequestConfiguration | undefined) : Promise<UpdateRecordingStatusOperation | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UpdateRecordingStatusOperation>(requestInfo, createUpdateRecordingStatusOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the application's recording status associated with a call. This requires the use of the Teams policy-based recording solution.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UpdateRecordingStatusPostRequestBody, requestConfiguration?: UpdateRecordingStatusRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUpdateRecordingStatusPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a updateRecordingStatusRequestBuilder
     */
    public withUrl(rawUrl: string) : UpdateRecordingStatusRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UpdateRecordingStatusRequestBuilder(rawUrl, this.requestAdapter);
    };
}
