import type {AuthenticationMethod} from '../../../../../models/authenticationMethod';
import {createAuthenticationMethodFromDiscriminatorValue} from '../../../../../models/createAuthenticationMethodFromDiscriminatorValue';
import {deserializeIntoAuthenticationMethod} from '../../../../../models/deserializeIntoAuthenticationMethod';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeAuthenticationMethod} from '../../../../../models/serializeAuthenticationMethod';
import {AuthenticationMethodItemRequestBuilderGetRequestConfiguration} from './authenticationMethodItemRequestBuilderGetRequestConfiguration';
import {AuthenticationMethodItemRequestBuilderPatchRequestConfiguration} from './authenticationMethodItemRequestBuilderPatchRequestConfiguration';
import {ResetPasswordRequestBuilder} from './resetPassword/resetPasswordRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the methods property of the microsoft.graph.authentication entity.
 */
export class AuthenticationMethodItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the resetPassword method.
     */
    public get resetPassword(): ResetPasswordRequestBuilder {
        return new ResetPasswordRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AuthenticationMethodItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/authentication/methods/{authenticationMethod%2Did}{?%24select,%24expand}");
    };
    /**
     * Retrieve the properties and relationships of an authenticationMethod object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationMethod
     * @see {@link https://learn.microsoft.com/graph/api/authenticationmethod-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AuthenticationMethodItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AuthenticationMethod | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationMethod>(requestInfo, createAuthenticationMethodFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property methods in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationMethod
     */
    public patch(body: AuthenticationMethod, requestConfiguration?: AuthenticationMethodItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AuthenticationMethod | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationMethod>(requestInfo, createAuthenticationMethodFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the properties and relationships of an authenticationMethod object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AuthenticationMethodItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property methods in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AuthenticationMethod, requestConfiguration?: AuthenticationMethodItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAuthenticationMethod);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a AuthenticationMethodItemRequestBuilder
     */
    public withUrl(rawUrl: string) : AuthenticationMethodItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AuthenticationMethodItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
