import type {AuthenticationStrengthPolicy} from '../../../models/authenticationStrengthPolicy';
import {createAuthenticationStrengthPolicyFromDiscriminatorValue} from '../../../models/createAuthenticationStrengthPolicyFromDiscriminatorValue';
import {deserializeIntoAuthenticationStrengthPolicy} from '../../../models/deserializeIntoAuthenticationStrengthPolicy';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeAuthenticationStrengthPolicy} from '../../../models/serializeAuthenticationStrengthPolicy';
import {AuthenticationStrengthPolicyItemRequestBuilderDeleteRequestConfiguration} from './authenticationStrengthPolicyItemRequestBuilderDeleteRequestConfiguration';
import {AuthenticationStrengthPolicyItemRequestBuilderGetRequestConfiguration} from './authenticationStrengthPolicyItemRequestBuilderGetRequestConfiguration';
import {AuthenticationStrengthPolicyItemRequestBuilderPatchRequestConfiguration} from './authenticationStrengthPolicyItemRequestBuilderPatchRequestConfiguration';
import {CombinationConfigurationsRequestBuilder} from './combinationConfigurations/combinationConfigurationsRequestBuilder';
import {UpdateAllowedCombinationsRequestBuilder} from './updateAllowedCombinations/updateAllowedCombinationsRequestBuilder';
import {UsageRequestBuilder} from './usage/usageRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the authenticationStrengthPolicies property of the microsoft.graph.policyRoot entity.
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
        super(pathParameters, requestAdapter, "{+baseurl}/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a custom authenticationStrengthPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/authenticationstrengthroot-delete-policies?view=graph-rest-1.0|Find more info here}
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
     * Read the properties and relationships of an authenticationStrengthPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationStrengthPolicy
     * @see {@link https://learn.microsoft.com/graph/api/authenticationstrengthpolicy-get?view=graph-rest-1.0|Find more info here}
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
     * Update the properties of an authenticationStrengthPolicy object. You cannot update the allowed auth method combinations using this request. To do so, use the Update allowed combinations action.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationStrengthPolicy
     * @see {@link https://learn.microsoft.com/graph/api/authenticationstrengthpolicy-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: AuthenticationStrengthPolicy | undefined, requestConfiguration?: AuthenticationStrengthPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AuthenticationStrengthPolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
     * Delete a custom authenticationStrengthPolicy object.
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
     * Read the properties and relationships of an authenticationStrengthPolicy object.
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
     * Update the properties of an authenticationStrengthPolicy object. You cannot update the allowed auth method combinations using this request. To do so, use the Update allowed combinations action.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AuthenticationStrengthPolicy | undefined, requestConfiguration?: AuthenticationStrengthPolicyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAuthenticationStrengthPolicy);
        return requestInfo;
    };
}
