import {DelegatedAdminRelationshipCollectionResponse} from '../../models/';
import {createDelegatedAdminRelationshipCollectionResponseFromDiscriminatorValue} from '../../models/createDelegatedAdminRelationshipCollectionResponseFromDiscriminatorValue';
import {createDelegatedAdminRelationshipFromDiscriminatorValue} from '../../models/createDelegatedAdminRelationshipFromDiscriminatorValue';
import type {DelegatedAdminRelationship} from '../../models/delegatedAdminRelationship';
import {deserializeIntoDelegatedAdminRelationship} from '../../models/deserializeIntoDelegatedAdminRelationship';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeDelegatedAdminRelationship} from '../../models/serializeDelegatedAdminRelationship';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DelegatedAdminRelationshipsRequestBuilderGetRequestConfiguration} from './delegatedAdminRelationshipsRequestBuilderGetRequestConfiguration';
import {DelegatedAdminRelationshipsRequestBuilderPostRequestConfiguration} from './delegatedAdminRelationshipsRequestBuilderPostRequestConfiguration';
import {DelegatedAdminRelationshipItemRequestBuilder} from './item/delegatedAdminRelationshipItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the delegatedAdminRelationships property of the microsoft.graph.tenantRelationship entity.
 */
export class DelegatedAdminRelationshipsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the delegatedAdminRelationships property of the microsoft.graph.tenantRelationship entity.
     * @param delegatedAdminRelationshipId Unique identifier of the item
     * @returns a DelegatedAdminRelationshipItemRequestBuilder
     */
    public byDelegatedAdminRelationshipId(delegatedAdminRelationshipId: string) : DelegatedAdminRelationshipItemRequestBuilder {
        if(!delegatedAdminRelationshipId) throw new Error("delegatedAdminRelationshipId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["delegatedAdminRelationship%2Did"] = delegatedAdminRelationshipId
        return new DelegatedAdminRelationshipItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DelegatedAdminRelationshipsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/tenantRelationships/delegatedAdminRelationships{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the delegatedAdminRelationship objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedAdminRelationshipCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/tenantrelationship-list-delegatedadminrelationships?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DelegatedAdminRelationshipsRequestBuilderGetRequestConfiguration | undefined) : Promise<DelegatedAdminRelationshipCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedAdminRelationshipCollectionResponse>(requestInfo, createDelegatedAdminRelationshipCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new delegatedAdminRelationship object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedAdminRelationship
     * @see {@link https://learn.microsoft.com/graph/api/tenantrelationship-post-delegatedadminrelationships?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DelegatedAdminRelationship, requestConfiguration?: DelegatedAdminRelationshipsRequestBuilderPostRequestConfiguration | undefined) : Promise<DelegatedAdminRelationship | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedAdminRelationship>(requestInfo, createDelegatedAdminRelationshipFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the delegatedAdminRelationship objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DelegatedAdminRelationshipsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new delegatedAdminRelationship object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DelegatedAdminRelationship, requestConfiguration?: DelegatedAdminRelationshipsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDelegatedAdminRelationship);
        return requestInfo;
    };
}
