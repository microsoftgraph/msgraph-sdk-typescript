import {CancelMediaProcessingOperation} from '../../../../models/cancelMediaProcessingOperation';
import {createCancelMediaProcessingOperationFromDiscriminatorValue} from '../../../../models/createCancelMediaProcessingOperationFromDiscriminatorValue';
import {deserializeIntoCancelMediaProcessingOperation} from '../../../../models/deserializeIntoCancelMediaProcessingOperation';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeCancelMediaProcessingOperation} from '../../../../models/serializeCancelMediaProcessingOperation';
import {CancelMediaProcessingPostRequestBody} from './cancelMediaProcessingPostRequestBody';
import {CancelMediaProcessingRequestBuilderPostRequestConfiguration} from './cancelMediaProcessingRequestBuilderPostRequestConfiguration';
import {deserializeIntoCancelMediaProcessingPostRequestBody} from './deserializeIntoCancelMediaProcessingPostRequestBody';
import {serializeCancelMediaProcessingPostRequestBody} from './serializeCancelMediaProcessingPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

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
     * Invoke action cancelMediaProcessing
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CancelMediaProcessingOperation
     */
    public post(body: CancelMediaProcessingPostRequestBody | undefined, requestConfiguration?: CancelMediaProcessingRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CancelMediaProcessingOperation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<CancelMediaProcessingOperation>(requestInfo, createCancelMediaProcessingOperationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Invoke action cancelMediaProcessing
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
