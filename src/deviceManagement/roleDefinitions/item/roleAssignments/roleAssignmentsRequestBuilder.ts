import { type RoleAssignmentCollectionResponse } from '../../../../models/';
import { createRoleAssignmentCollectionResponseFromDiscriminatorValue } from '../../../../models/createRoleAssignmentCollectionResponseFromDiscriminatorValue';
import { createRoleAssignmentFromDiscriminatorValue } from '../../../../models/createRoleAssignmentFromDiscriminatorValue';
import { deserializeIntoRoleAssignment } from '../../../../models/deserializeIntoRoleAssignment';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { type RoleAssignment } from '../../../../models/roleAssignment';
import { serializeRoleAssignment } from '../../../../models/serializeRoleAssignment';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { RoleAssignmentItemRequestBuilder } from './item/roleAssignmentItemRequestBuilder';
import { type RoleAssignmentsRequestBuilderGetRequestConfiguration } from './roleAssignmentsRequestBuilderGetRequestConfiguration';
import { type RoleAssignmentsRequestBuilderPostRequestConfiguration } from './roleAssignmentsRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleAssignments property of the microsoft.graph.roleDefinition entity.
 */
export class RoleAssignmentsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the roleAssignments property of the microsoft.graph.roleDefinition entity.
     * @param roleAssignmentId The unique identifier of roleAssignment
     * @returns a RoleAssignmentItemRequestBuilder
     */
    public byRoleAssignmentId(roleAssignmentId: string) : RoleAssignmentItemRequestBuilder {
        if(!roleAssignmentId) throw new Error("roleAssignmentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["roleAssignment%2Did"] = roleAssignmentId
        return new RoleAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RoleAssignmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/roleDefinitions/{roleDefinition%2Did}/roleAssignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the roleAssignment objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RoleAssignmentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-rbac-roleassignment-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RoleAssignmentsRequestBuilderGetRequestConfiguration | undefined) : Promise<RoleAssignmentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RoleAssignmentCollectionResponse>(requestInfo, createRoleAssignmentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new roleAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RoleAssignment
     * @see {@link https://learn.microsoft.com/graph/api/intune-rbac-roleassignment-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: RoleAssignment, requestConfiguration?: RoleAssignmentsRequestBuilderPostRequestConfiguration | undefined) : Promise<RoleAssignment | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RoleAssignment>(requestInfo, createRoleAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the roleAssignment objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RoleAssignmentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new roleAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: RoleAssignment, requestConfiguration?: RoleAssignmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeRoleAssignment);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a roleAssignmentsRequestBuilder
     */
    public withUrl(rawUrl: string) : RoleAssignmentsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RoleAssignmentsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
