import {createSubscribeToToneOperationFromDiscriminatorValue} from '../../../../models/createSubscribeToToneOperationFromDiscriminatorValue';
import {deserializeIntoSubscribeToToneOperation} from '../../../../models/deserializeIntoSubscribeToToneOperation';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeSubscribeToToneOperation} from '../../../../models/serializeSubscribeToToneOperation';
import type {SubscribeToToneOperation} from '../../../../models/subscribeToToneOperation';
import {deserializeIntoSubscribeToTonePostRequestBody} from './deserializeIntoSubscribeToTonePostRequestBody';
import {serializeSubscribeToTonePostRequestBody} from './serializeSubscribeToTonePostRequestBody';
import type {SubscribeToTonePostRequestBody} from './subscribeToTonePostRequestBody';
import {SubscribeToToneRequestBuilderPostRequestConfiguration} from './subscribeToToneRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the subscribeToTone method.
 */
export class SubscribeToToneRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SubscribeToToneRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/calls/{call%2Did}/subscribeToTone");
    };
    /**
     * Subscribe to DTMF (dual-tone multi-frequency signaling). This allows you to be notified when the user presses keys on a 'dialpad'.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SubscribeToToneOperation
     * @see {@link https://learn.microsoft.com/graph/api/call-subscribetotone?view=graph-rest-1.0|Find more info here}
     */
    public post(body: SubscribeToTonePostRequestBody, requestConfiguration?: SubscribeToToneRequestBuilderPostRequestConfiguration | undefined) : Promise<SubscribeToToneOperation | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SubscribeToToneOperation>(requestInfo, createSubscribeToToneOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Subscribe to DTMF (dual-tone multi-frequency signaling). This allows you to be notified when the user presses keys on a 'dialpad'.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SubscribeToTonePostRequestBody, requestConfiguration?: SubscribeToToneRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSubscribeToTonePostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a subscribeToToneRequestBuilder
     */
    public withUrl(rawUrl: string) : SubscribeToToneRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SubscribeToToneRequestBuilder(rawUrl, this.requestAdapter);
    };
}
