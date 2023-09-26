import { type SiteCollectionResponse } from '../../../models/';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { createSiteCollectionResponseFromDiscriminatorValue } from '../../../models/siteCollectionResponse';
import { AddRequestBuilder } from './add/addRequestBuilder';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { GetAllSitesRequestBuilder } from './getAllSites/getAllSitesRequestBuilder';
import { SiteItemRequestBuilder } from './item/siteItemRequestBuilder';
import { RemoveRequestBuilder } from './remove/removeRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface SitesRequestBuilderGetQueryParameters {
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
export interface SitesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SitesRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the sites property of the microsoft.graph.group entity.
 */
export class SitesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the add method.
     */
    public get add(): AddRequestBuilder {
        return new AddRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getAllSites method.
     */
    public get getAllSites(): GetAllSitesRequestBuilder {
        return new GetAllSitesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the remove method.
     */
    public get remove(): RemoveRequestBuilder {
        return new RemoveRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sites property of the microsoft.graph.group entity.
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
     * Instantiates a new SitesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The list of SharePoint sites in this group. Access the default site with /sites/root.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SiteCollectionResponse
     */
    public get(requestConfiguration?: SitesRequestBuilderGetRequestConfiguration | undefined) : Promise<SiteCollectionResponse | undefined> {
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
     * The list of SharePoint sites in this group. Access the default site with /sites/root.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SitesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a sitesRequestBuilder
     */
    public withUrl(rawUrl: string) : SitesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SitesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
