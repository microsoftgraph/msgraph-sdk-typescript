import {EducationSubmissionCollectionResponse} from '../../../../../../models/';
import {createEducationSubmissionCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createEducationSubmissionCollectionResponseFromDiscriminatorValue';
import {createEducationSubmissionFromDiscriminatorValue} from '../../../../../../models/createEducationSubmissionFromDiscriminatorValue';
import {deserializeIntoEducationSubmission} from '../../../../../../models/deserializeIntoEducationSubmission';
import type {EducationSubmission} from '../../../../../../models/educationSubmission';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeEducationSubmission} from '../../../../../../models/serializeEducationSubmission';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {EducationSubmissionItemRequestBuilder} from './item/educationSubmissionItemRequestBuilder';
import {SubmissionsRequestBuilderGetRequestConfiguration} from './submissionsRequestBuilderGetRequestConfiguration';
import {SubmissionsRequestBuilderPostRequestConfiguration} from './submissionsRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the submissions property of the microsoft.graph.educationAssignment entity.
 */
export class SubmissionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the submissions property of the microsoft.graph.educationAssignment entity.
     * @param educationSubmissionId The unique identifier of educationSubmission
     * @returns a EducationSubmissionItemRequestBuilder
     */
    public byEducationSubmissionId(educationSubmissionId: string) : EducationSubmissionItemRequestBuilder {
        if(!educationSubmissionId) throw new Error("educationSubmissionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationSubmission%2Did"] = educationSubmissionId
        return new EducationSubmissionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SubmissionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/classes/{educationClass%2Did}/assignments/{educationAssignment%2Did}/submissions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List all the submissions associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation. A teacher or an application with application permissions can get all the submissions while a student can only get submissions that they are associated with.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationSubmissionCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/educationassignment-list-submissions?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SubmissionsRequestBuilderGetRequestConfiguration | undefined) : Promise<EducationSubmissionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationSubmissionCollectionResponse>(requestInfo, createEducationSubmissionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to submissions for education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationSubmission
     */
    public post(body: EducationSubmission, requestConfiguration?: SubmissionsRequestBuilderPostRequestConfiguration | undefined) : Promise<EducationSubmission | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationSubmission>(requestInfo, createEducationSubmissionFromDiscriminatorValue, errorMapping);
    };
    /**
     * List all the submissions associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation. A teacher or an application with application permissions can get all the submissions while a student can only get submissions that they are associated with.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SubmissionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to submissions for education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: EducationSubmission, requestConfiguration?: SubmissionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEducationSubmission);
        return requestInfo;
    };
}
