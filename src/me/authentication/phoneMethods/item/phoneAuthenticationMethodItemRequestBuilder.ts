import {createPhoneAuthenticationMethodFromDiscriminatorValue} from '../../../../models/createPhoneAuthenticationMethodFromDiscriminatorValue';
import {deserializeIntoPhoneAuthenticationMethod} from '../../../../models/deserializeIntoPhoneAuthenticationMethod';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {PhoneAuthenticationMethod} from '../../../../models/phoneAuthenticationMethod';
import {serializePhoneAuthenticationMethod} from '../../../../models/serializePhoneAuthenticationMethod';
import {DisableSmsSignInRequestBuilder} from './disableSmsSignIn/disableSmsSignInRequestBuilder';
import {EnableSmsSignInRequestBuilder} from './enableSmsSignIn/enableSmsSignInRequestBuilder';
import {PhoneAuthenticationMethodItemRequestBuilderDeleteRequestConfiguration} from './phoneAuthenticationMethodItemRequestBuilderDeleteRequestConfiguration';
import {PhoneAuthenticationMethodItemRequestBuilderGetRequestConfiguration} from './phoneAuthenticationMethodItemRequestBuilderGetRequestConfiguration';
import {PhoneAuthenticationMethodItemRequestBuilderPatchRequestConfiguration} from './phoneAuthenticationMethodItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the phoneMethods property of the microsoft.graph.authentication entity.
 */
export class PhoneAuthenticationMethodItemRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to call the disableSmsSignIn method. */
    public get disableSmsSignIn(): DisableSmsSignInRequestBuilder {
        return new DisableSmsSignInRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the enableSmsSignIn method. */
    public get enableSmsSignIn(): EnableSmsSignInRequestBuilder {
        return new EnableSmsSignInRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new PhoneAuthenticationMethodItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/authentication/phoneMethods/{phoneAuthenticationMethod%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property phoneMethods for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: PhoneAuthenticationMethodItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The phone numbers registered to a user for authentication.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PhoneAuthenticationMethod
     */
    public get(requestConfiguration?: PhoneAuthenticationMethodItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PhoneAuthenticationMethod | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<PhoneAuthenticationMethod>(requestInfo, createPhoneAuthenticationMethodFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property phoneMethods in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PhoneAuthenticationMethod
     */
    public patch(body: PhoneAuthenticationMethod | undefined, requestConfiguration?: PhoneAuthenticationMethodItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PhoneAuthenticationMethod | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<PhoneAuthenticationMethod>(requestInfo, createPhoneAuthenticationMethodFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property phoneMethods for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: PhoneAuthenticationMethodItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The phone numbers registered to a user for authentication.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PhoneAuthenticationMethodItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property phoneMethods in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: PhoneAuthenticationMethod | undefined, requestConfiguration?: PhoneAuthenticationMethodItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializePhoneAuthenticationMethod);
        return requestInfo;
    };
}
