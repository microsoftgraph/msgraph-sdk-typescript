import {ServiceUpdateMessageCollectionResponse} from '../../../models/';
import {createServiceUpdateMessageCollectionResponseFromDiscriminatorValue} from '../../../models/createServiceUpdateMessageCollectionResponseFromDiscriminatorValue';
import {createServiceUpdateMessageFromDiscriminatorValue} from '../../../models/createServiceUpdateMessageFromDiscriminatorValue';
import {deserializeIntoServiceUpdateMessage} from '../../../models/deserializeIntoServiceUpdateMessage';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeServiceUpdateMessage} from '../../../models/serializeServiceUpdateMessage';
import {ServiceUpdateMessage} from '../../../models/serviceUpdateMessage';
import {ArchiveRequestBuilder} from './archive/archiveRequestBuilder';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {FavoriteRequestBuilder} from './favorite/favoriteRequestBuilder';
import {ServiceUpdateMessageItemRequestBuilder} from './item/serviceUpdateMessageItemRequestBuilder';
import {MarkReadRequestBuilder} from './markRead/markReadRequestBuilder';
import {MarkUnreadRequestBuilder} from './markUnread/markUnreadRequestBuilder';
import {MessagesRequestBuilderGetRequestConfiguration} from './messagesRequestBuilderGetRequestConfiguration';
import {MessagesRequestBuilderPostRequestConfiguration} from './messagesRequestBuilderPostRequestConfiguration';
import {UnarchiveRequestBuilder} from './unarchive/unarchiveRequestBuilder';
import {UnfavoriteRequestBuilder} from './unfavorite/unfavoriteRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the messages property of the microsoft.graph.serviceAnnouncement entity.
 */
export class MessagesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the archive method.
     */
    public get archive(): ArchiveRequestBuilder {
        return new ArchiveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the favorite method.
     */
    public get favorite(): FavoriteRequestBuilder {
        return new FavoriteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the markRead method.
     */
    public get markRead(): MarkReadRequestBuilder {
        return new MarkReadRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the markUnread method.
     */
    public get markUnread(): MarkUnreadRequestBuilder {
        return new MarkUnreadRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the unarchive method.
     */
    public get unarchive(): UnarchiveRequestBuilder {
        return new UnarchiveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the unfavorite method.
     */
    public get unfavorite(): UnfavoriteRequestBuilder {
        return new UnfavoriteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the messages property of the microsoft.graph.serviceAnnouncement entity.
     * @param serviceUpdateMessageId Unique identifier of the item
     * @returns a ServiceUpdateMessageItemRequestBuilder
     */
    public byServiceUpdateMessageId(serviceUpdateMessageId: string) : ServiceUpdateMessageItemRequestBuilder {
        if(!serviceUpdateMessageId) throw new Error("serviceUpdateMessageId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["serviceUpdateMessage%2Did"] = serviceUpdateMessageId
        return new ServiceUpdateMessageItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MessagesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin/serviceAnnouncement/messages{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the serviceUpdateMessage resources from the **messages** navigation property. This operation retrieves all service update messages that exist for the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceUpdateMessageCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/serviceannouncement-list-messages?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MessagesRequestBuilderGetRequestConfiguration | undefined) : Promise<ServiceUpdateMessageCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServiceUpdateMessageCollectionResponse>(requestInfo, createServiceUpdateMessageCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to messages for admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceUpdateMessage
     */
    public post(body: ServiceUpdateMessage | undefined, requestConfiguration?: MessagesRequestBuilderPostRequestConfiguration | undefined) : Promise<ServiceUpdateMessage | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServiceUpdateMessage>(requestInfo, createServiceUpdateMessageFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the serviceUpdateMessage resources from the **messages** navigation property. This operation retrieves all service update messages that exist for the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MessagesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to messages for admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ServiceUpdateMessage | undefined, requestConfiguration?: MessagesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeServiceUpdateMessage);
        return requestInfo;
    };
}
