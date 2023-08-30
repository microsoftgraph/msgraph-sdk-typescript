import {createResourceSpecificPermissionGrantFromDiscriminatorValue} from '../../models/createResourceSpecificPermissionGrantFromDiscriminatorValue';
import {deserializeIntoResourceSpecificPermissionGrant} from '../../models/deserializeIntoResourceSpecificPermissionGrant';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import type {ResourceSpecificPermissionGrant} from '../../models/resourceSpecificPermissionGrant';
import {serializeResourceSpecificPermissionGrant} from '../../models/serializeResourceSpecificPermissionGrant';
import {CheckMemberGroupsRequestBuilder} from './checkMemberGroups/checkMemberGroupsRequestBuilder';
import {CheckMemberObjectsRequestBuilder} from './checkMemberObjects/checkMemberObjectsRequestBuilder';
import {GetMemberGroupsRequestBuilder} from './getMemberGroups/getMemberGroupsRequestBuilder';
import {GetMemberObjectsRequestBuilder} from './getMemberObjects/getMemberObjectsRequestBuilder';
import {ResourceSpecificPermissionGrantItemRequestBuilderDeleteRequestConfiguration} from './resourceSpecificPermissionGrantItemRequestBuilderDeleteRequestConfiguration';
import {ResourceSpecificPermissionGrantItemRequestBuilderGetRequestConfiguration} from './resourceSpecificPermissionGrantItemRequestBuilderGetRequestConfiguration';
import {ResourceSpecificPermissionGrantItemRequestBuilderPatchRequestConfiguration} from './resourceSpecificPermissionGrantItemRequestBuilderPatchRequestConfiguration';
import {RestoreRequestBuilder} from './restore/restoreRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of resourceSpecificPermissionGrant entities.
 */
export class ResourceSpecificPermissionGrantItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the checkMemberGroups method.
     */
    public get checkMemberGroups(): CheckMemberGroupsRequestBuilder {
        return new CheckMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the checkMemberObjects method.
     */
    public get checkMemberObjects(): CheckMemberObjectsRequestBuilder {
        return new CheckMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getMemberGroups method.
     */
    public get getMemberGroups(): GetMemberGroupsRequestBuilder {
        return new GetMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getMemberObjects method.
     */
    public get getMemberObjects(): GetMemberObjectsRequestBuilder {
        return new GetMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the restore method.
     */
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ResourceSpecificPermissionGrantItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/permissionGrants/{resourceSpecificPermissionGrant%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete entity from permissionGrants
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ResourceSpecificPermissionGrantItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get entity from permissionGrants by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ResourceSpecificPermissionGrant
     */
    public get(requestConfiguration?: ResourceSpecificPermissionGrantItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ResourceSpecificPermissionGrant | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ResourceSpecificPermissionGrant>(requestInfo, createResourceSpecificPermissionGrantFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update entity in permissionGrants
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ResourceSpecificPermissionGrant
     */
    public patch(body: ResourceSpecificPermissionGrant, requestConfiguration?: ResourceSpecificPermissionGrantItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ResourceSpecificPermissionGrant | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ResourceSpecificPermissionGrant>(requestInfo, createResourceSpecificPermissionGrantFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete entity from permissionGrants
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ResourceSpecificPermissionGrantItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get entity from permissionGrants by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ResourceSpecificPermissionGrantItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update entity in permissionGrants
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ResourceSpecificPermissionGrant, requestConfiguration?: ResourceSpecificPermissionGrantItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeResourceSpecificPermissionGrant);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a ResourceSpecificPermissionGrantItemRequestBuilder
     */
    public withUrl(rawUrl: string) : ResourceSpecificPermissionGrantItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ResourceSpecificPermissionGrantItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
