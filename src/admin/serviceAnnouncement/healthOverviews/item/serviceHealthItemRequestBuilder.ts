import {createServiceHealthFromDiscriminatorValue} from '../../../../models/createServiceHealthFromDiscriminatorValue';
import {deserializeIntoServiceHealth} from '../../../../models/deserializeIntoServiceHealth';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeServiceHealth} from '../../../../models/serializeServiceHealth';
import type {ServiceHealth} from '../../../../models/serviceHealth';
import {IssuesRequestBuilder} from './issues/issuesRequestBuilder';
import {ServiceHealthItemRequestBuilderDeleteRequestConfiguration} from './serviceHealthItemRequestBuilderDeleteRequestConfiguration';
import {ServiceHealthItemRequestBuilderGetRequestConfiguration} from './serviceHealthItemRequestBuilderGetRequestConfiguration';
import {ServiceHealthItemRequestBuilderPatchRequestConfiguration} from './serviceHealthItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the healthOverviews property of the microsoft.graph.serviceAnnouncement entity.
 */
export class ServiceHealthItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the issues property of the microsoft.graph.serviceHealth entity.
     */
    public get issues(): IssuesRequestBuilder {
        return new IssuesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ServiceHealthItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin/serviceAnnouncement/healthOverviews/{serviceHealth%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property healthOverviews for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ServiceHealthItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Retrieve the properties and relationships of a serviceHealth object. This operation provides the health information of a specified service for a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceHealth
     * @see {@link https://learn.microsoft.com/graph/api/servicehealth-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ServiceHealthItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ServiceHealth | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServiceHealth>(requestInfo, createServiceHealthFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property healthOverviews in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceHealth
     */
    public patch(body: ServiceHealth, requestConfiguration?: ServiceHealthItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ServiceHealth | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServiceHealth>(requestInfo, createServiceHealthFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property healthOverviews for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ServiceHealthItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Retrieve the properties and relationships of a serviceHealth object. This operation provides the health information of a specified service for a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ServiceHealthItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property healthOverviews in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ServiceHealth, requestConfiguration?: ServiceHealthItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeServiceHealth);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a ServiceHealthItemRequestBuilder
     */
    public withUrl(rawUrl: string) : ServiceHealthItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ServiceHealthItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
