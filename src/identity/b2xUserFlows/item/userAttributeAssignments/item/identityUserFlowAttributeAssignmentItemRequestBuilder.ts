import {createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue} from '../../../../../models/createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue';
import {deserializeIntoIdentityUserFlowAttributeAssignment} from '../../../../../models/deserializeIntoIdentityUserFlowAttributeAssignment';
import {IdentityUserFlowAttributeAssignment} from '../../../../../models/identityUserFlowAttributeAssignment';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeIdentityUserFlowAttributeAssignment} from '../../../../../models/serializeIdentityUserFlowAttributeAssignment';
import {IdentityUserFlowAttributeAssignmentItemRequestBuilderDeleteRequestConfiguration} from './identityUserFlowAttributeAssignmentItemRequestBuilderDeleteRequestConfiguration';
import {IdentityUserFlowAttributeAssignmentItemRequestBuilderGetRequestConfiguration} from './identityUserFlowAttributeAssignmentItemRequestBuilderGetRequestConfiguration';
import {IdentityUserFlowAttributeAssignmentItemRequestBuilderPatchRequestConfiguration} from './identityUserFlowAttributeAssignmentItemRequestBuilderPatchRequestConfiguration';
import {UserAttributeRequestBuilder} from './userAttribute/userAttributeRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userAttributeAssignments property of the microsoft.graph.b2xIdentityUserFlow entity.
 */
export class IdentityUserFlowAttributeAssignmentItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the userAttribute property of the microsoft.graph.identityUserFlowAttributeAssignment entity.
     */
    public get userAttribute(): UserAttributeRequestBuilder {
        return new UserAttributeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new IdentityUserFlowAttributeAssignmentItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/b2xUserFlows/{b2xIdentityUserFlow%2Did}/userAttributeAssignments/{identityUserFlowAttributeAssignment%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete an identityUserFlowAttributeAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/identityuserflowattributeassignment-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: IdentityUserFlowAttributeAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of an identityUserFlowAttributeAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityUserFlowAttributeAssignment
     * @see {@link https://docs.microsoft.com/graph/api/identityuserflowattributeassignment-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: IdentityUserFlowAttributeAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : Promise<IdentityUserFlowAttributeAssignment | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityUserFlowAttributeAssignment>(requestInfo, createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a identityUserFlowAttributeAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityUserFlowAttributeAssignment
     * @see {@link https://docs.microsoft.com/graph/api/identityuserflowattributeassignment-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: IdentityUserFlowAttributeAssignment | undefined, requestConfiguration?: IdentityUserFlowAttributeAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<IdentityUserFlowAttributeAssignment | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityUserFlowAttributeAssignment>(requestInfo, createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete an identityUserFlowAttributeAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: IdentityUserFlowAttributeAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of an identityUserFlowAttributeAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IdentityUserFlowAttributeAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a identityUserFlowAttributeAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: IdentityUserFlowAttributeAssignment | undefined, requestConfiguration?: IdentityUserFlowAttributeAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeIdentityUserFlowAttributeAssignment);
        return requestInfo;
    };
}
