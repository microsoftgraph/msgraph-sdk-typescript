import {EducationAssignment} from '../../../../models/';
import {createEducationAssignmentFromDiscriminatorValue} from '../../../../models/createEducationAssignmentFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CategoriesRequestBuilder} from './categories/categoriesRequestBuilder';
import {EducationCategoryItemRequestBuilder} from './categories/item/educationCategoryItemRequestBuilder';
import {EducationAssignmentItemRequestBuilderDeleteRequestConfiguration} from './educationAssignmentItemRequestBuilderDeleteRequestConfiguration';
import {EducationAssignmentItemRequestBuilderGetRequestConfiguration} from './educationAssignmentItemRequestBuilderGetRequestConfiguration';
import {EducationAssignmentItemRequestBuilderPatchRequestConfiguration} from './educationAssignmentItemRequestBuilderPatchRequestConfiguration';
import {PublishRequestBuilder} from './microsoftGraphPublish/publishRequestBuilder';
import {SetUpFeedbackResourcesFolderRequestBuilder} from './microsoftGraphSetUpFeedbackResourcesFolder/setUpFeedbackResourcesFolderRequestBuilder';
import {SetUpResourcesFolderRequestBuilder} from './microsoftGraphSetUpResourcesFolder/setUpResourcesFolderRequestBuilder';
import {EducationAssignmentResourceItemRequestBuilder} from './resources/item/educationAssignmentResourceItemRequestBuilder';
import {ResourcesRequestBuilder} from './resources/resourcesRequestBuilder';
import {RubricRequestBuilder} from './rubric/rubricRequestBuilder';
import {EducationSubmissionItemRequestBuilder} from './submissions/item/educationSubmissionItemRequestBuilder';
import {SubmissionsRequestBuilder} from './submissions/submissionsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignments property of the microsoft.graph.educationUser entity.
 */
export class EducationAssignmentItemRequestBuilder {
    /** Provides operations to manage the categories property of the microsoft.graph.educationAssignment entity. */
    public get categories(): CategoriesRequestBuilder {
        return new CategoriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the publish method. */
    public get microsoftGraphPublish(): PublishRequestBuilder {
        return new PublishRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the setUpFeedbackResourcesFolder method. */
    public get microsoftGraphSetUpFeedbackResourcesFolder(): SetUpFeedbackResourcesFolderRequestBuilder {
        return new SetUpFeedbackResourcesFolderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the setUpResourcesFolder method. */
    public get microsoftGraphSetUpResourcesFolder(): SetUpResourcesFolderRequestBuilder {
        return new SetUpResourcesFolderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the resources property of the microsoft.graph.educationAssignment entity. */
    public get resources(): ResourcesRequestBuilder {
        return new ResourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the rubric property of the microsoft.graph.educationAssignment entity. */
    public get rubric(): RubricRequestBuilder {
        return new RubricRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the submissions property of the microsoft.graph.educationAssignment entity. */
    public get submissions(): SubmissionsRequestBuilder {
        return new SubmissionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.me.assignments.item.categories.item collection
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
     * @param educationAssignmentId key: id of educationAssignment
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, educationAssignmentId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/education/me/assignments/{educationAssignment%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["educationAssignment%2Did"] = educationAssignmentId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property assignments for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: EducationAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Assignments belonging to the user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationAssignment
     */
    public get(requestConfiguration?: EducationAssignmentItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationAssignment | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EducationAssignment>(requestInfo, createEducationAssignmentFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property assignments in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationAssignment
     */
    public patch(body: EducationAssignment | undefined, requestConfiguration?: EducationAssignmentItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationAssignment | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EducationAssignment>(requestInfo, createEducationAssignmentFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the resources property of the microsoft.graph.educationAssignment entity.
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
     * Provides operations to manage the submissions property of the microsoft.graph.educationAssignment entity.
     * @param id Unique identifier of the item
     * @returns a EducationSubmissionItemRequestBuilder
     */
    public submissionsById(id: string) : EducationSubmissionItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationSubmission%2Did"] = id
        return new EducationSubmissionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property assignments for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EducationAssignmentItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
    public toGetRequestInformation(requestConfiguration?: EducationAssignmentItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property assignments in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EducationAssignment | undefined, requestConfiguration?: EducationAssignmentItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
