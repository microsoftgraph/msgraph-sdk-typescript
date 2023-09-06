import { type PermissionCollectionResponse } from '../../../../../models/';
import { createPermissionCollectionResponseFromDiscriminatorValue } from '../../../../../models/createPermissionCollectionResponseFromDiscriminatorValue';
import { createPermissionFromDiscriminatorValue } from '../../../../../models/createPermissionFromDiscriminatorValue';
import { deserializeIntoPermission } from '../../../../../models/deserializeIntoPermission';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { type Permission } from '../../../../../models/permission';
import { serializePermission } from '../../../../../models/serializePermission';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { PermissionItemRequestBuilder } from './item/permissionItemRequestBuilder';
import { type PermissionsRequestBuilderGetRequestConfiguration } from './permissionsRequestBuilderGetRequestConfiguration';
import { type PermissionsRequestBuilderPostRequestConfiguration } from './permissionsRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the permissions property of the microsoft.graph.site entity.
 */
export class PermissionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the permissions property of the microsoft.graph.site entity.
     * @param permissionId The unique identifier of permission
     * @returns a PermissionItemRequestBuilder
     */
    public byPermissionId(permissionId: string) : PermissionItemRequestBuilder {
        if(!permissionId) throw new Error("permissionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["permission%2Did"] = permissionId
        return new PermissionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PermissionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/permissions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the permission resources from the permissions navigation property on a site.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PermissionCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/site-list-permissions?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PermissionsRequestBuilderGetRequestConfiguration | undefined) : Promise<PermissionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PermissionCollectionResponse>(requestInfo, createPermissionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new permission object on a site. 
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Permission
     * @see {@link https://learn.microsoft.com/graph/api/site-post-permissions?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Permission, requestConfiguration?: PermissionsRequestBuilderPostRequestConfiguration | undefined) : Promise<Permission | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Permission>(requestInfo, createPermissionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the permission resources from the permissions navigation property on a site.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PermissionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new permission object on a site. 
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Permission, requestConfiguration?: PermissionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePermission);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a permissionsRequestBuilder
     */
    public withUrl(rawUrl: string) : PermissionsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PermissionsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
