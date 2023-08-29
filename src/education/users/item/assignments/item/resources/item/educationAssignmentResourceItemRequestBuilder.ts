import {createEducationAssignmentResourceFromDiscriminatorValue} from '../../../../../../../models/createEducationAssignmentResourceFromDiscriminatorValue';
import {deserializeIntoEducationAssignmentResource} from '../../../../../../../models/deserializeIntoEducationAssignmentResource';
import type {EducationAssignmentResource} from '../../../../../../../models/educationAssignmentResource';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {serializeEducationAssignmentResource} from '../../../../../../../models/serializeEducationAssignmentResource';
import {EducationAssignmentResourceItemRequestBuilderDeleteRequestConfiguration} from './educationAssignmentResourceItemRequestBuilderDeleteRequestConfiguration';
import {EducationAssignmentResourceItemRequestBuilderGetRequestConfiguration} from './educationAssignmentResourceItemRequestBuilderGetRequestConfiguration';
import {EducationAssignmentResourceItemRequestBuilderPatchRequestConfiguration} from './educationAssignmentResourceItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resources property of the microsoft.graph.educationAssignment entity.
 */
export class EducationAssignmentResourceItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new EducationAssignmentResourceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/users/{educationUser%2Did}/assignments/{educationAssignment%2Did}/resources/{educationAssignmentResource%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a specific educationAssignmentResource attached to an assignment. In general, only teachers in the class can remove a resource. However, teachers cannot remove resources marked as 'distributeToStudents', after the assignment has been published to students.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/educationassignmentresource-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: EducationAssignmentResourceItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get the properties of an education assignment resource associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationAssignmentResource
     * @see {@link https://learn.microsoft.com/graph/api/educationassignmentresource-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: EducationAssignmentResourceItemRequestBuilderGetRequestConfiguration | undefined) : Promise<EducationAssignmentResource | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationAssignmentResource>(requestInfo, createEducationAssignmentResourceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property resources in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationAssignmentResource
     */
    public patch(body: EducationAssignmentResource, requestConfiguration?: EducationAssignmentResourceItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<EducationAssignmentResource | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationAssignmentResource>(requestInfo, createEducationAssignmentResourceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a specific educationAssignmentResource attached to an assignment. In general, only teachers in the class can remove a resource. However, teachers cannot remove resources marked as 'distributeToStudents', after the assignment has been published to students.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EducationAssignmentResourceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get the properties of an education assignment resource associated with an assignment. Only teachers, students, and applications with application permissions can perform this operation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EducationAssignmentResourceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property resources in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EducationAssignmentResource, requestConfiguration?: EducationAssignmentResourceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEducationAssignmentResource);
        return requestInfo;
    };
}
