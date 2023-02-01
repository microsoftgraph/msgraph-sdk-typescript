import {UserFlowLanguageConfiguration} from '../../../../../models/';
import {createUserFlowLanguageConfigurationFromDiscriminatorValue} from '../../../../../models/createUserFlowLanguageConfigurationFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {DefaultPagesRequestBuilder} from './defaultPages/defaultPagesRequestBuilder';
import {UserFlowLanguagePageItemRequestBuilder as I3ab4d590052fd74eee324a8325a2f14715700a273414960dc723c4305963bba3} from './defaultPages/item/userFlowLanguagePageItemRequestBuilder';
import {UserFlowLanguagePageItemRequestBuilder as Idef24b8bfc0dc333f97f637fc58518fe3e107b5e98cdba63af20ee968a2c4339} from './overridesPages/item/userFlowLanguagePageItemRequestBuilder';
import {OverridesPagesRequestBuilder} from './overridesPages/overridesPagesRequestBuilder';
import {UserFlowLanguageConfigurationItemRequestBuilderDeleteRequestConfiguration} from './userFlowLanguageConfigurationItemRequestBuilderDeleteRequestConfiguration';
import {UserFlowLanguageConfigurationItemRequestBuilderGetRequestConfiguration} from './userFlowLanguageConfigurationItemRequestBuilderGetRequestConfiguration';
import {UserFlowLanguageConfigurationItemRequestBuilderPatchRequestConfiguration} from './userFlowLanguageConfigurationItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the languages property of the microsoft.graph.b2xIdentityUserFlow entity.
 */
export class UserFlowLanguageConfigurationItemRequestBuilder {
    /** Provides operations to manage the defaultPages property of the microsoft.graph.userFlowLanguageConfiguration entity. */
    public get defaultPages(): DefaultPagesRequestBuilder {
        return new DefaultPagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the overridesPages property of the microsoft.graph.userFlowLanguageConfiguration entity. */
    public get overridesPages(): OverridesPagesRequestBuilder {
        return new OverridesPagesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new UserFlowLanguageConfigurationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param userFlowLanguageConfigurationId key: id of userFlowLanguageConfiguration
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, userFlowLanguageConfigurationId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identity/b2xUserFlows/{b2xIdentityUserFlow%2Did}/languages/{userFlowLanguageConfiguration%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["userFlowLanguageConfiguration%2Did"] = userFlowLanguageConfigurationId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Provides operations to manage the defaultPages property of the microsoft.graph.userFlowLanguageConfiguration entity.
     * @param id Unique identifier of the item
     * @returns a UserFlowLanguagePageItemRequestBuilder
     */
    public defaultPagesById(id: string) : I3ab4d590052fd74eee324a8325a2f14715700a273414960dc723c4305963bba3 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userFlowLanguagePage%2Did"] = id
        return new I3ab4d590052fd74eee324a8325a2f14715700a273414960dc723c4305963bba3(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property languages for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: UserFlowLanguageConfigurationItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign-up user flow. You cannot create custom languages in self-service sign-up user flows.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UserFlowLanguageConfiguration
     */
    public get(requestConfiguration?: UserFlowLanguageConfigurationItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UserFlowLanguageConfiguration | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<UserFlowLanguageConfiguration>(requestInfo, createUserFlowLanguageConfigurationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the overridesPages property of the microsoft.graph.userFlowLanguageConfiguration entity.
     * @param id Unique identifier of the item
     * @returns a UserFlowLanguagePageItemRequestBuilder
     */
    public overridesPagesById(id: string) : Idef24b8bfc0dc333f97f637fc58518fe3e107b5e98cdba63af20ee968a2c4339 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userFlowLanguagePage%2Did"] = id
        return new Idef24b8bfc0dc333f97f637fc58518fe3e107b5e98cdba63af20ee968a2c4339(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property languages in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UserFlowLanguageConfiguration
     */
    public patch(body: UserFlowLanguageConfiguration | undefined, requestConfiguration?: UserFlowLanguageConfigurationItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UserFlowLanguageConfiguration | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<UserFlowLanguageConfiguration>(requestInfo, createUserFlowLanguageConfigurationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
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
     * The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign-up user flow. You cannot create custom languages in self-service sign-up user flows.
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
    public toPatchRequestInformation(body: UserFlowLanguageConfiguration | undefined, requestConfiguration?: UserFlowLanguageConfigurationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
