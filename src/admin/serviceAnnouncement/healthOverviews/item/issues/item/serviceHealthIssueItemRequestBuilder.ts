import {createServiceHealthIssueFromDiscriminatorValue} from '../../../../../../models/createServiceHealthIssueFromDiscriminatorValue';
import {deserializeIntoServiceHealthIssue} from '../../../../../../models/deserializeIntoServiceHealthIssue';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeServiceHealthIssue} from '../../../../../../models/serializeServiceHealthIssue';
import type {ServiceHealthIssue} from '../../../../../../models/serviceHealthIssue';
import {IncidentReportRequestBuilder} from './incidentReport/incidentReportRequestBuilder';
import {ServiceHealthIssueItemRequestBuilderDeleteRequestConfiguration} from './serviceHealthIssueItemRequestBuilderDeleteRequestConfiguration';
import {ServiceHealthIssueItemRequestBuilderGetRequestConfiguration} from './serviceHealthIssueItemRequestBuilderGetRequestConfiguration';
import {ServiceHealthIssueItemRequestBuilderPatchRequestConfiguration} from './serviceHealthIssueItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the issues property of the microsoft.graph.serviceHealth entity.
 */
export class ServiceHealthIssueItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the incidentReport method.
     */
    public get incidentReport(): IncidentReportRequestBuilder {
        return new IncidentReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ServiceHealthIssueItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin/serviceAnnouncement/healthOverviews/{serviceHealth%2Did}/issues/{serviceHealthIssue%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property issues for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ServiceHealthIssueItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * A collection of issues that happened on the service, with detailed information for each issue.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceHealthIssue
     */
    public get(requestConfiguration?: ServiceHealthIssueItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ServiceHealthIssue | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServiceHealthIssue>(requestInfo, createServiceHealthIssueFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property issues in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceHealthIssue
     */
    public patch(body: ServiceHealthIssue, requestConfiguration?: ServiceHealthIssueItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ServiceHealthIssue | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServiceHealthIssue>(requestInfo, createServiceHealthIssueFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property issues for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ServiceHealthIssueItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * A collection of issues that happened on the service, with detailed information for each issue.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ServiceHealthIssueItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property issues in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ServiceHealthIssue, requestConfiguration?: ServiceHealthIssueItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeServiceHealthIssue);
        return requestInfo;
    };
}
