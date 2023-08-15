import {OAuth2PermissionGrantCollectionResponse} from '../models/';
import {createOAuth2PermissionGrantCollectionResponseFromDiscriminatorValue} from '../models/createOAuth2PermissionGrantCollectionResponseFromDiscriminatorValue';
import {createOAuth2PermissionGrantFromDiscriminatorValue} from '../models/createOAuth2PermissionGrantFromDiscriminatorValue';
import {deserializeIntoOAuth2PermissionGrant} from '../models/deserializeIntoOAuth2PermissionGrant';
import type {OAuth2PermissionGrant} from '../models/oAuth2PermissionGrant';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeOAuth2PermissionGrant} from '../models/serializeOAuth2PermissionGrant';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {OAuth2PermissionGrantItemRequestBuilder} from './item/oAuth2PermissionGrantItemRequestBuilder';
import {Oauth2PermissionGrantsRequestBuilderGetRequestConfiguration} from './oauth2PermissionGrantsRequestBuilderGetRequestConfiguration';
import {Oauth2PermissionGrantsRequestBuilderPostRequestConfiguration} from './oauth2PermissionGrantsRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of oAuth2PermissionGrant entities.
 */
export class Oauth2PermissionGrantsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the delta method.
     */
    public get delta(): DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of oAuth2PermissionGrant entities.
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
        super(pathParameters, requestAdapter, "{+baseurl}/oauth2PermissionGrants{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of oAuth2PermissionGrant objects, representing delegated permissions which have been granted for client applications to access APIs on behalf of signed-in users.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OAuth2PermissionGrantCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/oauth2permissiongrant-list?view=graph-rest-1.0|Find more info here}
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
     * Create a delegated permission grant represented by an oAuth2PermissionGrant object. A delegated permission grant authorizes a client service principal (representing a client application) to access a resource service principal (representing an API), on behalf of a signed-in user, for the level of access limited by the delegated permissions which were granted.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OAuth2PermissionGrant
     * @see {@link https://learn.microsoft.com/graph/api/oauth2permissiongrant-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: OAuth2PermissionGrant, requestConfiguration?: Oauth2PermissionGrantsRequestBuilderPostRequestConfiguration | undefined) : Promise<OAuth2PermissionGrant | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OAuth2PermissionGrant>(requestInfo, createOAuth2PermissionGrantFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of oAuth2PermissionGrant objects, representing delegated permissions which have been granted for client applications to access APIs on behalf of signed-in users.
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
     * Create a delegated permission grant represented by an oAuth2PermissionGrant object. A delegated permission grant authorizes a client service principal (representing a client application) to access a resource service principal (representing an API), on behalf of a signed-in user, for the level of access limited by the delegated permissions which were granted.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: OAuth2PermissionGrant, requestConfiguration?: Oauth2PermissionGrantsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeOAuth2PermissionGrant);
        return requestInfo;
    };
}
