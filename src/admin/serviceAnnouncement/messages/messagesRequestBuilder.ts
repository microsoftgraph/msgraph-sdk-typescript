import {ServiceUpdateMessage, ServiceUpdateMessageCollectionResponse} from '../../../models/';
import {createServiceUpdateMessageCollectionResponseFromDiscriminatorValue} from '../../../models/createServiceUpdateMessageCollectionResponseFromDiscriminatorValue';
import {createServiceUpdateMessageFromDiscriminatorValue} from '../../../models/createServiceUpdateMessageFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {MessagesRequestBuilderGetRequestConfiguration} from './messagesRequestBuilderGetRequestConfiguration';
import {MessagesRequestBuilderPostRequestConfiguration} from './messagesRequestBuilderPostRequestConfiguration';
import {ArchiveRequestBuilder} from './microsoftGraphArchive/archiveRequestBuilder';
import {FavoriteRequestBuilder} from './microsoftGraphFavorite/favoriteRequestBuilder';
import {MarkReadRequestBuilder} from './microsoftGraphMarkRead/markReadRequestBuilder';
import {MarkUnreadRequestBuilder} from './microsoftGraphMarkUnread/markUnreadRequestBuilder';
import {UnarchiveRequestBuilder} from './microsoftGraphUnarchive/unarchiveRequestBuilder';
import {UnfavoriteRequestBuilder} from './microsoftGraphUnfavorite/unfavoriteRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the messages property of the microsoft.graph.serviceAnnouncement entity.
 */
export class MessagesRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the archive method. */
    public get microsoftGraphArchive(): ArchiveRequestBuilder {
        return new ArchiveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the favorite method. */
    public get microsoftGraphFavorite(): FavoriteRequestBuilder {
        return new FavoriteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the markRead method. */
    public get microsoftGraphMarkRead(): MarkReadRequestBuilder {
        return new MarkReadRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the markUnread method. */
    public get microsoftGraphMarkUnread(): MarkUnreadRequestBuilder {
        return new MarkUnreadRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the unarchive method. */
    public get microsoftGraphUnarchive(): UnarchiveRequestBuilder {
        return new UnarchiveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the unfavorite method. */
    public get microsoftGraphUnfavorite(): UnfavoriteRequestBuilder {
        return new UnfavoriteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new MessagesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/admin/serviceAnnouncement/messages{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve the serviceUpdateMessage resources from the **messages** navigation property. This operation retrieves all service update messages that exist for the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ServiceUpdateMessageCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/serviceannouncement-list-messages?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MessagesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ServiceUpdateMessageCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ServiceUpdateMessageCollectionResponse>(requestInfo, createServiceUpdateMessageCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to messages for admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ServiceUpdateMessage
     */
    public post(body: ServiceUpdateMessage | undefined, requestConfiguration?: MessagesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ServiceUpdateMessage | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ServiceUpdateMessage>(requestInfo, createServiceUpdateMessageFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
