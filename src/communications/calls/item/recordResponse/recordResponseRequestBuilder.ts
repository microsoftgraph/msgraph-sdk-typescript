import {createRecordOperationFromDiscriminatorValue} from '../../../../models/createRecordOperationFromDiscriminatorValue';
import {deserializeIntoRecordOperation} from '../../../../models/deserializeIntoRecordOperation';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import type {RecordOperation} from '../../../../models/recordOperation';
import {serializeRecordOperation} from '../../../../models/serializeRecordOperation';
import {deserializeIntoRecordResponsePostRequestBody} from './deserializeIntoRecordResponsePostRequestBody';
import type {RecordResponsePostRequestBody} from './recordResponsePostRequestBody';
import {RecordResponseRequestBuilderPostRequestConfiguration} from './recordResponseRequestBuilderPostRequestConfiguration';
import {serializeRecordResponsePostRequestBody} from './serializeRecordResponsePostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

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
     * Records a short audio response from the caller.A bot can utilize this to capture a voice response from a caller after they are prompted for a response. For further information on how to handle operations, please review commsOperation This action is not intended to record the entire call. The maximum length of recording is 2 minutes. The recording is not saved permanently by the Cloud Communications Platform and is discarded shortly after the call ends. The bot must download the recording promptly after the recording operation finishes by using the recordingLocation value that's given in the completed notification.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RecordOperation
     * @see {@link https://learn.microsoft.com/graph/api/call-record?view=graph-rest-1.0|Find more info here}
     */
    public post(body: RecordResponsePostRequestBody | undefined, requestConfiguration?: RecordResponseRequestBuilderPostRequestConfiguration | undefined) : Promise<RecordOperation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RecordOperation>(requestInfo, createRecordOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Records a short audio response from the caller.A bot can utilize this to capture a voice response from a caller after they are prompted for a response. For further information on how to handle operations, please review commsOperation This action is not intended to record the entire call. The maximum length of recording is 2 minutes. The recording is not saved permanently by the Cloud Communications Platform and is discarded shortly after the call ends. The bot must download the recording promptly after the recording operation finishes by using the recordingLocation value that's given in the completed notification.
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
