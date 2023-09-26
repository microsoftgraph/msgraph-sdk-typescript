import { type EducationAssignmentCollectionResponse } from '../../../models/';
import { createEducationAssignmentFromDiscriminatorValue, deserializeIntoEducationAssignment, serializeEducationAssignment, type EducationAssignment } from '../../../models/educationAssignment';
import { createEducationAssignmentCollectionResponseFromDiscriminatorValue } from '../../../models/educationAssignmentCollectionResponse';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { DeltaRequestBuilder } from './delta/deltaRequestBuilder';
import { EducationAssignmentItemRequestBuilder } from './item/educationAssignmentItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface AssignmentsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface AssignmentsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: AssignmentsRequestBuilderGetQueryParameters;
}
export interface AssignmentsRequestBuilderPostRequestConfiguration {
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
 * Provides operations to manage the assignments property of the microsoft.graph.educationUser entity.
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
     * Provides operations to manage the assignments property of the microsoft.graph.educationUser entity.
     * @param educationAssignmentId The unique identifier of educationAssignment
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
        super(pathParameters, requestAdapter, "{+baseurl}/education/me/assignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Returns a list of educationAssignment assigned to a educationUser for all classes. Only teachers, students, and applications with application permissions can perform this operation. This method allows a caller to find all the assignments belonging to a student or a teacher in a single call rather than having to request assignments from each class. The assignment list contains what is needed to get the detailed information for the assignment from within the class namespace. Use the methods defined for the assignment for all other operations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationAssignmentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/educationuser-list-assignments?view=graph-rest-1.0|Find more info here}
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
     * Create new navigation property to assignments for education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationAssignment
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
     * Returns a list of educationAssignment assigned to a educationUser for all classes. Only teachers, students, and applications with application permissions can perform this operation. This method allows a caller to find all the assignments belonging to a student or a teacher in a single call rather than having to request assignments from each class. The assignment list contains what is needed to get the detailed information for the assignment from within the class namespace. Use the methods defined for the assignment for all other operations.
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
     * Create new navigation property to assignments for education
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
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a assignmentsRequestBuilder
     */
    public withUrl(rawUrl: string) : AssignmentsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AssignmentsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
