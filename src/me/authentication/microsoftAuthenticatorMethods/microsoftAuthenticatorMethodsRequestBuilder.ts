import {MicrosoftAuthenticatorAuthenticationMethodCollectionResponse} from '../../../models/';
import {createMicrosoftAuthenticatorAuthenticationMethodCollectionResponseFromDiscriminatorValue} from '../../../models/createMicrosoftAuthenticatorAuthenticationMethodCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilder} from './item/microsoftAuthenticatorAuthenticationMethodItemRequestBuilder';
import {MicrosoftAuthenticatorMethodsRequestBuilderGetRequestConfiguration} from './microsoftAuthenticatorMethodsRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the microsoftAuthenticatorMethods property of the microsoft.graph.authentication entity.
 */
export class MicrosoftAuthenticatorMethodsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the microsoftAuthenticatorMethods property of the microsoft.graph.authentication entity.
     * @param microsoftAuthenticatorAuthenticationMethodId Unique identifier of the item
     * @returns a MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilder
     */
    public byMicrosoftAuthenticatorAuthenticationMethodId(microsoftAuthenticatorAuthenticationMethodId: string) : MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilder {
        if(!microsoftAuthenticatorAuthenticationMethodId) throw new Error("microsoftAuthenticatorAuthenticationMethodId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["microsoftAuthenticatorAuthenticationMethod%2Did"] = microsoftAuthenticatorAuthenticationMethodId
        return new MicrosoftAuthenticatorAuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MicrosoftAuthenticatorMethodsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/authentication/microsoftAuthenticatorMethods{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the microsoftAuthenticatorAuthenticationMethod objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MicrosoftAuthenticatorAuthenticationMethodCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/microsoftauthenticatorauthenticationmethod-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MicrosoftAuthenticatorMethodsRequestBuilderGetRequestConfiguration | undefined) : Promise<MicrosoftAuthenticatorAuthenticationMethodCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MicrosoftAuthenticatorAuthenticationMethodCollectionResponse>(requestInfo, createMicrosoftAuthenticatorAuthenticationMethodCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the microsoftAuthenticatorAuthenticationMethod objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MicrosoftAuthenticatorMethodsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
}
