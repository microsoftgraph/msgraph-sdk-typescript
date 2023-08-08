import {Fido2AuthenticationMethodCollectionResponse} from '../../../../models/';
import {createFido2AuthenticationMethodCollectionResponseFromDiscriminatorValue} from '../../../../models/createFido2AuthenticationMethodCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {Fido2MethodsRequestBuilderGetRequestConfiguration} from './fido2MethodsRequestBuilderGetRequestConfiguration';
import {Fido2AuthenticationMethodItemRequestBuilder} from './item/fido2AuthenticationMethodItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the fido2Methods property of the microsoft.graph.authentication entity.
 */
export class Fido2MethodsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the fido2Methods property of the microsoft.graph.authentication entity.
     * @param fido2AuthenticationMethodId Unique identifier of the item
     * @returns a Fido2AuthenticationMethodItemRequestBuilder
     */
    public byFido2AuthenticationMethodId(fido2AuthenticationMethodId: string) : Fido2AuthenticationMethodItemRequestBuilder {
        if(!fido2AuthenticationMethodId) throw new Error("fido2AuthenticationMethodId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["fido2AuthenticationMethod%2Did"] = fido2AuthenticationMethodId
        return new Fido2AuthenticationMethodItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new Fido2MethodsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/authentication/fido2Methods{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of a user's FIDO2 Security Key Authentication Method objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Fido2AuthenticationMethodCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/fido2authenticationmethod-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: Fido2MethodsRequestBuilderGetRequestConfiguration | undefined) : Promise<Fido2AuthenticationMethodCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Fido2AuthenticationMethodCollectionResponse>(requestInfo, createFido2AuthenticationMethodCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of a user's FIDO2 Security Key Authentication Method objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: Fido2MethodsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
