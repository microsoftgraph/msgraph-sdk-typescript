import {createStartHoldMusicOperationFromDiscriminatorValue} from '../../../../../../models/createStartHoldMusicOperationFromDiscriminatorValue';
import {deserializeIntoStartHoldMusicOperation} from '../../../../../../models/deserializeIntoStartHoldMusicOperation';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeStartHoldMusicOperation} from '../../../../../../models/serializeStartHoldMusicOperation';
import {StartHoldMusicOperation} from '../../../../../../models/startHoldMusicOperation';
import {deserializeIntoStartHoldMusicPostRequestBody} from './deserializeIntoStartHoldMusicPostRequestBody';
import {serializeStartHoldMusicPostRequestBody} from './serializeStartHoldMusicPostRequestBody';
import {StartHoldMusicPostRequestBody} from './startHoldMusicPostRequestBody';
import {StartHoldMusicRequestBuilderPostRequestConfiguration} from './startHoldMusicRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the startHoldMusic method.
 */
export class StartHoldMusicRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new StartHoldMusicRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/calls/{call%2Did}/participants/{participant%2Did}/startHoldMusic");
    };
    /**
     * Put a participant on hold and play music in the background.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of StartHoldMusicOperation
     * @see {@link https://docs.microsoft.com/graph/api/participant-startholdmusic?view=graph-rest-1.0|Find more info here}
     */
    public post(body: StartHoldMusicPostRequestBody | undefined, requestConfiguration?: StartHoldMusicRequestBuilderPostRequestConfiguration | undefined) : Promise<StartHoldMusicOperation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<StartHoldMusicOperation>(requestInfo, createStartHoldMusicOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Put a participant on hold and play music in the background.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: StartHoldMusicPostRequestBody | undefined, requestConfiguration?: StartHoldMusicRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeStartHoldMusicPostRequestBody);
        return requestInfo;
    };
}
