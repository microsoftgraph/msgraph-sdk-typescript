import { type ListItemVersionCollectionResponse } from '../../../../../../models/';
import { createListItemVersionFromDiscriminatorValue, deserializeIntoListItemVersion, serializeListItemVersion, type ListItemVersion } from '../../../../../../models/listItemVersion';
import { createListItemVersionCollectionResponseFromDiscriminatorValue } from '../../../../../../models/listItemVersionCollectionResponse';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { ListItemVersionItemRequestBuilder } from './item/listItemVersionItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface VersionsRequestBuilderGetQueryParameters {
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
export interface VersionsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: VersionsRequestBuilderGetQueryParameters;
}
export interface VersionsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the versions property of the microsoft.graph.listItem entity.
 */
export class VersionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the versions property of the microsoft.graph.listItem entity.
     * @param listItemVersionId The unique identifier of listItemVersion
     * @returns a ListItemVersionItemRequestBuilder
     */
    public byListItemVersionId(listItemVersionId: string) : ListItemVersionItemRequestBuilder {
        if(!listItemVersionId) throw new Error("listItemVersionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["listItemVersion%2Did"] = listItemVersionId
        return new ListItemVersionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new VersionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/list/items/{listItem%2Did}/versions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * SharePoint can be configured to retain the history for list items. Previous versions may be retained for a finite period of time depending on admin settings which may be unique per user or location. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ListItemVersionCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/listitem-list-versions?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: VersionsRequestBuilderGetRequestConfiguration | undefined) : Promise<ListItemVersionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ListItemVersionCollectionResponse>(requestInfo, createListItemVersionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to versions for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ListItemVersion
     */
    public post(body: ListItemVersion, requestConfiguration?: VersionsRequestBuilderPostRequestConfiguration | undefined) : Promise<ListItemVersion | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ListItemVersion>(requestInfo, createListItemVersionFromDiscriminatorValue, errorMapping);
    };
    /**
     * SharePoint can be configured to retain the history for list items. Previous versions may be retained for a finite period of time depending on admin settings which may be unique per user or location. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: VersionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to versions for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ListItemVersion, requestConfiguration?: VersionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeListItemVersion);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a versionsRequestBuilder
     */
    public withUrl(rawUrl: string) : VersionsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new VersionsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
