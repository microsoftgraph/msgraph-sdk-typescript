import { createOnPremisesDirectorySynchronizationFromDiscriminatorValue } from '../../../models/createOnPremisesDirectorySynchronizationFromDiscriminatorValue';
import { deserializeIntoOnPremisesDirectorySynchronization } from '../../../models/deserializeIntoOnPremisesDirectorySynchronization';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { type OnPremisesDirectorySynchronization } from '../../../models/onPremisesDirectorySynchronization';
import { serializeOnPremisesDirectorySynchronization } from '../../../models/serializeOnPremisesDirectorySynchronization';
import { type OnPremisesDirectorySynchronizationItemRequestBuilderDeleteRequestConfiguration } from './onPremisesDirectorySynchronizationItemRequestBuilderDeleteRequestConfiguration';
import { type OnPremisesDirectorySynchronizationItemRequestBuilderGetRequestConfiguration } from './onPremisesDirectorySynchronizationItemRequestBuilderGetRequestConfiguration';
import { type OnPremisesDirectorySynchronizationItemRequestBuilderPatchRequestConfiguration } from './onPremisesDirectorySynchronizationItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the onPremisesSynchronization property of the microsoft.graph.directory entity.
 */
export class OnPremisesDirectorySynchronizationItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new OnPremisesDirectorySynchronizationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/directory/onPremisesSynchronization/{onPremisesDirectorySynchronization%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property onPremisesSynchronization for directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: OnPremisesDirectorySynchronizationItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of an onPremisesDirectorySynchronization object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnPremisesDirectorySynchronization
     * @see {@link https://learn.microsoft.com/graph/api/onpremisesdirectorysynchronization-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: OnPremisesDirectorySynchronizationItemRequestBuilderGetRequestConfiguration | undefined) : Promise<OnPremisesDirectorySynchronization | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnPremisesDirectorySynchronization>(requestInfo, createOnPremisesDirectorySynchronizationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of an onPremisesDirectorySynchronization object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnPremisesDirectorySynchronization
     * @see {@link https://learn.microsoft.com/graph/api/onpremisesdirectorysynchronization-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: OnPremisesDirectorySynchronization, requestConfiguration?: OnPremisesDirectorySynchronizationItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<OnPremisesDirectorySynchronization | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnPremisesDirectorySynchronization>(requestInfo, createOnPremisesDirectorySynchronizationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property onPremisesSynchronization for directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: OnPremisesDirectorySynchronizationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of an onPremisesDirectorySynchronization object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OnPremisesDirectorySynchronizationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of an onPremisesDirectorySynchronization object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: OnPremisesDirectorySynchronization, requestConfiguration?: OnPremisesDirectorySynchronizationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeOnPremisesDirectorySynchronization);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a OnPremisesDirectorySynchronizationItemRequestBuilder
     */
    public withUrl(rawUrl: string) : OnPremisesDirectorySynchronizationItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new OnPremisesDirectorySynchronizationItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
