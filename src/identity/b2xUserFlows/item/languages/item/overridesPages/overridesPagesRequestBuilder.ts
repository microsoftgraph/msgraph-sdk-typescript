import {UserFlowLanguagePageCollectionResponse} from '../../../../../../models/';
import {createUserFlowLanguagePageCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createUserFlowLanguagePageCollectionResponseFromDiscriminatorValue';
import {createUserFlowLanguagePageFromDiscriminatorValue} from '../../../../../../models/createUserFlowLanguagePageFromDiscriminatorValue';
import {deserializeIntoUserFlowLanguagePage} from '../../../../../../models/deserializeIntoUserFlowLanguagePage';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeUserFlowLanguagePage} from '../../../../../../models/serializeUserFlowLanguagePage';
import {UserFlowLanguagePage} from '../../../../../../models/userFlowLanguagePage';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserFlowLanguagePageItemRequestBuilder} from './item/userFlowLanguagePageItemRequestBuilder';
import {OverridesPagesRequestBuilderGetRequestConfiguration} from './overridesPagesRequestBuilderGetRequestConfiguration';
import {OverridesPagesRequestBuilderPostRequestConfiguration} from './overridesPagesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the overridesPages property of the microsoft.graph.userFlowLanguageConfiguration entity.
 */
export class OverridesPagesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the overridesPages property of the microsoft.graph.userFlowLanguageConfiguration entity.
     * @param userFlowLanguagePageId Unique identifier of the item
     * @returns a UserFlowLanguagePageItemRequestBuilder
     */
    public byUserFlowLanguagePageId(userFlowLanguagePageId: string) : UserFlowLanguagePageItemRequestBuilder {
        if(!userFlowLanguagePageId) throw new Error("userFlowLanguagePageId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userFlowLanguagePage%2Did"] = userFlowLanguagePageId
        return new UserFlowLanguagePageItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new OverridesPagesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/b2xUserFlows/{b2xIdentityUserFlow%2Did}/languages/{userFlowLanguageConfiguration%2Did}/overridesPages{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification is not allowed (creation or deletion of pages).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UserFlowLanguagePageCollectionResponse
     */
    public get(requestConfiguration?: OverridesPagesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UserFlowLanguagePageCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<UserFlowLanguagePageCollectionResponse>(requestInfo, createUserFlowLanguagePageCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to overridesPages for identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UserFlowLanguagePage
     */
    public post(body: UserFlowLanguagePage | undefined, requestConfiguration?: OverridesPagesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UserFlowLanguagePage | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<UserFlowLanguagePage>(requestInfo, createUserFlowLanguagePageFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification is not allowed (creation or deletion of pages).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OverridesPagesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to overridesPages for identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserFlowLanguagePage | undefined, requestConfiguration?: OverridesPagesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUserFlowLanguagePage);
        return requestInfo;
    };
}
