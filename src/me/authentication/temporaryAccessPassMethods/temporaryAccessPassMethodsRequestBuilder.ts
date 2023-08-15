import {TemporaryAccessPassAuthenticationMethodCollectionResponse} from '../../../models/';
import {createTemporaryAccessPassAuthenticationMethodCollectionResponseFromDiscriminatorValue} from '../../../models/createTemporaryAccessPassAuthenticationMethodCollectionResponseFromDiscriminatorValue';
import {createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue} from '../../../models/createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue';
import {deserializeIntoTemporaryAccessPassAuthenticationMethod} from '../../../models/deserializeIntoTemporaryAccessPassAuthenticationMethod';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeTemporaryAccessPassAuthenticationMethod} from '../../../models/serializeTemporaryAccessPassAuthenticationMethod';
import type {TemporaryAccessPassAuthenticationMethod} from '../../../models/temporaryAccessPassAuthenticationMethod';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TemporaryAccessPassAuthenticationMethodItemRequestBuilder} from './item/temporaryAccessPassAuthenticationMethodItemRequestBuilder';
import {TemporaryAccessPassMethodsRequestBuilderGetRequestConfiguration} from './temporaryAccessPassMethodsRequestBuilderGetRequestConfiguration';
import {TemporaryAccessPassMethodsRequestBuilderPostRequestConfiguration} from './temporaryAccessPassMethodsRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the temporaryAccessPassMethods property of the microsoft.graph.authentication entity.
 */
export class TemporaryAccessPassMethodsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the temporaryAccessPassMethods property of the microsoft.graph.authentication entity.
     * @param temporaryAccessPassAuthenticationMethodId The unique identifier of temporaryAccessPassAuthenticationMethod
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
        super(pathParameters, requestAdapter, "{+baseurl}/me/authentication/temporaryAccessPassMethods{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of a user's temporaryAccessPassAuthenticationMethod objects and their properties. This API will only return a single object in the collection as a user can have only one Temporary Access Pass method.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TemporaryAccessPassAuthenticationMethodCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/authentication-list-temporaryaccesspassmethods?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TemporaryAccessPassMethodsRequestBuilderGetRequestConfiguration | undefined) : Promise<TemporaryAccessPassAuthenticationMethodCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TemporaryAccessPassAuthenticationMethodCollectionResponse>(requestInfo, createTemporaryAccessPassAuthenticationMethodCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new temporaryAccessPassAuthenticationMethod object on a user. A user can only have one Temporary Access Pass that's usable within its specified lifetime. If the user requires a new Temporary Access Pass while the current Temporary Access Pass is valid, the admin can create a new Temporary Access Pass for the user, the previous Temporary Access Pass will be deleted, and a new Temporary Access Pass will be created.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TemporaryAccessPassAuthenticationMethod
     * @see {@link https://learn.microsoft.com/graph/api/authentication-post-temporaryaccesspassmethods?view=graph-rest-1.0|Find more info here}
     */
    public post(body: TemporaryAccessPassAuthenticationMethod, requestConfiguration?: TemporaryAccessPassMethodsRequestBuilderPostRequestConfiguration | undefined) : Promise<TemporaryAccessPassAuthenticationMethod | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TemporaryAccessPassAuthenticationMethod>(requestInfo, createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of a user's temporaryAccessPassAuthenticationMethod objects and their properties. This API will only return a single object in the collection as a user can have only one Temporary Access Pass method.
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
     * Create a new temporaryAccessPassAuthenticationMethod object on a user. A user can only have one Temporary Access Pass that's usable within its specified lifetime. If the user requires a new Temporary Access Pass while the current Temporary Access Pass is valid, the admin can create a new Temporary Access Pass for the user, the previous Temporary Access Pass will be deleted, and a new Temporary Access Pass will be created.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TemporaryAccessPassAuthenticationMethod, requestConfiguration?: TemporaryAccessPassMethodsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTemporaryAccessPassAuthenticationMethod);
        return requestInfo;
    };
}
