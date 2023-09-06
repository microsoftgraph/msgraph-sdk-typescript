import { type UserFlowLanguageConfigurationCollectionResponse } from '../../../../models/';
import { createUserFlowLanguageConfigurationCollectionResponseFromDiscriminatorValue } from '../../../../models/createUserFlowLanguageConfigurationCollectionResponseFromDiscriminatorValue';
import { createUserFlowLanguageConfigurationFromDiscriminatorValue } from '../../../../models/createUserFlowLanguageConfigurationFromDiscriminatorValue';
import { deserializeIntoUserFlowLanguageConfiguration } from '../../../../models/deserializeIntoUserFlowLanguageConfiguration';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { serializeUserFlowLanguageConfiguration } from '../../../../models/serializeUserFlowLanguageConfiguration';
import { type UserFlowLanguageConfiguration } from '../../../../models/userFlowLanguageConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { UserFlowLanguageConfigurationItemRequestBuilder } from './item/userFlowLanguageConfigurationItemRequestBuilder';
import { type LanguagesRequestBuilderGetRequestConfiguration } from './languagesRequestBuilderGetRequestConfiguration';
import { type LanguagesRequestBuilderPostRequestConfiguration } from './languagesRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the languages property of the microsoft.graph.b2xIdentityUserFlow entity.
 */
export class LanguagesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the languages property of the microsoft.graph.b2xIdentityUserFlow entity.
     * @param userFlowLanguageConfigurationId The unique identifier of userFlowLanguageConfiguration
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
     * Retrieve a list of languages supported for customization in a B2X user flow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserFlowLanguageConfigurationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/b2xidentityuserflow-list-languages?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: LanguagesRequestBuilderGetRequestConfiguration | undefined) : Promise<UserFlowLanguageConfigurationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserFlowLanguageConfigurationCollectionResponse>(requestInfo, createUserFlowLanguageConfigurationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to languages for identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserFlowLanguageConfiguration
     */
    public post(body: UserFlowLanguageConfiguration, requestConfiguration?: LanguagesRequestBuilderPostRequestConfiguration | undefined) : Promise<UserFlowLanguageConfiguration | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserFlowLanguageConfiguration>(requestInfo, createUserFlowLanguageConfigurationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of languages supported for customization in a B2X user flow.
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
    public toPostRequestInformation(body: UserFlowLanguageConfiguration, requestConfiguration?: LanguagesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserFlowLanguageConfiguration);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a languagesRequestBuilder
     */
    public withUrl(rawUrl: string) : LanguagesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new LanguagesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
