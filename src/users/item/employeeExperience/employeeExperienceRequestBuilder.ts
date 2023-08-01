import {createEmployeeExperienceUserFromDiscriminatorValue} from '../../../models/createEmployeeExperienceUserFromDiscriminatorValue';
import {deserializeIntoEmployeeExperienceUser} from '../../../models/deserializeIntoEmployeeExperienceUser';
import type {EmployeeExperienceUser} from '../../../models/employeeExperienceUser';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeEmployeeExperienceUser} from '../../../models/serializeEmployeeExperienceUser';
import {EmployeeExperienceRequestBuilderDeleteRequestConfiguration} from './employeeExperienceRequestBuilderDeleteRequestConfiguration';
import {EmployeeExperienceRequestBuilderGetRequestConfiguration} from './employeeExperienceRequestBuilderGetRequestConfiguration';
import {EmployeeExperienceRequestBuilderPatchRequestConfiguration} from './employeeExperienceRequestBuilderPatchRequestConfiguration';
import {LearningCourseActivitiesRequestBuilder} from './learningCourseActivities/learningCourseActivitiesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the employeeExperience property of the microsoft.graph.user entity.
 */
export class EmployeeExperienceRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the learningCourseActivities property of the microsoft.graph.employeeExperienceUser entity.
     */
    public get learningCourseActivities(): LearningCourseActivitiesRequestBuilder {
        return new LearningCourseActivitiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new EmployeeExperienceRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/employeeExperience{?%24select,%24expand}");
    };
    /**
     * Delete navigation property employeeExperience for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: EmployeeExperienceRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get employeeExperience from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EmployeeExperienceUser
     */
    public get(requestConfiguration?: EmployeeExperienceRequestBuilderGetRequestConfiguration | undefined) : Promise<EmployeeExperienceUser | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EmployeeExperienceUser>(requestInfo, createEmployeeExperienceUserFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property employeeExperience in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EmployeeExperienceUser
     */
    public patch(body: EmployeeExperienceUser | undefined, requestConfiguration?: EmployeeExperienceRequestBuilderPatchRequestConfiguration | undefined) : Promise<EmployeeExperienceUser | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EmployeeExperienceUser>(requestInfo, createEmployeeExperienceUserFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property employeeExperience for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EmployeeExperienceRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get employeeExperience from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EmployeeExperienceRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property employeeExperience in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EmployeeExperienceUser | undefined, requestConfiguration?: EmployeeExperienceRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeEmployeeExperienceUser);
        return requestInfo;
    };
}
