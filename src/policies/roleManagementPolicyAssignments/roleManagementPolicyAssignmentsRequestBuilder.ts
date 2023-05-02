import {UnifiedRoleManagementPolicyAssignmentCollectionResponse} from '../../models/';
import {createUnifiedRoleManagementPolicyAssignmentCollectionResponseFromDiscriminatorValue} from '../../models/createUnifiedRoleManagementPolicyAssignmentCollectionResponseFromDiscriminatorValue';
import {createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue} from '../../models/createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue';
import {deserializeIntoUnifiedRoleManagementPolicyAssignment} from '../../models/deserializeIntoUnifiedRoleManagementPolicyAssignment';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeUnifiedRoleManagementPolicyAssignment} from '../../models/serializeUnifiedRoleManagementPolicyAssignment';
import {UnifiedRoleManagementPolicyAssignment} from '../../models/unifiedRoleManagementPolicyAssignment';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UnifiedRoleManagementPolicyAssignmentItemRequestBuilder} from './item/unifiedRoleManagementPolicyAssignmentItemRequestBuilder';
import {RoleManagementPolicyAssignmentsRequestBuilderGetRequestConfiguration} from './roleManagementPolicyAssignmentsRequestBuilderGetRequestConfiguration';
import {RoleManagementPolicyAssignmentsRequestBuilderPostRequestConfiguration} from './roleManagementPolicyAssignmentsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleManagementPolicyAssignments property of the microsoft.graph.policyRoot entity.
 */
export class RoleManagementPolicyAssignmentsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the roleManagementPolicyAssignments property of the microsoft.graph.policyRoot entity.
     * @param unifiedRoleManagementPolicyAssignmentId Unique identifier of the item
     * @returns a UnifiedRoleManagementPolicyAssignmentItemRequestBuilder
     */
    public byUnifiedRoleManagementPolicyAssignmentId(unifiedRoleManagementPolicyAssignmentId: string) : UnifiedRoleManagementPolicyAssignmentItemRequestBuilder {
        if(!unifiedRoleManagementPolicyAssignmentId) throw new Error("unifiedRoleManagementPolicyAssignmentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleManagementPolicyAssignment%2Did"] = unifiedRoleManagementPolicyAssignmentId
        return new UnifiedRoleManagementPolicyAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RoleManagementPolicyAssignmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/roleManagementPolicyAssignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The assignment of a role management policy to a role definition object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleManagementPolicyAssignmentCollectionResponse
     */
    public get(requestConfiguration?: RoleManagementPolicyAssignmentsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleManagementPolicyAssignmentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<UnifiedRoleManagementPolicyAssignmentCollectionResponse>(requestInfo, createUnifiedRoleManagementPolicyAssignmentCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to roleManagementPolicyAssignments for policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleManagementPolicyAssignment
     */
    public post(body: UnifiedRoleManagementPolicyAssignment | undefined, requestConfiguration?: RoleManagementPolicyAssignmentsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleManagementPolicyAssignment | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<UnifiedRoleManagementPolicyAssignment>(requestInfo, createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The assignment of a role management policy to a role definition object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RoleManagementPolicyAssignmentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to roleManagementPolicyAssignments for policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UnifiedRoleManagementPolicyAssignment | undefined, requestConfiguration?: RoleManagementPolicyAssignmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeUnifiedRoleManagementPolicyAssignment);
        return requestInfo;
    };
}
