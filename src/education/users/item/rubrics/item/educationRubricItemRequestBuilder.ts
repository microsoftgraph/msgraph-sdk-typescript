import { createEducationRubricFromDiscriminatorValue, deserializeIntoEducationRubric, serializeEducationRubric, type EducationRubric } from '../../../../../models/educationRubric';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface EducationRubricItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface EducationRubricItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface EducationRubricItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: EducationRubricItemRequestBuilderGetQueryParameters;
}
export interface EducationRubricItemRequestBuilderPatchRequestConfiguration {
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
 * Provides operations to manage the rubrics property of the microsoft.graph.educationUser entity.
 */
export class EducationRubricItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new EducationRubricItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/users/{educationUser%2Did}/rubrics/{educationRubric%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete an educationRubric object. Only teachers can perform this operation. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/educationrubric-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: EducationRubricItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of an educationRubric object. Only teachers and students can perform this operation. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationRubric
     * @see {@link https://learn.microsoft.com/graph/api/educationrubric-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: EducationRubricItemRequestBuilderGetRequestConfiguration | undefined) : Promise<EducationRubric | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationRubric>(requestInfo, createEducationRubricFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of an educationRubric object. Only teachers can perform this operation. Updating a rubric attached to an assignment (PATCH /education/classes/{class-id}/assignments/{assignment-id}/rubric) is only possible before the assignment is published, and what is updated is actually the original rubric that exists under /education/users/{id}/rubrics. After the assignment is published, an immutable copy of the rubric is made that is attached to that specific assignment. That rubric can be retrieved using GET /education/classes/{class-id}/assignments/{assignment-id}/rubric, but it cannot be updated. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationRubric
     * @see {@link https://learn.microsoft.com/graph/api/educationrubric-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: EducationRubric, requestConfiguration?: EducationRubricItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<EducationRubric | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationRubric>(requestInfo, createEducationRubricFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete an educationRubric object. Only teachers can perform this operation. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EducationRubricItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of an educationRubric object. Only teachers and students can perform this operation. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EducationRubricItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of an educationRubric object. Only teachers can perform this operation. Updating a rubric attached to an assignment (PATCH /education/classes/{class-id}/assignments/{assignment-id}/rubric) is only possible before the assignment is published, and what is updated is actually the original rubric that exists under /education/users/{id}/rubrics. After the assignment is published, an immutable copy of the rubric is made that is attached to that specific assignment. That rubric can be retrieved using GET /education/classes/{class-id}/assignments/{assignment-id}/rubric, but it cannot be updated. This API is supported in the following national cloud deployments.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EducationRubric, requestConfiguration?: EducationRubricItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEducationRubric);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a EducationRubricItemRequestBuilder
     */
    public withUrl(rawUrl: string) : EducationRubricItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new EducationRubricItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
