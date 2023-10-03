import { type DelegatedAdminAccessAssignmentCollectionResponse } from '../../../../models/';
import { createDelegatedAdminAccessAssignmentFromDiscriminatorValue, deserializeIntoDelegatedAdminAccessAssignment, serializeDelegatedAdminAccessAssignment, type DelegatedAdminAccessAssignment } from '../../../../models/delegatedAdminAccessAssignment';
import { createDelegatedAdminAccessAssignmentCollectionResponseFromDiscriminatorValue } from '../../../../models/delegatedAdminAccessAssignmentCollectionResponse';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { DelegatedAdminAccessAssignmentItemRequestBuilder } from './item/delegatedAdminAccessAssignmentItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface AccessAssignmentsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface AccessAssignmentsRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AccessAssignmentsRequestBuilderGetQueryParameters;
}
export interface AccessAssignmentsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the accessAssignments property of the microsoft.graph.delegatedAdminRelationship entity.
 */
export class AccessAssignmentsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the accessAssignments property of the microsoft.graph.delegatedAdminRelationship entity.
     * @param delegatedAdminAccessAssignmentId The unique identifier of delegatedAdminAccessAssignment
     * @returns a DelegatedAdminAccessAssignmentItemRequestBuilder
     */
    public byDelegatedAdminAccessAssignmentId(delegatedAdminAccessAssignmentId: string) : DelegatedAdminAccessAssignmentItemRequestBuilder {
        if(!delegatedAdminAccessAssignmentId) throw new Error("delegatedAdminAccessAssignmentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["delegatedAdminAccessAssignment%2Did"] = delegatedAdminAccessAssignmentId
        return new DelegatedAdminAccessAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AccessAssignmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship%2Did}/accessAssignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the delegatedAdminAccessAssignment objects and their properties. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedAdminAccessAssignmentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/delegatedadminrelationship-list-accessassignments?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AccessAssignmentsRequestBuilderGetRequestConfiguration | undefined) : Promise<DelegatedAdminAccessAssignmentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedAdminAccessAssignmentCollectionResponse>(requestInfo, createDelegatedAdminAccessAssignmentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new delegatedAdminAccessAssignment object. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedAdminAccessAssignment
     * @see {@link https://learn.microsoft.com/graph/api/delegatedadminrelationship-post-accessassignments?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DelegatedAdminAccessAssignment, requestConfiguration?: AccessAssignmentsRequestBuilderPostRequestConfiguration | undefined) : Promise<DelegatedAdminAccessAssignment | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedAdminAccessAssignment>(requestInfo, createDelegatedAdminAccessAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the delegatedAdminAccessAssignment objects and their properties. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AccessAssignmentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new delegatedAdminAccessAssignment object. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DelegatedAdminAccessAssignment, requestConfiguration?: AccessAssignmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDelegatedAdminAccessAssignment);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a accessAssignmentsRequestBuilder
     */
    public withUrl(rawUrl: string) : AccessAssignmentsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AccessAssignmentsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
