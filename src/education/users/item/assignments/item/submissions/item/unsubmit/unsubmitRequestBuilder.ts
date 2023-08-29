import {EducationSubmission} from '../../../../../../../../models/';
import {createEducationSubmissionFromDiscriminatorValue} from '../../../../../../../../models/createEducationSubmissionFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {UnsubmitRequestBuilderPostRequestConfiguration} from './unsubmitRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the unsubmit method.
 */
export class UnsubmitRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UnsubmitRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/users/{educationUser%2Did}/assignments/{educationAssignment%2Did}/submissions/{educationSubmission%2Did}/unsubmit");
    };
    /**
     * Indicate that a student wants to work on the submission of the assignment after it was turned in. Only teachers, students, and applications with application permissions can perform this operation. This method changes the status of the submission from submitted to working. During the submit process, all the resources are copied from submittedResources to  workingResources. The teacher will be looking at the working resources list for grading. A teacher can also unsubmit a student's assignment on their behalf.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationSubmission
     * @see {@link https://learn.microsoft.com/graph/api/educationsubmission-unsubmit?view=graph-rest-1.0|Find more info here}
     */
    public post(requestConfiguration?: UnsubmitRequestBuilderPostRequestConfiguration | undefined) : Promise<EducationSubmission | undefined> {
        const requestInfo = this.toPostRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationSubmission>(requestInfo, createEducationSubmissionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Indicate that a student wants to work on the submission of the assignment after it was turned in. Only teachers, students, and applications with application permissions can perform this operation. This method changes the status of the submission from submitted to working. During the submit process, all the resources are copied from submittedResources to  workingResources. The teacher will be looking at the working resources list for grading. A teacher can also unsubmit a student's assignment on their behalf.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(requestConfiguration?: UnsubmitRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
}
