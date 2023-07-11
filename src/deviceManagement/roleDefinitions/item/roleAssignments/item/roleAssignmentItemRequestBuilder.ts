import {createRoleAssignmentFromDiscriminatorValue} from '../../../../../models/createRoleAssignmentFromDiscriminatorValue';
import {deserializeIntoRoleAssignment} from '../../../../../models/deserializeIntoRoleAssignment';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {RoleAssignment} from '../../../../../models/roleAssignment';
import {serializeRoleAssignment} from '../../../../../models/serializeRoleAssignment';
import {RoleAssignmentItemRequestBuilderDeleteRequestConfiguration} from './roleAssignmentItemRequestBuilderDeleteRequestConfiguration';
import {RoleAssignmentItemRequestBuilderGetRequestConfiguration} from './roleAssignmentItemRequestBuilderGetRequestConfiguration';
import {RoleAssignmentItemRequestBuilderPatchRequestConfiguration} from './roleAssignmentItemRequestBuilderPatchRequestConfiguration';
import {RoleDefinitionRequestBuilder} from './roleDefinition/roleDefinitionRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleAssignments property of the microsoft.graph.roleDefinition entity.
 */
export class RoleAssignmentItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the roleDefinition property of the microsoft.graph.roleAssignment entity.
     */
    public get roleDefinition(): RoleDefinitionRequestBuilder {
        return new RoleDefinitionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new RoleAssignmentItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/roleDefinitions/{roleDefinition%2Did}/roleAssignments/{roleAssignment%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property roleAssignments for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: RoleAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * List of Role assignments for this role definition.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RoleAssignment
     */
    public get(requestConfiguration?: RoleAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : Promise<RoleAssignment | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RoleAssignment>(requestInfo, createRoleAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property roleAssignments in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RoleAssignment
     */
    public patch(body: RoleAssignment | undefined, requestConfiguration?: RoleAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<RoleAssignment | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RoleAssignment>(requestInfo, createRoleAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property roleAssignments for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: RoleAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * List of Role assignments for this role definition.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RoleAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property roleAssignments in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: RoleAssignment | undefined, requestConfiguration?: RoleAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeRoleAssignment);
        return requestInfo;
    };
}
