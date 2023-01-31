import {UnifiedRoleAssignmentScheduleRequest} from '../../../../models/';
import {createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue} from '../../../../models/createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ActivatedUsingRequestBuilder} from './activatedUsing/activatedUsingRequestBuilder';
import {AppScopeRequestBuilder} from './appScope/appScopeRequestBuilder';
import {DirectoryScopeRequestBuilder} from './directoryScope/directoryScopeRequestBuilder';
import {CancelRequestBuilder} from './microsoftGraphCancel/cancelRequestBuilder';
import {PrincipalRequestBuilder} from './principal/principalRequestBuilder';
import {RoleDefinitionRequestBuilder} from './roleDefinition/roleDefinitionRequestBuilder';
import {TargetScheduleRequestBuilder} from './targetSchedule/targetScheduleRequestBuilder';
import {UnifiedRoleAssignmentScheduleRequestItemRequestBuilderDeleteRequestConfiguration} from './unifiedRoleAssignmentScheduleRequestItemRequestBuilderDeleteRequestConfiguration';
import {UnifiedRoleAssignmentScheduleRequestItemRequestBuilderGetRequestConfiguration} from './unifiedRoleAssignmentScheduleRequestItemRequestBuilderGetRequestConfiguration';
import {UnifiedRoleAssignmentScheduleRequestItemRequestBuilderPatchRequestConfiguration} from './unifiedRoleAssignmentScheduleRequestItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleAssignmentScheduleRequests property of the microsoft.graph.rbacApplication entity.
 */
export class UnifiedRoleAssignmentScheduleRequestItemRequestBuilder {
    /** Provides operations to manage the activatedUsing property of the microsoft.graph.unifiedRoleAssignmentScheduleRequest entity. */
    public get activatedUsing(): ActivatedUsingRequestBuilder {
        return new ActivatedUsingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the appScope property of the microsoft.graph.unifiedRoleAssignmentScheduleRequest entity. */
    public get appScope(): AppScopeRequestBuilder {
        return new AppScopeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the directoryScope property of the microsoft.graph.unifiedRoleAssignmentScheduleRequest entity. */
    public get directoryScope(): DirectoryScopeRequestBuilder {
        return new DirectoryScopeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the cancel method. */
    public get microsoftGraphCancel(): CancelRequestBuilder {
        return new CancelRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** Provides operations to manage the principal property of the microsoft.graph.unifiedRoleAssignmentScheduleRequest entity. */
    public get principal(): PrincipalRequestBuilder {
        return new PrincipalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the roleDefinition property of the microsoft.graph.unifiedRoleAssignmentScheduleRequest entity. */
    public get roleDefinition(): RoleDefinitionRequestBuilder {
        return new RoleDefinitionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the targetSchedule property of the microsoft.graph.unifiedRoleAssignmentScheduleRequest entity. */
    public get targetSchedule(): TargetScheduleRequestBuilder {
        return new TargetScheduleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new UnifiedRoleAssignmentScheduleRequestItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param unifiedRoleAssignmentScheduleRequestId key: id of unifiedRoleAssignmentScheduleRequest
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, unifiedRoleAssignmentScheduleRequestId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["unifiedRoleAssignmentScheduleRequest%2Did"] = unifiedRoleAssignmentScheduleRequestId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property roleAssignmentScheduleRequests for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: UnifiedRoleAssignmentScheduleRequestItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Requests for active role assignments to principals through PIM.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleAssignmentScheduleRequest
     */
    public get(requestConfiguration?: UnifiedRoleAssignmentScheduleRequestItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleAssignmentScheduleRequest | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<UnifiedRoleAssignmentScheduleRequest>(requestInfo, createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property roleAssignmentScheduleRequests in roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of UnifiedRoleAssignmentScheduleRequest
     */
    public patch(body: UnifiedRoleAssignmentScheduleRequest | undefined, requestConfiguration?: UnifiedRoleAssignmentScheduleRequestItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<UnifiedRoleAssignmentScheduleRequest | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<UnifiedRoleAssignmentScheduleRequest>(requestInfo, createUnifiedRoleAssignmentScheduleRequestFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property roleAssignmentScheduleRequests for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UnifiedRoleAssignmentScheduleRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Requests for active role assignments to principals through PIM.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UnifiedRoleAssignmentScheduleRequestItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property roleAssignmentScheduleRequests in roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UnifiedRoleAssignmentScheduleRequest | undefined, requestConfiguration?: UnifiedRoleAssignmentScheduleRequestItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
