import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {SiteSourceCollectionResponse} from '../../../../../../../models/security/';
import {createSiteSourceCollectionResponseFromDiscriminatorValue} from '../../../../../../../models/security/createSiteSourceCollectionResponseFromDiscriminatorValue';
import {createSiteSourceFromDiscriminatorValue} from '../../../../../../../models/security/createSiteSourceFromDiscriminatorValue';
import {deserializeIntoSiteSource} from '../../../../../../../models/security/deserializeIntoSiteSource';
import {serializeSiteSource} from '../../../../../../../models/security/serializeSiteSource';
import type {SiteSource} from '../../../../../../../models/security/siteSource';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SiteSourceItemRequestBuilder} from './item/siteSourceItemRequestBuilder';
import {SiteSourcesRequestBuilderGetRequestConfiguration} from './siteSourcesRequestBuilderGetRequestConfiguration';
import {SiteSourcesRequestBuilderPostRequestConfiguration} from './siteSourcesRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the siteSources property of the microsoft.graph.security.ediscoveryCustodian entity.
 */
export class SiteSourcesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the siteSources property of the microsoft.graph.security.ediscoveryCustodian entity.
     * @param siteSourceId Unique identifier of the item
     * @returns a SiteSourceItemRequestBuilder
     */
    public bySiteSourceId(siteSourceId: string) : SiteSourceItemRequestBuilder {
        if(!siteSourceId) throw new Error("siteSourceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["siteSource%2Did"] = siteSourceId
        return new SiteSourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SiteSourcesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/custodians/{ediscoveryCustodian%2Did}/siteSources{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the siteSource objects associated with an ediscoveryCustodian.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SiteSourceCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycustodian-list-sitesources?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SiteSourcesRequestBuilderGetRequestConfiguration | undefined) : Promise<SiteSourceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SiteSourceCollectionResponse>(requestInfo, createSiteSourceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new siteSource object associated with an eDiscovery custodian.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SiteSource
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycustodian-post-sitesources?view=graph-rest-1.0|Find more info here}
     */
    public post(body: SiteSource, requestConfiguration?: SiteSourcesRequestBuilderPostRequestConfiguration | undefined) : Promise<SiteSource | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SiteSource>(requestInfo, createSiteSourceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the siteSource objects associated with an ediscoveryCustodian.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SiteSourcesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new siteSource object associated with an eDiscovery custodian.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SiteSource, requestConfiguration?: SiteSourcesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSiteSource);
        return requestInfo;
    };
}
