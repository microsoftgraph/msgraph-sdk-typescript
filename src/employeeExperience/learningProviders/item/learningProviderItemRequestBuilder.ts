import {createLearningProviderFromDiscriminatorValue} from '../../../models/createLearningProviderFromDiscriminatorValue';
import {deserializeIntoLearningProvider} from '../../../models/deserializeIntoLearningProvider';
import type {LearningProvider} from '../../../models/learningProvider';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeLearningProvider} from '../../../models/serializeLearningProvider';
import {LearningContentsRequestBuilder} from './learningContents/learningContentsRequestBuilder';
import {LearningCourseActivitiesRequestBuilder} from './learningCourseActivities/learningCourseActivitiesRequestBuilder';
import {LearningProviderItemRequestBuilderDeleteRequestConfiguration} from './learningProviderItemRequestBuilderDeleteRequestConfiguration';
import {LearningProviderItemRequestBuilderGetRequestConfiguration} from './learningProviderItemRequestBuilderGetRequestConfiguration';
import {LearningProviderItemRequestBuilderPatchRequestConfiguration} from './learningProviderItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the learningProviders property of the microsoft.graph.employeeExperience entity.
 */
export class LearningProviderItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the learningContents property of the microsoft.graph.learningProvider entity.
     */
    public get learningContents(): LearningContentsRequestBuilder {
        return new LearningContentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the learningCourseActivities property of the microsoft.graph.learningProvider entity.
     */
    public get learningCourseActivities(): LearningCourseActivitiesRequestBuilder {
        return new LearningCourseActivitiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new LearningProviderItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/employeeExperience/learningProviders/{learningProvider%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a learningProvider resource and remove its registration in Viva Learning for a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/employeeexperience-delete-learningproviders?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: LearningProviderItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a learningProvider object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LearningProvider
     * @see {@link https://learn.microsoft.com/graph/api/learningprovider-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: LearningProviderItemRequestBuilderGetRequestConfiguration | undefined) : Promise<LearningProvider | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LearningProvider>(requestInfo, createLearningProviderFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a learningProvider object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LearningProvider
     * @see {@link https://learn.microsoft.com/graph/api/learningprovider-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: LearningProvider | undefined, requestConfiguration?: LearningProviderItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<LearningProvider | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LearningProvider>(requestInfo, createLearningProviderFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a learningProvider resource and remove its registration in Viva Learning for a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: LearningProviderItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a learningProvider object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: LearningProviderItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a learningProvider object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: LearningProvider | undefined, requestConfiguration?: LearningProviderItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeLearningProvider);
        return requestInfo;
    };
}
