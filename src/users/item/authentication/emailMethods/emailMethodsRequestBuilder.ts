import { type EmailAuthenticationMethodCollectionResponse } from '../../../../models/';
import { createEmailAuthenticationMethodFromDiscriminatorValue, deserializeIntoEmailAuthenticationMethod, serializeEmailAuthenticationMethod, type EmailAuthenticationMethod } from '../../../../models/emailAuthenticationMethod';
import { createEmailAuthenticationMethodCollectionResponseFromDiscriminatorValue } from '../../../../models/emailAuthenticationMethodCollectionResponse';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { EmailAuthenticationMethodItemRequestBuilder } from './item/emailAuthenticationMethodItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface EmailMethodsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface EmailMethodsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: EmailMethodsRequestBuilderGetQueryParameters;
}
export interface EmailMethodsRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the emailMethods property of the microsoft.graph.authentication entity.
 */
export class EmailMethodsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the emailMethods property of the microsoft.graph.authentication entity.
     * @param emailAuthenticationMethodId The unique identifier of emailAuthenticationMethod
     * @returns a EmailAuthenticationMethodItemRequestBuilder
     */
    public byEmailAuthenticationMethodId(emailAuthenticationMethodId: string) : EmailAuthenticationMethodItemRequestBuilder {
        if(!emailAuthenticationMethodId) throw new Error("emailAuthenticationMethodId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["emailAuthenticationMethod%2Did"] = emailAuthenticationMethodId
        return new EmailAuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new EmailMethodsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/authentication/emailMethods{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of a user's emailAuthenticationMethod objects and their properties. This API will return only a single object in the collection as only one email method can be set for a user. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EmailAuthenticationMethodCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/authentication-list-emailmethods?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: EmailMethodsRequestBuilderGetRequestConfiguration | undefined) : Promise<EmailAuthenticationMethodCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EmailAuthenticationMethodCollectionResponse>(requestInfo, createEmailAuthenticationMethodCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Set a user's emailAuthenticationMethod object. Email authentication is a self-service password reset method. A user may only have one email authentication method. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EmailAuthenticationMethod
     * @see {@link https://learn.microsoft.com/graph/api/authentication-post-emailmethods?view=graph-rest-1.0|Find more info here}
     */
    public post(body: EmailAuthenticationMethod, requestConfiguration?: EmailMethodsRequestBuilderPostRequestConfiguration | undefined) : Promise<EmailAuthenticationMethod | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EmailAuthenticationMethod>(requestInfo, createEmailAuthenticationMethodFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of a user's emailAuthenticationMethod objects and their properties. This API will return only a single object in the collection as only one email method can be set for a user. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EmailMethodsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Set a user's emailAuthenticationMethod object. Email authentication is a self-service password reset method. A user may only have one email authentication method. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: EmailAuthenticationMethod, requestConfiguration?: EmailMethodsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEmailAuthenticationMethod);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a emailMethodsRequestBuilder
     */
    public withUrl(rawUrl: string) : EmailMethodsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new EmailMethodsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
