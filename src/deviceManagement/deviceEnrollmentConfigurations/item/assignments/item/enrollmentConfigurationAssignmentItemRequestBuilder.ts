import {createEnrollmentConfigurationAssignmentFromDiscriminatorValue} from '../../../../../models/createEnrollmentConfigurationAssignmentFromDiscriminatorValue';
import {deserializeIntoEnrollmentConfigurationAssignment} from '../../../../../models/deserializeIntoEnrollmentConfigurationAssignment';
import type {EnrollmentConfigurationAssignment} from '../../../../../models/enrollmentConfigurationAssignment';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeEnrollmentConfigurationAssignment} from '../../../../../models/serializeEnrollmentConfigurationAssignment';
import {EnrollmentConfigurationAssignmentItemRequestBuilderDeleteRequestConfiguration} from './enrollmentConfigurationAssignmentItemRequestBuilderDeleteRequestConfiguration';
import {EnrollmentConfigurationAssignmentItemRequestBuilderGetRequestConfiguration} from './enrollmentConfigurationAssignmentItemRequestBuilderGetRequestConfiguration';
import {EnrollmentConfigurationAssignmentItemRequestBuilderPatchRequestConfiguration} from './enrollmentConfigurationAssignmentItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignments property of the microsoft.graph.deviceEnrollmentConfiguration entity.
 */
export class EnrollmentConfigurationAssignmentItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new EnrollmentConfigurationAssignmentItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/deviceEnrollmentConfigurations/{deviceEnrollmentConfiguration%2Did}/assignments/{enrollmentConfigurationAssignment%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a enrollmentConfigurationAssignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-enrollmentconfigurationassignment-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: EnrollmentConfigurationAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the enrollmentConfigurationAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EnrollmentConfigurationAssignment
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-enrollmentconfigurationassignment-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: EnrollmentConfigurationAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : Promise<EnrollmentConfigurationAssignment | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EnrollmentConfigurationAssignment>(requestInfo, createEnrollmentConfigurationAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a enrollmentConfigurationAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EnrollmentConfigurationAssignment
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-enrollmentconfigurationassignment-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: EnrollmentConfigurationAssignment, requestConfiguration?: EnrollmentConfigurationAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<EnrollmentConfigurationAssignment | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EnrollmentConfigurationAssignment>(requestInfo, createEnrollmentConfigurationAssignmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a enrollmentConfigurationAssignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EnrollmentConfigurationAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the enrollmentConfigurationAssignment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EnrollmentConfigurationAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a enrollmentConfigurationAssignment object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EnrollmentConfigurationAssignment, requestConfiguration?: EnrollmentConfigurationAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEnrollmentConfigurationAssignment);
        return requestInfo;
    };
}
