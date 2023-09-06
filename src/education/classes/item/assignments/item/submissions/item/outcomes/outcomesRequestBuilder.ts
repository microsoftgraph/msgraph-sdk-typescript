import { type EducationOutcomeCollectionResponse } from '../../../../../../../../models/';
import { createEducationOutcomeCollectionResponseFromDiscriminatorValue } from '../../../../../../../../models/createEducationOutcomeCollectionResponseFromDiscriminatorValue';
import { createEducationOutcomeFromDiscriminatorValue } from '../../../../../../../../models/createEducationOutcomeFromDiscriminatorValue';
import { deserializeIntoEducationOutcome } from '../../../../../../../../models/deserializeIntoEducationOutcome';
import { type EducationOutcome } from '../../../../../../../../models/educationOutcome';
import { type ODataError } from '../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../models/oDataErrors/serializeODataError';
import { serializeEducationOutcome } from '../../../../../../../../models/serializeEducationOutcome';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { EducationOutcomeItemRequestBuilder } from './item/educationOutcomeItemRequestBuilder';
import { type OutcomesRequestBuilderGetRequestConfiguration } from './outcomesRequestBuilderGetRequestConfiguration';
import { type OutcomesRequestBuilderPostRequestConfiguration } from './outcomesRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the outcomes property of the microsoft.graph.educationSubmission entity.
 */
export class OutcomesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the outcomes property of the microsoft.graph.educationSubmission entity.
     * @param educationOutcomeId The unique identifier of educationOutcome
     * @returns a EducationOutcomeItemRequestBuilder
     */
    public byEducationOutcomeId(educationOutcomeId: string) : EducationOutcomeItemRequestBuilder {
        if(!educationOutcomeId) throw new Error("educationOutcomeId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationOutcome%2Did"] = educationOutcomeId
        return new EducationOutcomeItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new OutcomesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/classes/{educationClass%2Did}/assignments/{educationAssignment%2Did}/submissions/{educationSubmission%2Did}/outcomes{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of educationOutcome objects. There are four types of outcomes: educationPointsOutcome, educationFeedbackOutcome, educationRubricOutcome, and educationFeedbackResourceOutcome. Only teachers, students, and applications with application permissions can perform this operation. A submission for a credit assignment (one that has no point value and no rubric) will have an educationFeedbackOutcome. (It might also return an educationPointsOutcome, but that outcome is ignored.) A submission for a points assignment (one that has a point value assigned) will have both an educationFeedbackOutcome and an educationPointsOutcome. A submission for an assignment with an attached rubric, if the rubric is a credit rubric (no points), will have an educationFeedbackOutcome and an educationRubricOutcome. (It might also return an educationPointsOutcome, but that outcome is ignored.) A submission for an assignment with an attached rubric, if the rubric is a points rubric, will have an educationFeedbackOutcome, an educationPointsOutcome, and an educationRubricOutcome. A submission for a feedback resource will have an educationFeedbackResourceOutcome. All outcome types have a regular and a published property appropriate to that type of outcome; for example, points and publishedPoints, feedback and publishedFeedback. The regular property is the most recent value updated by the teacher; the published property is the most recent value returned to the student.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationOutcomeCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/educationsubmission-list-outcomes?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: OutcomesRequestBuilderGetRequestConfiguration | undefined) : Promise<EducationOutcomeCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationOutcomeCollectionResponse>(requestInfo, createEducationOutcomeCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new feedback resource for a submission. Only a teacher can perform this operation. To create a new file-based resource, upload the file to the feedback resources folder associated with the assignment. If the file doesn't exist or isn't in that folder, the POST request will fail.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationOutcome
     * @see {@link https://learn.microsoft.com/graph/api/educationfeedbackresourceoutcome-post-outcomes?view=graph-rest-1.0|Find more info here}
     */
    public post(body: EducationOutcome, requestConfiguration?: OutcomesRequestBuilderPostRequestConfiguration | undefined) : Promise<EducationOutcome | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationOutcome>(requestInfo, createEducationOutcomeFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of educationOutcome objects. There are four types of outcomes: educationPointsOutcome, educationFeedbackOutcome, educationRubricOutcome, and educationFeedbackResourceOutcome. Only teachers, students, and applications with application permissions can perform this operation. A submission for a credit assignment (one that has no point value and no rubric) will have an educationFeedbackOutcome. (It might also return an educationPointsOutcome, but that outcome is ignored.) A submission for a points assignment (one that has a point value assigned) will have both an educationFeedbackOutcome and an educationPointsOutcome. A submission for an assignment with an attached rubric, if the rubric is a credit rubric (no points), will have an educationFeedbackOutcome and an educationRubricOutcome. (It might also return an educationPointsOutcome, but that outcome is ignored.) A submission for an assignment with an attached rubric, if the rubric is a points rubric, will have an educationFeedbackOutcome, an educationPointsOutcome, and an educationRubricOutcome. A submission for a feedback resource will have an educationFeedbackResourceOutcome. All outcome types have a regular and a published property appropriate to that type of outcome; for example, points and publishedPoints, feedback and publishedFeedback. The regular property is the most recent value updated by the teacher; the published property is the most recent value returned to the student.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OutcomesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new feedback resource for a submission. Only a teacher can perform this operation. To create a new file-based resource, upload the file to the feedback resources folder associated with the assignment. If the file doesn't exist or isn't in that folder, the POST request will fail.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: EducationOutcome, requestConfiguration?: OutcomesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEducationOutcome);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a outcomesRequestBuilder
     */
    public withUrl(rawUrl: string) : OutcomesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new OutcomesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
