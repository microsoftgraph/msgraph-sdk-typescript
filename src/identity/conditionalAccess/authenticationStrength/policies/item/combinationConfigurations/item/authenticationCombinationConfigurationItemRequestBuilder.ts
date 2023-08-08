import type {AuthenticationCombinationConfiguration} from '../../../../../../../models/authenticationCombinationConfiguration';
import {createAuthenticationCombinationConfigurationFromDiscriminatorValue} from '../../../../../../../models/createAuthenticationCombinationConfigurationFromDiscriminatorValue';
import {deserializeIntoAuthenticationCombinationConfiguration} from '../../../../../../../models/deserializeIntoAuthenticationCombinationConfiguration';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {serializeAuthenticationCombinationConfiguration} from '../../../../../../../models/serializeAuthenticationCombinationConfiguration';
import {AuthenticationCombinationConfigurationItemRequestBuilderDeleteRequestConfiguration} from './authenticationCombinationConfigurationItemRequestBuilderDeleteRequestConfiguration';
import {AuthenticationCombinationConfigurationItemRequestBuilderGetRequestConfiguration} from './authenticationCombinationConfigurationItemRequestBuilderGetRequestConfiguration';
import {AuthenticationCombinationConfigurationItemRequestBuilderPatchRequestConfiguration} from './authenticationCombinationConfigurationItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the combinationConfigurations property of the microsoft.graph.authenticationStrengthPolicy entity.
 */
export class AuthenticationCombinationConfigurationItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AuthenticationCombinationConfigurationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/conditionalAccess/authenticationStrength/policies/{authenticationStrengthPolicy%2Did}/combinationConfigurations/{authenticationCombinationConfiguration%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete an authenticationCombinationConfiguration  for a custom authenticationStrengthPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/authenticationstrengthpolicy-delete-combinationconfigurations?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: AuthenticationCombinationConfigurationItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of an authenticationCombinationConfiguration object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationCombinationConfiguration
     * @see {@link https://learn.microsoft.com/graph/api/authenticationcombinationconfiguration-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AuthenticationCombinationConfigurationItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AuthenticationCombinationConfiguration | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationCombinationConfiguration>(requestInfo, createAuthenticationCombinationConfigurationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of an authenticationCombinationConfiguration object. In use, only fido2combinationConfigurations may be updated as they are the only type of authenticationCombinationConfiguration that may be created.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationCombinationConfiguration
     * @see {@link https://learn.microsoft.com/graph/api/authenticationcombinationconfiguration-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: AuthenticationCombinationConfiguration, requestConfiguration?: AuthenticationCombinationConfigurationItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AuthenticationCombinationConfiguration | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuthenticationCombinationConfiguration>(requestInfo, createAuthenticationCombinationConfigurationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete an authenticationCombinationConfiguration  for a custom authenticationStrengthPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AuthenticationCombinationConfigurationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of an authenticationCombinationConfiguration object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AuthenticationCombinationConfigurationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of an authenticationCombinationConfiguration object. In use, only fido2combinationConfigurations may be updated as they are the only type of authenticationCombinationConfiguration that may be created.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AuthenticationCombinationConfiguration, requestConfiguration?: AuthenticationCombinationConfigurationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAuthenticationCombinationConfiguration);
        return requestInfo;
    };
}
