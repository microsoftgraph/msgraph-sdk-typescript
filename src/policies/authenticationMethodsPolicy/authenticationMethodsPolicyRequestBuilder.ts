import { createAuthenticationMethodsPolicyFromDiscriminatorValue, deserializeIntoAuthenticationMethodsPolicy, serializeAuthenticationMethodsPolicy, type AuthenticationMethodsPolicy } from '../../models/authenticationMethodsPolicy';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { AuthenticationMethodConfigurationsRequestBuilder } from './authenticationMethodConfigurations/authenticationMethodConfigurationsRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface AuthenticationMethodsPolicyRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface AuthenticationMethodsPolicyRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface AuthenticationMethodsPolicyRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AuthenticationMethodsPolicyRequestBuilderGetQueryParameters;
}
export interface AuthenticationMethodsPolicyRequestBuilderPatchRequestConfiguration {
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
 * Provides operations to manage the authenticationMethodsPolicy property of the microsoft.graph.policyRoot entity.
 */
export class AuthenticationMethodsPolicyRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the authenticationMethodConfigurations property of the microsoft.graph.authenticationMethodsPolicy entity.
     */
    public get authenticationMethodConfigurations(): AuthenticationMethodConfigurationsRequestBuilder {
        return new AuthenticationMethodConfigurationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AuthenticationMethodsPolicyRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/authenticationMethodsPolicy{?%24select,%24expand}");
    };
    /**
     * Delete navigation property authenticationMethodsPolicy for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AuthenticationMethodsPolicyRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of an authenticationMethodsPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationMethodsPolicy
     * @see {@link https://learn.microsoft.com/graph/api/authenticationmethodspolicy-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AuthenticationMethodsPolicyRequestBuilderGetRequestConfiguration | undefined) : Promise<AuthenticationMethodsPolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationMethodsPolicy>(requestInfo, createAuthenticationMethodsPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of an authenticationMethodsPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationMethodsPolicy
     * @see {@link https://learn.microsoft.com/graph/api/authenticationmethodspolicy-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: AuthenticationMethodsPolicy, requestConfiguration?: AuthenticationMethodsPolicyRequestBuilderPatchRequestConfiguration | undefined) : Promise<AuthenticationMethodsPolicy | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationMethodsPolicy>(requestInfo, createAuthenticationMethodsPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property authenticationMethodsPolicy for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AuthenticationMethodsPolicyRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of an authenticationMethodsPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AuthenticationMethodsPolicyRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of an authenticationMethodsPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AuthenticationMethodsPolicy, requestConfiguration?: AuthenticationMethodsPolicyRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAuthenticationMethodsPolicy);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a authenticationMethodsPolicyRequestBuilder
     */
    public withUrl(rawUrl: string) : AuthenticationMethodsPolicyRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AuthenticationMethodsPolicyRequestBuilder(rawUrl, this.requestAdapter);
    };
}
