import {createOpenShiftChangeRequestFromDiscriminatorValue} from '../../../../../../models/createOpenShiftChangeRequestFromDiscriminatorValue';
import {deserializeIntoOpenShiftChangeRequest} from '../../../../../../models/deserializeIntoOpenShiftChangeRequest';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import type {OpenShiftChangeRequest} from '../../../../../../models/openShiftChangeRequest';
import {serializeOpenShiftChangeRequest} from '../../../../../../models/serializeOpenShiftChangeRequest';
import {OpenShiftChangeRequestItemRequestBuilderDeleteRequestConfiguration} from './openShiftChangeRequestItemRequestBuilderDeleteRequestConfiguration';
import {OpenShiftChangeRequestItemRequestBuilderGetRequestConfiguration} from './openShiftChangeRequestItemRequestBuilderGetRequestConfiguration';
import {OpenShiftChangeRequestItemRequestBuilderPatchRequestConfiguration} from './openShiftChangeRequestItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the openShiftChangeRequests property of the microsoft.graph.schedule entity.
 */
export class OpenShiftChangeRequestItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new OpenShiftChangeRequestItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/joinedTeams/{team%2Did}/schedule/openShiftChangeRequests/{openShiftChangeRequest%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property openShiftChangeRequests for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: OpenShiftChangeRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of an openShiftChangeRequest object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OpenShiftChangeRequest
     * @see {@link https://learn.microsoft.com/graph/api/openshiftchangerequest-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: OpenShiftChangeRequestItemRequestBuilderGetRequestConfiguration | undefined) : Promise<OpenShiftChangeRequest | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OpenShiftChangeRequest>(requestInfo, createOpenShiftChangeRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property openShiftChangeRequests in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OpenShiftChangeRequest
     */
    public patch(body: OpenShiftChangeRequest, requestConfiguration?: OpenShiftChangeRequestItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<OpenShiftChangeRequest | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OpenShiftChangeRequest>(requestInfo, createOpenShiftChangeRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property openShiftChangeRequests for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: OpenShiftChangeRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of an openShiftChangeRequest object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OpenShiftChangeRequestItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property openShiftChangeRequests in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: OpenShiftChangeRequest, requestConfiguration?: OpenShiftChangeRequestItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeOpenShiftChangeRequest);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a OpenShiftChangeRequestItemRequestBuilder
     */
    public withUrl(rawUrl: string) : OpenShiftChangeRequestItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new OpenShiftChangeRequestItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
