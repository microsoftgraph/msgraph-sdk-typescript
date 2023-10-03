import { type EducationAssignment } from '../../../../../../models/';
import { createEducationAssignmentFromDiscriminatorValue } from '../../../../../../models/educationAssignment';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../../models/oDataErrors/oDataError';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface PublishRequestBuilderPostRequestConfiguration {
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
 * Provides operations to call the publish method.
 */
export class PublishRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new PublishRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/classes/{educationClass%2Did}/assignments/{educationAssignment%2Did}/publish");
    };
    /**
     * Publish an education assignment. Change the state of an educationAssignment from its original draft status to the published status.  You can change the state from draft to scheduled if the assignment is scheduled for a future date.  Only a teacher in the class can make this call. When an assignment is in draft status, students will not see the assignment, nor will there be any submission objects. Calling this API creates educationSubmission objects and displays the assignment in each student's list. The state of the assignment goes back to draft if there is any backend failure during publish process. To update the properties of a published assignment, see update an assignment. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationAssignment
     * @see {@link https://learn.microsoft.com/graph/api/educationassignment-publish?view=graph-rest-1.0|Find more info here}
     */
    public post(requestConfiguration?: PublishRequestBuilderPostRequestConfiguration | undefined) : Promise<EducationAssignment | undefined> {
        const requestInfo = this.toPostRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationAssignment>(requestInfo, createEducationAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Publish an education assignment. Change the state of an educationAssignment from its original draft status to the published status.  You can change the state from draft to scheduled if the assignment is scheduled for a future date.  Only a teacher in the class can make this call. When an assignment is in draft status, students will not see the assignment, nor will there be any submission objects. Calling this API creates educationSubmission objects and displays the assignment in each student's list. The state of the assignment goes back to draft if there is any backend failure during publish process. To update the properties of a published assignment, see update an assignment. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(requestConfiguration?: PublishRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a publishRequestBuilder
     */
    public withUrl(rawUrl: string) : PublishRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PublishRequestBuilder(rawUrl, this.requestAdapter);
    };
}
