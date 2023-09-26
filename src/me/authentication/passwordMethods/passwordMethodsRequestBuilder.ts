import { type PasswordAuthenticationMethodCollectionResponse } from '../../../models/';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { createPasswordAuthenticationMethodFromDiscriminatorValue, deserializeIntoPasswordAuthenticationMethod, serializePasswordAuthenticationMethod, type PasswordAuthenticationMethod } from '../../../models/passwordAuthenticationMethod';
import { createPasswordAuthenticationMethodCollectionResponseFromDiscriminatorValue } from '../../../models/passwordAuthenticationMethodCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { PasswordAuthenticationMethodItemRequestBuilder } from './item/passwordAuthenticationMethodItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface PasswordMethodsRequestBuilderGetQueryParameters {
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
export interface PasswordMethodsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: PasswordMethodsRequestBuilderGetQueryParameters;
}
export interface PasswordMethodsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the passwordMethods property of the microsoft.graph.authentication entity.
 */
export class PasswordMethodsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the passwordMethods property of the microsoft.graph.authentication entity.
     * @param passwordAuthenticationMethodId The unique identifier of passwordAuthenticationMethod
     * @returns a PasswordAuthenticationMethodItemRequestBuilder
     */
    public byPasswordAuthenticationMethodId(passwordAuthenticationMethodId: string) : PasswordAuthenticationMethodItemRequestBuilder {
        if(!passwordAuthenticationMethodId) throw new Error("passwordAuthenticationMethodId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["passwordAuthenticationMethod%2Did"] = passwordAuthenticationMethodId
        return new PasswordAuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PasswordMethodsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/authentication/passwordMethods{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of the passwords registered to a user, represented by a passwordAuthenticationMethod object. This will return exactly one object, as a user can have exactly one password. For security, the password itself will never be returned in the object and the password property is always null.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PasswordAuthenticationMethodCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/authentication-list-passwordmethods?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PasswordMethodsRequestBuilderGetRequestConfiguration | undefined) : Promise<PasswordAuthenticationMethodCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PasswordAuthenticationMethodCollectionResponse>(requestInfo, createPasswordAuthenticationMethodCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to passwordMethods for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PasswordAuthenticationMethod
     */
    public post(body: PasswordAuthenticationMethod, requestConfiguration?: PasswordMethodsRequestBuilderPostRequestConfiguration | undefined) : Promise<PasswordAuthenticationMethod | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PasswordAuthenticationMethod>(requestInfo, createPasswordAuthenticationMethodFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of the passwords registered to a user, represented by a passwordAuthenticationMethod object. This will return exactly one object, as a user can have exactly one password. For security, the password itself will never be returned in the object and the password property is always null.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PasswordMethodsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to passwordMethods for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PasswordAuthenticationMethod, requestConfiguration?: PasswordMethodsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePasswordAuthenticationMethod);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a passwordMethodsRequestBuilder
     */
    public withUrl(rawUrl: string) : PasswordMethodsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PasswordMethodsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
