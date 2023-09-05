import { type LearningContentCollectionResponse } from '../../../../models/';
import { createLearningContentCollectionResponseFromDiscriminatorValue } from '../../../../models/createLearningContentCollectionResponseFromDiscriminatorValue';
import { createLearningContentFromDiscriminatorValue } from '../../../../models/createLearningContentFromDiscriminatorValue';
import { deserializeIntoLearningContent } from '../../../../models/deserializeIntoLearningContent';
import { type LearningContent } from '../../../../models/learningContent';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { serializeLearningContent } from '../../../../models/serializeLearningContent';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { LearningContentItemRequestBuilder } from './item/learningContentItemRequestBuilder';
import { type LearningContentsRequestBuilderGetRequestConfiguration } from './learningContentsRequestBuilderGetRequestConfiguration';
import { type LearningContentsRequestBuilderPostRequestConfiguration } from './learningContentsRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the learningContents property of the microsoft.graph.learningProvider entity.
 */
export class LearningContentsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the learningContents property of the microsoft.graph.learningProvider entity.
     * @param learningContentId The unique identifier of learningContent
     * @returns a LearningContentItemRequestBuilder
     */
    public byLearningContentId(learningContentId: string) : LearningContentItemRequestBuilder {
        if(!learningContentId) throw new Error("learningContentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["learningContent%2Did"] = learningContentId
        return new LearningContentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new LearningContentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/employeeExperience/learningProviders/{learningProvider%2Did}/learningContents{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the learningContent resources and their properties. This list represents the metadata of the specified provider's content in Viva Learning.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LearningContentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/learningprovider-list-learningcontents?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: LearningContentsRequestBuilderGetRequestConfiguration | undefined) : Promise<LearningContentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LearningContentCollectionResponse>(requestInfo, createLearningContentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to learningContents for employeeExperience
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LearningContent
     */
    public post(body: LearningContent, requestConfiguration?: LearningContentsRequestBuilderPostRequestConfiguration | undefined) : Promise<LearningContent | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LearningContent>(requestInfo, createLearningContentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the learningContent resources and their properties. This list represents the metadata of the specified provider's content in Viva Learning.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: LearningContentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to learningContents for employeeExperience
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: LearningContent, requestConfiguration?: LearningContentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
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
     * @returns a learningContentsRequestBuilder
     */
    public withUrl(rawUrl: string) : LearningContentsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new LearningContentsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
