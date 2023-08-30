import {IdentityProviderCollectionResponse} from '../models/';
import {createIdentityProviderCollectionResponseFromDiscriminatorValue} from '../models/createIdentityProviderCollectionResponseFromDiscriminatorValue';
import {createIdentityProviderFromDiscriminatorValue} from '../models/createIdentityProviderFromDiscriminatorValue';
import {deserializeIntoIdentityProvider} from '../models/deserializeIntoIdentityProvider';
import type {IdentityProvider} from '../models/identityProvider';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeIdentityProvider} from '../models/serializeIdentityProvider';
import {AvailableProviderTypesRequestBuilder} from './availableProviderTypes/availableProviderTypesRequestBuilder';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {IdentityProvidersRequestBuilderGetRequestConfiguration} from './identityProvidersRequestBuilderGetRequestConfiguration';
import {IdentityProvidersRequestBuilderPostRequestConfiguration} from './identityProvidersRequestBuilderPostRequestConfiguration';
import {IdentityProviderItemRequestBuilder} from './item/identityProviderItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of identityProvider entities.
 */
export class IdentityProvidersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the availableProviderTypes method.
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider on 2021-08-24 and will be removed 2023-03-15
     */
    public get availableProviderTypes(): AvailableProviderTypesRequestBuilder {
        return new AvailableProviderTypesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to count the resources in the collection.
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider on 2021-08-24 and will be removed 2023-03-15
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of identityProvider entities.
     * @param identityProviderId The unique identifier of identityProvider
     * @returns a IdentityProviderItemRequestBuilder
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider on 2021-08-24 and will be removed 2023-03-15
     */
    public byIdentityProviderId(identityProviderId: string) : IdentityProviderItemRequestBuilder {
        if(!identityProviderId) throw new Error("identityProviderId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["identityProvider%2Did"] = identityProviderId
        return new IdentityProviderItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new IdentityProvidersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityProviders{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve all identityProviders in the directory.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityProviderCollectionResponse
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider on 2021-08-24 and will be removed 2023-03-15
     * @see {@link https://learn.microsoft.com/graph/api/identityprovider-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: IdentityProvidersRequestBuilderGetRequestConfiguration | undefined) : Promise<IdentityProviderCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityProviderCollectionResponse>(requestInfo, createIdentityProviderCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new identityProvider by specifying display name, identityProvider type, client ID, and client secret.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityProvider
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider on 2021-08-24 and will be removed 2023-03-15
     * @see {@link https://learn.microsoft.com/graph/api/identityprovider-post-identityproviders?view=graph-rest-1.0|Find more info here}
     */
    public post(body: IdentityProvider, requestConfiguration?: IdentityProvidersRequestBuilderPostRequestConfiguration | undefined) : Promise<IdentityProvider | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityProvider>(requestInfo, createIdentityProviderFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve all identityProviders in the directory.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider on 2021-08-24 and will be removed 2023-03-15
     */
    public toGetRequestInformation(requestConfiguration?: IdentityProvidersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new identityProvider by specifying display name, identityProvider type, client ID, and client secret.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider on 2021-08-24 and will be removed 2023-03-15
     */
    public toPostRequestInformation(body: IdentityProvider, requestConfiguration?: IdentityProvidersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeIdentityProvider);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a identityProvidersRequestBuilder
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider on 2021-08-24 and will be removed 2023-03-15
     */
    public withUrl(rawUrl: string) : IdentityProvidersRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new IdentityProvidersRequestBuilder(rawUrl, this.requestAdapter);
    };
}
