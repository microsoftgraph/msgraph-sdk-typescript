import {createStopHoldMusicOperationFromDiscriminatorValue} from '../../../../../../models/createStopHoldMusicOperationFromDiscriminatorValue';
import {deserializeIntoStopHoldMusicOperation} from '../../../../../../models/deserializeIntoStopHoldMusicOperation';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeStopHoldMusicOperation} from '../../../../../../models/serializeStopHoldMusicOperation';
import type {StopHoldMusicOperation} from '../../../../../../models/stopHoldMusicOperation';
import {deserializeIntoStopHoldMusicPostRequestBody} from './deserializeIntoStopHoldMusicPostRequestBody';
import {serializeStopHoldMusicPostRequestBody} from './serializeStopHoldMusicPostRequestBody';
import type {StopHoldMusicPostRequestBody} from './stopHoldMusicPostRequestBody';
import {StopHoldMusicRequestBuilderPostRequestConfiguration} from './stopHoldMusicRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the stopHoldMusic method.
 */
export class StopHoldMusicRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new StopHoldMusicRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/calls/{call%2Did}/participants/{participant%2Did}/stopHoldMusic");
    };
    /**
     * Reincorporate a participant previously put on hold to the call.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of StopHoldMusicOperation
     * @see {@link https://learn.microsoft.com/graph/api/participant-stopholdmusic?view=graph-rest-1.0|Find more info here}
     */
    public post(body: StopHoldMusicPostRequestBody, requestConfiguration?: StopHoldMusicRequestBuilderPostRequestConfiguration | undefined) : Promise<StopHoldMusicOperation | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<StopHoldMusicOperation>(requestInfo, createStopHoldMusicOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Reincorporate a participant previously put on hold to the call.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: StopHoldMusicPostRequestBody, requestConfiguration?: StopHoldMusicRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeStopHoldMusicPostRequestBody);
        return requestInfo;
    };
}
