import {ServiceHealthCollectionResponse} from '../../../models/';
import {createServiceHealthCollectionResponseFromDiscriminatorValue} from '../../../models/createServiceHealthCollectionResponseFromDiscriminatorValue';
import {createServiceHealthFromDiscriminatorValue} from '../../../models/createServiceHealthFromDiscriminatorValue';
import {deserializeIntoServiceHealth} from '../../../models/deserializeIntoServiceHealth';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeServiceHealth} from '../../../models/serializeServiceHealth';
import type {ServiceHealth} from '../../../models/serviceHealth';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {HealthOverviewsRequestBuilderGetRequestConfiguration} from './healthOverviewsRequestBuilderGetRequestConfiguration';
import {HealthOverviewsRequestBuilderPostRequestConfiguration} from './healthOverviewsRequestBuilderPostRequestConfiguration';
import {ServiceHealthItemRequestBuilder} from './item/serviceHealthItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the healthOverviews property of the microsoft.graph.serviceAnnouncement entity.
 */
export class HealthOverviewsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the healthOverviews property of the microsoft.graph.serviceAnnouncement entity.
     * @param serviceHealthId The unique identifier of serviceHealth
     * @returns a ServiceHealthItemRequestBuilder
     */
    public byServiceHealthId(serviceHealthId: string) : ServiceHealthItemRequestBuilder {
        if(!serviceHealthId) throw new Error("serviceHealthId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["serviceHealth%2Did"] = serviceHealthId
        return new ServiceHealthItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new HealthOverviewsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin/serviceAnnouncement/healthOverviews{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the serviceHealth resources from the healthOverviews navigation property. This operation provides the health report of all subscribed services for a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceHealthCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/serviceannouncement-list-healthoverviews?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: HealthOverviewsRequestBuilderGetRequestConfiguration | undefined) : Promise<ServiceHealthCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServiceHealthCollectionResponse>(requestInfo, createServiceHealthCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to healthOverviews for admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceHealth
     */
    public post(body: ServiceHealth, requestConfiguration?: HealthOverviewsRequestBuilderPostRequestConfiguration | undefined) : Promise<ServiceHealth | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServiceHealth>(requestInfo, createServiceHealthFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the serviceHealth resources from the healthOverviews navigation property. This operation provides the health report of all subscribed services for a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: HealthOverviewsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to healthOverviews for admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ServiceHealth, requestConfiguration?: HealthOverviewsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeServiceHealth);
        return requestInfo;
    };
}
