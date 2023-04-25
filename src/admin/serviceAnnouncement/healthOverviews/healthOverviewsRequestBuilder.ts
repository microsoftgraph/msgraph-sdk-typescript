import {ServiceHealth, ServiceHealthCollectionResponse} from '../../../models/';
import {createServiceHealthCollectionResponseFromDiscriminatorValue} from '../../../models/createServiceHealthCollectionResponseFromDiscriminatorValue';
import {createServiceHealthFromDiscriminatorValue} from '../../../models/createServiceHealthFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {HealthOverviewsRequestBuilderGetRequestConfiguration} from './healthOverviewsRequestBuilderGetRequestConfiguration';
import {HealthOverviewsRequestBuilderPostRequestConfiguration} from './healthOverviewsRequestBuilderPostRequestConfiguration';
import {ServiceHealthItemRequestBuilder} from './item/serviceHealthItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the healthOverviews property of the microsoft.graph.serviceAnnouncement entity.
 */
export class HealthOverviewsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the healthOverviews property of the microsoft.graph.serviceAnnouncement entity.
     * @param serviceHealthId Unique identifier of the item
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
     * A collection of service health information for tenant. This property is a contained navigation property, it is nullable and readonly.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ServiceHealthCollectionResponse
     */
    public get(requestConfiguration?: HealthOverviewsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ServiceHealthCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ServiceHealthCollectionResponse>(requestInfo, createServiceHealthCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to healthOverviews for admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ServiceHealth
     */
    public post(body: ServiceHealth | undefined, requestConfiguration?: HealthOverviewsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ServiceHealth | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ServiceHealth>(requestInfo, createServiceHealthFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * A collection of service health information for tenant. This property is a contained navigation property, it is nullable and readonly.
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
    public toPostRequestInformation(body: ServiceHealth | undefined, requestConfiguration?: HealthOverviewsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
