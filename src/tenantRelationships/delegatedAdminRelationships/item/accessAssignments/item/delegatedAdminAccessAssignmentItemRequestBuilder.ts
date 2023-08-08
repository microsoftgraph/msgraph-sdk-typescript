import {createDelegatedAdminAccessAssignmentFromDiscriminatorValue} from '../../../../../models/createDelegatedAdminAccessAssignmentFromDiscriminatorValue';
import type {DelegatedAdminAccessAssignment} from '../../../../../models/delegatedAdminAccessAssignment';
import {deserializeIntoDelegatedAdminAccessAssignment} from '../../../../../models/deserializeIntoDelegatedAdminAccessAssignment';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeDelegatedAdminAccessAssignment} from '../../../../../models/serializeDelegatedAdminAccessAssignment';
import {DelegatedAdminAccessAssignmentItemRequestBuilderDeleteRequestConfiguration} from './delegatedAdminAccessAssignmentItemRequestBuilderDeleteRequestConfiguration';
import {DelegatedAdminAccessAssignmentItemRequestBuilderGetRequestConfiguration} from './delegatedAdminAccessAssignmentItemRequestBuilderGetRequestConfiguration';
import {DelegatedAdminAccessAssignmentItemRequestBuilderPatchRequestConfiguration} from './delegatedAdminAccessAssignmentItemRequestBuilderPatchRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessAssignments property of the microsoft.graph.delegatedAdminRelationship entity.
 */
export class DelegatedAdminAccessAssignmentItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DelegatedAdminAccessAssignmentItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship%2Did}/accessAssignments/{delegatedAdminAccessAssignment%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a delegatedAdminAccessAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/delegatedadminaccessassignment-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: DelegatedAdminAccessAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties of a delegatedAdminAccessAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedAdminAccessAssignment
     * @see {@link https://learn.microsoft.com/graph/api/delegatedadminaccessassignment-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DelegatedAdminAccessAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DelegatedAdminAccessAssignment | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedAdminAccessAssignment>(requestInfo, createDelegatedAdminAccessAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a delegatedAdminAccessAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedAdminAccessAssignment
     * @see {@link https://learn.microsoft.com/graph/api/delegatedadminaccessassignment-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: DelegatedAdminAccessAssignment, requestConfiguration?: DelegatedAdminAccessAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DelegatedAdminAccessAssignment | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedAdminAccessAssignment>(requestInfo, createDelegatedAdminAccessAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a delegatedAdminAccessAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DelegatedAdminAccessAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties of a delegatedAdminAccessAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DelegatedAdminAccessAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a delegatedAdminAccessAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DelegatedAdminAccessAssignment, requestConfiguration?: DelegatedAdminAccessAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDelegatedAdminAccessAssignment);
        return requestInfo;
    };
}
