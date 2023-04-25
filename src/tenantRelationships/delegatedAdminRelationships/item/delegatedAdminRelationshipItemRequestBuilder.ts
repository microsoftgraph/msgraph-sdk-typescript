import {DelegatedAdminRelationship} from '../../../models/';
import {createDelegatedAdminRelationshipFromDiscriminatorValue} from '../../../models/createDelegatedAdminRelationshipFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AccessAssignmentsRequestBuilder} from './accessAssignments/accessAssignmentsRequestBuilder';
import {DelegatedAdminRelationshipItemRequestBuilderDeleteRequestConfiguration} from './delegatedAdminRelationshipItemRequestBuilderDeleteRequestConfiguration';
import {DelegatedAdminRelationshipItemRequestBuilderGetRequestConfiguration} from './delegatedAdminRelationshipItemRequestBuilderGetRequestConfiguration';
import {DelegatedAdminRelationshipItemRequestBuilderPatchRequestConfiguration} from './delegatedAdminRelationshipItemRequestBuilderPatchRequestConfiguration';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {RequestsRequestBuilder} from './requests/requestsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the delegatedAdminRelationships property of the microsoft.graph.tenantRelationship entity.
 */
export class DelegatedAdminRelationshipItemRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the accessAssignments property of the microsoft.graph.delegatedAdminRelationship entity. */
    public get accessAssignments(): AccessAssignmentsRequestBuilder {
        return new AccessAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the operations property of the microsoft.graph.delegatedAdminRelationship entity. */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the requests property of the microsoft.graph.delegatedAdminRelationship entity. */
    public get requests(): RequestsRequestBuilder {
        return new RequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DelegatedAdminRelationshipItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property delegatedAdminRelationships for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: DelegatedAdminRelationshipItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * The details of the delegated administrative privileges that a Microsoft partner has in a customer tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DelegatedAdminRelationship
     */
    public get(requestConfiguration?: DelegatedAdminRelationshipItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DelegatedAdminRelationship | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DelegatedAdminRelationship>(requestInfo, createDelegatedAdminRelationshipFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property delegatedAdminRelationships in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DelegatedAdminRelationship
     */
    public patch(body: DelegatedAdminRelationship | undefined, requestConfiguration?: DelegatedAdminRelationshipItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DelegatedAdminRelationship | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DelegatedAdminRelationship>(requestInfo, createDelegatedAdminRelationshipFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property delegatedAdminRelationships for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DelegatedAdminRelationshipItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The details of the delegated administrative privileges that a Microsoft partner has in a customer tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DelegatedAdminRelationshipItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property delegatedAdminRelationships in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DelegatedAdminRelationship | undefined, requestConfiguration?: DelegatedAdminRelationshipItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
