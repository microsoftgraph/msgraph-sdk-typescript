import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {createInviteResponseFromDiscriminatorValue} from './createInviteResponseFromDiscriminatorValue';
import {deserializeIntoInvitePostRequestBody} from './deserializeIntoInvitePostRequestBody';
import {deserializeIntoInviteResponse} from './deserializeIntoInviteResponse';
import type {InvitePostRequestBody} from './invitePostRequestBody';
import {InviteRequestBuilderPostRequestConfiguration} from './inviteRequestBuilderPostRequestConfiguration';
import type {InviteResponse} from './inviteResponse';
import {serializeInvitePostRequestBody} from './serializeInvitePostRequestBody';
import {serializeInviteResponse} from './serializeInviteResponse';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the invite method.
 */
export class InviteRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new InviteRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/invite");
    };
    /**
     * Sends a sharing invitation for a driveItem.A sharing invitation provides permissions to the recipients and optionally sends them an email with a [sharing link][].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of InviteResponse
     * @see {@link https://learn.microsoft.com/graph/api/driveitem-invite?view=graph-rest-1.0|Find more info here}
     */
    public post(body: InvitePostRequestBody, requestConfiguration?: InviteRequestBuilderPostRequestConfiguration | undefined) : Promise<InviteResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<InviteResponse>(requestInfo, createInviteResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Sends a sharing invitation for a driveItem.A sharing invitation provides permissions to the recipients and optionally sends them an email with a [sharing link][].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: InvitePostRequestBody, requestConfiguration?: InviteRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeInvitePostRequestBody);
        return requestInfo;
    };
}
