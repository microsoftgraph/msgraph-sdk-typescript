import {IdentityProviderBaseCollectionResponse} from '../../../../models/';
import {createIdentityProviderBaseCollectionResponseFromDiscriminatorValue} from '../../../../models/createIdentityProviderBaseCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {IdentityProviderBaseItemRequestBuilder} from './item/identityProviderBaseItemRequestBuilder';
import {RefRequestBuilder} from './ref/refRequestBuilder';
import {UserFlowIdentityProvidersRequestBuilderGetRequestConfiguration} from './userFlowIdentityProvidersRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userFlowIdentityProviders property of the microsoft.graph.b2xIdentityUserFlow entity.
 */
export class UserFlowIdentityProvidersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of identityContainer entities.
     */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.identity.b2xUserFlows.item.userFlowIdentityProviders.item collection
     * @param identityProviderBaseId Unique identifier of the item
     * @returns a IdentityProviderBaseItemRequestBuilder
     */
    public byIdentityProviderBaseId(identityProviderBaseId: string) : IdentityProviderBaseItemRequestBuilder {
        if(!identityProviderBaseId) throw new Error("identityProviderBaseId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["identityProviderBase%2Did"] = identityProviderBaseId
        return new IdentityProviderBaseItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserFlowIdentityProvidersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/b2xUserFlows/{b2xIdentityUserFlow%2Did}/userFlowIdentityProviders{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get userFlowIdentityProviders from identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityProviderBaseCollectionResponse
     */
    public get(requestConfiguration?: UserFlowIdentityProvidersRequestBuilderGetRequestConfiguration | undefined) : Promise<IdentityProviderBaseCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityProviderBaseCollectionResponse>(requestInfo, createIdentityProviderBaseCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get userFlowIdentityProviders from identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserFlowIdentityProvidersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
