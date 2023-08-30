import {UserConsentRequestCollectionResponse} from '../../../../../models/';
import {createUserConsentRequestCollectionResponseFromDiscriminatorValue} from '../../../../../models/createUserConsentRequestCollectionResponseFromDiscriminatorValue';
import {createUserConsentRequestFromDiscriminatorValue} from '../../../../../models/createUserConsentRequestFromDiscriminatorValue';
import {deserializeIntoUserConsentRequest} from '../../../../../models/deserializeIntoUserConsentRequest';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeUserConsentRequest} from '../../../../../models/serializeUserConsentRequest';
import type {UserConsentRequest} from '../../../../../models/userConsentRequest';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {FilterByCurrentUserWithOnRequestBuilder} from './filterByCurrentUserWithOn/filterByCurrentUserWithOnRequestBuilder';
import {UserConsentRequestItemRequestBuilder} from './item/userConsentRequestItemRequestBuilder';
import {UserConsentRequestsRequestBuilderGetRequestConfiguration} from './userConsentRequestsRequestBuilderGetRequestConfiguration';
import {UserConsentRequestsRequestBuilderPostRequestConfiguration} from './userConsentRequestsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userConsentRequests property of the microsoft.graph.appConsentRequest entity.
 */
export class UserConsentRequestsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userConsentRequests property of the microsoft.graph.appConsentRequest entity.
     * @param userConsentRequestId The unique identifier of userConsentRequest
     * @returns a UserConsentRequestItemRequestBuilder
     */
    public byUserConsentRequestId(userConsentRequestId: string) : UserConsentRequestItemRequestBuilder {
        if(!userConsentRequestId) throw new Error("userConsentRequestId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userConsentRequest%2Did"] = userConsentRequestId
        return new UserConsentRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserConsentRequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/appConsent/appConsentRequests/{appConsentRequest%2Did}/userConsentRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
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
     * Retrieve a collection of userConsentRequest objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserConsentRequestCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/appconsentrequest-list-userconsentrequests?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UserConsentRequestsRequestBuilderGetRequestConfiguration | undefined) : Promise<UserConsentRequestCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserConsentRequestCollectionResponse>(requestInfo, createUserConsentRequestCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userConsentRequests for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserConsentRequest
     */
    public post(body: UserConsentRequest, requestConfiguration?: UserConsentRequestsRequestBuilderPostRequestConfiguration | undefined) : Promise<UserConsentRequest | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserConsentRequest>(requestInfo, createUserConsentRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a collection of userConsentRequest objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserConsentRequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userConsentRequests for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserConsentRequest, requestConfiguration?: UserConsentRequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserConsentRequest);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a userConsentRequestsRequestBuilder
     */
    public withUrl(rawUrl: string) : UserConsentRequestsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UserConsentRequestsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
