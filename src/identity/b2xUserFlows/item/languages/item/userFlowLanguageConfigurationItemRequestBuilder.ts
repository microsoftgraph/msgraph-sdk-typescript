import { createUserFlowLanguageConfigurationFromDiscriminatorValue } from '../../../../../models/createUserFlowLanguageConfigurationFromDiscriminatorValue';
import { deserializeIntoUserFlowLanguageConfiguration } from '../../../../../models/deserializeIntoUserFlowLanguageConfiguration';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { serializeUserFlowLanguageConfiguration } from '../../../../../models/serializeUserFlowLanguageConfiguration';
import { type UserFlowLanguageConfiguration } from '../../../../../models/userFlowLanguageConfiguration';
import { DefaultPagesRequestBuilder } from './defaultPages/defaultPagesRequestBuilder';
import { OverridesPagesRequestBuilder } from './overridesPages/overridesPagesRequestBuilder';
import { type UserFlowLanguageConfigurationItemRequestBuilderDeleteRequestConfiguration } from './userFlowLanguageConfigurationItemRequestBuilderDeleteRequestConfiguration';
import { type UserFlowLanguageConfigurationItemRequestBuilderGetRequestConfiguration } from './userFlowLanguageConfigurationItemRequestBuilderGetRequestConfiguration';
import { type UserFlowLanguageConfigurationItemRequestBuilderPatchRequestConfiguration } from './userFlowLanguageConfigurationItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the languages property of the microsoft.graph.b2xIdentityUserFlow entity.
 */
export class UserFlowLanguageConfigurationItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the defaultPages property of the microsoft.graph.userFlowLanguageConfiguration entity.
     */
    public get defaultPages(): DefaultPagesRequestBuilder {
        return new DefaultPagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the overridesPages property of the microsoft.graph.userFlowLanguageConfiguration entity.
     */
    public get overridesPages(): OverridesPagesRequestBuilder {
        return new OverridesPagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new UserFlowLanguageConfigurationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/b2xUserFlows/{b2xIdentityUserFlow%2Did}/languages/{userFlowLanguageConfiguration%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property languages for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UserFlowLanguageConfigurationItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a userFlowLanguageConfiguration object. These objects represent a language available in a user flow. Note: Language customization is enabled by default in Azure Active Directory user flows.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserFlowLanguageConfiguration
     * @see {@link https://learn.microsoft.com/graph/api/userflowlanguageconfiguration-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UserFlowLanguageConfigurationItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UserFlowLanguageConfiguration | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserFlowLanguageConfiguration>(requestInfo, createUserFlowLanguageConfigurationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property languages in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserFlowLanguageConfiguration
     */
    public patch(body: UserFlowLanguageConfiguration, requestConfiguration?: UserFlowLanguageConfigurationItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UserFlowLanguageConfiguration | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserFlowLanguageConfiguration>(requestInfo, createUserFlowLanguageConfigurationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property languages for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UserFlowLanguageConfigurationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a userFlowLanguageConfiguration object. These objects represent a language available in a user flow. Note: Language customization is enabled by default in Azure Active Directory user flows.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserFlowLanguageConfigurationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property languages in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UserFlowLanguageConfiguration, requestConfiguration?: UserFlowLanguageConfigurationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserFlowLanguageConfiguration);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a UserFlowLanguageConfigurationItemRequestBuilder
     */
    public withUrl(rawUrl: string) : UserFlowLanguageConfigurationItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UserFlowLanguageConfigurationItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
