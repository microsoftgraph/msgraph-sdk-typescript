import { type UserRegistrationDetailsCollectionResponse } from '../../../models/';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { createUserRegistrationDetailsFromDiscriminatorValue, deserializeIntoUserRegistrationDetails, serializeUserRegistrationDetails, type UserRegistrationDetails } from '../../../models/userRegistrationDetails';
import { createUserRegistrationDetailsCollectionResponseFromDiscriminatorValue } from '../../../models/userRegistrationDetailsCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { UserRegistrationDetailsItemRequestBuilder } from './item/userRegistrationDetailsItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface UserRegistrationDetailsRequestBuilderGetQueryParameters {
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
export interface UserRegistrationDetailsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: UserRegistrationDetailsRequestBuilderGetQueryParameters;
}
export interface UserRegistrationDetailsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the userRegistrationDetails property of the microsoft.graph.authenticationMethodsRoot entity.
 */
export class UserRegistrationDetailsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userRegistrationDetails property of the microsoft.graph.authenticationMethodsRoot entity.
     * @param userRegistrationDetailsId The unique identifier of userRegistrationDetails
     * @returns a UserRegistrationDetailsItemRequestBuilder
     */
    public byUserRegistrationDetailsId(userRegistrationDetailsId: string) : UserRegistrationDetailsItemRequestBuilder {
        if(!userRegistrationDetailsId) throw new Error("userRegistrationDetailsId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userRegistrationDetails%2Did"] = userRegistrationDetailsId
        return new UserRegistrationDetailsItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserRegistrationDetailsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/authenticationMethods/userRegistrationDetails{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the authentication methods registered for a user as defined in the userRegistrationDetails object. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserRegistrationDetailsCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/authenticationmethodsroot-list-userregistrationdetails?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UserRegistrationDetailsRequestBuilderGetRequestConfiguration | undefined) : Promise<UserRegistrationDetailsCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserRegistrationDetailsCollectionResponse>(requestInfo, createUserRegistrationDetailsCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to userRegistrationDetails for reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserRegistrationDetails
     */
    public post(body: UserRegistrationDetails, requestConfiguration?: UserRegistrationDetailsRequestBuilderPostRequestConfiguration | undefined) : Promise<UserRegistrationDetails | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserRegistrationDetails>(requestInfo, createUserRegistrationDetailsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the authentication methods registered for a user as defined in the userRegistrationDetails object. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserRegistrationDetailsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to userRegistrationDetails for reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserRegistrationDetails, requestConfiguration?: UserRegistrationDetailsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserRegistrationDetails);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a userRegistrationDetailsRequestBuilder
     */
    public withUrl(rawUrl: string) : UserRegistrationDetailsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UserRegistrationDetailsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
