import {Authentication} from '../../../models/';
import {createAuthenticationFromDiscriminatorValue} from '../../../models/createAuthenticationFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AuthenticationRequestBuilderDeleteRequestConfiguration} from './authenticationRequestBuilderDeleteRequestConfiguration';
import {AuthenticationRequestBuilderGetRequestConfiguration} from './authenticationRequestBuilderGetRequestConfiguration';
import {AuthenticationRequestBuilderPatchRequestConfiguration} from './authenticationRequestBuilderPatchRequestConfiguration';
import {EmailMethodsRequestBuilder} from './emailMethods/emailMethodsRequestBuilder';
import {Fido2MethodsRequestBuilder} from './fido2Methods/fido2MethodsRequestBuilder';
import {MethodsRequestBuilder} from './methods/methodsRequestBuilder';
import {MicrosoftAuthenticatorMethodsRequestBuilder} from './microsoftAuthenticatorMethods/microsoftAuthenticatorMethodsRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {PasswordMethodsRequestBuilder} from './passwordMethods/passwordMethodsRequestBuilder';
import {PhoneMethodsRequestBuilder} from './phoneMethods/phoneMethodsRequestBuilder';
import {SoftwareOathMethodsRequestBuilder} from './softwareOathMethods/softwareOathMethodsRequestBuilder';
import {TemporaryAccessPassMethodsRequestBuilder} from './temporaryAccessPassMethods/temporaryAccessPassMethodsRequestBuilder';
import {WindowsHelloForBusinessMethodsRequestBuilder} from './windowsHelloForBusinessMethods/windowsHelloForBusinessMethodsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the authentication property of the microsoft.graph.user entity.
 */
export class AuthenticationRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the emailMethods property of the microsoft.graph.authentication entity. */
    public get emailMethods(): EmailMethodsRequestBuilder {
        return new EmailMethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the fido2Methods property of the microsoft.graph.authentication entity. */
    public get fido2Methods(): Fido2MethodsRequestBuilder {
        return new Fido2MethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the methods property of the microsoft.graph.authentication entity. */
    public get methods(): MethodsRequestBuilder {
        return new MethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the microsoftAuthenticatorMethods property of the microsoft.graph.authentication entity. */
    public get microsoftAuthenticatorMethods(): MicrosoftAuthenticatorMethodsRequestBuilder {
        return new MicrosoftAuthenticatorMethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the operations property of the microsoft.graph.authentication entity. */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the passwordMethods property of the microsoft.graph.authentication entity. */
    public get passwordMethods(): PasswordMethodsRequestBuilder {
        return new PasswordMethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the phoneMethods property of the microsoft.graph.authentication entity. */
    public get phoneMethods(): PhoneMethodsRequestBuilder {
        return new PhoneMethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the softwareOathMethods property of the microsoft.graph.authentication entity. */
    public get softwareOathMethods(): SoftwareOathMethodsRequestBuilder {
        return new SoftwareOathMethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the temporaryAccessPassMethods property of the microsoft.graph.authentication entity. */
    public get temporaryAccessPassMethods(): TemporaryAccessPassMethodsRequestBuilder {
        return new TemporaryAccessPassMethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the windowsHelloForBusinessMethods property of the microsoft.graph.authentication entity. */
    public get windowsHelloForBusinessMethods(): WindowsHelloForBusinessMethodsRequestBuilder {
        return new WindowsHelloForBusinessMethodsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AuthenticationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/authentication{?%24select,%24expand}");
    };
    /**
     * Delete navigation property authentication for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: AuthenticationRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * The authentication methods that are supported for the user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Authentication
     */
    public get(requestConfiguration?: AuthenticationRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Authentication | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Authentication>(requestInfo, createAuthenticationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property authentication in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Authentication
     */
    public patch(body: Authentication | undefined, requestConfiguration?: AuthenticationRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Authentication | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Authentication>(requestInfo, createAuthenticationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property authentication for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AuthenticationRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The authentication methods that are supported for the user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AuthenticationRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property authentication in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Authentication | undefined, requestConfiguration?: AuthenticationRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
