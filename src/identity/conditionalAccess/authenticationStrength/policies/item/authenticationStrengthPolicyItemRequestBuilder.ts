import { type AuthenticationStrengthPolicy } from '../../../../../models/authenticationStrengthPolicy';
import { createAuthenticationStrengthPolicyFromDiscriminatorValue } from '../../../../../models/createAuthenticationStrengthPolicyFromDiscriminatorValue';
import { deserializeIntoAuthenticationStrengthPolicy } from '../../../../../models/deserializeIntoAuthenticationStrengthPolicy';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { serializeAuthenticationStrengthPolicy } from '../../../../../models/serializeAuthenticationStrengthPolicy';
import { type AuthenticationStrengthPolicyItemRequestBuilderDeleteRequestConfiguration } from './authenticationStrengthPolicyItemRequestBuilderDeleteRequestConfiguration';
import { type AuthenticationStrengthPolicyItemRequestBuilderGetRequestConfiguration } from './authenticationStrengthPolicyItemRequestBuilderGetRequestConfiguration';
import { type AuthenticationStrengthPolicyItemRequestBuilderPatchRequestConfiguration } from './authenticationStrengthPolicyItemRequestBuilderPatchRequestConfiguration';
import { CombinationConfigurationsRequestBuilder } from './combinationConfigurations/combinationConfigurationsRequestBuilder';
import { UpdateAllowedCombinationsRequestBuilder } from './updateAllowedCombinations/updateAllowedCombinationsRequestBuilder';
import { UsageRequestBuilder } from './usage/usageRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the policies property of the microsoft.graph.authenticationStrengthRoot entity.
 */
export class AuthenticationStrengthPolicyItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the combinationConfigurations property of the microsoft.graph.authenticationStrengthPolicy entity.
     */
    public get combinationConfigurations(): CombinationConfigurationsRequestBuilder {
        return new CombinationConfigurationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the updateAllowedCombinations method.
     */
    public get updateAllowedCombinations(): UpdateAllowedCombinationsRequestBuilder {
        return new UpdateAllowedCombinationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the usage method.
     */
    public get usage(): UsageRequestBuilder {
        return new UsageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AuthenticationStrengthPolicyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property policies for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AuthenticationStrengthPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * A collection of authentication strength policies that exist for this tenant, including both built-in and custom policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationStrengthPolicy
     */
    public get(requestConfiguration?: AuthenticationStrengthPolicyItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AuthenticationStrengthPolicy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationStrengthPolicy>(requestInfo, createAuthenticationStrengthPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property policies in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationStrengthPolicy
     */
    public patch(body: AuthenticationStrengthPolicy, requestConfiguration?: AuthenticationStrengthPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AuthenticationStrengthPolicy | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationStrengthPolicy>(requestInfo, createAuthenticationStrengthPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property policies for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AuthenticationStrengthPolicyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * A collection of authentication strength policies that exist for this tenant, including both built-in and custom policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AuthenticationStrengthPolicyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property policies in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AuthenticationStrengthPolicy, requestConfiguration?: AuthenticationStrengthPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAuthenticationStrengthPolicy);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a AuthenticationStrengthPolicyItemRequestBuilder
     */
    public withUrl(rawUrl: string) : AuthenticationStrengthPolicyItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AuthenticationStrengthPolicyItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
