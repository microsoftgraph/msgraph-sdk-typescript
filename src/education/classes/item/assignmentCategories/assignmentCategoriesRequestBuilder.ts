import { type EducationCategoryCollectionResponse } from '../../../../models/';
import { createEducationCategoryFromDiscriminatorValue, deserializeIntoEducationCategory, serializeEducationCategory, type EducationCategory } from '../../../../models/educationCategory';
import { createEducationCategoryCollectionResponseFromDiscriminatorValue } from '../../../../models/educationCategoryCollectionResponse';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { DeltaRequestBuilder } from './delta/deltaRequestBuilder';
import { EducationCategoryItemRequestBuilder } from './item/educationCategoryItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface AssignmentCategoriesRequestBuilderGetQueryParameters {
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
export interface AssignmentCategoriesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: AssignmentCategoriesRequestBuilderGetQueryParameters;
}
export interface AssignmentCategoriesRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the assignmentCategories property of the microsoft.graph.educationClass entity.
 */
export class AssignmentCategoriesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the delta method.
     */
    public get delta(): DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignmentCategories property of the microsoft.graph.educationClass entity.
     * @param educationCategoryId The unique identifier of educationCategory
     * @returns a EducationCategoryItemRequestBuilder
     */
    public byEducationCategoryId(educationCategoryId: string) : EducationCategoryItemRequestBuilder {
        if(!educationCategoryId) throw new Error("educationCategoryId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationCategory%2Did"] = educationCategoryId
        return new EducationCategoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AssignmentCategoriesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/classes/{educationClass%2Did}/assignmentCategories{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of educationCategory objects. Only teachers can perform this operation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationCategoryCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/educationclass-list-categories?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AssignmentCategoriesRequestBuilderGetRequestConfiguration | undefined) : Promise<EducationCategoryCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationCategoryCollectionResponse>(requestInfo, createEducationCategoryCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Creates a new educationCategory on an educationClass. Only teachers can perform this operation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationCategory
     * @see {@link https://learn.microsoft.com/graph/api/educationclass-post-category?view=graph-rest-1.0|Find more info here}
     */
    public post(body: EducationCategory, requestConfiguration?: AssignmentCategoriesRequestBuilderPostRequestConfiguration | undefined) : Promise<EducationCategory | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationCategory>(requestInfo, createEducationCategoryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of educationCategory objects. Only teachers can perform this operation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AssignmentCategoriesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Creates a new educationCategory on an educationClass. Only teachers can perform this operation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: EducationCategory, requestConfiguration?: AssignmentCategoriesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEducationCategory);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a assignmentCategoriesRequestBuilder
     */
    public withUrl(rawUrl: string) : AssignmentCategoriesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AssignmentCategoriesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
