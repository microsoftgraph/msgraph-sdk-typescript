import { createAuthenticationFlowsPolicyFromDiscriminatorValue, deserializeIntoAuthenticationFlowsPolicy, serializeAuthenticationFlowsPolicy, type AuthenticationFlowsPolicy } from '../../models/authenticationFlowsPolicy';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface AuthenticationFlowsPolicyRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface AuthenticationFlowsPolicyRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface AuthenticationFlowsPolicyRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AuthenticationFlowsPolicyRequestBuilderGetQueryParameters;
}
export interface AuthenticationFlowsPolicyRequestBuilderPatchRequestConfiguration {
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
 * Provides operations to manage the authenticationFlowsPolicy property of the microsoft.graph.policyRoot entity.
 */
export class AuthenticationFlowsPolicyRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AuthenticationFlowsPolicyRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/authenticationFlowsPolicy{?%24select,%24expand}");
    };
    /**
     * Delete navigation property authenticationFlowsPolicy for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AuthenticationFlowsPolicyRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of an authenticationFlowsPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationFlowsPolicy
     * @see {@link https://learn.microsoft.com/graph/api/authenticationflowspolicy-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AuthenticationFlowsPolicyRequestBuilderGetRequestConfiguration | undefined) : Promise<AuthenticationFlowsPolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationFlowsPolicy>(requestInfo, createAuthenticationFlowsPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the selfServiceSignUp property of an authenticationFlowsPolicy object. The properties id, type, and description cannot be modified.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationFlowsPolicy
     * @see {@link https://learn.microsoft.com/graph/api/authenticationflowspolicy-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: AuthenticationFlowsPolicy, requestConfiguration?: AuthenticationFlowsPolicyRequestBuilderPatchRequestConfiguration | undefined) : Promise<AuthenticationFlowsPolicy | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationFlowsPolicy>(requestInfo, createAuthenticationFlowsPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property authenticationFlowsPolicy for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AuthenticationFlowsPolicyRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of an authenticationFlowsPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AuthenticationFlowsPolicyRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the selfServiceSignUp property of an authenticationFlowsPolicy object. The properties id, type, and description cannot be modified.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AuthenticationFlowsPolicy, requestConfiguration?: AuthenticationFlowsPolicyRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAuthenticationFlowsPolicy);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a authenticationFlowsPolicyRequestBuilder
     */
    public withUrl(rawUrl: string) : AuthenticationFlowsPolicyRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AuthenticationFlowsPolicyRequestBuilder(rawUrl, this.requestAdapter);
    };
}
