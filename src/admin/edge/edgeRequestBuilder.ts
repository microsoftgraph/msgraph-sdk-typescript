import { createEdgeFromDiscriminatorValue } from '../../models/createEdgeFromDiscriminatorValue';
import { deserializeIntoEdge } from '../../models/deserializeIntoEdge';
import { type Edge } from '../../models/edge';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeEdge } from '../../models/serializeEdge';
import { type EdgeRequestBuilderDeleteRequestConfiguration } from './edgeRequestBuilderDeleteRequestConfiguration';
import { type EdgeRequestBuilderGetRequestConfiguration } from './edgeRequestBuilderGetRequestConfiguration';
import { type EdgeRequestBuilderPatchRequestConfiguration } from './edgeRequestBuilderPatchRequestConfiguration';
import { InternetExplorerModeRequestBuilder } from './internetExplorerMode/internetExplorerModeRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the edge property of the microsoft.graph.admin entity.
 */
export class EdgeRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the internetExplorerMode property of the microsoft.graph.edge entity.
     */
    public get internetExplorerMode(): InternetExplorerModeRequestBuilder {
        return new InternetExplorerModeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new EdgeRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/admin/edge{?%24select,%24expand}");
    };
    /**
     * Delete navigation property edge for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: EdgeRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * A container for Microsoft Edge resources. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Edge
     */
    public get(requestConfiguration?: EdgeRequestBuilderGetRequestConfiguration | undefined) : Promise<Edge | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Edge>(requestInfo, createEdgeFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property edge in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Edge
     */
    public patch(body: Edge, requestConfiguration?: EdgeRequestBuilderPatchRequestConfiguration | undefined) : Promise<Edge | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Edge>(requestInfo, createEdgeFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property edge for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EdgeRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * A container for Microsoft Edge resources. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EdgeRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property edge in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Edge, requestConfiguration?: EdgeRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEdge);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a edgeRequestBuilder
     */
    public withUrl(rawUrl: string) : EdgeRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new EdgeRequestBuilder(rawUrl, this.requestAdapter);
    };
}
