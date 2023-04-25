import {UserFlowLanguageConfiguration, UserFlowLanguageConfigurationCollectionResponse} from '../../../../models/';
import {createUserFlowLanguageConfigurationCollectionResponseFromDiscriminatorValue} from '../../../../models/createUserFlowLanguageConfigurationCollectionResponseFromDiscriminatorValue';
import {createUserFlowLanguageConfigurationFromDiscriminatorValue} from '../../../../models/createUserFlowLanguageConfigurationFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserFlowLanguageConfigurationItemRequestBuilder} from './item/userFlowLanguageConfigurationItemRequestBuilder';
import {LanguagesRequestBuilderGetRequestConfiguration} from './languagesRequestBuilderGetRequestConfiguration';
import {LanguagesRequestBuilderPostRequestConfiguration} from './languagesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the languages property of the microsoft.graph.b2xIdentityUserFlow entity.
 */
export class LanguagesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the languages property of the microsoft.graph.b2xIdentityUserFlow entity.
     * @param userFlowLanguageConfigurationId Unique identifier of the item
     * @returns a UserFlowLanguageConfigurationItemRequestBuilder
     */
    public byUserFlowLanguageConfigurationId(userFlowLanguageConfigurationId: string) : UserFlowLanguageConfigurationItemRequestBuilder {
        if(!userFlowLanguageConfigurationId) throw new Error("userFlowLanguageConfigurationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userFlowLanguageConfiguration%2Did"] = userFlowLanguageConfigurationId
        return new UserFlowLanguageConfigurationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new LanguagesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/b2xUserFlows/{b2xIdentityUserFlow%2Did}/languages{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign-up user flow. You cannot create custom languages in self-service sign-up user flows.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UserFlowLanguageConfigurationCollectionResponse
     */
    public get(requestConfiguration?: LanguagesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UserFlowLanguageConfigurationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<UserFlowLanguageConfigurationCollectionResponse>(requestInfo, createUserFlowLanguageConfigurationCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to languages for identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UserFlowLanguageConfiguration
     */
    public post(body: UserFlowLanguageConfiguration | undefined, requestConfiguration?: LanguagesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UserFlowLanguageConfiguration | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<UserFlowLanguageConfiguration>(requestInfo, createUserFlowLanguageConfigurationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The languages supported for customization within the user flow. Language customization is enabled by default in self-service sign-up user flow. You cannot create custom languages in self-service sign-up user flows.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: LanguagesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to languages for identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserFlowLanguageConfiguration | undefined, requestConfiguration?: LanguagesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
