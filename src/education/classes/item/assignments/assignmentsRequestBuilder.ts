import {EducationAssignmentCollectionResponse} from '../../../../models/';
import {createEducationAssignmentCollectionResponseFromDiscriminatorValue} from '../../../../models/createEducationAssignmentCollectionResponseFromDiscriminatorValue';
import {createEducationAssignmentFromDiscriminatorValue} from '../../../../models/createEducationAssignmentFromDiscriminatorValue';
import {deserializeIntoEducationAssignment} from '../../../../models/deserializeIntoEducationAssignment';
import type {EducationAssignment} from '../../../../models/educationAssignment';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeEducationAssignment} from '../../../../models/serializeEducationAssignment';
import {AssignmentsRequestBuilderGetRequestConfiguration} from './assignmentsRequestBuilderGetRequestConfiguration';
import {AssignmentsRequestBuilderPostRequestConfiguration} from './assignmentsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {EducationAssignmentItemRequestBuilder} from './item/educationAssignmentItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignments property of the microsoft.graph.educationClass entity.
 */
export class AssignmentsRequestBuilder extends BaseRequestBuilder {
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
     * Provides operations to manage the assignments property of the microsoft.graph.educationClass entity.
     * @param educationAssignmentId Unique identifier of the item
     * @returns a EducationAssignmentItemRequestBuilder
     */
    public byEducationAssignmentId(educationAssignmentId: string) : EducationAssignmentItemRequestBuilder {
        if(!educationAssignmentId) throw new Error("educationAssignmentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationAssignment%2Did"] = educationAssignmentId
        return new EducationAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AssignmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/classes/{educationClass%2Did}/assignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of assignment objects. Only teachers, students, and applications with application permissions can perform this operation. A teacher or an application executing with application permissions can see all assignment objects for the class. Students can only see assignments that are assigned to them.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationAssignmentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/educationclass-list-assignments?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AssignmentsRequestBuilderGetRequestConfiguration | undefined) : Promise<EducationAssignmentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationAssignmentCollectionResponse>(requestInfo, createEducationAssignmentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new assignment. Only teachers in a class can create an assignment. Assignments start in the Draft state, which means that students will not see the assignment until publication.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationAssignment
     * @see {@link https://learn.microsoft.com/graph/api/educationclass-post-assignment?view=graph-rest-1.0|Find more info here}
     */
    public post(body: EducationAssignment, requestConfiguration?: AssignmentsRequestBuilderPostRequestConfiguration | undefined) : Promise<EducationAssignment | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationAssignment>(requestInfo, createEducationAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of assignment objects. Only teachers, students, and applications with application permissions can perform this operation. A teacher or an application executing with application permissions can see all assignment objects for the class. Students can only see assignments that are assigned to them.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AssignmentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new assignment. Only teachers in a class can create an assignment. Assignments start in the Draft state, which means that students will not see the assignment until publication.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: EducationAssignment, requestConfiguration?: AssignmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEducationAssignment);
        return requestInfo;
    };
}
