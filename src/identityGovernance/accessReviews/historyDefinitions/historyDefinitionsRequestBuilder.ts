import { type AccessReviewHistoryDefinitionCollectionResponse } from '../../../models/';
import { type AccessReviewHistoryDefinition } from '../../../models/accessReviewHistoryDefinition';
import { createAccessReviewHistoryDefinitionCollectionResponseFromDiscriminatorValue } from '../../../models/createAccessReviewHistoryDefinitionCollectionResponseFromDiscriminatorValue';
import { createAccessReviewHistoryDefinitionFromDiscriminatorValue } from '../../../models/createAccessReviewHistoryDefinitionFromDiscriminatorValue';
import { deserializeIntoAccessReviewHistoryDefinition } from '../../../models/deserializeIntoAccessReviewHistoryDefinition';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeAccessReviewHistoryDefinition } from '../../../models/serializeAccessReviewHistoryDefinition';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { type HistoryDefinitionsRequestBuilderGetRequestConfiguration } from './historyDefinitionsRequestBuilderGetRequestConfiguration';
import { type HistoryDefinitionsRequestBuilderPostRequestConfiguration } from './historyDefinitionsRequestBuilderPostRequestConfiguration';
import { AccessReviewHistoryDefinitionItemRequestBuilder } from './item/accessReviewHistoryDefinitionItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the historyDefinitions property of the microsoft.graph.accessReviewSet entity.
 */
export class HistoryDefinitionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the historyDefinitions property of the microsoft.graph.accessReviewSet entity.
     * @param accessReviewHistoryDefinitionId The unique identifier of accessReviewHistoryDefinition
     * @returns a AccessReviewHistoryDefinitionItemRequestBuilder
     */
    public byAccessReviewHistoryDefinitionId(accessReviewHistoryDefinitionId: string) : AccessReviewHistoryDefinitionItemRequestBuilder {
        if(!accessReviewHistoryDefinitionId) throw new Error("accessReviewHistoryDefinitionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessReviewHistoryDefinition%2Did"] = accessReviewHistoryDefinitionId
        return new AccessReviewHistoryDefinitionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new HistoryDefinitionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/accessReviews/historyDefinitions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the accessReviewHistoryDefinition objects created in the last 30 days, including all nested properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewHistoryDefinitionCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewset-list-historydefinitions?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: HistoryDefinitionsRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessReviewHistoryDefinitionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessReviewHistoryDefinitionCollectionResponse>(requestInfo, createAccessReviewHistoryDefinitionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new accessReviewHistoryDefinition object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewHistoryDefinition
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewset-post-historydefinitions?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AccessReviewHistoryDefinition, requestConfiguration?: HistoryDefinitionsRequestBuilderPostRequestConfiguration | undefined) : Promise<AccessReviewHistoryDefinition | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessReviewHistoryDefinition>(requestInfo, createAccessReviewHistoryDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the accessReviewHistoryDefinition objects created in the last 30 days, including all nested properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: HistoryDefinitionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new accessReviewHistoryDefinition object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AccessReviewHistoryDefinition, requestConfiguration?: HistoryDefinitionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAccessReviewHistoryDefinition);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a historyDefinitionsRequestBuilder
     */
    public withUrl(rawUrl: string) : HistoryDefinitionsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new HistoryDefinitionsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
