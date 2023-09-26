import { createAccessReviewHistoryDefinitionFromDiscriminatorValue, deserializeIntoAccessReviewHistoryDefinition, serializeAccessReviewHistoryDefinition, type AccessReviewHistoryDefinition } from '../../../../models/accessReviewHistoryDefinition';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { InstancesRequestBuilder } from './instances/instancesRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface AccessReviewHistoryDefinitionItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface AccessReviewHistoryDefinitionItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface AccessReviewHistoryDefinitionItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AccessReviewHistoryDefinitionItemRequestBuilderGetQueryParameters;
}
export interface AccessReviewHistoryDefinitionItemRequestBuilderPatchRequestConfiguration {
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
 * Provides operations to manage the historyDefinitions property of the microsoft.graph.accessReviewSet entity.
 */
export class AccessReviewHistoryDefinitionItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the instances property of the microsoft.graph.accessReviewHistoryDefinition entity.
     */
    public get instances(): InstancesRequestBuilder {
        return new InstancesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AccessReviewHistoryDefinitionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/accessReviews/historyDefinitions/{accessReviewHistoryDefinition%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property historyDefinitions for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AccessReviewHistoryDefinitionItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve an accessReviewHistoryDefinition object by its identifier. All the properties of the access review history definition object are returned. If the definition is 30 days or older, a 404 Not Found error is returned.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewHistoryDefinition
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewhistorydefinition-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AccessReviewHistoryDefinitionItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessReviewHistoryDefinition | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessReviewHistoryDefinition>(requestInfo, createAccessReviewHistoryDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property historyDefinitions in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewHistoryDefinition
     */
    public patch(body: AccessReviewHistoryDefinition, requestConfiguration?: AccessReviewHistoryDefinitionItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AccessReviewHistoryDefinition | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessReviewHistoryDefinition>(requestInfo, createAccessReviewHistoryDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property historyDefinitions for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AccessReviewHistoryDefinitionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve an accessReviewHistoryDefinition object by its identifier. All the properties of the access review history definition object are returned. If the definition is 30 days or older, a 404 Not Found error is returned.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AccessReviewHistoryDefinitionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property historyDefinitions in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AccessReviewHistoryDefinition, requestConfiguration?: AccessReviewHistoryDefinitionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAccessReviewHistoryDefinition);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a AccessReviewHistoryDefinitionItemRequestBuilder
     */
    public withUrl(rawUrl: string) : AccessReviewHistoryDefinitionItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AccessReviewHistoryDefinitionItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
