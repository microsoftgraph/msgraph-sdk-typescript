import {createSubjectRightsRequestFromDiscriminatorValue} from '../../../models/createSubjectRightsRequestFromDiscriminatorValue';
import {deserializeIntoSubjectRightsRequest} from '../../../models/deserializeIntoSubjectRightsRequest';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeSubjectRightsRequest} from '../../../models/serializeSubjectRightsRequest';
import type {SubjectRightsRequest} from '../../../models/subjectRightsRequest';
import {GetFinalAttachmentRequestBuilder} from './getFinalAttachment/getFinalAttachmentRequestBuilder';
import {GetFinalReportRequestBuilder} from './getFinalReport/getFinalReportRequestBuilder';
import {NotesRequestBuilder} from './notes/notesRequestBuilder';
import {SubjectRightsRequestItemRequestBuilderDeleteRequestConfiguration} from './subjectRightsRequestItemRequestBuilderDeleteRequestConfiguration';
import {SubjectRightsRequestItemRequestBuilderGetRequestConfiguration} from './subjectRightsRequestItemRequestBuilderGetRequestConfiguration';
import {SubjectRightsRequestItemRequestBuilderPatchRequestConfiguration} from './subjectRightsRequestItemRequestBuilderPatchRequestConfiguration';
import {TeamRequestBuilder} from './team/teamRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the subjectRightsRequests property of the microsoft.graph.privacy entity.
 */
export class SubjectRightsRequestItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the getFinalAttachment method.
     */
    public get getFinalAttachment(): GetFinalAttachmentRequestBuilder {
        return new GetFinalAttachmentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getFinalReport method.
     */
    public get getFinalReport(): GetFinalReportRequestBuilder {
        return new GetFinalReportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the notes property of the microsoft.graph.subjectRightsRequest entity.
     */
    public get notes(): NotesRequestBuilder {
        return new NotesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the team property of the microsoft.graph.subjectRightsRequest entity.
     */
    public get team(): TeamRequestBuilder {
        return new TeamRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new SubjectRightsRequestItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/privacy/subjectRightsRequests/{subjectRightsRequest%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property subjectRightsRequests for privacy
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: SubjectRightsRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a subjectRightsRequest object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SubjectRightsRequest
     * @see {@link https://learn.microsoft.com/graph/api/subjectrightsrequest-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SubjectRightsRequestItemRequestBuilderGetRequestConfiguration | undefined) : Promise<SubjectRightsRequest | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SubjectRightsRequest>(requestInfo, createSubjectRightsRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a subjectRightsRequest object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SubjectRightsRequest
     * @see {@link https://learn.microsoft.com/graph/api/subjectrightsrequest-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: SubjectRightsRequest, requestConfiguration?: SubjectRightsRequestItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<SubjectRightsRequest | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SubjectRightsRequest>(requestInfo, createSubjectRightsRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property subjectRightsRequests for privacy
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: SubjectRightsRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a subjectRightsRequest object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SubjectRightsRequestItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a subjectRightsRequest object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: SubjectRightsRequest, requestConfiguration?: SubjectRightsRequestItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSubjectRightsRequest);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a SubjectRightsRequestItemRequestBuilder
     */
    public withUrl(rawUrl: string) : SubjectRightsRequestItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SubjectRightsRequestItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
