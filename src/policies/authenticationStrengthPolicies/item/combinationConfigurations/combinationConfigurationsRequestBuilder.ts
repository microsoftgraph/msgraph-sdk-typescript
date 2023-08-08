import {AuthenticationCombinationConfigurationCollectionResponse} from '../../../../models/';
import type {AuthenticationCombinationConfiguration} from '../../../../models/authenticationCombinationConfiguration';
import {createAuthenticationCombinationConfigurationCollectionResponseFromDiscriminatorValue} from '../../../../models/createAuthenticationCombinationConfigurationCollectionResponseFromDiscriminatorValue';
import {createAuthenticationCombinationConfigurationFromDiscriminatorValue} from '../../../../models/createAuthenticationCombinationConfigurationFromDiscriminatorValue';
import {deserializeIntoAuthenticationCombinationConfiguration} from '../../../../models/deserializeIntoAuthenticationCombinationConfiguration';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeAuthenticationCombinationConfiguration} from '../../../../models/serializeAuthenticationCombinationConfiguration';
import {CombinationConfigurationsRequestBuilderGetRequestConfiguration} from './combinationConfigurationsRequestBuilderGetRequestConfiguration';
import {CombinationConfigurationsRequestBuilderPostRequestConfiguration} from './combinationConfigurationsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AuthenticationCombinationConfigurationItemRequestBuilder} from './item/authenticationCombinationConfigurationItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the combinationConfigurations property of the microsoft.graph.authenticationStrengthPolicy entity.
 */
export class CombinationConfigurationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the combinationConfigurations property of the microsoft.graph.authenticationStrengthPolicy entity.
     * @param authenticationCombinationConfigurationId Unique identifier of the item
     * @returns a AuthenticationCombinationConfigurationItemRequestBuilder
     */
    public byAuthenticationCombinationConfigurationId(authenticationCombinationConfigurationId: string) : AuthenticationCombinationConfigurationItemRequestBuilder {
        if(!authenticationCombinationConfigurationId) throw new Error("authenticationCombinationConfigurationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["authenticationCombinationConfiguration%2Did"] = authenticationCombinationConfigurationId
        return new AuthenticationCombinationConfigurationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CombinationConfigurationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy%2Did}/combinationConfigurations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the authenticationCombinationConfiguration objects for an authentication strength policy. authenticationCombinationConfiguration represents requirements placed on specific authentication method combinations that require specified variants of those authentication methods to be used when authenticating. Currently, only fido2combinationConfigurations objects are supported. authenticationCombinationConfiguration objects are supported only for custom authentication strengths.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationCombinationConfigurationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/authenticationstrengthpolicy-list-combinationconfigurations?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: CombinationConfigurationsRequestBuilderGetRequestConfiguration | undefined) : Promise<AuthenticationCombinationConfigurationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationCombinationConfigurationCollectionResponse>(requestInfo, createAuthenticationCombinationConfigurationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new authenticationCombinationConfiguration object. In use, only fido2combinationConfigurations may be created, and these may only be created for custom authentication strength policies.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationCombinationConfiguration
     * @see {@link https://learn.microsoft.com/graph/api/authenticationstrengthpolicy-post-combinationconfigurations?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AuthenticationCombinationConfiguration, requestConfiguration?: CombinationConfigurationsRequestBuilderPostRequestConfiguration | undefined) : Promise<AuthenticationCombinationConfiguration | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationCombinationConfiguration>(requestInfo, createAuthenticationCombinationConfigurationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the authenticationCombinationConfiguration objects for an authentication strength policy. authenticationCombinationConfiguration represents requirements placed on specific authentication method combinations that require specified variants of those authentication methods to be used when authenticating. Currently, only fido2combinationConfigurations objects are supported. authenticationCombinationConfiguration objects are supported only for custom authentication strengths.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CombinationConfigurationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new authenticationCombinationConfiguration object. In use, only fido2combinationConfigurations may be created, and these may only be created for custom authentication strength policies.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AuthenticationCombinationConfiguration, requestConfiguration?: CombinationConfigurationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAuthenticationCombinationConfiguration);
        return requestInfo;
    };
}
