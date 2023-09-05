import { type PhoneAuthenticationMethodCollectionResponse } from '../../../models/';
import { createPhoneAuthenticationMethodCollectionResponseFromDiscriminatorValue } from '../../../models/createPhoneAuthenticationMethodCollectionResponseFromDiscriminatorValue';
import { createPhoneAuthenticationMethodFromDiscriminatorValue } from '../../../models/createPhoneAuthenticationMethodFromDiscriminatorValue';
import { deserializeIntoPhoneAuthenticationMethod } from '../../../models/deserializeIntoPhoneAuthenticationMethod';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { type PhoneAuthenticationMethod } from '../../../models/phoneAuthenticationMethod';
import { serializePhoneAuthenticationMethod } from '../../../models/serializePhoneAuthenticationMethod';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { PhoneAuthenticationMethodItemRequestBuilder } from './item/phoneAuthenticationMethodItemRequestBuilder';
import { type PhoneMethodsRequestBuilderGetRequestConfiguration } from './phoneMethodsRequestBuilderGetRequestConfiguration';
import { type PhoneMethodsRequestBuilderPostRequestConfiguration } from './phoneMethodsRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the phoneMethods property of the microsoft.graph.authentication entity.
 */
export class PhoneMethodsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the phoneMethods property of the microsoft.graph.authentication entity.
     * @param phoneAuthenticationMethodId The unique identifier of phoneAuthenticationMethod
     * @returns a PhoneAuthenticationMethodItemRequestBuilder
     */
    public byPhoneAuthenticationMethodId(phoneAuthenticationMethodId: string) : PhoneAuthenticationMethodItemRequestBuilder {
        if(!phoneAuthenticationMethodId) throw new Error("phoneAuthenticationMethodId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["phoneAuthenticationMethod%2Did"] = phoneAuthenticationMethodId
        return new PhoneAuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PhoneMethodsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/authentication/phoneMethods{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of phone authentication method objects for a user. This will return up to three objects, as a user can have up to three phones usable for authentication. This method is available only for standard Azure AD and B2B users, but not B2C users.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PhoneAuthenticationMethodCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/authentication-list-phonemethods?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PhoneMethodsRequestBuilderGetRequestConfiguration | undefined) : Promise<PhoneAuthenticationMethodCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PhoneAuthenticationMethodCollectionResponse>(requestInfo, createPhoneAuthenticationMethodCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add a new phone authentication method for a user. A user may only have one phone of each type, captured in the phoneType property. This means, for example, adding a mobile phone to a user with a preexisting mobile phone will fail. Additionally, a user must always have a mobile phone before adding an alternateMobile phone. Adding a phone number makes it available for use in both Azure multi-factor authentication (MFA) and self-service password reset (SSPR), if enabled. Additionally, if a user is enabled by policy to use SMS sign-in and a mobile number is added, the system will attempt to register the number for use in that system.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PhoneAuthenticationMethod
     * @see {@link https://learn.microsoft.com/graph/api/authentication-post-phonemethods?view=graph-rest-1.0|Find more info here}
     */
    public post(body: PhoneAuthenticationMethod, requestConfiguration?: PhoneMethodsRequestBuilderPostRequestConfiguration | undefined) : Promise<PhoneAuthenticationMethod | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PhoneAuthenticationMethod>(requestInfo, createPhoneAuthenticationMethodFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of phone authentication method objects for a user. This will return up to three objects, as a user can have up to three phones usable for authentication. This method is available only for standard Azure AD and B2B users, but not B2C users.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PhoneMethodsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add a new phone authentication method for a user. A user may only have one phone of each type, captured in the phoneType property. This means, for example, adding a mobile phone to a user with a preexisting mobile phone will fail. Additionally, a user must always have a mobile phone before adding an alternateMobile phone. Adding a phone number makes it available for use in both Azure multi-factor authentication (MFA) and self-service password reset (SSPR), if enabled. Additionally, if a user is enabled by policy to use SMS sign-in and a mobile number is added, the system will attempt to register the number for use in that system.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PhoneAuthenticationMethod, requestConfiguration?: PhoneMethodsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePhoneAuthenticationMethod);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a phoneMethodsRequestBuilder
     */
    public withUrl(rawUrl: string) : PhoneMethodsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PhoneMethodsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
