import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { createPlayPromptOperationFromDiscriminatorValue, deserializeIntoPlayPromptOperation, serializePlayPromptOperation, type PlayPromptOperation } from '../../../../models/playPromptOperation';
import { deserializeIntoPlayPromptPostRequestBody, serializePlayPromptPostRequestBody, type PlayPromptPostRequestBody } from './playPromptPostRequestBody';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface PlayPromptRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
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
     * Play a prompt in the call. For more information about how to handle operations, see commsOperation This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PlayPromptOperation
     * @see {@link https://learn.microsoft.com/graph/api/call-playprompt?view=graph-rest-1.0|Find more info here}
     */
    public post(body: PlayPromptPostRequestBody, requestConfiguration?: PlayPromptRequestBuilderPostRequestConfiguration | undefined) : Promise<PlayPromptOperation | undefined> {
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
     * Play a prompt in the call. For more information about how to handle operations, see commsOperation This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PlayPromptPostRequestBody, requestConfiguration?: PlayPromptRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePlayPromptPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a playPromptRequestBuilder
     */
    public withUrl(rawUrl: string) : PlayPromptRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PlayPromptRequestBuilder(rawUrl, this.requestAdapter);
    };
}
