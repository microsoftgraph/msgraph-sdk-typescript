import {createEducationCategoryFromDiscriminatorValue} from '../../../../../models/createEducationCategoryFromDiscriminatorValue';
import {deserializeIntoEducationCategory} from '../../../../../models/deserializeIntoEducationCategory';
import type {EducationCategory} from '../../../../../models/educationCategory';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeEducationCategory} from '../../../../../models/serializeEducationCategory';
import {EducationCategoryItemRequestBuilderDeleteRequestConfiguration} from './educationCategoryItemRequestBuilderDeleteRequestConfiguration';
import {EducationCategoryItemRequestBuilderGetRequestConfiguration} from './educationCategoryItemRequestBuilderGetRequestConfiguration';
import {EducationCategoryItemRequestBuilderPatchRequestConfiguration} from './educationCategoryItemRequestBuilderPatchRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignmentCategories property of the microsoft.graph.educationClass entity.
 */
export class EducationCategoryItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new EducationCategoryItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/classes/{educationClass%2Did}/assignmentCategories/{educationCategory%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete an existing category. Only teachers can perform this operation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/educationcategory-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: EducationCategoryItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve an educationCategory object. Only teachers, students, and applications with application permissions can perform this operation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationCategory
     * @see {@link https://learn.microsoft.com/graph/api/educationcategory-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: EducationCategoryItemRequestBuilderGetRequestConfiguration | undefined) : Promise<EducationCategory | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationCategory>(requestInfo, createEducationCategoryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property assignmentCategories in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationCategory
     */
    public patch(body: EducationCategory, requestConfiguration?: EducationCategoryItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<EducationCategory | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationCategory>(requestInfo, createEducationCategoryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete an existing category. Only teachers can perform this operation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EducationCategoryItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve an educationCategory object. Only teachers, students, and applications with application permissions can perform this operation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EducationCategoryItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property assignmentCategories in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EducationCategory, requestConfiguration?: EducationCategoryItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEducationCategory);
        return requestInfo;
    };
}
