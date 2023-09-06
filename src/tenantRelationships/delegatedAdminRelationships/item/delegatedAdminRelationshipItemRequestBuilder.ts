import { createDelegatedAdminRelationshipFromDiscriminatorValue } from '../../../models/createDelegatedAdminRelationshipFromDiscriminatorValue';
import { type DelegatedAdminRelationship } from '../../../models/delegatedAdminRelationship';
import { deserializeIntoDelegatedAdminRelationship } from '../../../models/deserializeIntoDelegatedAdminRelationship';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeDelegatedAdminRelationship } from '../../../models/serializeDelegatedAdminRelationship';
import { AccessAssignmentsRequestBuilder } from './accessAssignments/accessAssignmentsRequestBuilder';
import { type DelegatedAdminRelationshipItemRequestBuilderDeleteRequestConfiguration } from './delegatedAdminRelationshipItemRequestBuilderDeleteRequestConfiguration';
import { type DelegatedAdminRelationshipItemRequestBuilderGetRequestConfiguration } from './delegatedAdminRelationshipItemRequestBuilderGetRequestConfiguration';
import { type DelegatedAdminRelationshipItemRequestBuilderPatchRequestConfiguration } from './delegatedAdminRelationshipItemRequestBuilderPatchRequestConfiguration';
import { OperationsRequestBuilder } from './operations/operationsRequestBuilder';
import { RequestsRequestBuilder } from './requests/requestsRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the delegatedAdminRelationships property of the microsoft.graph.tenantRelationship entity.
 */
export class DelegatedAdminRelationshipItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the accessAssignments property of the microsoft.graph.delegatedAdminRelationship entity.
     */
    public get accessAssignments(): AccessAssignmentsRequestBuilder {
        return new AccessAssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the operations property of the microsoft.graph.delegatedAdminRelationship entity.
     */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the requests property of the microsoft.graph.delegatedAdminRelationship entity.
     */
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
     * Delete a delegatedAdminRelationship object. A relationship can only be deleted if it's in the 'created' status. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/delegatedadminrelationship-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: DelegatedAdminRelationshipItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties of a delegatedAdminRelationship object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedAdminRelationship
     * @see {@link https://learn.microsoft.com/graph/api/delegatedadminrelationship-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DelegatedAdminRelationshipItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DelegatedAdminRelationship | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedAdminRelationship>(requestInfo, createDelegatedAdminRelationshipFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a delegatedAdminRelationship object. A relationship can only be updated if it's in the created status.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedAdminRelationship
     * @see {@link https://learn.microsoft.com/graph/api/delegatedadminrelationship-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DelegatedAdminRelationship, requestConfiguration?: DelegatedAdminRelationshipItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DelegatedAdminRelationship | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedAdminRelationship>(requestInfo, createDelegatedAdminRelationshipFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a delegatedAdminRelationship object. A relationship can only be deleted if it's in the 'created' status. 
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
     * Read the properties of a delegatedAdminRelationship object.
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
     * Update the properties of a delegatedAdminRelationship object. A relationship can only be updated if it's in the created status.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DelegatedAdminRelationship, requestConfiguration?: DelegatedAdminRelationshipItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDelegatedAdminRelationship);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a DelegatedAdminRelationshipItemRequestBuilder
     */
    public withUrl(rawUrl: string) : DelegatedAdminRelationshipItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DelegatedAdminRelationshipItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
