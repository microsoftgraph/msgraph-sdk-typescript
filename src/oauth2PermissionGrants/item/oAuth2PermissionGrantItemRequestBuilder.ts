import {createOAuth2PermissionGrantFromDiscriminatorValue} from '../../models/createOAuth2PermissionGrantFromDiscriminatorValue';
import {deserializeIntoOAuth2PermissionGrant} from '../../models/deserializeIntoOAuth2PermissionGrant';
import type {OAuth2PermissionGrant} from '../../models/oAuth2PermissionGrant';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeOAuth2PermissionGrant} from '../../models/serializeOAuth2PermissionGrant';
import {OAuth2PermissionGrantItemRequestBuilderDeleteRequestConfiguration} from './oAuth2PermissionGrantItemRequestBuilderDeleteRequestConfiguration';
import {OAuth2PermissionGrantItemRequestBuilderGetRequestConfiguration} from './oAuth2PermissionGrantItemRequestBuilderGetRequestConfiguration';
import {OAuth2PermissionGrantItemRequestBuilderPatchRequestConfiguration} from './oAuth2PermissionGrantItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of oAuth2PermissionGrant entities.
 */
export class OAuth2PermissionGrantItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new OAuth2PermissionGrantItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/oauth2PermissionGrants/{oAuth2PermissionGrant%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a delegated permission grant, represented by an oAuth2PermissionGrant object. When a delegated permission grant is deleted, the access it granted is revoked. Existing access tokens will continue to be valid for their lifetime, but new access tokens will not be granted for the delegated permissions identified in the deleted oAuth2PermissionGrant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/oauth2permissiongrant-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: OAuth2PermissionGrantItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Retrieve the properties of a single delegated permission grant represented by an oAuth2PermissionGrant object. An oAuth2PermissionGrant represents delegated permissions which have been granted for a client application to access an API on behalf of a signed-in user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OAuth2PermissionGrant
     * @see {@link https://learn.microsoft.com/graph/api/oauth2permissiongrant-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: OAuth2PermissionGrantItemRequestBuilderGetRequestConfiguration | undefined) : Promise<OAuth2PermissionGrant | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OAuth2PermissionGrant>(requestInfo, createOAuth2PermissionGrantFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of oAuth2PermissionGrant object, representing a delegated permission grant. An oAuth2PermissionGrant can be updated to change which delegated permissions are granted, by adding or removing items from the list in scopes.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OAuth2PermissionGrant
     * @see {@link https://learn.microsoft.com/graph/api/oauth2permissiongrant-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: OAuth2PermissionGrant, requestConfiguration?: OAuth2PermissionGrantItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<OAuth2PermissionGrant | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OAuth2PermissionGrant>(requestInfo, createOAuth2PermissionGrantFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a delegated permission grant, represented by an oAuth2PermissionGrant object. When a delegated permission grant is deleted, the access it granted is revoked. Existing access tokens will continue to be valid for their lifetime, but new access tokens will not be granted for the delegated permissions identified in the deleted oAuth2PermissionGrant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: OAuth2PermissionGrantItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties of a single delegated permission grant represented by an oAuth2PermissionGrant object. An oAuth2PermissionGrant represents delegated permissions which have been granted for a client application to access an API on behalf of a signed-in user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OAuth2PermissionGrantItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of oAuth2PermissionGrant object, representing a delegated permission grant. An oAuth2PermissionGrant can be updated to change which delegated permissions are granted, by adding or removing items from the list in scopes.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: OAuth2PermissionGrant, requestConfiguration?: OAuth2PermissionGrantItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeOAuth2PermissionGrant);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a OAuth2PermissionGrantItemRequestBuilder
     */
    public withUrl(rawUrl: string) : OAuth2PermissionGrantItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new OAuth2PermissionGrantItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
