import {PhoneAuthenticationMethod, PhoneAuthenticationMethodCollectionResponse} from '../../../models/';
import {createPhoneAuthenticationMethodCollectionResponseFromDiscriminatorValue} from '../../../models/createPhoneAuthenticationMethodCollectionResponseFromDiscriminatorValue';
import {createPhoneAuthenticationMethodFromDiscriminatorValue} from '../../../models/createPhoneAuthenticationMethodFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {PhoneAuthenticationMethodItemRequestBuilder} from './item/phoneAuthenticationMethodItemRequestBuilder';
import {PhoneMethodsRequestBuilderGetRequestConfiguration} from './phoneMethodsRequestBuilderGetRequestConfiguration';
import {PhoneMethodsRequestBuilderPostRequestConfiguration} from './phoneMethodsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the phoneMethods property of the microsoft.graph.authentication entity.
 */
export class PhoneMethodsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the phoneMethods property of the microsoft.graph.authentication entity.
     * @param phoneAuthenticationMethodId Unique identifier of the item
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
     * The phone numbers registered to a user for authentication.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PhoneAuthenticationMethodCollectionResponse
     */
    public get(requestConfiguration?: PhoneMethodsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PhoneAuthenticationMethodCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<PhoneAuthenticationMethodCollectionResponse>(requestInfo, createPhoneAuthenticationMethodCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to phoneMethods for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of PhoneAuthenticationMethod
     */
    public post(body: PhoneAuthenticationMethod | undefined, requestConfiguration?: PhoneMethodsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<PhoneAuthenticationMethod | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<PhoneAuthenticationMethod>(requestInfo, createPhoneAuthenticationMethodFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The phone numbers registered to a user for authentication.
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
     * Create new navigation property to phoneMethods for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PhoneAuthenticationMethod | undefined, requestConfiguration?: PhoneMethodsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
