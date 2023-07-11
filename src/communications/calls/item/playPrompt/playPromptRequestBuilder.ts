import {createPlayPromptOperationFromDiscriminatorValue} from '../../../../models/createPlayPromptOperationFromDiscriminatorValue';
import {deserializeIntoPlayPromptOperation} from '../../../../models/deserializeIntoPlayPromptOperation';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {PlayPromptOperation} from '../../../../models/playPromptOperation';
import {serializePlayPromptOperation} from '../../../../models/serializePlayPromptOperation';
import {deserializeIntoPlayPromptPostRequestBody} from './deserializeIntoPlayPromptPostRequestBody';
import {PlayPromptPostRequestBody} from './playPromptPostRequestBody';
import {PlayPromptRequestBuilderPostRequestConfiguration} from './playPromptRequestBuilderPostRequestConfiguration';
import {serializePlayPromptPostRequestBody} from './serializePlayPromptPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the playPrompt method.
 */
export class PlayPromptRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new PlayPromptRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/calls/{call%2Did}/playPrompt");
    };
    /**
     * Play a prompt in the call. For more information about how to handle operations, see commsOperation
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PlayPromptOperation
     * @see {@link https://docs.microsoft.com/graph/api/call-playprompt?view=graph-rest-1.0|Find more info here}
     */
    public post(body: PlayPromptPostRequestBody | undefined, requestConfiguration?: PlayPromptRequestBuilderPostRequestConfiguration | undefined) : Promise<PlayPromptOperation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PlayPromptOperation>(requestInfo, createPlayPromptOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Play a prompt in the call. For more information about how to handle operations, see commsOperation
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PlayPromptPostRequestBody | undefined, requestConfiguration?: PlayPromptRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializePlayPromptPostRequestBody);
        return requestInfo;
    };
}
