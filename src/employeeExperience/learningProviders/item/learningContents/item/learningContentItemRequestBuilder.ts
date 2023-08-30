import {createLearningContentFromDiscriminatorValue} from '../../../../../models/createLearningContentFromDiscriminatorValue';
import {deserializeIntoLearningContent} from '../../../../../models/deserializeIntoLearningContent';
import type {LearningContent} from '../../../../../models/learningContent';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeLearningContent} from '../../../../../models/serializeLearningContent';
import {LearningContentItemRequestBuilderDeleteRequestConfiguration} from './learningContentItemRequestBuilderDeleteRequestConfiguration';
import {LearningContentItemRequestBuilderGetRequestConfiguration} from './learningContentItemRequestBuilderGetRequestConfiguration';
import {LearningContentItemRequestBuilderPatchRequestConfiguration} from './learningContentItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the learningContents property of the microsoft.graph.learningProvider entity.
 */
export class LearningContentItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new LearningContentItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/employeeExperience/learningProviders/{learningProvider%2Did}/learningContents/{learningContent%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete the specified learningContent resource that represents the metadata of the specified provider's ingested content.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/learningprovider-delete-learningcontents?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: LearningContentItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get the specified learningContent resource which represents the metadata of the specified provider's ingested content.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LearningContent
     * @see {@link https://learn.microsoft.com/graph/api/learningcontent-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: LearningContentItemRequestBuilderGetRequestConfiguration | undefined) : Promise<LearningContent | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LearningContent>(requestInfo, createLearningContentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property learningContents in employeeExperience
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LearningContent
     */
    public patch(body: LearningContent, requestConfiguration?: LearningContentItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<LearningContent | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LearningContent>(requestInfo, createLearningContentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete the specified learningContent resource that represents the metadata of the specified provider's ingested content.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: LearningContentItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get the specified learningContent resource which represents the metadata of the specified provider's ingested content.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: LearningContentItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property learningContents in employeeExperience
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: LearningContent, requestConfiguration?: LearningContentItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeLearningContent);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a LearningContentItemRequestBuilder
     */
    public withUrl(rawUrl: string) : LearningContentItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new LearningContentItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
