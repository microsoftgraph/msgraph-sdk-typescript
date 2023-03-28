import {EducationClass} from '../../../models/';
import {createEducationClassFromDiscriminatorValue} from '../../../models/createEducationClassFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AssignmentCategoriesRequestBuilder} from './assignmentCategories/assignmentCategoriesRequestBuilder';
import {EducationCategoryItemRequestBuilder} from './assignmentCategories/item/educationCategoryItemRequestBuilder';
import {AssignmentDefaultsRequestBuilder} from './assignmentDefaults/assignmentDefaultsRequestBuilder';
import {AssignmentsRequestBuilder} from './assignments/assignmentsRequestBuilder';
import {EducationAssignmentItemRequestBuilder} from './assignments/item/educationAssignmentItemRequestBuilder';
import {AssignmentSettingsRequestBuilder} from './assignmentSettings/assignmentSettingsRequestBuilder';
import {EducationClassItemRequestBuilderDeleteRequestConfiguration} from './educationClassItemRequestBuilderDeleteRequestConfiguration';
import {EducationClassItemRequestBuilderGetRequestConfiguration} from './educationClassItemRequestBuilderGetRequestConfiguration';
import {EducationClassItemRequestBuilderPatchRequestConfiguration} from './educationClassItemRequestBuilderPatchRequestConfiguration';
import {GroupRequestBuilder} from './group/groupRequestBuilder';
import {EducationUserItemRequestBuilder as Ia3edcdf64f173b5339ac6447cfd80558917a57d192a2a1e0e3b4ec7f902db9b8} from './members/item/educationUserItemRequestBuilder';
import {MembersRequestBuilder} from './members/membersRequestBuilder';
import {EducationSchoolItemRequestBuilder} from './schools/item/educationSchoolItemRequestBuilder';
import {SchoolsRequestBuilder} from './schools/schoolsRequestBuilder';
import {EducationUserItemRequestBuilder as I488920e98e9b46d483b4a3ff7deaa8b183c58943241a07131f8af31d7b0d171f} from './teachers/item/educationUserItemRequestBuilder';
import {TeachersRequestBuilder} from './teachers/teachersRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the classes property of the microsoft.graph.educationRoot entity.
 */
export class EducationClassItemRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the assignmentCategories property of the microsoft.graph.educationClass entity. */
    public get assignmentCategories(): AssignmentCategoriesRequestBuilder {
        return new AssignmentCategoriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the assignmentDefaults property of the microsoft.graph.educationClass entity. */
    public get assignmentDefaults(): AssignmentDefaultsRequestBuilder {
        return new AssignmentDefaultsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the assignments property of the microsoft.graph.educationClass entity. */
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the assignmentSettings property of the microsoft.graph.educationClass entity. */
    public get assignmentSettings(): AssignmentSettingsRequestBuilder {
        return new AssignmentSettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the group property of the microsoft.graph.educationClass entity. */
    public get group(): GroupRequestBuilder {
        return new GroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the members property of the microsoft.graph.educationClass entity. */
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the schools property of the microsoft.graph.educationClass entity. */
    public get schools(): SchoolsRequestBuilder {
        return new SchoolsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the teachers property of the microsoft.graph.educationClass entity. */
    public get teachers(): TeachersRequestBuilder {
        return new TeachersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the assignmentCategories property of the microsoft.graph.educationClass entity.
     * @param id Unique identifier of the item
     * @returns a EducationCategoryItemRequestBuilder
     */
    public assignmentCategoriesById(id: string) : EducationCategoryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationCategory%2Did"] = id
        return new EducationCategoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.educationClass entity.
     * @param id Unique identifier of the item
     * @returns a EducationAssignmentItemRequestBuilder
     */
    public assignmentsById(id: string) : EducationAssignmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationAssignment%2Did"] = id
        return new EducationAssignmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new EducationClassItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/education/classes/{educationClass%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property classes for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: EducationClassItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get classes from education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationClass
     */
    public get(requestConfiguration?: EducationClassItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationClass | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EducationClass>(requestInfo, createEducationClassFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.classes.item.members.item collection
     * @param id Unique identifier of the item
     * @returns a EducationUserItemRequestBuilder
     */
    public membersById(id: string) : Ia3edcdf64f173b5339ac6447cfd80558917a57d192a2a1e0e3b4ec7f902db9b8 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationUser%2Did"] = id
        return new Ia3edcdf64f173b5339ac6447cfd80558917a57d192a2a1e0e3b4ec7f902db9b8(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property classes in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationClass
     */
    public patch(body: EducationClass | undefined, requestConfiguration?: EducationClassItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationClass | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EducationClass>(requestInfo, createEducationClassFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the schools property of the microsoft.graph.educationClass entity.
     * @param id Unique identifier of the item
     * @returns a EducationSchoolItemRequestBuilder
     */
    public schoolsById(id: string) : EducationSchoolItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationSchool%2Did"] = id
        return new EducationSchoolItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.classes.item.teachers.item collection
     * @param id Unique identifier of the item
     * @returns a EducationUserItemRequestBuilder
     */
    public teachersById(id: string) : I488920e98e9b46d483b4a3ff7deaa8b183c58943241a07131f8af31d7b0d171f {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationUser%2Did"] = id
        return new I488920e98e9b46d483b4a3ff7deaa8b183c58943241a07131f8af31d7b0d171f(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property classes for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EducationClassItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get classes from education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EducationClassItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property classes in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EducationClass | undefined, requestConfiguration?: EducationClassItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
