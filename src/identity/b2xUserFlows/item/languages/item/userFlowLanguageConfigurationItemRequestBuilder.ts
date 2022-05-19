import {UserFlowLanguageConfiguration} from '../../../../../models/';
import {createUserFlowLanguageConfigurationFromDiscriminatorValue} from '../../../../../models/createUserFlowLanguageConfigurationFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {DefaultPagesRequestBuilder} from './defaultPages/defaultPagesRequestBuilder';
import {UserFlowLanguagePageItemRequestBuilder as i6aeadeee81ad1d48c1efd195ff388082a0958b3e29492864eae87d102709f08f} from './defaultPages/item/userFlowLanguagePageItemRequestBuilder';
import {UserFlowLanguagePageItemRequestBuilder as i3b49bcfaf80c52cf8321b8cdc7b130961ff8a5193a09b2aaa8acdd90c5aaedcd} from './overridesPages/item/userFlowLanguagePageItemRequestBuilder';
import {OverridesPagesRequestBuilder} from './overridesPages/overridesPagesRequestBuilder';
import {UserFlowLanguageConfigurationItemRequestBuilderDeleteRequestConfiguration} from './userFlowLanguageConfigurationItemRequestBuilderDeleteRequestConfiguration';
import {UserFlowLanguageConfigurationItemRequestBuilderGetRequestConfiguration} from './userFlowLanguageConfigurationItemRequestBuilderGetRequestConfiguration';
import {UserFlowLanguageConfigurationItemRequestBuilderPatchRequestConfiguration} from './userFlowLanguageConfigurationItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the languages property of the microsoft.graph.b2xIdentityUserFlow entity. */
export class UserFlowLanguageConfigurationItemRequestBuilder {
    /** The defaultPages property */
    public get defaultPages(): DefaultPagesRequestBuilder {
        return new DefaultPagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The overridesPages property */
    public get overridesPages(): OverridesPagesRequestBuilder {
        return new OverridesPagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new UserFlowLanguageConfigurationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identity/b2xUserFlows/{b2xIdentityUserFlow%2Did}/languages/{userFlowLanguageConfiguration%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property languages for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: UserFlowLanguageConfigurationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign up user flow. You cannot create custom languages in self-service sign up user flows.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: UserFlowLanguageConfigurationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property languages in identity
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: UserFlowLanguageConfiguration | undefined, requestConfiguration?: UserFlowLanguageConfigurationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.identity.b2xUserFlows.item.languages.item.defaultPages.item collection
     * @param id Unique identifier of the item
     * @returns a userFlowLanguagePageItemRequestBuilder
     */
    public defaultPagesById(id: string) : i6aeadeee81ad1d48c1efd195ff388082a0958b3e29492864eae87d102709f08f {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userFlowLanguagePage%2Did"] = id
        return new i6aeadeee81ad1d48c1efd195ff388082a0958b3e29492864eae87d102709f08f(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property languages for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: UserFlowLanguageConfigurationItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign up user flow. You cannot create custom languages in self-service sign up user flows.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UserFlowLanguageConfiguration
     */
    public get(requestConfiguration?: UserFlowLanguageConfigurationItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UserFlowLanguageConfiguration | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<UserFlowLanguageConfiguration>(requestInfo, createUserFlowLanguageConfigurationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.identity.b2xUserFlows.item.languages.item.overridesPages.item collection
     * @param id Unique identifier of the item
     * @returns a userFlowLanguagePageItemRequestBuilder
     */
    public overridesPagesById(id: string) : i3b49bcfaf80c52cf8321b8cdc7b130961ff8a5193a09b2aaa8acdd90c5aaedcd {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userFlowLanguagePage%2Did"] = id
        return new i3b49bcfaf80c52cf8321b8cdc7b130961ff8a5193a09b2aaa8acdd90c5aaedcd(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property languages in identity
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: UserFlowLanguageConfiguration | undefined, requestConfiguration?: UserFlowLanguageConfigurationItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
}
