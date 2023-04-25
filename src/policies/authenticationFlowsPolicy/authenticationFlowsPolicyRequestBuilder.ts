import {AuthenticationFlowsPolicy} from '../../models/';
import {createAuthenticationFlowsPolicyFromDiscriminatorValue} from '../../models/createAuthenticationFlowsPolicyFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AuthenticationFlowsPolicyRequestBuilderDeleteRequestConfiguration} from './authenticationFlowsPolicyRequestBuilderDeleteRequestConfiguration';
import {AuthenticationFlowsPolicyRequestBuilderGetRequestConfiguration} from './authenticationFlowsPolicyRequestBuilderGetRequestConfiguration';
import {AuthenticationFlowsPolicyRequestBuilderPatchRequestConfiguration} from './authenticationFlowsPolicyRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

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
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: AuthenticationFlowsPolicyRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The policy configuration of the self-service sign-up experience of external users.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AuthenticationFlowsPolicy
     */
    public get(requestConfiguration?: AuthenticationFlowsPolicyRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AuthenticationFlowsPolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AuthenticationFlowsPolicy>(requestInfo, createAuthenticationFlowsPolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property authenticationFlowsPolicy in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AuthenticationFlowsPolicy
     */
    public patch(body: AuthenticationFlowsPolicy | undefined, requestConfiguration?: AuthenticationFlowsPolicyRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AuthenticationFlowsPolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AuthenticationFlowsPolicy>(requestInfo, createAuthenticationFlowsPolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
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
     * The policy configuration of the self-service sign-up experience of external users.
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
     * Update the navigation property authenticationFlowsPolicy in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AuthenticationFlowsPolicy | undefined, requestConfiguration?: AuthenticationFlowsPolicyRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
