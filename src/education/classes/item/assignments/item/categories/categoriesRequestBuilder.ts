import { type EducationCategoryCollectionResponse } from '../../../../../../models/';
import { createEducationCategoryFromDiscriminatorValue, deserializeIntoEducationCategory, serializeEducationCategory, type EducationCategory } from '../../../../../../models/educationCategory';
import { createEducationCategoryCollectionResponseFromDiscriminatorValue } from '../../../../../../models/educationCategoryCollectionResponse';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { DeltaRequestBuilder } from './delta/deltaRequestBuilder';
import { EducationCategoryItemRequestBuilder } from './item/educationCategoryItemRequestBuilder';
import { RefRequestBuilder } from './ref/refRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface CategoriesRequestBuilderGetQueryParameters {
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
export interface CategoriesRequestBuilderGetRequestConfiguration {
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
    queryParameters?: CategoriesRequestBuilderGetQueryParameters;
}
export interface CategoriesRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the categories property of the microsoft.graph.educationAssignment entity.
 */
export class CategoriesRequestBuilder extends BaseRequestBuilder {
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
     * Provides operations to manage the collection of educationRoot entities.
     */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.classes.item.assignments.item.categories.item collection
     * @param educationCategoryId Unique identifier of the item
     * @returns a EducationCategoryItemRequestBuilder
     */
    public byEducationCategoryId(educationCategoryId: string) : EducationCategoryItemRequestBuilder {
        if(!educationCategoryId) throw new Error("educationCategoryId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationCategory%2Did"] = educationCategoryId
        return new EducationCategoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CategoriesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/classes/{educationClass%2Did}/assignments/{educationAssignment%2Did}/categories{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List all the categories associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationCategoryCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/educationassignment-list-categories?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: CategoriesRequestBuilderGetRequestConfiguration | undefined) : Promise<EducationCategoryCollectionResponse | undefined> {
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
     * Add one or more existing educationCategory objects to the specified  educationAssignment. Only teachers can perform this operation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationCategory
     * @see {@link https://learn.microsoft.com/graph/api/educationassignment-post-categories?view=graph-rest-1.0|Find more info here}
     */
    public post(body: EducationCategory, requestConfiguration?: CategoriesRequestBuilderPostRequestConfiguration | undefined) : Promise<EducationCategory | undefined> {
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
     * List all the categories associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CategoriesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add one or more existing educationCategory objects to the specified  educationAssignment. Only teachers can perform this operation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: EducationCategory, requestConfiguration?: CategoriesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a categoriesRequestBuilder
     */
    public withUrl(rawUrl: string) : CategoriesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CategoriesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
