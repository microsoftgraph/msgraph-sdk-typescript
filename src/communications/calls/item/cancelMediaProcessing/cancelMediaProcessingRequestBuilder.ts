import {CancelMediaProcessingOperation} from '../../../../models/';
import {createCancelMediaProcessingOperationFromDiscriminatorValue} from '../../../../models/createCancelMediaProcessingOperationFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CancelMediaProcessingRequestBuilderPostRequestConfiguration} from './cancelMediaProcessingRequestBuilderPostRequestConfiguration';
import {CancelMediaProcessingPostRequestBody} from './index';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the cancelMediaProcessing method. */
export class CancelMediaProcessingRequestBuilder {
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new CancelMediaProcessingRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/communications/calls/{call%2Did}/microsoft.graph.cancelMediaProcessing";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Cancels processing for any in-progress media operations. Media operations refer to the IVR operations playPrompt and recordResponse, which are by default queued to process in order. The **cancelMediaProcessing** method cancels any operation that is in-process as well as operations that are queued. For example, this method can be used to clean up the IVR operation queue for a new media operation. However, it will not cancel a **subscribeToTone** operation because it operates independent of any operation queue.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: CancelMediaProcessingPostRequestBody | undefined, requestConfiguration?: CancelMediaProcessingRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Cancels processing for any in-progress media operations. Media operations refer to the IVR operations playPrompt and recordResponse, which are by default queued to process in order. The **cancelMediaProcessing** method cancels any operation that is in-process as well as operations that are queued. For example, this method can be used to clean up the IVR operation queue for a new media operation. However, it will not cancel a **subscribeToTone** operation because it operates independent of any operation queue.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CancelMediaProcessingOperation
     */
    public post(body: CancelMediaProcessingPostRequestBody | undefined, requestConfiguration?: CancelMediaProcessingRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CancelMediaProcessingOperation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<CancelMediaProcessingOperation>(requestInfo, createCancelMediaProcessingOperationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
}
