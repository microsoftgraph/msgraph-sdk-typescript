import { type UserFlowLanguagePageCollectionResponse } from '../../../../../../models/';
import { createUserFlowLanguagePageCollectionResponseFromDiscriminatorValue } from '../../../../../../models/createUserFlowLanguagePageCollectionResponseFromDiscriminatorValue';
import { createUserFlowLanguagePageFromDiscriminatorValue } from '../../../../../../models/createUserFlowLanguagePageFromDiscriminatorValue';
import { deserializeIntoUserFlowLanguagePage } from '../../../../../../models/deserializeIntoUserFlowLanguagePage';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { serializeUserFlowLanguagePage } from '../../../../../../models/serializeUserFlowLanguagePage';
import { type UserFlowLanguagePage } from '../../../../../../models/userFlowLanguagePage';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { UserFlowLanguagePageItemRequestBuilder } from './item/userFlowLanguagePageItemRequestBuilder';
import { type OverridesPagesRequestBuilderGetRequestConfiguration } from './overridesPagesRequestBuilderGetRequestConfiguration';
import { type OverridesPagesRequestBuilderPostRequestConfiguration } from './overridesPagesRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the overridesPages property of the microsoft.graph.userFlowLanguageConfiguration entity.
 */
export class OverridesPagesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the overridesPages property of the microsoft.graph.userFlowLanguageConfiguration entity.
     * @param userFlowLanguagePageId The unique identifier of userFlowLanguagePage
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
     * Get the userFlowLanguagePage resources from the overridesPages navigation property. These pages are used to customize the values shown to the user during a user journey in a user flow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserFlowLanguagePageCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/userflowlanguageconfiguration-list-overridespages?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: OverridesPagesRequestBuilderGetRequestConfiguration | undefined) : Promise<UserFlowLanguagePageCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserFlowLanguagePageCollectionResponse>(requestInfo, createUserFlowLanguagePageCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to overridesPages for identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserFlowLanguagePage
     */
    public post(body: UserFlowLanguagePage, requestConfiguration?: OverridesPagesRequestBuilderPostRequestConfiguration | undefined) : Promise<UserFlowLanguagePage | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserFlowLanguagePage>(requestInfo, createUserFlowLanguagePageFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the userFlowLanguagePage resources from the overridesPages navigation property. These pages are used to customize the values shown to the user during a user journey in a user flow.
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
    public toPostRequestInformation(body: UserFlowLanguagePage, requestConfiguration?: OverridesPagesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserFlowLanguagePage);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a overridesPagesRequestBuilder
     */
    public withUrl(rawUrl: string) : OverridesPagesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new OverridesPagesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
