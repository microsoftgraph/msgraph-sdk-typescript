import {RbacApplication} from '../../models/';
import {createRbacApplicationFromDiscriminatorValue} from '../../models/createRbacApplicationFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {DirectoryRequestBuilderGetQueryParameters} from './directoryRequestBuilderGetQueryParameters';
import {UnifiedRoleAssignmentItemRequestBuilder} from './roleAssignments/item/unifiedRoleAssignmentItemRequestBuilder';
import {RoleAssignmentsRequestBuilder} from './roleAssignments/roleAssignmentsRequestBuilder';
import {UnifiedRoleAssignmentScheduleInstanceItemRequestBuilder} from './roleAssignmentScheduleInstances/item/unifiedRoleAssignmentScheduleInstanceItemRequestBuilder';
import {RoleAssignmentScheduleInstancesRequestBuilder} from './roleAssignmentScheduleInstances/roleAssignmentScheduleInstancesRequestBuilder';
import {UnifiedRoleAssignmentScheduleRequestItemRequestBuilder} from './roleAssignmentScheduleRequests/item/unifiedRoleAssignmentScheduleRequestItemRequestBuilder';
import {RoleAssignmentScheduleRequestsRequestBuilder} from './roleAssignmentScheduleRequests/roleAssignmentScheduleRequestsRequestBuilder';
import {UnifiedRoleAssignmentScheduleItemRequestBuilder} from './roleAssignmentSchedules/item/unifiedRoleAssignmentScheduleItemRequestBuilder';
import {RoleAssignmentSchedulesRequestBuilder} from './roleAssignmentSchedules/roleAssignmentSchedulesRequestBuilder';
import {UnifiedRoleDefinitionItemRequestBuilder} from './roleDefinitions/item/unifiedRoleDefinitionItemRequestBuilder';
import {RoleDefinitionsRequestBuilder} from './roleDefinitions/roleDefinitionsRequestBuilder';
import {UnifiedRoleEligibilityScheduleInstanceItemRequestBuilder} from './roleEligibilityScheduleInstances/item/unifiedRoleEligibilityScheduleInstanceItemRequestBuilder';
import {RoleEligibilityScheduleInstancesRequestBuilder} from './roleEligibilityScheduleInstances/roleEligibilityScheduleInstancesRequestBuilder';
import {UnifiedRoleEligibilityScheduleRequestItemRequestBuilder} from './roleEligibilityScheduleRequests/item/unifiedRoleEligibilityScheduleRequestItemRequestBuilder';
import {RoleEligibilityScheduleRequestsRequestBuilder} from './roleEligibilityScheduleRequests/roleEligibilityScheduleRequestsRequestBuilder';
import {UnifiedRoleEligibilityScheduleItemRequestBuilder} from './roleEligibilitySchedules/item/unifiedRoleEligibilityScheduleItemRequestBuilder';
import {RoleEligibilitySchedulesRequestBuilder} from './roleEligibilitySchedules/roleEligibilitySchedulesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the directory property of the microsoft.graph.roleManagement entity.  */
export class DirectoryRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** The roleAssignments property  */
    public get roleAssignments(): RoleAssignmentsRequestBuilder {
        return new RoleAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The roleAssignmentScheduleInstances property  */
    public get roleAssignmentScheduleInstances(): RoleAssignmentScheduleInstancesRequestBuilder {
        return new RoleAssignmentScheduleInstancesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The roleAssignmentScheduleRequests property  */
    public get roleAssignmentScheduleRequests(): RoleAssignmentScheduleRequestsRequestBuilder {
        return new RoleAssignmentScheduleRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The roleAssignmentSchedules property  */
    public get roleAssignmentSchedules(): RoleAssignmentSchedulesRequestBuilder {
        return new RoleAssignmentSchedulesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The roleDefinitions property  */
    public get roleDefinitions(): RoleDefinitionsRequestBuilder {
        return new RoleDefinitionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The roleEligibilityScheduleInstances property  */
    public get roleEligibilityScheduleInstances(): RoleEligibilityScheduleInstancesRequestBuilder {
        return new RoleEligibilityScheduleInstancesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The roleEligibilityScheduleRequests property  */
    public get roleEligibilityScheduleRequests(): RoleEligibilityScheduleRequestsRequestBuilder {
        return new RoleEligibilityScheduleRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The roleEligibilitySchedules property  */
    public get roleEligibilitySchedules(): RoleEligibilitySchedulesRequestBuilder {
        return new RoleEligibilitySchedulesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new DirectoryRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/roleManagement/directory{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property directory for roleManagement
     * @param headers Request headers
     * @param options Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(headers) requestInfo.headers = headers;
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Read-only. Nullable.
     * @param headers Request headers
     * @param options Request options
     * @param queryParameters Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(queryParameters?: DirectoryRequestBuilderGetQueryParameters | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(headers) requestInfo.headers = headers;
        queryParameters && requestInfo.setQueryStringParametersFromRawObject(queryParameters);
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Update the navigation property directory in roleManagement
     * @param body 
     * @param headers Request headers
     * @param options Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: RbacApplication | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(headers) requestInfo.headers = headers;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Delete navigation property directory for roleManagement
     * @param headers Request headers
     * @param options Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Read-only. Nullable.
     * @param headers Request headers
     * @param options Request options
     * @param queryParameters Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of RbacApplication
     */
    public get(queryParameters?: DirectoryRequestBuilderGetQueryParameters | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<RbacApplication | undefined> {
        const requestInfo = this.createGetRequestInformation(
            queryParameters, headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<RbacApplication>(requestInfo, createRbacApplicationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the navigation property directory in roleManagement
     * @param body 
     * @param headers Request headers
     * @param options Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: RbacApplication | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.roleManagement.directory.roleAssignments.item collection
     * @param id Unique identifier of the item
     * @returns a unifiedRoleAssignmentItemRequestBuilder
     */
    public roleAssignmentsById(id: string) : UnifiedRoleAssignmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleAssignment%2Did"] = id
        return new UnifiedRoleAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.roleManagement.directory.roleAssignmentScheduleInstances.item collection
     * @param id Unique identifier of the item
     * @returns a unifiedRoleAssignmentScheduleInstanceItemRequestBuilder
     */
    public roleAssignmentScheduleInstancesById(id: string) : UnifiedRoleAssignmentScheduleInstanceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleAssignmentScheduleInstance%2Did"] = id
        return new UnifiedRoleAssignmentScheduleInstanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.roleManagement.directory.roleAssignmentScheduleRequests.item collection
     * @param id Unique identifier of the item
     * @returns a unifiedRoleAssignmentScheduleRequestItemRequestBuilder
     */
    public roleAssignmentScheduleRequestsById(id: string) : UnifiedRoleAssignmentScheduleRequestItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleAssignmentScheduleRequest%2Did"] = id
        return new UnifiedRoleAssignmentScheduleRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.roleManagement.directory.roleAssignmentSchedules.item collection
     * @param id Unique identifier of the item
     * @returns a unifiedRoleAssignmentScheduleItemRequestBuilder
     */
    public roleAssignmentSchedulesById(id: string) : UnifiedRoleAssignmentScheduleItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleAssignmentSchedule%2Did"] = id
        return new UnifiedRoleAssignmentScheduleItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.roleManagement.directory.roleDefinitions.item collection
     * @param id Unique identifier of the item
     * @returns a unifiedRoleDefinitionItemRequestBuilder
     */
    public roleDefinitionsById(id: string) : UnifiedRoleDefinitionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleDefinition%2Did"] = id
        return new UnifiedRoleDefinitionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.roleManagement.directory.roleEligibilityScheduleInstances.item collection
     * @param id Unique identifier of the item
     * @returns a unifiedRoleEligibilityScheduleInstanceItemRequestBuilder
     */
    public roleEligibilityScheduleInstancesById(id: string) : UnifiedRoleEligibilityScheduleInstanceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleEligibilityScheduleInstance%2Did"] = id
        return new UnifiedRoleEligibilityScheduleInstanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.roleManagement.directory.roleEligibilityScheduleRequests.item collection
     * @param id Unique identifier of the item
     * @returns a unifiedRoleEligibilityScheduleRequestItemRequestBuilder
     */
    public roleEligibilityScheduleRequestsById(id: string) : UnifiedRoleEligibilityScheduleRequestItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleEligibilityScheduleRequest%2Did"] = id
        return new UnifiedRoleEligibilityScheduleRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.roleManagement.directory.roleEligibilitySchedules.item collection
     * @param id Unique identifier of the item
     * @returns a unifiedRoleEligibilityScheduleItemRequestBuilder
     */
    public roleEligibilitySchedulesById(id: string) : UnifiedRoleEligibilityScheduleItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedRoleEligibilitySchedule%2Did"] = id
        return new UnifiedRoleEligibilityScheduleItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
