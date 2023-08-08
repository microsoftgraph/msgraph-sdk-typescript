import {createMailFolderFromDiscriminatorValue} from '../../../../../../models/createMailFolderFromDiscriminatorValue';
import {deserializeIntoMailFolder} from '../../../../../../models/deserializeIntoMailFolder';
import type {MailFolder} from '../../../../../../models/mailFolder';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeMailFolder} from '../../../../../../models/serializeMailFolder';
import {deserializeIntoMovePostRequestBody} from './deserializeIntoMovePostRequestBody';
import type {MovePostRequestBody} from './movePostRequestBody';
import {MoveRequestBuilderPostRequestConfiguration} from './moveRequestBuilderPostRequestConfiguration';
import {serializeMovePostRequestBody} from './serializeMovePostRequestBody';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the move method.
 */
export class MoveRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new MoveRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/mailFolders/{mailFolder%2Did}/childFolders/{mailFolder%2Did1}/move");
    };
    /**
     * Move a mailfolder and its contents to another mailfolder.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MailFolder
     * @see {@link https://learn.microsoft.com/graph/api/mailfolder-move?view=graph-rest-1.0|Find more info here}
     */
    public post(body: MovePostRequestBody, requestConfiguration?: MoveRequestBuilderPostRequestConfiguration | undefined) : Promise<MailFolder | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MailFolder>(requestInfo, createMailFolderFromDiscriminatorValue, errorMapping);
    };
    /**
     * Move a mailfolder and its contents to another mailfolder.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MovePostRequestBody, requestConfiguration?: MoveRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeMovePostRequestBody);
        return requestInfo;
    };
}
