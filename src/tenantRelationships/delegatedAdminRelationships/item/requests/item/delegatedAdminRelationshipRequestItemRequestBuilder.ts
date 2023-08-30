import {createDelegatedAdminRelationshipRequestFromDiscriminatorValue} from '../../../../../models/createDelegatedAdminRelationshipRequestFromDiscriminatorValue';
import type {DelegatedAdminRelationshipRequest} from '../../../../../models/delegatedAdminRelationshipRequest';
import {deserializeIntoDelegatedAdminRelationshipRequest} from '../../../../../models/deserializeIntoDelegatedAdminRelationshipRequest';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeDelegatedAdminRelationshipRequest} from '../../../../../models/serializeDelegatedAdminRelationshipRequest';
import {DelegatedAdminRelationshipRequestItemRequestBuilderDeleteRequestConfiguration} from './delegatedAdminRelationshipRequestItemRequestBuilderDeleteRequestConfiguration';
import {DelegatedAdminRelationshipRequestItemRequestBuilderGetRequestConfiguration} from './delegatedAdminRelationshipRequestItemRequestBuilderGetRequestConfiguration';
import {DelegatedAdminRelationshipRequestItemRequestBuilderPatchRequestConfiguration} from './delegatedAdminRelationshipRequestItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the requests property of the microsoft.graph.delegatedAdminRelationship entity.
 */
export class DelegatedAdminRelationshipRequestItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DelegatedAdminRelationshipRequestItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship%2Did}/requests/{delegatedAdminRelationshipRequest%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property requests for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DelegatedAdminRelationshipRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a delegatedAdminRelationshipRequest object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedAdminRelationshipRequest
     * @see {@link https://learn.microsoft.com/graph/api/delegatedadminrelationshiprequest-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DelegatedAdminRelationshipRequestItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DelegatedAdminRelationshipRequest | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedAdminRelationshipRequest>(requestInfo, createDelegatedAdminRelationshipRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property requests in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedAdminRelationshipRequest
     */
    public patch(body: DelegatedAdminRelationshipRequest, requestConfiguration?: DelegatedAdminRelationshipRequestItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DelegatedAdminRelationshipRequest | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedAdminRelationshipRequest>(requestInfo, createDelegatedAdminRelationshipRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property requests for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DelegatedAdminRelationshipRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a delegatedAdminRelationshipRequest object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DelegatedAdminRelationshipRequestItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property requests in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DelegatedAdminRelationshipRequest, requestConfiguration?: DelegatedAdminRelationshipRequestItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDelegatedAdminRelationshipRequest);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a DelegatedAdminRelationshipRequestItemRequestBuilder
     */
    public withUrl(rawUrl: string) : DelegatedAdminRelationshipRequestItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DelegatedAdminRelationshipRequestItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
