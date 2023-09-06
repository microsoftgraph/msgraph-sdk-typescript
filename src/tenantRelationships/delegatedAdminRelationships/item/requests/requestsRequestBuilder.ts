import { type DelegatedAdminRelationshipRequestCollectionResponse } from '../../../../models/';
import { createDelegatedAdminRelationshipRequestCollectionResponseFromDiscriminatorValue } from '../../../../models/createDelegatedAdminRelationshipRequestCollectionResponseFromDiscriminatorValue';
import { createDelegatedAdminRelationshipRequestFromDiscriminatorValue } from '../../../../models/createDelegatedAdminRelationshipRequestFromDiscriminatorValue';
import { type DelegatedAdminRelationshipRequest } from '../../../../models/delegatedAdminRelationshipRequest';
import { deserializeIntoDelegatedAdminRelationshipRequest } from '../../../../models/deserializeIntoDelegatedAdminRelationshipRequest';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { serializeDelegatedAdminRelationshipRequest } from '../../../../models/serializeDelegatedAdminRelationshipRequest';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { DelegatedAdminRelationshipRequestItemRequestBuilder } from './item/delegatedAdminRelationshipRequestItemRequestBuilder';
import { type RequestsRequestBuilderGetRequestConfiguration } from './requestsRequestBuilderGetRequestConfiguration';
import { type RequestsRequestBuilderPostRequestConfiguration } from './requestsRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the requests property of the microsoft.graph.delegatedAdminRelationship entity.
 */
export class RequestsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the requests property of the microsoft.graph.delegatedAdminRelationship entity.
     * @param delegatedAdminRelationshipRequestId The unique identifier of delegatedAdminRelationshipRequest
     * @returns a DelegatedAdminRelationshipRequestItemRequestBuilder
     */
    public byDelegatedAdminRelationshipRequestId(delegatedAdminRelationshipRequestId: string) : DelegatedAdminRelationshipRequestItemRequestBuilder {
        if(!delegatedAdminRelationshipRequestId) throw new Error("delegatedAdminRelationshipRequestId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["delegatedAdminRelationshipRequest%2Did"] = delegatedAdminRelationshipRequestId
        return new DelegatedAdminRelationshipRequestItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RequestsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship%2Did}/requests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the delegatedAdminRelationshipRequest objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedAdminRelationshipRequestCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/delegatedadminrelationship-list-requests?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RequestsRequestBuilderGetRequestConfiguration | undefined) : Promise<DelegatedAdminRelationshipRequestCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedAdminRelationshipRequestCollectionResponse>(requestInfo, createDelegatedAdminRelationshipRequestCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new delegatedAdminRelationshipRequest object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedAdminRelationshipRequest
     * @see {@link https://learn.microsoft.com/graph/api/delegatedadminrelationship-post-requests?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DelegatedAdminRelationshipRequest, requestConfiguration?: RequestsRequestBuilderPostRequestConfiguration | undefined) : Promise<DelegatedAdminRelationshipRequest | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedAdminRelationshipRequest>(requestInfo, createDelegatedAdminRelationshipRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the delegatedAdminRelationshipRequest objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RequestsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new delegatedAdminRelationshipRequest object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DelegatedAdminRelationshipRequest, requestConfiguration?: RequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDelegatedAdminRelationshipRequest);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a requestsRequestBuilder
     */
    public withUrl(rawUrl: string) : RequestsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RequestsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
