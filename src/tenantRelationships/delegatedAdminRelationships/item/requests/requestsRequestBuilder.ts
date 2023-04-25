import {DelegatedAdminRelationshipRequest, DelegatedAdminRelationshipRequestCollectionResponse} from '../../../../models/';
import {createDelegatedAdminRelationshipRequestCollectionResponseFromDiscriminatorValue} from '../../../../models/createDelegatedAdminRelationshipRequestCollectionResponseFromDiscriminatorValue';
import {createDelegatedAdminRelationshipRequestFromDiscriminatorValue} from '../../../../models/createDelegatedAdminRelationshipRequestFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DelegatedAdminRelationshipRequestItemRequestBuilder} from './item/delegatedAdminRelationshipRequestItemRequestBuilder';
import {RequestsRequestBuilderGetRequestConfiguration} from './requestsRequestBuilderGetRequestConfiguration';
import {RequestsRequestBuilderPostRequestConfiguration} from './requestsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the requests property of the microsoft.graph.delegatedAdminRelationship entity.
 */
export class RequestsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the requests property of the microsoft.graph.delegatedAdminRelationship entity.
     * @param delegatedAdminRelationshipRequestId Unique identifier of the item
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
     * The requests associated with the delegated admin relationship.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DelegatedAdminRelationshipRequestCollectionResponse
     */
    public get(requestConfiguration?: RequestsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DelegatedAdminRelationshipRequestCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DelegatedAdminRelationshipRequestCollectionResponse>(requestInfo, createDelegatedAdminRelationshipRequestCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to requests for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DelegatedAdminRelationshipRequest
     */
    public post(body: DelegatedAdminRelationshipRequest | undefined, requestConfiguration?: RequestsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DelegatedAdminRelationshipRequest | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DelegatedAdminRelationshipRequest>(requestInfo, createDelegatedAdminRelationshipRequestFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The requests associated with the delegated admin relationship.
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
     * Create new navigation property to requests for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DelegatedAdminRelationshipRequest | undefined, requestConfiguration?: RequestsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
