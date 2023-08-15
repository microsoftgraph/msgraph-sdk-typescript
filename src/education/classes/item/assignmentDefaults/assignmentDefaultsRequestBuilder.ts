import {createEducationAssignmentDefaultsFromDiscriminatorValue} from '../../../../models/createEducationAssignmentDefaultsFromDiscriminatorValue';
import {deserializeIntoEducationAssignmentDefaults} from '../../../../models/deserializeIntoEducationAssignmentDefaults';
import type {EducationAssignmentDefaults} from '../../../../models/educationAssignmentDefaults';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeEducationAssignmentDefaults} from '../../../../models/serializeEducationAssignmentDefaults';
import {AssignmentDefaultsRequestBuilderDeleteRequestConfiguration} from './assignmentDefaultsRequestBuilderDeleteRequestConfiguration';
import {AssignmentDefaultsRequestBuilderGetRequestConfiguration} from './assignmentDefaultsRequestBuilderGetRequestConfiguration';
import {AssignmentDefaultsRequestBuilderPatchRequestConfiguration} from './assignmentDefaultsRequestBuilderPatchRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignmentDefaults property of the microsoft.graph.educationClass entity.
 */
export class AssignmentDefaultsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AssignmentDefaultsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/classes/{educationClass%2Did}/assignmentDefaults{?%24select,%24expand}");
    };
    /**
     * Delete navigation property assignmentDefaults for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AssignmentDefaultsRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of an educationAssignmentDefaults object.  These are the class-level assignment defaults respected by new assignments created in the class. Callers can continue to specify custom values on each assignment creation if they don't want the default behaviors. Only teachers can perform this operation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationAssignmentDefaults
     * @see {@link https://learn.microsoft.com/graph/api/educationassignmentdefaults-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AssignmentDefaultsRequestBuilderGetRequestConfiguration | undefined) : Promise<EducationAssignmentDefaults | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationAssignmentDefaults>(requestInfo, createEducationAssignmentDefaultsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of an educationAssignmentDefaults object. Only teachers can update these settings.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationAssignmentDefaults
     * @see {@link https://learn.microsoft.com/graph/api/educationassignmentdefaults-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: EducationAssignmentDefaults, requestConfiguration?: AssignmentDefaultsRequestBuilderPatchRequestConfiguration | undefined) : Promise<EducationAssignmentDefaults | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EducationAssignmentDefaults>(requestInfo, createEducationAssignmentDefaultsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property assignmentDefaults for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AssignmentDefaultsRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of an educationAssignmentDefaults object.  These are the class-level assignment defaults respected by new assignments created in the class. Callers can continue to specify custom values on each assignment creation if they don't want the default behaviors. Only teachers can perform this operation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AssignmentDefaultsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of an educationAssignmentDefaults object. Only teachers can update these settings.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EducationAssignmentDefaults, requestConfiguration?: AssignmentDefaultsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEducationAssignmentDefaults);
        return requestInfo;
    };
}
