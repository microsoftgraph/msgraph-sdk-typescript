import {AppLogCollectionRequestCollectionResponse} from '../../../../models/';
import type {AppLogCollectionRequest} from '../../../../models/appLogCollectionRequest';
import {createAppLogCollectionRequestCollectionResponseFromDiscriminatorValue} from '../../../../models/createAppLogCollectionRequestCollectionResponseFromDiscriminatorValue';
import {createAppLogCollectionRequestFromDiscriminatorValue} from '../../../../models/createAppLogCollectionRequestFromDiscriminatorValue';
import {deserializeIntoAppLogCollectionRequest} from '../../../../models/deserializeIntoAppLogCollectionRequest';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeAppLogCollectionRequest} from '../../../../models/serializeAppLogCollectionRequest';
import {AppLogCollectionRequestsRequestBuilderGetRequestConfiguration} from './appLogCollectionRequestsRequestBuilderGetRequestConfiguration';
import {AppLogCollectionRequestsRequestBuilderPostRequestConfiguration} from './appLogCollectionRequestsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AppLogCollectionRequestItemRequestBuilder} from './item/appLogCollectionRequestItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the appLogCollectionRequests property of the microsoft.graph.mobileAppTroubleshootingEvent entity.
 */
export class AppLogCollectionRequestsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the appLogCollectionRequests property of the microsoft.graph.mobileAppTroubleshootingEvent entity.
     * @param appLogCollectionRequestId The unique identifier of appLogCollectionRequest
     * @returns a AppLogCollectionRequestItemRequestBuilder
     */
    public byAppLogCollectionRequestId(appLogCollectionRequestId: string) : AppLogCollectionRequestItemRequestBuilder {
        if(!appLogCollectionRequestId) throw new Error("appLogCollectionRequestId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["appLogCollectionRequest%2Did"] = appLogCollectionRequestId
        return new AppLogCollectionRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AppLogCollectionRequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/mobileAppTroubleshootingEvents/{mobileAppTroubleshootingEvent%2Did}/appLogCollectionRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the appLogCollectionRequest objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AppLogCollectionRequestCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-devices-applogcollectionrequest-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AppLogCollectionRequestsRequestBuilderGetRequestConfiguration | undefined) : Promise<AppLogCollectionRequestCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AppLogCollectionRequestCollectionResponse>(requestInfo, createAppLogCollectionRequestCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new appLogCollectionRequest object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AppLogCollectionRequest
     * @see {@link https://learn.microsoft.com/graph/api/intune-devices-applogcollectionrequest-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AppLogCollectionRequest, requestConfiguration?: AppLogCollectionRequestsRequestBuilderPostRequestConfiguration | undefined) : Promise<AppLogCollectionRequest | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AppLogCollectionRequest>(requestInfo, createAppLogCollectionRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the appLogCollectionRequest objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AppLogCollectionRequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new appLogCollectionRequest object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AppLogCollectionRequest, requestConfiguration?: AppLogCollectionRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAppLogCollectionRequest);
        return requestInfo;
    };
}
