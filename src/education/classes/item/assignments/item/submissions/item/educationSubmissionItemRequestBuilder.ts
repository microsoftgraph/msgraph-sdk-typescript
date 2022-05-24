import {EducationSubmissionImpl} from '../../../../../../../models/';
import {createEducationSubmissionFromDiscriminatorValue} from '../../../../../../../models/createEducationSubmissionFromDiscriminatorValue';
import {EducationSubmission} from '../../../../../../../models/educationSubmission';
import {ODataErrorImpl} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {EducationSubmissionItemRequestBuilderDeleteRequestConfiguration} from './educationSubmissionItemRequestBuilderDeleteRequestConfiguration';
import {EducationSubmissionItemRequestBuilderGetRequestConfiguration} from './educationSubmissionItemRequestBuilderGetRequestConfiguration';
import {EducationSubmissionItemRequestBuilderPatchRequestConfiguration} from './educationSubmissionItemRequestBuilderPatchRequestConfiguration';
import {EducationOutcomeItemRequestBuilder} from './outcomes/item/educationOutcomeItemRequestBuilder';
import {OutcomesRequestBuilder} from './outcomes/outcomesRequestBuilder';
import {ReassignRequestBuilder} from './reassign/reassignRequestBuilder';
import {EducationSubmissionResourceItemRequestBuilder as ib60bf22fc12d369fdfe0cab518e44ea08ff762f370ee1b8cbdc0379e0abe559f} from './resources/item/educationSubmissionResourceItemRequestBuilder';
import {ResourcesRequestBuilder} from './resources/resourcesRequestBuilder';
import {ReturnRequestBuilder} from './return_escaped/returnRequestBuilder';
import {SetUpResourcesFolderRequestBuilder} from './setUpResourcesFolder/setUpResourcesFolderRequestBuilder';
import {SubmitRequestBuilder} from './submit/submitRequestBuilder';
import {EducationSubmissionResourceItemRequestBuilder as i7c07df6e3be61b9f0eedbe8bbe208ff531da28c8dc95f021f1853067e67c6be8} from './submittedResources/item/educationSubmissionResourceItemRequestBuilder';
import {SubmittedResourcesRequestBuilder} from './submittedResources/submittedResourcesRequestBuilder';
import {UnsubmitRequestBuilder} from './unsubmit/unsubmitRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the submissions property of the microsoft.graph.educationAssignment entity. */
export class EducationSubmissionItemRequestBuilder {
    /** The outcomes property */
    public get outcomes(): OutcomesRequestBuilder {
        return new OutcomesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The reassign property */
    public get reassign(): ReassignRequestBuilder {
        return new ReassignRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The resources property */
    public get resources(): ResourcesRequestBuilder {
        return new ResourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The return property */
    public get return_escaped(): ReturnRequestBuilder {
        return new ReturnRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The setUpResourcesFolder property */
    public get setUpResourcesFolder(): SetUpResourcesFolderRequestBuilder {
        return new SetUpResourcesFolderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The submit property */
    public get submit(): SubmitRequestBuilder {
        return new SubmitRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The submittedResources property */
    public get submittedResources(): SubmittedResourcesRequestBuilder {
        return new SubmittedResourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unsubmit property */
    public get unsubmit(): UnsubmitRequestBuilder {
        return new UnsubmitRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new EducationSubmissionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/education/classes/{educationClass%2Did}/assignments/{educationAssignment%2Did}/submissions/{educationSubmission%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property submissions for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: EducationSubmissionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: EducationSubmissionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property submissions in education
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: EducationSubmission | undefined, requestConfiguration?: EducationSubmissionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        const parsableBody = new EducationSubmissionImpl(body)
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", parsableBody);
        return requestInfo;
    };
    /**
     * Delete navigation property submissions for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: EducationSubmissionItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationSubmission
     */
    public get(requestConfiguration?: EducationSubmissionItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationSubmissionImpl | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EducationSubmissionImpl>(requestInfo, createEducationSubmissionFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.education.classes.item.assignments.item.submissions.item.outcomes.item collection
     * @param id Unique identifier of the item
     * @returns a educationOutcomeItemRequestBuilder
     */
    public outcomesById(id: string) : EducationOutcomeItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationOutcome%2Did"] = id
        return new EducationOutcomeItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property submissions in education
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: EducationSubmission | undefined, requestConfiguration?: EducationSubmissionItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Gets an item from the MicrosoftGraph.education.classes.item.assignments.item.submissions.item.resources.item collection
     * @param id Unique identifier of the item
     * @returns a educationSubmissionResourceItemRequestBuilder
     */
    public resourcesById(id: string) : ib60bf22fc12d369fdfe0cab518e44ea08ff762f370ee1b8cbdc0379e0abe559f {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationSubmissionResource%2Did"] = id
        return new ib60bf22fc12d369fdfe0cab518e44ea08ff762f370ee1b8cbdc0379e0abe559f(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.education.classes.item.assignments.item.submissions.item.submittedResources.item collection
     * @param id Unique identifier of the item
     * @returns a educationSubmissionResourceItemRequestBuilder
     */
    public submittedResourcesById(id: string) : i7c07df6e3be61b9f0eedbe8bbe208ff531da28c8dc95f021f1853067e67c6be8 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationSubmissionResource%2Did"] = id
        return new i7c07df6e3be61b9f0eedbe8bbe208ff531da28c8dc95f021f1853067e67c6be8(urlTplParams, this.requestAdapter);
    };
}
