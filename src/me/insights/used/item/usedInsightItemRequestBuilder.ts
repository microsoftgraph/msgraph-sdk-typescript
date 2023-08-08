import {createUsedInsightFromDiscriminatorValue} from '../../../../models/createUsedInsightFromDiscriminatorValue';
import {deserializeIntoUsedInsight} from '../../../../models/deserializeIntoUsedInsight';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeUsedInsight} from '../../../../models/serializeUsedInsight';
import type {UsedInsight} from '../../../../models/usedInsight';
import {ResourceRequestBuilder} from './resource/resourceRequestBuilder';
import {UsedInsightItemRequestBuilderDeleteRequestConfiguration} from './usedInsightItemRequestBuilderDeleteRequestConfiguration';
import {UsedInsightItemRequestBuilderGetRequestConfiguration} from './usedInsightItemRequestBuilderGetRequestConfiguration';
import {UsedInsightItemRequestBuilderPatchRequestConfiguration} from './usedInsightItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the used property of the microsoft.graph.officeGraphInsights entity.
 */
export class UsedInsightItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the resource property of the microsoft.graph.usedInsight entity.
     */
    public get resource(): ResourceRequestBuilder {
        return new ResourceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new UsedInsightItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/insights/used/{usedInsight%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property used for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: UsedInsightItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Calculated relationship identifying the latest documents viewed or modified by a user, including OneDrive for Business and SharePoint documents, ranked by recency of use.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UsedInsight
     */
    public get(requestConfiguration?: UsedInsightItemRequestBuilderGetRequestConfiguration | undefined) : Promise<UsedInsight | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UsedInsight>(requestInfo, createUsedInsightFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property used in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UsedInsight
     */
    public patch(body: UsedInsight, requestConfiguration?: UsedInsightItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<UsedInsight | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UsedInsight>(requestInfo, createUsedInsightFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property used for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: UsedInsightItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Calculated relationship identifying the latest documents viewed or modified by a user, including OneDrive for Business and SharePoint documents, ranked by recency of use.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UsedInsightItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property used in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UsedInsight, requestConfiguration?: UsedInsightItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUsedInsight);
        return requestInfo;
    };
}
