import { type ServiceUpdateMessageCollectionResponse } from '../../../models/';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { createServiceUpdateMessageFromDiscriminatorValue, deserializeIntoServiceUpdateMessage, serializeServiceUpdateMessage, type ServiceUpdateMessage } from '../../../models/serviceUpdateMessage';
import { createServiceUpdateMessageCollectionResponseFromDiscriminatorValue } from '../../../models/serviceUpdateMessageCollectionResponse';
import { ArchiveRequestBuilder } from './archive/archiveRequestBuilder';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { FavoriteRequestBuilder } from './favorite/favoriteRequestBuilder';
import { ServiceUpdateMessageItemRequestBuilder } from './item/serviceUpdateMessageItemRequestBuilder';
import { MarkReadRequestBuilder } from './markRead/markReadRequestBuilder';
import { MarkUnreadRequestBuilder } from './markUnread/markUnreadRequestBuilder';
import { UnarchiveRequestBuilder } from './unarchive/unarchiveRequestBuilder';
import { UnfavoriteRequestBuilder } from './unfavorite/unfavoriteRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface MessagesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface MessagesRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: MessagesRequestBuilderGetQueryParameters;
}
export interface MessagesRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
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
     * @param serviceUpdateMessageId The unique identifier of serviceUpdateMessage
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
     * Retrieve the serviceUpdateMessage resources from the messages navigation property. This operation retrieves all service update messages that exist for the tenant. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceUpdateMessageCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/serviceannouncement-list-messages?view=graph-rest-1.0|Find more info here}
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
    public post(body: ServiceUpdateMessage, requestConfiguration?: MessagesRequestBuilderPostRequestConfiguration | undefined) : Promise<ServiceUpdateMessage | undefined> {
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
     * Retrieve the serviceUpdateMessage resources from the messages navigation property. This operation retrieves all service update messages that exist for the tenant. This API is supported in the following national cloud deployments.
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
    public toPostRequestInformation(body: ServiceUpdateMessage, requestConfiguration?: MessagesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeServiceUpdateMessage);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a messagesRequestBuilder
     */
    public withUrl(rawUrl: string) : MessagesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new MessagesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
