import {LocalizedNotificationMessageCollectionResponse} from '../../../../models/';
import {createLocalizedNotificationMessageCollectionResponseFromDiscriminatorValue} from '../../../../models/createLocalizedNotificationMessageCollectionResponseFromDiscriminatorValue';
import {createLocalizedNotificationMessageFromDiscriminatorValue} from '../../../../models/createLocalizedNotificationMessageFromDiscriminatorValue';
import {deserializeIntoLocalizedNotificationMessage} from '../../../../models/deserializeIntoLocalizedNotificationMessage';
import {LocalizedNotificationMessage} from '../../../../models/localizedNotificationMessage';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeLocalizedNotificationMessage} from '../../../../models/serializeLocalizedNotificationMessage';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {LocalizedNotificationMessageItemRequestBuilder} from './item/localizedNotificationMessageItemRequestBuilder';
import {LocalizedNotificationMessagesRequestBuilderGetRequestConfiguration} from './localizedNotificationMessagesRequestBuilderGetRequestConfiguration';
import {LocalizedNotificationMessagesRequestBuilderPostRequestConfiguration} from './localizedNotificationMessagesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

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
     * @param localizedNotificationMessageId Unique identifier of the item
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
     * The list of localized messages for this Notification Message Template.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LocalizedNotificationMessageCollectionResponse
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
     * Create new navigation property to localizedNotificationMessages for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LocalizedNotificationMessage
     */
    public post(body: LocalizedNotificationMessage | undefined, requestConfiguration?: LocalizedNotificationMessagesRequestBuilderPostRequestConfiguration | undefined) : Promise<LocalizedNotificationMessage | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
     * The list of localized messages for this Notification Message Template.
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
     * Create new navigation property to localizedNotificationMessages for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: LocalizedNotificationMessage | undefined, requestConfiguration?: LocalizedNotificationMessagesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeLocalizedNotificationMessage);
        return requestInfo;
    };
}
