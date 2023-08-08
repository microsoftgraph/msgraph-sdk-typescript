import {createEducationSubmissionResourceFromDiscriminatorValue} from '../../../../../../../../models/createEducationSubmissionResourceFromDiscriminatorValue';
import {deserializeIntoEducationSubmissionResource} from '../../../../../../../../models/deserializeIntoEducationSubmissionResource';
import type {EducationSubmissionResource} from '../../../../../../../../models/educationSubmissionResource';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeEducationSubmissionResource} from '../../../../../../../../models/serializeEducationSubmissionResource';
import {EducationSubmissionResourceItemRequestBuilderDeleteRequestConfiguration} from './educationSubmissionResourceItemRequestBuilderDeleteRequestConfiguration';
import {EducationSubmissionResourceItemRequestBuilderGetRequestConfiguration} from './educationSubmissionResourceItemRequestBuilderGetRequestConfiguration';
import {EducationSubmissionResourceItemRequestBuilderPatchRequestConfiguration} from './educationSubmissionResourceItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the submittedResources property of the microsoft.graph.educationSubmission entity.
 */
export class EducationSubmissionResourceItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new EducationSubmissionResourceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/me/assignments/{educationAssignment%2Did}/submissions/{educationSubmission%2Did}/submittedResources/{educationSubmissionResource%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property submittedResources for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: EducationSubmissionResourceItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve a submitted resource. Only teachers, students, and applications with application permissions can perform this operation. Resources are available to a teacher or an application with application permissions after a student submits it, and are available to the student after the teacher returns the submission. Note that teachers can leave notes in some resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationSubmissionResource
     * @see {@link https://learn.microsoft.com/graph/api/educationsubmittedsubmissionresource-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: EducationSubmissionResourceItemRequestBuilderGetRequestConfiguration | undefined) : Promise<EducationSubmissionResource | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationSubmissionResource>(requestInfo, createEducationSubmissionResourceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property submittedResources in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationSubmissionResource
     */
    public patch(body: EducationSubmissionResource, requestConfiguration?: EducationSubmissionResourceItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<EducationSubmissionResource | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationSubmissionResource>(requestInfo, createEducationSubmissionResourceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property submittedResources for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EducationSubmissionResourceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve a submitted resource. Only teachers, students, and applications with application permissions can perform this operation. Resources are available to a teacher or an application with application permissions after a student submits it, and are available to the student after the teacher returns the submission. Note that teachers can leave notes in some resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EducationSubmissionResourceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property submittedResources in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EducationSubmissionResource, requestConfiguration?: EducationSubmissionResourceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEducationSubmissionResource);
        return requestInfo;
    };
}
