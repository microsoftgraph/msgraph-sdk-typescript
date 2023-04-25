import {TemporaryAccessPassAuthenticationMethod, TemporaryAccessPassAuthenticationMethodCollectionResponse} from '../../../../models/';
import {createTemporaryAccessPassAuthenticationMethodCollectionResponseFromDiscriminatorValue} from '../../../../models/createTemporaryAccessPassAuthenticationMethodCollectionResponseFromDiscriminatorValue';
import {createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue} from '../../../../models/createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TemporaryAccessPassAuthenticationMethodItemRequestBuilder} from './item/temporaryAccessPassAuthenticationMethodItemRequestBuilder';
import {TemporaryAccessPassMethodsRequestBuilderGetRequestConfiguration} from './temporaryAccessPassMethodsRequestBuilderGetRequestConfiguration';
import {TemporaryAccessPassMethodsRequestBuilderPostRequestConfiguration} from './temporaryAccessPassMethodsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the temporaryAccessPassMethods property of the microsoft.graph.authentication entity.
 */
export class TemporaryAccessPassMethodsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the temporaryAccessPassMethods property of the microsoft.graph.authentication entity.
     * @param temporaryAccessPassAuthenticationMethodId Unique identifier of the item
     * @returns a TemporaryAccessPassAuthenticationMethodItemRequestBuilder
     */
    public byTemporaryAccessPassAuthenticationMethodId(temporaryAccessPassAuthenticationMethodId: string) : TemporaryAccessPassAuthenticationMethodItemRequestBuilder {
        if(!temporaryAccessPassAuthenticationMethodId) throw new Error("temporaryAccessPassAuthenticationMethodId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["temporaryAccessPassAuthenticationMethod%2Did"] = temporaryAccessPassAuthenticationMethodId
        return new TemporaryAccessPassAuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TemporaryAccessPassMethodsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/authentication/temporaryAccessPassMethods{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Represents a Temporary Access Pass registered to a user for authentication through time-limited passcodes.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TemporaryAccessPassAuthenticationMethodCollectionResponse
     */
    public get(requestConfiguration?: TemporaryAccessPassMethodsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TemporaryAccessPassAuthenticationMethodCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<TemporaryAccessPassAuthenticationMethodCollectionResponse>(requestInfo, createTemporaryAccessPassAuthenticationMethodCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to temporaryAccessPassMethods for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TemporaryAccessPassAuthenticationMethod
     */
    public post(body: TemporaryAccessPassAuthenticationMethod | undefined, requestConfiguration?: TemporaryAccessPassMethodsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TemporaryAccessPassAuthenticationMethod | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<TemporaryAccessPassAuthenticationMethod>(requestInfo, createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Represents a Temporary Access Pass registered to a user for authentication through time-limited passcodes.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TemporaryAccessPassMethodsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to temporaryAccessPassMethods for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TemporaryAccessPassAuthenticationMethod | undefined, requestConfiguration?: TemporaryAccessPassMethodsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
