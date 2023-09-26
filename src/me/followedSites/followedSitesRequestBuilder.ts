import { type SiteCollectionResponse } from '../../models/';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { createSiteCollectionResponseFromDiscriminatorValue } from '../../models/siteCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { SiteItemRequestBuilder } from './item/siteItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface FollowedSitesRequestBuilderGetQueryParameters {
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
export interface FollowedSitesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: FollowedSitesRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the followedSites property of the microsoft.graph.user entity.
 */
export class FollowedSitesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the followedSites property of the microsoft.graph.user entity.
     * @param siteId The unique identifier of site
     * @returns a SiteItemRequestBuilder
     */
    public bySiteId(siteId: string) : SiteItemRequestBuilder {
        if(!siteId) throw new Error("siteId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["site%2Did"] = siteId
        return new SiteItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new FollowedSitesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/followedSites{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List the sites that have been followed by the signed in user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SiteCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/sites-list-followed?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: FollowedSitesRequestBuilderGetRequestConfiguration | undefined) : Promise<SiteCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SiteCollectionResponse>(requestInfo, createSiteCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * List the sites that have been followed by the signed in user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: FollowedSitesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a followedSitesRequestBuilder
     */
    public withUrl(rawUrl: string) : FollowedSitesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new FollowedSitesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
