import {createRecordOperationFromDiscriminatorValue} from '../../../../models/createRecordOperationFromDiscriminatorValue';
import {deserializeIntoRecordOperation} from '../../../../models/deserializeIntoRecordOperation';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {RecordOperation} from '../../../../models/recordOperation';
import {serializeRecordOperation} from '../../../../models/serializeRecordOperation';
import {deserializeIntoRecordResponsePostRequestBody} from './deserializeIntoRecordResponsePostRequestBody';
import {RecordResponsePostRequestBody} from './recordResponsePostRequestBody';
import {RecordResponseRequestBuilderPostRequestConfiguration} from './recordResponseRequestBuilderPostRequestConfiguration';
import {serializeRecordResponsePostRequestBody} from './serializeRecordResponsePostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the recordResponse method.
 */
export class RecordResponseRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new RecordResponseRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/calls/{call%2Did}/recordResponse");
    };
    /**
     * Invoke action recordResponse
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of RecordOperation
     */
    public post(body: RecordResponsePostRequestBody | undefined, requestConfiguration?: RecordResponseRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<RecordOperation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<RecordOperation>(requestInfo, createRecordOperationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Invoke action recordResponse
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: RecordResponsePostRequestBody | undefined, requestConfiguration?: RecordResponseRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeRecordResponsePostRequestBody);
        return requestInfo;
    };
}
