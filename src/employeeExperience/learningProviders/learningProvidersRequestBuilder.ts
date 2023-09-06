import { type LearningProviderCollectionResponse } from '../../models/';
import { createLearningProviderCollectionResponseFromDiscriminatorValue } from '../../models/createLearningProviderCollectionResponseFromDiscriminatorValue';
import { createLearningProviderFromDiscriminatorValue } from '../../models/createLearningProviderFromDiscriminatorValue';
import { deserializeIntoLearningProvider } from '../../models/deserializeIntoLearningProvider';
import { type LearningProvider } from '../../models/learningProvider';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeLearningProvider } from '../../models/serializeLearningProvider';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { LearningProviderItemRequestBuilder } from './item/learningProviderItemRequestBuilder';
import { type LearningProvidersRequestBuilderGetRequestConfiguration } from './learningProvidersRequestBuilderGetRequestConfiguration';
import { type LearningProvidersRequestBuilderPostRequestConfiguration } from './learningProvidersRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the learningProviders property of the microsoft.graph.employeeExperience entity.
 */
export class LearningProvidersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the learningProviders property of the microsoft.graph.employeeExperience entity.
     * @param learningProviderId The unique identifier of learningProvider
     * @returns a LearningProviderItemRequestBuilder
     */
    public byLearningProviderId(learningProviderId: string) : LearningProviderItemRequestBuilder {
        if(!learningProviderId) throw new Error("learningProviderId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["learningProvider%2Did"] = learningProviderId
        return new LearningProviderItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new LearningProvidersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/employeeExperience/learningProviders{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the learningProvider resources registered in Viva Learning for a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LearningProviderCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/employeeexperience-list-learningproviders?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: LearningProvidersRequestBuilderGetRequestConfiguration | undefined) : Promise<LearningProviderCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LearningProviderCollectionResponse>(requestInfo, createLearningProviderCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new learningProvider object and register it with Viva Learning using the specified display name and logos for different themes.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LearningProvider
     * @see {@link https://learn.microsoft.com/graph/api/employeeexperience-post-learningproviders?view=graph-rest-1.0|Find more info here}
     */
    public post(body: LearningProvider, requestConfiguration?: LearningProvidersRequestBuilderPostRequestConfiguration | undefined) : Promise<LearningProvider | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LearningProvider>(requestInfo, createLearningProviderFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the learningProvider resources registered in Viva Learning for a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: LearningProvidersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new learningProvider object and register it with Viva Learning using the specified display name and logos for different themes.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: LearningProvider, requestConfiguration?: LearningProvidersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeLearningProvider);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a learningProvidersRequestBuilder
     */
    public withUrl(rawUrl: string) : LearningProvidersRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new LearningProvidersRequestBuilder(rawUrl, this.requestAdapter);
    };
}
