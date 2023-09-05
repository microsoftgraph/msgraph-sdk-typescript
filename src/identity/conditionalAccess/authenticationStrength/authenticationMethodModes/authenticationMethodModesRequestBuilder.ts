import { type AuthenticationMethodModeDetailCollectionResponse } from '../../../../models/';
import { type AuthenticationMethodModeDetail } from '../../../../models/authenticationMethodModeDetail';
import { createAuthenticationMethodModeDetailCollectionResponseFromDiscriminatorValue } from '../../../../models/createAuthenticationMethodModeDetailCollectionResponseFromDiscriminatorValue';
import { createAuthenticationMethodModeDetailFromDiscriminatorValue } from '../../../../models/createAuthenticationMethodModeDetailFromDiscriminatorValue';
import { deserializeIntoAuthenticationMethodModeDetail } from '../../../../models/deserializeIntoAuthenticationMethodModeDetail';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { serializeAuthenticationMethodModeDetail } from '../../../../models/serializeAuthenticationMethodModeDetail';
import { type AuthenticationMethodModesRequestBuilderGetRequestConfiguration } from './authenticationMethodModesRequestBuilderGetRequestConfiguration';
import { type AuthenticationMethodModesRequestBuilderPostRequestConfiguration } from './authenticationMethodModesRequestBuilderPostRequestConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { AuthenticationMethodModeDetailItemRequestBuilder } from './item/authenticationMethodModeDetailItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the authenticationMethodModes property of the microsoft.graph.authenticationStrengthRoot entity.
 */
export class AuthenticationMethodModesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the authenticationMethodModes property of the microsoft.graph.authenticationStrengthRoot entity.
     * @param authenticationMethodModeDetailId The unique identifier of authenticationMethodModeDetail
     * @returns a AuthenticationMethodModeDetailItemRequestBuilder
     */
    public byAuthenticationMethodModeDetailId(authenticationMethodModeDetailId: string) : AuthenticationMethodModeDetailItemRequestBuilder {
        if(!authenticationMethodModeDetailId) throw new Error("authenticationMethodModeDetailId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["authenticationMethodModeDetail%2Did"] = authenticationMethodModeDetailId
        return new AuthenticationMethodModeDetailItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AuthenticationMethodModesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/conditionalAccess/authenticationStrength/authenticationMethodModes{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of all supported authentication methods, or all supported authentication method combinations as a list of authenticationMethodModes objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationMethodModeDetailCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/authenticationstrengthroot-list-authenticationmethodmodes?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AuthenticationMethodModesRequestBuilderGetRequestConfiguration | undefined) : Promise<AuthenticationMethodModeDetailCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationMethodModeDetailCollectionResponse>(requestInfo, createAuthenticationMethodModeDetailCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to authenticationMethodModes for identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationMethodModeDetail
     */
    public post(body: AuthenticationMethodModeDetail, requestConfiguration?: AuthenticationMethodModesRequestBuilderPostRequestConfiguration | undefined) : Promise<AuthenticationMethodModeDetail | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationMethodModeDetail>(requestInfo, createAuthenticationMethodModeDetailFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of all supported authentication methods, or all supported authentication method combinations as a list of authenticationMethodModes objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AuthenticationMethodModesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to authenticationMethodModes for identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AuthenticationMethodModeDetail, requestConfiguration?: AuthenticationMethodModesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAuthenticationMethodModeDetail);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a authenticationMethodModesRequestBuilder
     */
    public withUrl(rawUrl: string) : AuthenticationMethodModesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AuthenticationMethodModesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
