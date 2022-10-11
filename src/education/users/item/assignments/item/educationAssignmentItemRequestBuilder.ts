import {EducationAssignment} from '../../../../../models/';
import {createEducationAssignmentFromDiscriminatorValue} from '../../../../../models/createEducationAssignmentFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CategoriesRequestBuilder} from './categories/categoriesRequestBuilder';
import {EducationCategoryItemRequestBuilder} from './categories/item/educationCategoryItemRequestBuilder';
import {EducationAssignmentItemRequestBuilderDeleteRequestConfiguration} from './educationAssignmentItemRequestBuilderDeleteRequestConfiguration';
import {EducationAssignmentItemRequestBuilderGetRequestConfiguration} from './educationAssignmentItemRequestBuilderGetRequestConfiguration';
import {EducationAssignmentItemRequestBuilderPatchRequestConfiguration} from './educationAssignmentItemRequestBuilderPatchRequestConfiguration';
import {PublishRequestBuilder} from './publish/publishRequestBuilder';
import {EducationAssignmentResourceItemRequestBuilder} from './resources/item/educationAssignmentResourceItemRequestBuilder';
import {ResourcesRequestBuilder} from './resources/resourcesRequestBuilder';
import {RubricRequestBuilder} from './rubric/rubricRequestBuilder';
import {SetUpResourcesFolderRequestBuilder} from './setUpResourcesFolder/setUpResourcesFolderRequestBuilder';
import {EducationSubmissionItemRequestBuilder} from './submissions/item/educationSubmissionItemRequestBuilder';
import {SubmissionsRequestBuilder} from './submissions/submissionsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the assignments property of the microsoft.graph.educationUser entity. */
export class EducationAssignmentItemRequestBuilder {
    /** The categories property */
    public get categories(): CategoriesRequestBuilder {
        return new CategoriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The publish property */
    public get publish(): PublishRequestBuilder {
        return new PublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The resources property */
    public get resources(): ResourcesRequestBuilder {
        return new ResourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The rubric property */
    public get rubric(): RubricRequestBuilder {
        return new RubricRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The setUpResourcesFolder property */
    public get setUpResourcesFolder(): SetUpResourcesFolderRequestBuilder {
        return new SetUpResourcesFolderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The submissions property */
    public get submissions(): SubmissionsRequestBuilder {
        return new SubmissionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.users.item.assignments.item.categories.item collection
     * @param id Unique identifier of the item
     * @returns a EducationCategoryItemRequestBuilder
     */
    public categoriesById(id: string) : EducationCategoryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationCategory%2Did"] = id
        return new EducationCategoryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new EducationAssignmentItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/education/users/{educationUser%2Did}/assignments/{educationAssignment%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property assignments for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: EducationAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Assignments belonging to the user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: EducationAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property assignments in education
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: EducationAssignment | undefined, requestConfiguration?: EducationAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Delete navigation property assignments for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: EducationAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Assignments belonging to the user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationAssignment
     */
    public get(requestConfiguration?: EducationAssignmentItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationAssignment | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EducationAssignment>(requestInfo, createEducationAssignmentFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the navigation property assignments in education
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationAssignment
     */
    public patch(body: EducationAssignment | undefined, requestConfiguration?: EducationAssignmentItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationAssignment | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EducationAssignment>(requestInfo, createEducationAssignmentFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.users.item.assignments.item.resources.item collection
     * @param id Unique identifier of the item
     * @returns a EducationAssignmentResourceItemRequestBuilder
     */
    public resourcesById(id: string) : EducationAssignmentResourceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationAssignmentResource%2Did"] = id
        return new EducationAssignmentResourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.users.item.assignments.item.submissions.item collection
     * @param id Unique identifier of the item
     * @returns a EducationSubmissionItemRequestBuilder
     */
    public submissionsById(id: string) : EducationSubmissionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationSubmission%2Did"] = id
        return new EducationSubmissionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
