import {createPermissionFromDiscriminatorValue} from '../../../models/createPermissionFromDiscriminatorValue';
import {deserializeIntoPermission} from '../../../models/deserializeIntoPermission';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import type {Permission} from '../../../models/permission';
import {serializePermission} from '../../../models/serializePermission';
import {GrantRequestBuilder} from './grant/grantRequestBuilder';
import {PermissionRequestBuilderDeleteRequestConfiguration} from './permissionRequestBuilderDeleteRequestConfiguration';
import {PermissionRequestBuilderGetRequestConfiguration} from './permissionRequestBuilderGetRequestConfiguration';
import {PermissionRequestBuilderPatchRequestConfiguration} from './permissionRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the permission property of the microsoft.graph.sharedDriveItem entity.
 */
export class PermissionRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the grant method.
     */
    public get grant(): GrantRequestBuilder {
        return new GrantRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new PermissionRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/shares/{sharedDriveItem%2Did}/permission{?%24select,%24expand}");
    };
    /**
     * Delete navigation property permission for shares
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: PermissionRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Used to access the permission representing the underlying sharing link
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Permission
     */
    public get(requestConfiguration?: PermissionRequestBuilderGetRequestConfiguration | undefined) : Promise<Permission | undefined> {
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
     * Update the navigation property permission in shares
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Permission
     */
    public patch(body: Permission, requestConfiguration?: PermissionRequestBuilderPatchRequestConfiguration | undefined) : Promise<Permission | undefined> {
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
     * Delete navigation property permission for shares
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: PermissionRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Used to access the permission representing the underlying sharing link
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PermissionRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property permission in shares
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Permission, requestConfiguration?: PermissionRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a permissionRequestBuilder
     */
    public withUrl(rawUrl: string) : PermissionRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PermissionRequestBuilder(rawUrl, this.requestAdapter);
    };
}
