import {EducationUserImpl} from '../../../models/';
import {createEducationUserFromDiscriminatorValue} from '../../../models/createEducationUserFromDiscriminatorValue';
import {EducationUser} from '../../../models/educationUser';
import {ODataErrorImpl} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AssignmentsRequestBuilder} from './assignments/assignmentsRequestBuilder';
import {EducationAssignmentItemRequestBuilder} from './assignments/item/educationAssignmentItemRequestBuilder';
import {ClassesRequestBuilder} from './classes/classesRequestBuilder';
import {EducationClassItemRequestBuilder as i3ca409a9d8cc3c08f6c5f81ea3b99d7b35c2fea3a65c0c9461b5700c1854acb3} from './classes/item/educationClassItemRequestBuilder';
import {EducationUserItemRequestBuilderDeleteRequestConfiguration} from './educationUserItemRequestBuilderDeleteRequestConfiguration';
import {EducationUserItemRequestBuilderGetRequestConfiguration} from './educationUserItemRequestBuilderGetRequestConfiguration';
import {EducationUserItemRequestBuilderPatchRequestConfiguration} from './educationUserItemRequestBuilderPatchRequestConfiguration';
import {EducationRubricItemRequestBuilder} from './rubrics/item/educationRubricItemRequestBuilder';
import {RubricsRequestBuilder} from './rubrics/rubricsRequestBuilder';
import {EducationSchoolItemRequestBuilder} from './schools/item/educationSchoolItemRequestBuilder';
import {SchoolsRequestBuilder} from './schools/schoolsRequestBuilder';
import {EducationClassItemRequestBuilder as i68bdbdf0b00ba4e46e4637db3d4fd5f30625cb7d9d4a769200c9ae24894091b6} from './taughtClasses/item/educationClassItemRequestBuilder';
import {TaughtClassesRequestBuilder} from './taughtClasses/taughtClassesRequestBuilder';
import {UserRequestBuilder} from './user/userRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the users property of the microsoft.graph.educationRoot entity. */
export class EducationUserItemRequestBuilder {
    /** The assignments property */
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The classes property */
    public get classes(): ClassesRequestBuilder {
        return new ClassesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The rubrics property */
    public get rubrics(): RubricsRequestBuilder {
        return new RubricsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The schools property */
    public get schools(): SchoolsRequestBuilder {
        return new SchoolsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The taughtClasses property */
    public get taughtClasses(): TaughtClassesRequestBuilder {
        return new TaughtClassesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /** The user property */
    public get user(): UserRequestBuilder {
        return new UserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the MicrosoftGraph.education.users.item.assignments.item collection
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
     * Gets an item from the MicrosoftGraph.education.users.item.classes.item collection
     * @param id Unique identifier of the item
     * @returns a educationClassItemRequestBuilder
     */
    public classesById(id: string) : i3ca409a9d8cc3c08f6c5f81ea3b99d7b35c2fea3a65c0c9461b5700c1854acb3 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationClass%2Did"] = id
        return new i3ca409a9d8cc3c08f6c5f81ea3b99d7b35c2fea3a65c0c9461b5700c1854acb3(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new EducationUserItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/education/users/{educationUser%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property users for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: EducationUserItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get users from education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: EducationUserItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property users in education
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: EducationUser | undefined, requestConfiguration?: EducationUserItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        const parsableBody = new EducationUserImpl(body)
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", parsableBody);
        return requestInfo;
    };
    /**
     * Delete navigation property users for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: EducationUserItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Get users from education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationUser
     */
    public get(requestConfiguration?: EducationUserItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationUserImpl | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EducationUserImpl>(requestInfo, createEducationUserFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the navigation property users in education
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: EducationUser | undefined, requestConfiguration?: EducationUserItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Gets an item from the MicrosoftGraph.education.users.item.rubrics.item collection
     * @param id Unique identifier of the item
     * @returns a educationRubricItemRequestBuilder
     */
    public rubricsById(id: string) : EducationRubricItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationRubric%2Did"] = id
        return new EducationRubricItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.education.users.item.schools.item collection
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
     * Gets an item from the MicrosoftGraph.education.users.item.taughtClasses.item collection
     * @param id Unique identifier of the item
     * @returns a educationClassItemRequestBuilder
     */
    public taughtClassesById(id: string) : i68bdbdf0b00ba4e46e4637db3d4fd5f30625cb7d9d4a769200c9ae24894091b6 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationClass%2Did"] = id
        return new i68bdbdf0b00ba4e46e4637db3d4fd5f30625cb7d9d4a769200c9ae24894091b6(urlTplParams, this.requestAdapter);
    };
}
