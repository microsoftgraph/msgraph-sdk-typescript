import {createUnmuteParticipantOperationFromDiscriminatorValue} from '../../../../models/createUnmuteParticipantOperationFromDiscriminatorValue';
import {deserializeIntoUnmuteParticipantOperation} from '../../../../models/deserializeIntoUnmuteParticipantOperation';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeUnmuteParticipantOperation} from '../../../../models/serializeUnmuteParticipantOperation';
import type {UnmuteParticipantOperation} from '../../../../models/unmuteParticipantOperation';
import {deserializeIntoUnmutePostRequestBody} from './deserializeIntoUnmutePostRequestBody';
import {serializeUnmutePostRequestBody} from './serializeUnmutePostRequestBody';
import type {UnmutePostRequestBody} from './unmutePostRequestBody';
import {UnmuteRequestBuilderPostRequestConfiguration} from './unmuteRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the unmute method.
 */
export class UnmuteRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UnmuteRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/calls/{call%2Did}/unmute");
    };
    /**
     * Allow the application to unmute itself. This is a server unmute, meaning that the server will start sending audio packets for this participant to other participants again. For more information about how to handle unmute operations, see unmuteParticipantOperation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnmuteParticipantOperation
     * @see {@link https://learn.microsoft.com/graph/api/call-unmute?view=graph-rest-1.0|Find more info here}
     */
    public post(body: UnmutePostRequestBody, requestConfiguration?: UnmuteRequestBuilderPostRequestConfiguration | undefined) : Promise<UnmuteParticipantOperation | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UnmuteParticipantOperation>(requestInfo, createUnmuteParticipantOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Allow the application to unmute itself. This is a server unmute, meaning that the server will start sending audio packets for this participant to other participants again. For more information about how to handle unmute operations, see unmuteParticipantOperation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnmutePostRequestBody, requestConfiguration?: UnmuteRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUnmutePostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a unmuteRequestBuilder
     */
    public withUrl(rawUrl: string) : UnmuteRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UnmuteRequestBuilder(rawUrl, this.requestAdapter);
    };
}
