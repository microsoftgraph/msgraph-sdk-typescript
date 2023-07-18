import {createDirectoryRoleFromDiscriminatorValue} from '../models/createDirectoryRoleFromDiscriminatorValue';
import {deserializeIntoDirectoryRole} from '../models/deserializeIntoDirectoryRole';
import {DirectoryRole} from '../models/directoryRole';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeDirectoryRole} from '../models/serializeDirectoryRole';
import {DirectoryRolesWithRoleTemplateIdRequestBuilderDeleteRequestConfiguration} from './directoryRolesWithRoleTemplateIdRequestBuilderDeleteRequestConfiguration';
import {DirectoryRolesWithRoleTemplateIdRequestBuilderGetRequestConfiguration} from './directoryRolesWithRoleTemplateIdRequestBuilderGetRequestConfiguration';
import {DirectoryRolesWithRoleTemplateIdRequestBuilderPatchRequestConfiguration} from './directoryRolesWithRoleTemplateIdRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of directoryRole entities.
 */
export class DirectoryRolesWithRoleTemplateIdRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DirectoryRolesWithRoleTemplateIdRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param roleTemplateId Alternate key of directoryRole
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, roleTemplateId?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/directoryRoles(roleTemplateId='{roleTemplateId}'){?%24select,%24expand}");
        this.pathParameters["roleTemplateId"] = roleTemplateId
    };
    /**
     * Delete entity from directoryRoles by roleTemplateId
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DirectoryRolesWithRoleTemplateIdRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties of a directoryRole object. The role must be activated in tenant for a successful response. You can use both the object ID and template ID of the **directoryRole** with this API. The template ID of a built-in role is immutable and can be seen in the role description on the Azure portal. For details, see Role template IDs.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectoryRole
     * @see {@link https://docs.microsoft.com/graph/api/directoryrole-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DirectoryRolesWithRoleTemplateIdRequestBuilderGetRequestConfiguration | undefined) : Promise<DirectoryRole | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DirectoryRole>(requestInfo, createDirectoryRoleFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update entity in directoryRoles by roleTemplateId
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectoryRole
     */
    public patch(body: DirectoryRole | undefined, requestConfiguration?: DirectoryRolesWithRoleTemplateIdRequestBuilderPatchRequestConfiguration | undefined) : Promise<DirectoryRole | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DirectoryRole>(requestInfo, createDirectoryRoleFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete entity from directoryRoles by roleTemplateId
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DirectoryRolesWithRoleTemplateIdRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties of a directoryRole object. The role must be activated in tenant for a successful response. You can use both the object ID and template ID of the **directoryRole** with this API. The template ID of a built-in role is immutable and can be seen in the role description on the Azure portal. For details, see Role template IDs.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DirectoryRolesWithRoleTemplateIdRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update entity in directoryRoles by roleTemplateId
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DirectoryRole | undefined, requestConfiguration?: DirectoryRolesWithRoleTemplateIdRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDirectoryRole);
        return requestInfo;
    };
}
