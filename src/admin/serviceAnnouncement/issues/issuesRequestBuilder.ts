import {ServiceHealthIssueCollectionResponse} from '../../../models/';
import {createServiceHealthIssueCollectionResponseFromDiscriminatorValue} from '../../../models/createServiceHealthIssueCollectionResponseFromDiscriminatorValue';
import {createServiceHealthIssueFromDiscriminatorValue} from '../../../models/createServiceHealthIssueFromDiscriminatorValue';
import {deserializeIntoServiceHealthIssue} from '../../../models/deserializeIntoServiceHealthIssue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeServiceHealthIssue} from '../../../models/serializeServiceHealthIssue';
import {ServiceHealthIssue} from '../../../models/serviceHealthIssue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {IssuesRequestBuilderGetRequestConfiguration} from './issuesRequestBuilderGetRequestConfiguration';
import {IssuesRequestBuilderPostRequestConfiguration} from './issuesRequestBuilderPostRequestConfiguration';
import {ServiceHealthIssueItemRequestBuilder} from './item/serviceHealthIssueItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the issues property of the microsoft.graph.serviceAnnouncement entity.
 */
export class IssuesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the issues property of the microsoft.graph.serviceAnnouncement entity.
     * @param serviceHealthIssueId Unique identifier of the item
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
        super(pathParameters, requestAdapter, "{+baseurl}/admin/serviceAnnouncement/issues{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * A collection of service issues for tenant. This property is a contained navigation property, it is nullable and readonly.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ServiceHealthIssueCollectionResponse
     */
    public get(requestConfiguration?: IssuesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ServiceHealthIssueCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<ServiceHealthIssueCollectionResponse>(requestInfo, createServiceHealthIssueCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to issues for admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ServiceHealthIssue
     */
    public post(body: ServiceHealthIssue | undefined, requestConfiguration?: IssuesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ServiceHealthIssue | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<ServiceHealthIssue>(requestInfo, createServiceHealthIssueFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * A collection of service issues for tenant. This property is a contained navigation property, it is nullable and readonly.
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
    public toPostRequestInformation(body: ServiceHealthIssue | undefined, requestConfiguration?: IssuesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeServiceHealthIssue);
        return requestInfo;
    };
}
