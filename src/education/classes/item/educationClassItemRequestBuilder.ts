import {EducationClassImpl} from '../../../models/';
import {createEducationClassFromDiscriminatorValue} from '../../../models/createEducationClassFromDiscriminatorValue';
import {EducationClass} from '../../../models/educationClass';
import {ODataErrorImpl} from '../../../models/oDataErrors/';
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
import {EducationUserItemRequestBuilder as ia3597917a4ac36e27df766b77a3dfb79444a526d833dbb82fc6def55e42f49a9} from './members/item/educationUserItemRequestBuilder';
import {MembersRequestBuilder} from './members/membersRequestBuilder';
import {EducationSchoolItemRequestBuilder} from './schools/item/educationSchoolItemRequestBuilder';
import {SchoolsRequestBuilder} from './schools/schoolsRequestBuilder';
import {EducationUserItemRequestBuilder as i57690c8856d3dffc39723d95627c914d4e6f7b5f50185aab40d48f4548f538af} from './teachers/item/educationUserItemRequestBuilder';
import {TeachersRequestBuilder} from './teachers/teachersRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the classes property of the microsoft.graph.educationRoot entity. */
export class EducationClassItemRequestBuilder {
    /** The assignmentCategories property */
    public get assignmentCategories(): AssignmentCategoriesRequestBuilder {
        return new AssignmentCategoriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The assignmentDefaults property */
    public get assignmentDefaults(): AssignmentDefaultsRequestBuilder {
        return new AssignmentDefaultsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The assignments property */
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The assignmentSettings property */
    public get assignmentSettings(): AssignmentSettingsRequestBuilder {
        return new AssignmentSettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The group property */
    public get group(): GroupRequestBuilder {
        return new GroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The members property */
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The schools property */
    public get schools(): SchoolsRequestBuilder {
        return new SchoolsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The teachers property */
    public get teachers(): TeachersRequestBuilder {
        return new TeachersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the MicrosoftGraph.education.classes.item.assignmentCategories.item collection
     * @param id Unique identifier of the item
     * @returns a educationCategoryItemRequestBuilder
     */
    public assignmentCategoriesById(id: string) : EducationCategoryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationCategory%2Did"] = id
        return new EducationCategoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.education.classes.item.assignments.item collection
     * @param id Unique identifier of the item
     * @returns a educationAssignmentItemRequestBuilder
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
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/education/classes/{educationClass%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property classes for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: EducationClassItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
    public createGetRequestInformation(requestConfiguration?: EducationClassItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property classes in education
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: EducationClass | undefined, requestConfiguration?: EducationClassItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        const parsableBody = new EducationClassImpl(body)
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", parsableBody);
        return requestInfo;
    };
    /**
     * Delete navigation property classes for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: EducationClassItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Get classes from education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationClass
     */
    public get(requestConfiguration?: EducationClassItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationClassImpl | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EducationClassImpl>(requestInfo, createEducationClassFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.education.classes.item.members.item collection
     * @param id Unique identifier of the item
     * @returns a educationUserItemRequestBuilder
     */
    public membersById(id: string) : ia3597917a4ac36e27df766b77a3dfb79444a526d833dbb82fc6def55e42f49a9 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationUser%2Did"] = id
        return new ia3597917a4ac36e27df766b77a3dfb79444a526d833dbb82fc6def55e42f49a9(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property classes in education
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: EducationClass | undefined, requestConfiguration?: EducationClassItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.education.classes.item.schools.item collection
     * @param id Unique identifier of the item
     * @returns a educationSchoolItemRequestBuilder
     */
    public schoolsById(id: string) : EducationSchoolItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationSchool%2Did"] = id
        return new EducationSchoolItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.education.classes.item.teachers.item collection
     * @param id Unique identifier of the item
     * @returns a educationUserItemRequestBuilder
     */
    public teachersById(id: string) : i57690c8856d3dffc39723d95627c914d4e6f7b5f50185aab40d48f4548f538af {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationUser%2Did"] = id
        return new i57690c8856d3dffc39723d95627c914d4e6f7b5f50185aab40d48f4548f538af(urlTplParams, this.requestAdapter);
    };
}
