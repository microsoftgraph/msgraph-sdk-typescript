import { type TrainingLanguageDetailCollectionResponse } from '../../../../../models/';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { createTrainingLanguageDetailFromDiscriminatorValue, deserializeIntoTrainingLanguageDetail, serializeTrainingLanguageDetail, type TrainingLanguageDetail } from '../../../../../models/trainingLanguageDetail';
import { createTrainingLanguageDetailCollectionResponseFromDiscriminatorValue } from '../../../../../models/trainingLanguageDetailCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { TrainingLanguageDetailItemRequestBuilder } from './item/trainingLanguageDetailItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface LanguageDetailsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface LanguageDetailsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: LanguageDetailsRequestBuilderGetQueryParameters;
}
export interface LanguageDetailsRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the languageDetails property of the microsoft.graph.training entity.
 */
export class LanguageDetailsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the languageDetails property of the microsoft.graph.training entity.
     * @param trainingLanguageDetailId The unique identifier of trainingLanguageDetail
     * @returns a TrainingLanguageDetailItemRequestBuilder
     */
    public byTrainingLanguageDetailId(trainingLanguageDetailId: string) : TrainingLanguageDetailItemRequestBuilder {
        if(!trainingLanguageDetailId) throw new Error("trainingLanguageDetailId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["trainingLanguageDetail%2Did"] = trainingLanguageDetailId
        return new TrainingLanguageDetailItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new LanguageDetailsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/attackSimulation/trainings/{training%2Did}/languageDetails{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get languageDetails from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TrainingLanguageDetailCollectionResponse
     */
    public get(requestConfiguration?: LanguageDetailsRequestBuilderGetRequestConfiguration | undefined) : Promise<TrainingLanguageDetailCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TrainingLanguageDetailCollectionResponse>(requestInfo, createTrainingLanguageDetailCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to languageDetails for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TrainingLanguageDetail
     */
    public post(body: TrainingLanguageDetail, requestConfiguration?: LanguageDetailsRequestBuilderPostRequestConfiguration | undefined) : Promise<TrainingLanguageDetail | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TrainingLanguageDetail>(requestInfo, createTrainingLanguageDetailFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get languageDetails from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: LanguageDetailsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to languageDetails for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TrainingLanguageDetail, requestConfiguration?: LanguageDetailsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTrainingLanguageDetail);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a languageDetailsRequestBuilder
     */
    public withUrl(rawUrl: string) : LanguageDetailsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new LanguageDetailsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
