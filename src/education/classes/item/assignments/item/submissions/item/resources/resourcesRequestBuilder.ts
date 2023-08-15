import {EducationSubmissionResourceCollectionResponse} from '../../../../../../../../models/';
import {createEducationSubmissionResourceCollectionResponseFromDiscriminatorValue} from '../../../../../../../../models/createEducationSubmissionResourceCollectionResponseFromDiscriminatorValue';
import {createEducationSubmissionResourceFromDiscriminatorValue} from '../../../../../../../../models/createEducationSubmissionResourceFromDiscriminatorValue';
import {deserializeIntoEducationSubmissionResource} from '../../../../../../../../models/deserializeIntoEducationSubmissionResource';
import type {EducationSubmissionResource} from '../../../../../../../../models/educationSubmissionResource';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeEducationSubmissionResource} from '../../../../../../../../models/serializeEducationSubmissionResource';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {EducationSubmissionResourceItemRequestBuilder} from './item/educationSubmissionResourceItemRequestBuilder';
import {ResourcesRequestBuilderGetRequestConfiguration} from './resourcesRequestBuilderGetRequestConfiguration';
import {ResourcesRequestBuilderPostRequestConfiguration} from './resourcesRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resources property of the microsoft.graph.educationSubmission entity.
 */
export class ResourcesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the resources property of the microsoft.graph.educationSubmission entity.
     * @param educationSubmissionResourceId The unique identifier of educationSubmissionResource
     * @returns a EducationSubmissionResourceItemRequestBuilder
     */
    public byEducationSubmissionResourceId(educationSubmissionResourceId: string) : EducationSubmissionResourceItemRequestBuilder {
        if(!educationSubmissionResourceId) throw new Error("educationSubmissionResourceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationSubmissionResource%2Did"] = educationSubmissionResourceId
        return new EducationSubmissionResourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ResourcesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/classes/{educationClass%2Did}/assignments/{educationAssignment%2Did}/submissions/{educationSubmission%2Did}/resources{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List the resources associated with a submission. Only teachers, students, and applications with application permissions can perform this operation. The educationSubmissionResource object is a wrapper around the actual resource object the student is working on. The wrapper also includes a pointer to the resources on the assignment if this was copied from the assignment during the assign process. These resources are the working copy of the assignment. The submittedResources are the resources that have officially been submitted to be graded.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationSubmissionResourceCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/educationsubmission-list-resources?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ResourcesRequestBuilderGetRequestConfiguration | undefined) : Promise<EducationSubmissionResourceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationSubmissionResourceCollectionResponse>(requestInfo, createEducationSubmissionResourceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add an educationSubmissionResource to a submission resource list. Only teachers and students can perform this operation. The operation will not succeed if the allowStudentsToAddResources flag is not set to true. To create a new file-based resource, upload the file to the resources folder associated with the submission. If the file doesn't exist or is not in that folder, the POST request will fail.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationSubmissionResource
     * @see {@link https://learn.microsoft.com/graph/api/educationsubmission-post-resources?view=graph-rest-1.0|Find more info here}
     */
    public post(body: EducationSubmissionResource, requestConfiguration?: ResourcesRequestBuilderPostRequestConfiguration | undefined) : Promise<EducationSubmissionResource | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationSubmissionResource>(requestInfo, createEducationSubmissionResourceFromDiscriminatorValue, errorMapping);
    };
    /**
     * List the resources associated with a submission. Only teachers, students, and applications with application permissions can perform this operation. The educationSubmissionResource object is a wrapper around the actual resource object the student is working on. The wrapper also includes a pointer to the resources on the assignment if this was copied from the assignment during the assign process. These resources are the working copy of the assignment. The submittedResources are the resources that have officially been submitted to be graded.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ResourcesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add an educationSubmissionResource to a submission resource list. Only teachers and students can perform this operation. The operation will not succeed if the allowStudentsToAddResources flag is not set to true. To create a new file-based resource, upload the file to the resources folder associated with the submission. If the file doesn't exist or is not in that folder, the POST request will fail.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: EducationSubmissionResource, requestConfiguration?: ResourcesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEducationSubmissionResource);
        return requestInfo;
    };
}
