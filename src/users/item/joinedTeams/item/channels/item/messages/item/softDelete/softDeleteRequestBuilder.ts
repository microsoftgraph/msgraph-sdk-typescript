import {ODataError} from '../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../models/oDataErrors/serializeODataError';
import {SoftDeleteRequestBuilderPostRequestConfiguration} from './softDeleteRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the softDelete method.
 */
export class SoftDeleteRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SoftDeleteRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/joinedTeams/{team%2Did}/channels/{channel%2Did}/messages/{chatMessage%2Did}/softDelete");
    };
    /**
     * Delete a single chatMessage or a chat message reply in a channel or a chat.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/chatmessage-softdelete?view=graph-rest-1.0|Find more info here}
     */
    public post(requestConfiguration?: SoftDeleteRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toPostRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Delete a single chatMessage or a chat message reply in a channel or a chat.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(requestConfiguration?: SoftDeleteRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
}
