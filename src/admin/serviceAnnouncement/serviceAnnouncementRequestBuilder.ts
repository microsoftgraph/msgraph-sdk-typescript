import {createServiceAnnouncementFromDiscriminatorValue} from '../../models/createServiceAnnouncementFromDiscriminatorValue';
import {deserializeIntoServiceAnnouncement} from '../../models/deserializeIntoServiceAnnouncement';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeServiceAnnouncement} from '../../models/serializeServiceAnnouncement';
import {ServiceAnnouncement} from '../../models/serviceAnnouncement';
import {HealthOverviewsRequestBuilder} from './healthOverviews/healthOverviewsRequestBuilder';
import {IssuesRequestBuilder} from './issues/issuesRequestBuilder';
import {MessagesRequestBuilder} from './messages/messagesRequestBuilder';
import {ServiceAnnouncementRequestBuilderDeleteRequestConfiguration} from './serviceAnnouncementRequestBuilderDeleteRequestConfiguration';
import {ServiceAnnouncementRequestBuilderGetRequestConfiguration} from './serviceAnnouncementRequestBuilderGetRequestConfiguration';
import {ServiceAnnouncementRequestBuilderPatchRequestConfiguration} from './serviceAnnouncementRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the serviceAnnouncement property of the microsoft.graph.admin entity.
 */
export class ServiceAnnouncementRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the healthOverviews property of the microsoft.graph.serviceAnnouncement entity.
     */
    public get healthOverviews(): HealthOverviewsRequestBuilder {
        return new HealthOverviewsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the issues property of the microsoft.graph.serviceAnnouncement entity.
     */
    public get issues(): IssuesRequestBuilder {
        return new IssuesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the messages property of the microsoft.graph.serviceAnnouncement entity.
     */
    public get messages(): MessagesRequestBuilder {
        return new MessagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ServiceAnnouncementRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin/serviceAnnouncement{?%24select,%24expand}");
    };
    /**
     * Delete navigation property serviceAnnouncement for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ServiceAnnouncementRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * A container for service communications resources. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceAnnouncement
     */
    public get(requestConfiguration?: ServiceAnnouncementRequestBuilderGetRequestConfiguration | undefined) : Promise<ServiceAnnouncement | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServiceAnnouncement>(requestInfo, createServiceAnnouncementFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property serviceAnnouncement in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceAnnouncement
     */
    public patch(body: ServiceAnnouncement | undefined, requestConfiguration?: ServiceAnnouncementRequestBuilderPatchRequestConfiguration | undefined) : Promise<ServiceAnnouncement | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServiceAnnouncement>(requestInfo, createServiceAnnouncementFromDiscriminatorValue, errorMapping);
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
     * @param body The request body
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeServiceAnnouncement);
        return requestInfo;
    };
}
