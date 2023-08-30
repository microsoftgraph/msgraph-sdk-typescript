import {OpenShiftChangeRequestCollectionResponse} from '../../../../../models/';
import {createOpenShiftChangeRequestCollectionResponseFromDiscriminatorValue} from '../../../../../models/createOpenShiftChangeRequestCollectionResponseFromDiscriminatorValue';
import {createOpenShiftChangeRequestFromDiscriminatorValue} from '../../../../../models/createOpenShiftChangeRequestFromDiscriminatorValue';
import {deserializeIntoOpenShiftChangeRequest} from '../../../../../models/deserializeIntoOpenShiftChangeRequest';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import type {OpenShiftChangeRequest} from '../../../../../models/openShiftChangeRequest';
import {serializeOpenShiftChangeRequest} from '../../../../../models/serializeOpenShiftChangeRequest';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {OpenShiftChangeRequestItemRequestBuilder} from './item/openShiftChangeRequestItemRequestBuilder';
import {OpenShiftChangeRequestsRequestBuilderGetRequestConfiguration} from './openShiftChangeRequestsRequestBuilderGetRequestConfiguration';
import {OpenShiftChangeRequestsRequestBuilderPostRequestConfiguration} from './openShiftChangeRequestsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the openShiftChangeRequests property of the microsoft.graph.schedule entity.
 */
export class OpenShiftChangeRequestsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the openShiftChangeRequests property of the microsoft.graph.schedule entity.
     * @param openShiftChangeRequestId The unique identifier of openShiftChangeRequest
     * @returns a OpenShiftChangeRequestItemRequestBuilder
     */
    public byOpenShiftChangeRequestId(openShiftChangeRequestId: string) : OpenShiftChangeRequestItemRequestBuilder {
        if(!openShiftChangeRequestId) throw new Error("openShiftChangeRequestId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["openShiftChangeRequest%2Did"] = openShiftChangeRequestId
        return new OpenShiftChangeRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new OpenShiftChangeRequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/joinedTeams/{team%2Did}/schedule/openShiftChangeRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of openShiftChangeRequest objects in a team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OpenShiftChangeRequestCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/openshiftchangerequest-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: OpenShiftChangeRequestsRequestBuilderGetRequestConfiguration | undefined) : Promise<OpenShiftChangeRequestCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OpenShiftChangeRequestCollectionResponse>(requestInfo, createOpenShiftChangeRequestCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create instance of an openShiftChangeRequest object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OpenShiftChangeRequest
     * @see {@link https://learn.microsoft.com/graph/api/openshiftchangerequest-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: OpenShiftChangeRequest, requestConfiguration?: OpenShiftChangeRequestsRequestBuilderPostRequestConfiguration | undefined) : Promise<OpenShiftChangeRequest | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OpenShiftChangeRequest>(requestInfo, createOpenShiftChangeRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of openShiftChangeRequest objects in a team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OpenShiftChangeRequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create instance of an openShiftChangeRequest object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: OpenShiftChangeRequest, requestConfiguration?: OpenShiftChangeRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeOpenShiftChangeRequest);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a openShiftChangeRequestsRequestBuilder
     */
    public withUrl(rawUrl: string) : OpenShiftChangeRequestsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new OpenShiftChangeRequestsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
