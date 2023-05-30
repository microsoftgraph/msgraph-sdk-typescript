import {DelegatedAdminAccessAssignmentCollectionResponse} from '../../../../models/';
import {createDelegatedAdminAccessAssignmentCollectionResponseFromDiscriminatorValue} from '../../../../models/createDelegatedAdminAccessAssignmentCollectionResponseFromDiscriminatorValue';
import {createDelegatedAdminAccessAssignmentFromDiscriminatorValue} from '../../../../models/createDelegatedAdminAccessAssignmentFromDiscriminatorValue';
import {DelegatedAdminAccessAssignment} from '../../../../models/delegatedAdminAccessAssignment';
import {deserializeIntoDelegatedAdminAccessAssignment} from '../../../../models/deserializeIntoDelegatedAdminAccessAssignment';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeDelegatedAdminAccessAssignment} from '../../../../models/serializeDelegatedAdminAccessAssignment';
import {AccessAssignmentsRequestBuilderGetRequestConfiguration} from './accessAssignmentsRequestBuilderGetRequestConfiguration';
import {AccessAssignmentsRequestBuilderPostRequestConfiguration} from './accessAssignmentsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DelegatedAdminAccessAssignmentItemRequestBuilder} from './item/delegatedAdminAccessAssignmentItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessAssignments property of the microsoft.graph.delegatedAdminRelationship entity.
 */
export class AccessAssignmentsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the accessAssignments property of the microsoft.graph.delegatedAdminRelationship entity.
     * @param delegatedAdminAccessAssignmentId Unique identifier of the item
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
     * Get a list of the delegatedAdminAccessAssignment objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DelegatedAdminAccessAssignmentCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/delegatedadminrelationship-list-accessassignments?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AccessAssignmentsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DelegatedAdminAccessAssignmentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<DelegatedAdminAccessAssignmentCollectionResponse>(requestInfo, createDelegatedAdminAccessAssignmentCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new delegatedAdminAccessAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DelegatedAdminAccessAssignment
     * @see {@link https://docs.microsoft.com/graph/api/delegatedadminrelationship-post-accessassignments?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DelegatedAdminAccessAssignment | undefined, requestConfiguration?: AccessAssignmentsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DelegatedAdminAccessAssignment | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<DelegatedAdminAccessAssignment>(requestInfo, createDelegatedAdminAccessAssignmentFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get a list of the delegatedAdminAccessAssignment objects and their properties.
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
     * Create a new delegatedAdminAccessAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DelegatedAdminAccessAssignment | undefined, requestConfiguration?: AccessAssignmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDelegatedAdminAccessAssignment);
        return requestInfo;
    };
}
