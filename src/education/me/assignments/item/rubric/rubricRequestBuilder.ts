import {createEducationRubricFromDiscriminatorValue} from '../../../../../models/createEducationRubricFromDiscriminatorValue';
import {deserializeIntoEducationRubric} from '../../../../../models/deserializeIntoEducationRubric';
import type {EducationRubric} from '../../../../../models/educationRubric';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeEducationRubric} from '../../../../../models/serializeEducationRubric';
import {RefRequestBuilder} from './ref/refRequestBuilder';
import {RubricRequestBuilderDeleteRequestConfiguration} from './rubricRequestBuilderDeleteRequestConfiguration';
import {RubricRequestBuilderGetRequestConfiguration} from './rubricRequestBuilderGetRequestConfiguration';
import {RubricRequestBuilderPatchRequestConfiguration} from './rubricRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the rubric property of the microsoft.graph.educationAssignment entity.
 */
export class RubricRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the collection of educationRoot entities.
     */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new RubricRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/me/assignments/{educationAssignment%2Did}/rubric{?%24select,%24expand}");
    };
    /**
     * Remove an educationRubric from an educationAssignment. This method does not delete the rubric itself and can only be performed by teachers.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/educationassignment-delete-rubric?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: RubricRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get the educationRubric object attached to an educationAssignment, if one exists. Only teachers, students, and applications with application permissions can perform this operation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationRubric
     * @see {@link https://learn.microsoft.com/graph/api/educationassignment-get-rubric?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RubricRequestBuilderGetRequestConfiguration | undefined) : Promise<EducationRubric | undefined> {
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
     * Attach an existing educationRubric object to an educationAssignment. Only teachers can perform this operation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationRubric
     * @see {@link https://learn.microsoft.com/graph/api/educationassignment-put-rubric?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: EducationRubric, requestConfiguration?: RubricRequestBuilderPatchRequestConfiguration | undefined) : Promise<EducationRubric | undefined> {
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
     * Remove an educationRubric from an educationAssignment. This method does not delete the rubric itself and can only be performed by teachers.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: RubricRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get the educationRubric object attached to an educationAssignment, if one exists. Only teachers, students, and applications with application permissions can perform this operation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RubricRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Attach an existing educationRubric object to an educationAssignment. Only teachers can perform this operation.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EducationRubric, requestConfiguration?: RubricRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
}
