import {SiteCollectionResponse} from '../../../../../models/';
import {createSiteCollectionResponseFromDiscriminatorValue} from '../../../../../models/createSiteCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SiteItemRequestBuilder} from './item/siteItemRequestBuilder';
import {SitesRequestBuilderGetRequestConfiguration} from './sitesRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sites property of the microsoft.graph.site entity.
 */
export class SitesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sites property of the microsoft.graph.site entity.
     * @param siteId1 Unique identifier of the item
     * @returns a SiteItemRequestBuilder
     */
    public bySiteId1(siteId1: string) : SiteItemRequestBuilder {
        if(!siteId1) throw new Error("siteId1 cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["site%2Did1"] = siteId1
        return new SiteItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SitesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/sites{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The collection of the sub-sites under this site.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SiteCollectionResponse
     */
    public get(requestConfiguration?: SitesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SiteCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<SiteCollectionResponse>(requestInfo, createSiteCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The collection of the sub-sites under this site.
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
}
