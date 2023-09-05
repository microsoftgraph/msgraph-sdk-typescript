import { type LocalizedNotificationMessageCollectionResponse } from '../../../../models/';
import { createLocalizedNotificationMessageCollectionResponseFromDiscriminatorValue } from '../../../../models/createLocalizedNotificationMessageCollectionResponseFromDiscriminatorValue';
import { createLocalizedNotificationMessageFromDiscriminatorValue } from '../../../../models/createLocalizedNotificationMessageFromDiscriminatorValue';
import { deserializeIntoLocalizedNotificationMessage } from '../../../../models/deserializeIntoLocalizedNotificationMessage';
import { type LocalizedNotificationMessage } from '../../../../models/localizedNotificationMessage';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { serializeLocalizedNotificationMessage } from '../../../../models/serializeLocalizedNotificationMessage';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { LocalizedNotificationMessageItemRequestBuilder } from './item/localizedNotificationMessageItemRequestBuilder';
import { type LocalizedNotificationMessagesRequestBuilderGetRequestConfiguration } from './localizedNotificationMessagesRequestBuilderGetRequestConfiguration';
import { type LocalizedNotificationMessagesRequestBuilderPostRequestConfiguration } from './localizedNotificationMessagesRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the localizedNotificationMessages property of the microsoft.graph.notificationMessageTemplate entity.
 */
export class LocalizedNotificationMessagesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the localizedNotificationMessages property of the microsoft.graph.notificationMessageTemplate entity.
     * @param localizedNotificationMessageId The unique identifier of localizedNotificationMessage
     * @returns a LocalizedNotificationMessageItemRequestBuilder
     */
    public byLocalizedNotificationMessageId(localizedNotificationMessageId: string) : LocalizedNotificationMessageItemRequestBuilder {
        if(!localizedNotificationMessageId) throw new Error("localizedNotificationMessageId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["localizedNotificationMessage%2Did"] = localizedNotificationMessageId
        return new LocalizedNotificationMessageItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new LocalizedNotificationMessagesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate%2Did}/localizedNotificationMessages{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the localizedNotificationMessage objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LocalizedNotificationMessageCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-notification-localizednotificationmessage-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: LocalizedNotificationMessagesRequestBuilderGetRequestConfiguration | undefined) : Promise<LocalizedNotificationMessageCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LocalizedNotificationMessageCollectionResponse>(requestInfo, createLocalizedNotificationMessageCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new localizedNotificationMessage object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LocalizedNotificationMessage
     * @see {@link https://learn.microsoft.com/graph/api/intune-notification-localizednotificationmessage-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: LocalizedNotificationMessage, requestConfiguration?: LocalizedNotificationMessagesRequestBuilderPostRequestConfiguration | undefined) : Promise<LocalizedNotificationMessage | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LocalizedNotificationMessage>(requestInfo, createLocalizedNotificationMessageFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the localizedNotificationMessage objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: LocalizedNotificationMessagesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Create a new localizedNotificationMessage object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: LocalizedNotificationMessage, requestConfiguration?: LocalizedNotificationMessagesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeLocalizedNotificationMessage);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a localizedNotificationMessagesRequestBuilder
     */
    public withUrl(rawUrl: string) : LocalizedNotificationMessagesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new LocalizedNotificationMessagesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
