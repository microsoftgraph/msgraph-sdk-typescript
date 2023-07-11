import {createMessageFromDiscriminatorValue} from '../../../../../../../models/createMessageFromDiscriminatorValue';
import {deserializeIntoMessage} from '../../../../../../../models/deserializeIntoMessage';
import {Message} from '../../../../../../../models/message';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {serializeMessage} from '../../../../../../../models/serializeMessage';
import {CopyPostRequestBody} from './copyPostRequestBody';
import {CopyRequestBuilderPostRequestConfiguration} from './copyRequestBuilderPostRequestConfiguration';
import {deserializeIntoCopyPostRequestBody} from './deserializeIntoCopyPostRequestBody';
import {serializeCopyPostRequestBody} from './serializeCopyPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the copy method.
 */
export class CopyRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CopyRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/messages/{message%2Did}/copy");
    };
    /**
     * Copy a message to a folder within the user's mailbox.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Message
     * @see {@link https://docs.microsoft.com/graph/api/message-copy?view=graph-rest-1.0|Find more info here}
     */
    public post(body: CopyPostRequestBody | undefined, requestConfiguration?: CopyRequestBuilderPostRequestConfiguration | undefined) : Promise<Message | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Message>(requestInfo, createMessageFromDiscriminatorValue, errorMapping);
    };
    /**
     * Copy a message to a folder within the user's mailbox.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CopyPostRequestBody | undefined, requestConfiguration?: CopyRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCopyPostRequestBody);
        return requestInfo;
    };
}
