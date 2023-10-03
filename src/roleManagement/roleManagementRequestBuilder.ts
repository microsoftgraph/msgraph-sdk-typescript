import { type ODataError } from '../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../models/oDataErrors/oDataError';
import { createRoleManagementFromDiscriminatorValue, deserializeIntoRoleManagement, serializeRoleManagement, type RoleManagement } from '../models/roleManagement';
import { DirectoryRequestBuilder } from './directory/directoryRequestBuilder';
import { EntitlementManagementRequestBuilder } from './entitlementManagement/entitlementManagementRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface RoleManagementRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface RoleManagementRequestBuilderGetRequestConfiguration {
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
    queryParameters?: RoleManagementRequestBuilderGetQueryParameters;
}
export interface RoleManagementRequestBuilderPatchRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the roleManagement singleton.
 */
export class RoleManagementRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the directory property of the microsoft.graph.roleManagement entity.
     */
    public get directory(): DirectoryRequestBuilder {
        return new DirectoryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the entitlementManagement property of the microsoft.graph.roleManagement entity.
     */
    public get entitlementManagement(): EntitlementManagementRequestBuilder {
        return new EntitlementManagementRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new RoleManagementRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/roleManagement{?%24select,%24expand}");
    };
    /**
     * Get roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RoleManagement
     */
    public get(requestConfiguration?: RoleManagementRequestBuilderGetRequestConfiguration | undefined) : Promise<RoleManagement | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RoleManagement>(requestInfo, createRoleManagementFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RoleManagement
     */
    public patch(body: RoleManagement, requestConfiguration?: RoleManagementRequestBuilderPatchRequestConfiguration | undefined) : Promise<RoleManagement | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RoleManagement>(requestInfo, createRoleManagementFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RoleManagementRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: RoleManagement, requestConfiguration?: RoleManagementRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeRoleManagement);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a roleManagementRequestBuilder
     */
    public withUrl(rawUrl: string) : RoleManagementRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RoleManagementRequestBuilder(rawUrl, this.requestAdapter);
    };
}
