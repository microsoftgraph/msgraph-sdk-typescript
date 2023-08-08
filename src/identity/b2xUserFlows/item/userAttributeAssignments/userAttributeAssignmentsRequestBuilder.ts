import {IdentityUserFlowAttributeAssignmentCollectionResponse} from '../../../../models/';
import {createIdentityUserFlowAttributeAssignmentCollectionResponseFromDiscriminatorValue} from '../../../../models/createIdentityUserFlowAttributeAssignmentCollectionResponseFromDiscriminatorValue';
import {createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue} from '../../../../models/createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue';
import {deserializeIntoIdentityUserFlowAttributeAssignment} from '../../../../models/deserializeIntoIdentityUserFlowAttributeAssignment';
import type {IdentityUserFlowAttributeAssignment} from '../../../../models/identityUserFlowAttributeAssignment';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeIdentityUserFlowAttributeAssignment} from '../../../../models/serializeIdentityUserFlowAttributeAssignment';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {GetOrderRequestBuilder} from './getOrder/getOrderRequestBuilder';
import {IdentityUserFlowAttributeAssignmentItemRequestBuilder} from './item/identityUserFlowAttributeAssignmentItemRequestBuilder';
import {SetOrderRequestBuilder} from './setOrder/setOrderRequestBuilder';
import {UserAttributeAssignmentsRequestBuilderGetRequestConfiguration} from './userAttributeAssignmentsRequestBuilderGetRequestConfiguration';
import {UserAttributeAssignmentsRequestBuilderPostRequestConfiguration} from './userAttributeAssignmentsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userAttributeAssignments property of the microsoft.graph.b2xIdentityUserFlow entity.
 */
export class UserAttributeAssignmentsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getOrder method.
     */
    public get getOrder(): GetOrderRequestBuilder {
        return new GetOrderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the setOrder method.
     */
    public get setOrder(): SetOrderRequestBuilder {
        return new SetOrderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userAttributeAssignments property of the microsoft.graph.b2xIdentityUserFlow entity.
     * @param identityUserFlowAttributeAssignmentId Unique identifier of the item
     * @returns a IdentityUserFlowAttributeAssignmentItemRequestBuilder
     */
    public byIdentityUserFlowAttributeAssignmentId(identityUserFlowAttributeAssignmentId: string) : IdentityUserFlowAttributeAssignmentItemRequestBuilder {
        if(!identityUserFlowAttributeAssignmentId) throw new Error("identityUserFlowAttributeAssignmentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["identityUserFlowAttributeAssignment%2Did"] = identityUserFlowAttributeAssignmentId
        return new IdentityUserFlowAttributeAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserAttributeAssignmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/b2xUserFlows/{b2xIdentityUserFlow%2Did}/userAttributeAssignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the identityUserFlowAttributeAssignment resources from the userAttributeAssignments navigation property in a b2xIdentityUserFlow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityUserFlowAttributeAssignmentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/b2xidentityuserflow-list-userattributeassignments?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UserAttributeAssignmentsRequestBuilderGetRequestConfiguration | undefined) : Promise<IdentityUserFlowAttributeAssignmentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityUserFlowAttributeAssignmentCollectionResponse>(requestInfo, createIdentityUserFlowAttributeAssignmentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new identityUserFlowAttributeAssignment object in a b2xIdentityUserFlow.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityUserFlowAttributeAssignment
     * @see {@link https://learn.microsoft.com/graph/api/b2xidentityuserflow-post-userattributeassignments?view=graph-rest-1.0|Find more info here}
     */
    public post(body: IdentityUserFlowAttributeAssignment, requestConfiguration?: UserAttributeAssignmentsRequestBuilderPostRequestConfiguration | undefined) : Promise<IdentityUserFlowAttributeAssignment | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityUserFlowAttributeAssignment>(requestInfo, createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the identityUserFlowAttributeAssignment resources from the userAttributeAssignments navigation property in a b2xIdentityUserFlow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserAttributeAssignmentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new identityUserFlowAttributeAssignment object in a b2xIdentityUserFlow.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: IdentityUserFlowAttributeAssignment, requestConfiguration?: UserAttributeAssignmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeIdentityUserFlowAttributeAssignment);
        return requestInfo;
    };
}
