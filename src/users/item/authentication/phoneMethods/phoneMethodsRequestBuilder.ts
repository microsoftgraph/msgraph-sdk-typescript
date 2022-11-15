import {PhoneAuthenticationMethod, PhoneAuthenticationMethodCollectionResponse} from '../../../../models/';
import {createPhoneAuthenticationMethodCollectionResponseFromDiscriminatorValue} from '../../../../models/createPhoneAuthenticationMethodCollectionResponseFromDiscriminatorValue';
import {createPhoneAuthenticationMethodFromDiscriminatorValue} from '../../../../models/createPhoneAuthenticationMethodFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {PhoneMethodsRequestBuilderGetRequestConfiguration} from './phoneMethodsRequestBuilderGetRequestConfiguration';
import {PhoneMethodsRequestBuilderPostRequestConfiguration} from './phoneMethodsRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the phoneMethods property of the microsoft.graph.authentication entity. */
export class PhoneMethodsRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new PhoneMethodsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/users/{user%2Did}/authentication/phoneMethods{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Retrieve a list of phone authentication method objects for a user. This will return up to three objects, as a user can have up to three phones usable for authentication. This method is available only for standard Azure AD and B2B users, but not B2C users.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: PhoneMethodsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Add a new phone authentication method for a user. A user may only have one phone of each type, captured in the **phoneType** property. This means, for example, adding a `mobile` phone to a user with a preexisting `mobile` phone will fail. Additionally, a user must always have a `mobile` phone before adding an `alternateMobile` phone. Adding a phone number makes it available for use in both Azure multi-factor authentication (MFA) and self-service password reset (SSPR), if enabled. Additionally, if a user is enabled by policy to use SMS sign-in and a `mobile` number is added, the system will attempt to register the number for use in that system.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: PhoneAuthenticationMethod | undefined, requestConfiguration?: PhoneMethodsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Retrieve a list of phone authentication method objects for a user. This will return up to three objects, as a user can have up to three phones usable for authentication. This method is available only for standard Azure AD and B2B users, but not B2C users.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PhoneAuthenticationMethodCollectionResponse
     */
    public get(requestConfiguration?: PhoneMethodsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PhoneAuthenticationMethodCollectionResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<PhoneAuthenticationMethodCollectionResponse>(requestInfo, createPhoneAuthenticationMethodCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Add a new phone authentication method for a user. A user may only have one phone of each type, captured in the **phoneType** property. This means, for example, adding a `mobile` phone to a user with a preexisting `mobile` phone will fail. Additionally, a user must always have a `mobile` phone before adding an `alternateMobile` phone. Adding a phone number makes it available for use in both Azure multi-factor authentication (MFA) and self-service password reset (SSPR), if enabled. Additionally, if a user is enabled by policy to use SMS sign-in and a `mobile` number is added, the system will attempt to register the number for use in that system.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PhoneAuthenticationMethod
     */
    public post(body: PhoneAuthenticationMethod | undefined, requestConfiguration?: PhoneMethodsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PhoneAuthenticationMethod | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<PhoneAuthenticationMethod>(requestInfo, createPhoneAuthenticationMethodFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
}
