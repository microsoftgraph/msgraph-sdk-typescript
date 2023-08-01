import type {CancelMediaProcessingOperation} from '../../../../models/cancelMediaProcessingOperation';
import {createCancelMediaProcessingOperationFromDiscriminatorValue} from '../../../../models/createCancelMediaProcessingOperationFromDiscriminatorValue';
import {deserializeIntoCancelMediaProcessingOperation} from '../../../../models/deserializeIntoCancelMediaProcessingOperation';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeCancelMediaProcessingOperation} from '../../../../models/serializeCancelMediaProcessingOperation';
import type {CancelMediaProcessingPostRequestBody} from './cancelMediaProcessingPostRequestBody';
import {CancelMediaProcessingRequestBuilderPostRequestConfiguration} from './cancelMediaProcessingRequestBuilderPostRequestConfiguration';
import {deserializeIntoCancelMediaProcessingPostRequestBody} from './deserializeIntoCancelMediaProcessingPostRequestBody';
import {serializeCancelMediaProcessingPostRequestBody} from './serializeCancelMediaProcessingPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the cancelMediaProcessing method.
 */
export class CancelMediaProcessingRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CancelMediaProcessingRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/calls/{call%2Did}/cancelMediaProcessing");
    };
    /**
     * Cancels processing for any in-progress media operations. Media operations refer to the IVR operations playPrompt and recordResponse, which are by default queued to process in order. The cancelMediaProcessing method cancels any operation that is in-process as well as operations that are queued. For example, this method can be used to clean up the IVR operation queue for a new media operation. However, it will not cancel a subscribeToTone operation because it operates independent of any operation queue.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CancelMediaProcessingOperation
     * @see {@link https://learn.microsoft.com/graph/api/call-cancelmediaprocessing?view=graph-rest-1.0|Find more info here}
     */
    public post(body: CancelMediaProcessingPostRequestBody | undefined, requestConfiguration?: CancelMediaProcessingRequestBuilderPostRequestConfiguration | undefined) : Promise<CancelMediaProcessingOperation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CancelMediaProcessingOperation>(requestInfo, createCancelMediaProcessingOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Cancels processing for any in-progress media operations. Media operations refer to the IVR operations playPrompt and recordResponse, which are by default queued to process in order. The cancelMediaProcessing method cancels any operation that is in-process as well as operations that are queued. For example, this method can be used to clean up the IVR operation queue for a new media operation. However, it will not cancel a subscribeToTone operation because it operates independent of any operation queue.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CancelMediaProcessingPostRequestBody | undefined, requestConfiguration?: CancelMediaProcessingRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCancelMediaProcessingPostRequestBody);
        return requestInfo;
    };
}
