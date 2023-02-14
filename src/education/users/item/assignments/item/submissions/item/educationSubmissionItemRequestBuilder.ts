import {EducationSubmission} from '../../../../../../../models/';
import {createEducationSubmissionFromDiscriminatorValue} from '../../../../../../../models/createEducationSubmissionFromDiscriminatorValue';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {EducationSubmissionItemRequestBuilderDeleteRequestConfiguration} from './educationSubmissionItemRequestBuilderDeleteRequestConfiguration';
import {EducationSubmissionItemRequestBuilderGetRequestConfiguration} from './educationSubmissionItemRequestBuilderGetRequestConfiguration';
import {EducationSubmissionItemRequestBuilderPatchRequestConfiguration} from './educationSubmissionItemRequestBuilderPatchRequestConfiguration';
import {MicrosoftGraphReassignRequestBuilder} from './microsoftGraphReassign/microsoftGraphReassignRequestBuilder';
import {MicrosoftGraphReturnRequestBuilder} from './microsoftGraphReturn/microsoftGraphReturnRequestBuilder';
import {MicrosoftGraphSetUpResourcesFolderRequestBuilder} from './microsoftGraphSetUpResourcesFolder/microsoftGraphSetUpResourcesFolderRequestBuilder';
import {MicrosoftGraphSubmitRequestBuilder} from './microsoftGraphSubmit/microsoftGraphSubmitRequestBuilder';
import {MicrosoftGraphUnsubmitRequestBuilder} from './microsoftGraphUnsubmit/microsoftGraphUnsubmitRequestBuilder';
import {EducationOutcomeItemRequestBuilder} from './outcomes/item/educationOutcomeItemRequestBuilder';
import {OutcomesRequestBuilder} from './outcomes/outcomesRequestBuilder';
import {EducationSubmissionResourceItemRequestBuilder as If48000cf4b8076c7a6ccdaead69d89d50bfdee15d5ab73cf8a8e0ff5b0b8c35a} from './resources/item/educationSubmissionResourceItemRequestBuilder';
import {ResourcesRequestBuilder} from './resources/resourcesRequestBuilder';
import {EducationSubmissionResourceItemRequestBuilder as I707258d0aeebe0dcc6217fa436bab84058c4f9dae600b8b3a2cc86341e6a5699} from './submittedResources/item/educationSubmissionResourceItemRequestBuilder';
import {SubmittedResourcesRequestBuilder} from './submittedResources/submittedResourcesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the submissions property of the microsoft.graph.educationAssignment entity.
 */
export class EducationSubmissionItemRequestBuilder {
    /** Provides operations to call the reassign method. */
    public get microsoftGraphReassign(): MicrosoftGraphReassignRequestBuilder {
        return new MicrosoftGraphReassignRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the return method. */
    public get microsoftGraphReturn(): MicrosoftGraphReturnRequestBuilder {
        return new MicrosoftGraphReturnRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the setUpResourcesFolder method. */
    public get microsoftGraphSetUpResourcesFolder(): MicrosoftGraphSetUpResourcesFolderRequestBuilder {
        return new MicrosoftGraphSetUpResourcesFolderRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the submit method. */
    public get microsoftGraphSubmit(): MicrosoftGraphSubmitRequestBuilder {
        return new MicrosoftGraphSubmitRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the unsubmit method. */
    public get microsoftGraphUnsubmit(): MicrosoftGraphUnsubmitRequestBuilder {
        return new MicrosoftGraphUnsubmitRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the outcomes property of the microsoft.graph.educationSubmission entity. */
    public get outcomes(): OutcomesRequestBuilder {
        return new OutcomesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the resources property of the microsoft.graph.educationSubmission entity. */
    public get resources(): ResourcesRequestBuilder {
        return new ResourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the submittedResources property of the microsoft.graph.educationSubmission entity. */
    public get submittedResources(): SubmittedResourcesRequestBuilder {
        return new SubmittedResourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new EducationSubmissionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/education/users/{educationUser%2Did}/assignments/{educationAssignment%2Did}/submissions/{educationSubmission%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property submissions for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: EducationSubmissionItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Once published, there is a submission object for each student representing their work and grade.  Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationSubmission
     */
    public get(requestConfiguration?: EducationSubmissionItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationSubmission | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EducationSubmission>(requestInfo, createEducationSubmissionFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the outcomes property of the microsoft.graph.educationSubmission entity.
     * @param id Unique identifier of the item
     * @returns a EducationOutcomeItemRequestBuilder
     */
    public outcomesById(id: string) : EducationOutcomeItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationOutcome%2Did"] = id
        return new EducationOutcomeItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property submissions in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EducationSubmission
     */
    public patch(body: EducationSubmission | undefined, requestConfiguration?: EducationSubmissionItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EducationSubmission | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EducationSubmission>(requestInfo, createEducationSubmissionFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the resources property of the microsoft.graph.educationSubmission entity.
     * @param id Unique identifier of the item
     * @returns a EducationSubmissionResourceItemRequestBuilder
     */
    public resourcesById(id: string) : If48000cf4b8076c7a6ccdaead69d89d50bfdee15d5ab73cf8a8e0ff5b0b8c35a {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationSubmissionResource%2Did"] = id
        return new If48000cf4b8076c7a6ccdaead69d89d50bfdee15d5ab73cf8a8e0ff5b0b8c35a(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the submittedResources property of the microsoft.graph.educationSubmission entity.
     * @param id Unique identifier of the item
     * @returns a EducationSubmissionResourceItemRequestBuilder
     */
    public submittedResourcesById(id: string) : I707258d0aeebe0dcc6217fa436bab84058c4f9dae600b8b3a2cc86341e6a5699 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["educationSubmissionResource%2Did"] = id
        return new I707258d0aeebe0dcc6217fa436bab84058c4f9dae600b8b3a2cc86341e6a5699(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property submissions for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EducationSubmissionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
    public toGetRequestInformation(requestConfiguration?: EducationSubmissionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property submissions in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EducationSubmission | undefined, requestConfiguration?: EducationSubmissionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
