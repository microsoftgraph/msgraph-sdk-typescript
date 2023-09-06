import { type ServiceHealthIssueCollectionResponse } from '../../../../../models/';
import { createServiceHealthIssueCollectionResponseFromDiscriminatorValue } from '../../../../../models/createServiceHealthIssueCollectionResponseFromDiscriminatorValue';
import { createServiceHealthIssueFromDiscriminatorValue } from '../../../../../models/createServiceHealthIssueFromDiscriminatorValue';
import { deserializeIntoServiceHealthIssue } from '../../../../../models/deserializeIntoServiceHealthIssue';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { serializeServiceHealthIssue } from '../../../../../models/serializeServiceHealthIssue';
import { type ServiceHealthIssue } from '../../../../../models/serviceHealthIssue';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { type IssuesRequestBuilderGetRequestConfiguration } from './issuesRequestBuilderGetRequestConfiguration';
import { type IssuesRequestBuilderPostRequestConfiguration } from './issuesRequestBuilderPostRequestConfiguration';
import { ServiceHealthIssueItemRequestBuilder } from './item/serviceHealthIssueItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the issues property of the microsoft.graph.serviceHealth entity.
 */
export class IssuesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the issues property of the microsoft.graph.serviceHealth entity.
     * @param serviceHealthIssueId The unique identifier of serviceHealthIssue
     * @returns a ServiceHealthIssueItemRequestBuilder
     */
    public byServiceHealthIssueId(serviceHealthIssueId: string) : ServiceHealthIssueItemRequestBuilder {
        if(!serviceHealthIssueId) throw new Error("serviceHealthIssueId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["serviceHealthIssue%2Did"] = serviceHealthIssueId
        return new ServiceHealthIssueItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new IssuesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin/serviceAnnouncement/healthOverviews/{serviceHealth%2Did}/issues{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * A collection of issues that happened on the service, with detailed information for each issue.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceHealthIssueCollectionResponse
     */
    public get(requestConfiguration?: IssuesRequestBuilderGetRequestConfiguration | undefined) : Promise<ServiceHealthIssueCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServiceHealthIssueCollectionResponse>(requestInfo, createServiceHealthIssueCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to issues for admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceHealthIssue
     */
    public post(body: ServiceHealthIssue, requestConfiguration?: IssuesRequestBuilderPostRequestConfiguration | undefined) : Promise<ServiceHealthIssue | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServiceHealthIssue>(requestInfo, createServiceHealthIssueFromDiscriminatorValue, errorMapping);
    };
    /**
     * A collection of issues that happened on the service, with detailed information for each issue.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IssuesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to issues for admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ServiceHealthIssue, requestConfiguration?: IssuesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeServiceHealthIssue);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a issuesRequestBuilder
     */
    public withUrl(rawUrl: string) : IssuesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new IssuesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
