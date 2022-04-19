import {EducationUser} from '../../models/';
import {createEducationUserFromDiscriminatorValue} from '../../models/createEducationUserFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AssignmentsRequestBuilder} from './assignments/assignmentsRequestBuilder';
import {EducationAssignmentItemRequestBuilder} from './assignments/item/educationAssignmentItemRequestBuilder';
import {ClassesRequestBuilder} from './classes/classesRequestBuilder';
import {EducationClassItemRequestBuilder as ie7e30cd639818b1dfde04248b6fb0fb5c3f60386eaaa62b5427a72b102a36e2a} from './classes/item/educationClassItemRequestBuilder';
import {MeRequestBuilderGetQueryParameters} from './meRequestBuilderGetQueryParameters';
import {EducationRubricItemRequestBuilder} from './rubrics/item/educationRubricItemRequestBuilder';
import {RubricsRequestBuilder} from './rubrics/rubricsRequestBuilder';
import {EducationSchoolItemRequestBuilder} from './schools/item/educationSchoolItemRequestBuilder';
import {SchoolsRequestBuilder} from './schools/schoolsRequestBuilder';
import {EducationClassItemRequestBuilder as i6796735e057c116647da04efee5484e183fbcc453336f8f56d8136186955ac41} from './taughtClasses/item/educationClassItemRequestBuilder';
import {TaughtClassesRequestBuilder} from './taughtClasses/taughtClassesRequestBuilder';
import {UserRequestBuilder} from './user/userRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the me property of the microsoft.graph.educationRoot entity.  */
export class MeRequestBuilder {
    /** The assignments property  */
    public get assignments(): AssignmentsRequestBuilder {
        return new AssignmentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The classes property  */
    public get classes(): ClassesRequestBuilder {
        return new ClassesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** The rubrics property  */
    public get rubrics(): RubricsRequestBuilder {
        return new RubricsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The schools property  */
    public get schools(): SchoolsRequestBuilder {
        return new SchoolsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The taughtClasses property  */
    public get taughtClasses(): TaughtClassesRequestBuilder {
        return new TaughtClassesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /** The user property  */
    public get user(): UserRequestBuilder {
        return new UserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.me.assignments.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.me.classes.item collection
     * @param id Unique identifier of the item
     * @returns a educationClassItemRequestBuilder
     */
    public classesById(id: string) : ie7e30cd639818b1dfde04248b6fb0fb5c3f60386eaaa62b5427a72b102a36e2a {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationClass%2Did"] = id
        return new ie7e30cd639818b1dfde04248b6fb0fb5c3f60386eaaa62b5427a72b102a36e2a(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MeRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/education/me{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property me for education
     * @param headers Request headers
     * @param options Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(headers) requestInfo.headers = headers;
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Get me from education
     * @param headers Request headers
     * @param options Request options
     * @param queryParameters Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(queryParameters?: MeRequestBuilderGetQueryParameters | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(headers) requestInfo.headers = headers;
        queryParameters && requestInfo.setQueryStringParametersFromRawObject(queryParameters);
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Update the navigation property me in education
     * @param body 
     * @param headers Request headers
     * @param options Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: EducationUser | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(headers) requestInfo.headers = headers;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Delete navigation property me for education
     * @param headers Request headers
     * @param options Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Get me from education
     * @param headers Request headers
     * @param options Request options
     * @param queryParameters Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationUser
     */
    public get(queryParameters?: MeRequestBuilderGetQueryParameters | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationUser | undefined> {
        const requestInfo = this.createGetRequestInformation(
            queryParameters, headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EducationUser>(requestInfo, createEducationUserFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the navigation property me in education
     * @param body 
     * @param headers Request headers
     * @param options Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: EducationUser | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.me.rubrics.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.me.schools.item collection
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.me.taughtClasses.item collection
     * @param id Unique identifier of the item
     * @returns a educationClassItemRequestBuilder
     */
    public taughtClassesById(id: string) : i6796735e057c116647da04efee5484e183fbcc453336f8f56d8136186955ac41 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationClass%2Did"] = id
        return new i6796735e057c116647da04efee5484e183fbcc453336f8f56d8136186955ac41(urlTplParams, this.requestAdapter);
    };
}
