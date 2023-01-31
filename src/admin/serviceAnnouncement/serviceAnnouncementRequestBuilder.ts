import {ServiceAnnouncement} from '../../models/';
import {createServiceAnnouncementFromDiscriminatorValue} from '../../models/createServiceAnnouncementFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {HealthOverviewsRequestBuilder} from './healthOverviews/healthOverviewsRequestBuilder';
import {ServiceHealthItemRequestBuilder} from './healthOverviews/item/serviceHealthItemRequestBuilder';
import {IssuesRequestBuilder} from './issues/issuesRequestBuilder';
import {ServiceHealthIssueItemRequestBuilder} from './issues/item/serviceHealthIssueItemRequestBuilder';
import {ServiceUpdateMessageItemRequestBuilder} from './messages/item/serviceUpdateMessageItemRequestBuilder';
import {MessagesRequestBuilder} from './messages/messagesRequestBuilder';
import {ServiceAnnouncementRequestBuilderDeleteRequestConfiguration} from './serviceAnnouncementRequestBuilderDeleteRequestConfiguration';
import {ServiceAnnouncementRequestBuilderGetRequestConfiguration} from './serviceAnnouncementRequestBuilderGetRequestConfiguration';
import {ServiceAnnouncementRequestBuilderPatchRequestConfiguration} from './serviceAnnouncementRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the serviceAnnouncement property of the microsoft.graph.admin entity.
 */
export class ServiceAnnouncementRequestBuilder {
    /** Provides operations to manage the healthOverviews property of the microsoft.graph.serviceAnnouncement entity. */
    public get healthOverviews(): HealthOverviewsRequestBuilder {
        return new HealthOverviewsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the issues property of the microsoft.graph.serviceAnnouncement entity. */
    public get issues(): IssuesRequestBuilder {
        return new IssuesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the messages property of the microsoft.graph.serviceAnnouncement entity. */
    public get messages(): MessagesRequestBuilder {
        return new MessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new ServiceAnnouncementRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/admin/serviceAnnouncement{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property serviceAnnouncement for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ServiceAnnouncementRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * A container for service communications resources. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ServiceAnnouncement
     */
    public get(requestConfiguration?: ServiceAnnouncementRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ServiceAnnouncement | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ServiceAnnouncement>(requestInfo, createServiceAnnouncementFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the healthOverviews property of the microsoft.graph.serviceAnnouncement entity.
     * @param id Unique identifier of the item
     * @returns a ServiceHealthItemRequestBuilder
     */
    public healthOverviewsById(id: string) : ServiceHealthItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["serviceHealth%2Did"] = id
        return new ServiceHealthItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the issues property of the microsoft.graph.serviceAnnouncement entity.
     * @param id Unique identifier of the item
     * @returns a ServiceHealthIssueItemRequestBuilder
     */
    public issuesById(id: string) : ServiceHealthIssueItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["serviceHealthIssue%2Did"] = id
        return new ServiceHealthIssueItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the messages property of the microsoft.graph.serviceAnnouncement entity.
     * @param id Unique identifier of the item
     * @returns a ServiceUpdateMessageItemRequestBuilder
     */
    public messagesById(id: string) : ServiceUpdateMessageItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["serviceUpdateMessage%2Did"] = id
        return new ServiceUpdateMessageItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property serviceAnnouncement in admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ServiceAnnouncement
     */
    public patch(body: ServiceAnnouncement | undefined, requestConfiguration?: ServiceAnnouncementRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ServiceAnnouncement | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ServiceAnnouncement>(requestInfo, createServiceAnnouncementFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property serviceAnnouncement for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ServiceAnnouncementRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * A container for service communications resources. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ServiceAnnouncementRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property serviceAnnouncement in admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ServiceAnnouncement | undefined, requestConfiguration?: ServiceAnnouncementRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
