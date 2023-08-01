import type {AuthenticationMethodsPolicy} from '../models/authenticationMethodsPolicy';
import {createAuthenticationMethodsPolicyFromDiscriminatorValue} from '../models/createAuthenticationMethodsPolicyFromDiscriminatorValue';
import {deserializeIntoAuthenticationMethodsPolicy} from '../models/deserializeIntoAuthenticationMethodsPolicy';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeAuthenticationMethodsPolicy} from '../models/serializeAuthenticationMethodsPolicy';
import {AuthenticationMethodConfigurationsRequestBuilder} from './authenticationMethodConfigurations/authenticationMethodConfigurationsRequestBuilder';
import {AuthenticationMethodsPolicyRequestBuilderGetRequestConfiguration} from './authenticationMethodsPolicyRequestBuilderGetRequestConfiguration';
import {AuthenticationMethodsPolicyRequestBuilderPatchRequestConfiguration} from './authenticationMethodsPolicyRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the authenticationMethodsPolicy singleton.
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
        super(pathParameters, requestAdapter, "{+baseurl}/authenticationMethodsPolicy{?%24select,%24expand}");
    };
    /**
     * Get authenticationMethodsPolicy
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationMethodsPolicy
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
     * Update authenticationMethodsPolicy
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationMethodsPolicy
     */
    public patch(body: AuthenticationMethodsPolicy | undefined, requestConfiguration?: AuthenticationMethodsPolicyRequestBuilderPatchRequestConfiguration | undefined) : Promise<AuthenticationMethodsPolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
     * Get authenticationMethodsPolicy
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
     * Update authenticationMethodsPolicy
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AuthenticationMethodsPolicy | undefined, requestConfiguration?: AuthenticationMethodsPolicyRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAuthenticationMethodsPolicy);
        return requestInfo;
    };
}
