import {EducationClass} from '../../../models/microsoft/graph/';
import {createEducationClassFromDiscriminatorValue} from '../../../models/microsoft/graph/createEducationClassFromDiscriminatorValue';
import {ODataError} from '../../../models/microsoft/graph/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/microsoft/graph/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AssignmentCategoriesRequestBuilder} from './assignmentCategories/assignmentCategoriesRequestBuilder';
import {EducationCategoryItemRequestBuilder} from './assignmentCategories/item/educationCategoryItemRequestBuilder';
import {AssignmentDefaultsRequestBuilder} from './assignmentDefaults/assignmentDefaultsRequestBuilder';
import {AssignmentsRequestBuilder} from './assignments/assignmentsRequestBuilder';
import {EducationAssignmentItemRequestBuilder} from './assignments/item/educationAssignmentItemRequestBuilder';
import {AssignmentSettingsRequestBuilder} from './assignmentSettings/assignmentSettingsRequestBuilder';
import {GroupRequestBuilder} from './group/groupRequestBuilder';
import {EducationUserItemRequestBuilder as ic4b7e4f5092b1368a0d864ad8618e0e4a3495040059df7afcf886536e8775858} from './members/item/educationUserItemRequestBuilder';
import {MembersRequestBuilder} from './members/membersRequestBuilder';
import {EducationSchoolItemRequestBuilder} from './schools/item/educationSchoolItemRequestBuilder';
import {SchoolsRequestBuilder} from './schools/schoolsRequestBuilder';
import {EducationUserItemRequestBuilder as i48d182dfc3c9e1e9578e4a97e49566f17bd21a04e2e4d9dfc1f1270b7642ee36} from './teachers/item/educationUserItemRequestBuilder';
import {TeachersRequestBuilder} from './teachers/teachersRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the classes property of the microsoft.graph.educationRoot entity.  */
export class EducationClassItemRequestBuilder {
    public get assignmentCategories(): AssignmentCategoriesRequestBuilder {
        return new AssignmentCategoriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get assignmentDefaults(): AssignmentDefaultsRequestBuilder {
        return new AssignmentDefaultsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get assignmentSettings(): AssignmentSettingsRequestBuilder {
        return new AssignmentSettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get group(): GroupRequestBuilder {
        return new GroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get schools(): SchoolsRequestBuilder {
        return new SchoolsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get teachers(): TeachersRequestBuilder {
        return new TeachersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.classes.item.assignmentCategories.item collection
     * @param id Unique identifier of the item
     * @returns a educationCategoryItemRequestBuilder
     */
    public assignmentCategoriesById(id: string) : EducationCategoryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationCategory_id"] = id
        return new EducationCategoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.classes.item.assignments.item collection
     * @param id Unique identifier of the item
     * @returns a educationAssignmentItemRequestBuilder
     */
    public assignmentsById(id: string) : EducationAssignmentItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationAssignment_id"] = id
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
        this.urlTemplate = "{+baseurl}/education/classes/{educationClass_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property classes for education
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Get classes from education
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Update the navigation property classes in education
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: EducationClass | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(h) requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Delete navigation property classes for education
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Get classes from education
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationClass
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationClass | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EducationClass>(requestInfo, createEducationClassFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.classes.item.members.item collection
     * @param id Unique identifier of the item
     * @returns a educationUserItemRequestBuilder
     */
    public membersById(id: string) : ic4b7e4f5092b1368a0d864ad8618e0e4a3495040059df7afcf886536e8775858 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationUser_id"] = id
        return new ic4b7e4f5092b1368a0d864ad8618e0e4a3495040059df7afcf886536e8775858(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property classes in education
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: EducationClass | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.classes.item.schools.item collection
     * @param id Unique identifier of the item
     * @returns a educationSchoolItemRequestBuilder
     */
    public schoolsById(id: string) : EducationSchoolItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationSchool_id"] = id
        return new EducationSchoolItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.classes.item.teachers.item collection
     * @param id Unique identifier of the item
     * @returns a educationUserItemRequestBuilder
     */
    public teachersById(id: string) : i48d182dfc3c9e1e9578e4a97e49566f17bd21a04e2e4d9dfc1f1270b7642ee36 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationUser_id"] = id
        return new i48d182dfc3c9e1e9578e4a97e49566f17bd21a04e2e4d9dfc1f1270b7642ee36(urlTplParams, this.requestAdapter);
    };
}
