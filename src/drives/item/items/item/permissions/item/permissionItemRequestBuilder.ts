import {createPermissionFromDiscriminatorValue} from '../../../../../../models/createPermissionFromDiscriminatorValue';
import {deserializeIntoPermission} from '../../../../../../models/deserializeIntoPermission';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import type {Permission} from '../../../../../../models/permission';
import {serializePermission} from '../../../../../../models/serializePermission';
import {GrantRequestBuilder} from './grant/grantRequestBuilder';
import {PermissionItemRequestBuilderDeleteRequestConfiguration} from './permissionItemRequestBuilderDeleteRequestConfiguration';
import {PermissionItemRequestBuilderGetRequestConfiguration} from './permissionItemRequestBuilderGetRequestConfiguration';
import {PermissionItemRequestBuilderPatchRequestConfiguration} from './permissionItemRequestBuilderPatchRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the permissions property of the microsoft.graph.driveItem entity.
 */
export class PermissionItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the grant method.
     */
    public get grant(): GrantRequestBuilder {
        return new GrantRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new PermissionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/permissions/{permission%2Did}{?%24select,%24expand}");
    };
    /**
     * Remove access to a DriveItem. Only sharing permissions that are not inherited can be deleted.The inheritedFrom property must be null.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/permission-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: PermissionItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Return the effective sharing permission for a particular permission resource. Effective permissions of an item can come from two sources: permissions set directly on the item itself or permissions that are inherited from the item's ancestors. Callers can differentiate if the permission is inherited or not by checking the inheritedFrom property.This property is an ItemReference resource referencing the ancestor that the permission is inherited from.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Permission
     * @see {@link https://learn.microsoft.com/graph/api/permission-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PermissionItemRequestBuilderGetRequestConfiguration | undefined) : Promise<Permission | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Permission>(requestInfo, createPermissionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a sharing permission by patching the permission resource. Only the roles property can be modified this way.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Permission
     * @see {@link https://learn.microsoft.com/graph/api/permission-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: Permission, requestConfiguration?: PermissionItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<Permission | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Permission>(requestInfo, createPermissionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Remove access to a DriveItem. Only sharing permissions that are not inherited can be deleted.The inheritedFrom property must be null.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: PermissionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Return the effective sharing permission for a particular permission resource. Effective permissions of an item can come from two sources: permissions set directly on the item itself or permissions that are inherited from the item's ancestors. Callers can differentiate if the permission is inherited or not by checking the inheritedFrom property.This property is an ItemReference resource referencing the ancestor that the permission is inherited from.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PermissionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a sharing permission by patching the permission resource. Only the roles property can be modified this way.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Permission, requestConfiguration?: PermissionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePermission);
        return requestInfo;
    };
}
