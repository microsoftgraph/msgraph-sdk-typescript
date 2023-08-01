import {createInferenceClassificationFromDiscriminatorValue} from '../../../models/createInferenceClassificationFromDiscriminatorValue';
import {deserializeIntoInferenceClassification} from '../../../models/deserializeIntoInferenceClassification';
import type {InferenceClassification} from '../../../models/inferenceClassification';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeInferenceClassification} from '../../../models/serializeInferenceClassification';
import {InferenceClassificationRequestBuilderGetRequestConfiguration} from './inferenceClassificationRequestBuilderGetRequestConfiguration';
import {InferenceClassificationRequestBuilderPatchRequestConfiguration} from './inferenceClassificationRequestBuilderPatchRequestConfiguration';
import {OverridesRequestBuilder} from './overrides/overridesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the inferenceClassification property of the microsoft.graph.user entity.
 */
export class InferenceClassificationRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the overrides property of the microsoft.graph.inferenceClassification entity.
     */
    public get overrides(): OverridesRequestBuilder {
        return new OverridesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new InferenceClassificationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/inferenceClassification{?%24select}");
    };
    /**
     * Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of InferenceClassification
     */
    public get(requestConfiguration?: InferenceClassificationRequestBuilderGetRequestConfiguration | undefined) : Promise<InferenceClassification | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<InferenceClassification>(requestInfo, createInferenceClassificationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property inferenceClassification in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of InferenceClassification
     */
    public patch(body: InferenceClassification | undefined, requestConfiguration?: InferenceClassificationRequestBuilderPatchRequestConfiguration | undefined) : Promise<InferenceClassification | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<InferenceClassification>(requestInfo, createInferenceClassificationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Relevance classification of the user's messages based on explicit designations which override inferred relevance or importance.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: InferenceClassificationRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property inferenceClassification in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: InferenceClassification | undefined, requestConfiguration?: InferenceClassificationRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeInferenceClassification);
        return requestInfo;
    };
}
