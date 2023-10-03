import { type OAuth2PermissionGrantCollectionResponse } from '../../../models/';
import { createOAuth2PermissionGrantCollectionResponseFromDiscriminatorValue } from '../../../models/oAuth2PermissionGrantCollectionResponse';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { OAuth2PermissionGrantItemRequestBuilder } from './item/oAuth2PermissionGrantItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface Oauth2PermissionGrantsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface Oauth2PermissionGrantsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: Oauth2PermissionGrantsRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the oauth2PermissionGrants property of the microsoft.graph.servicePrincipal entity.
 */
export class Oauth2PermissionGrantsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the oauth2PermissionGrants property of the microsoft.graph.servicePrincipal entity.
     * @param oAuth2PermissionGrantId The unique identifier of oAuth2PermissionGrant
     * @returns a OAuth2PermissionGrantItemRequestBuilder
     */
    public byOAuth2PermissionGrantId(oAuth2PermissionGrantId: string) : OAuth2PermissionGrantItemRequestBuilder {
        if(!oAuth2PermissionGrantId) throw new Error("oAuth2PermissionGrantId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["oAuth2PermissionGrant%2Did"] = oAuth2PermissionGrantId
        return new OAuth2PermissionGrantItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new Oauth2PermissionGrantsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/oauth2PermissionGrants{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of oAuth2PermissionGrant entities, representing delegated permissions granted to the service principal (representing the client application) to access an API on behalf of a user. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OAuth2PermissionGrantCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/serviceprincipal-list-oauth2permissiongrants?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: Oauth2PermissionGrantsRequestBuilderGetRequestConfiguration | undefined) : Promise<OAuth2PermissionGrantCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OAuth2PermissionGrantCollectionResponse>(requestInfo, createOAuth2PermissionGrantCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of oAuth2PermissionGrant entities, representing delegated permissions granted to the service principal (representing the client application) to access an API on behalf of a user. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: Oauth2PermissionGrantsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a oauth2PermissionGrantsRequestBuilder
     */
    public withUrl(rawUrl: string) : Oauth2PermissionGrantsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new Oauth2PermissionGrantsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
