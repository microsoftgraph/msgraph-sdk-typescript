import { createUserFlowLanguagePageFromDiscriminatorValue } from '../../../../../../../models/createUserFlowLanguagePageFromDiscriminatorValue';
import { deserializeIntoUserFlowLanguagePage } from '../../../../../../../models/deserializeIntoUserFlowLanguagePage';
import { type ODataError } from '../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../models/oDataErrors/serializeODataError';
import { serializeUserFlowLanguagePage } from '../../../../../../../models/serializeUserFlowLanguagePage';
import { type UserFlowLanguagePage } from '../../../../../../../models/userFlowLanguagePage';
import { type UserFlowLanguagePageItemRequestBuilderDeleteRequestConfiguration } from './userFlowLanguagePageItemRequestBuilderDeleteRequestConfiguration';
import { type UserFlowLanguagePageItemRequestBuilderGetRequestConfiguration } from './userFlowLanguagePageItemRequestBuilderGetRequestConfiguration';
import { type UserFlowLanguagePageItemRequestBuilderPatchRequestConfiguration } from './userFlowLanguagePageItemRequestBuilderPatchRequestConfiguration';
import { ContentRequestBuilder } from './value/contentRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the defaultPages property of the microsoft.graph.userFlowLanguageConfiguration entity.
 */
export class UserFlowLanguagePageItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the media for the identityContainer entity.
     */
    public get content(): ContentRequestBuilder {
        return new ContentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new UserFlowLanguagePageItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/b2xUserFlows/{b2xIdentityUserFlow%2Did}/languages/{userFlowLanguageConfiguration%2Did}/defaultPages/{userFlowLanguagePage%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property defaultPages for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UserFlowLanguagePageItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Collection of pages with the default content to display in a user flow for a specified language. This collection does not allow any kind of modification.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserFlowLanguagePage
     */
    public get(requestConfiguration?: UserFlowLanguagePageItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UserFlowLanguagePage | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserFlowLanguagePage>(requestInfo, createUserFlowLanguagePageFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property defaultPages in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserFlowLanguagePage
     */
    public patch(body: UserFlowLanguagePage, requestConfiguration?: UserFlowLanguagePageItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UserFlowLanguagePage | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserFlowLanguagePage>(requestInfo, createUserFlowLanguagePageFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property defaultPages for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UserFlowLanguagePageItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Collection of pages with the default content to display in a user flow for a specified language. This collection does not allow any kind of modification.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserFlowLanguagePageItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property defaultPages in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UserFlowLanguagePage, requestConfiguration?: UserFlowLanguagePageItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserFlowLanguagePage);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a UserFlowLanguagePageItemRequestBuilder
     */
    public withUrl(rawUrl: string) : UserFlowLanguagePageItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UserFlowLanguagePageItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
