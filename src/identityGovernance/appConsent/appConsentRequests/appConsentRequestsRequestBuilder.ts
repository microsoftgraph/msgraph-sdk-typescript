import { type AppConsentRequestCollectionResponse } from '../../../models/';
import { createAppConsentRequestFromDiscriminatorValue, deserializeIntoAppConsentRequest, serializeAppConsentRequest, type AppConsentRequest } from '../../../models/appConsentRequest';
import { createAppConsentRequestCollectionResponseFromDiscriminatorValue } from '../../../models/appConsentRequestCollectionResponse';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { FilterByCurrentUserWithOnRequestBuilder } from './filterByCurrentUserWithOn/filterByCurrentUserWithOnRequestBuilder';
import { AppConsentRequestItemRequestBuilder } from './item/appConsentRequestItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface AppConsentRequestsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface AppConsentRequestsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: AppConsentRequestsRequestBuilderGetQueryParameters;
}
export interface AppConsentRequestsRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the appConsentRequests property of the microsoft.graph.appConsentApprovalRoute entity.
 */
export class AppConsentRequestsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the appConsentRequests property of the microsoft.graph.appConsentApprovalRoute entity.
     * @param appConsentRequestId The unique identifier of appConsentRequest
     * @returns a AppConsentRequestItemRequestBuilder
     */
    public byAppConsentRequestId(appConsentRequestId: string) : AppConsentRequestItemRequestBuilder {
        if(!appConsentRequestId) throw new Error("appConsentRequestId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["appConsentRequest%2Did"] = appConsentRequestId
        return new AppConsentRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AppConsentRequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/appConsent/appConsentRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Provides operations to call the filterByCurrentUser method.
     * @param on Usage: on='{on}'
     * @returns a filterByCurrentUserWithOnRequestBuilder
     */
    public filterByCurrentUserWithOn(on: string | undefined) : FilterByCurrentUserWithOnRequestBuilder {
        if(!on) throw new Error("on cannot be undefined");
        return new FilterByCurrentUserWithOnRequestBuilder(this.pathParameters, this.requestAdapter, on);
    };
    /**
     * Retrieve appConsentRequest objects and their properties. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AppConsentRequestCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/appconsentapprovalroute-list-appconsentrequests?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AppConsentRequestsRequestBuilderGetRequestConfiguration | undefined) : Promise<AppConsentRequestCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AppConsentRequestCollectionResponse>(requestInfo, createAppConsentRequestCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to appConsentRequests for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AppConsentRequest
     */
    public post(body: AppConsentRequest, requestConfiguration?: AppConsentRequestsRequestBuilderPostRequestConfiguration | undefined) : Promise<AppConsentRequest | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AppConsentRequest>(requestInfo, createAppConsentRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve appConsentRequest objects and their properties. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AppConsentRequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to appConsentRequests for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AppConsentRequest, requestConfiguration?: AppConsentRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAppConsentRequest);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a appConsentRequestsRequestBuilder
     */
    public withUrl(rawUrl: string) : AppConsentRequestsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AppConsentRequestsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
