import {createSynchronizationTemplateFromDiscriminatorValue} from '../../../../../models/createSynchronizationTemplateFromDiscriminatorValue';
import {deserializeIntoSynchronizationTemplate} from '../../../../../models/deserializeIntoSynchronizationTemplate';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeSynchronizationTemplate} from '../../../../../models/serializeSynchronizationTemplate';
import type {SynchronizationTemplate} from '../../../../../models/synchronizationTemplate';
import {SchemaRequestBuilder} from './schema/schemaRequestBuilder';
import {SynchronizationTemplateItemRequestBuilderDeleteRequestConfiguration} from './synchronizationTemplateItemRequestBuilderDeleteRequestConfiguration';
import {SynchronizationTemplateItemRequestBuilderGetRequestConfiguration} from './synchronizationTemplateItemRequestBuilderGetRequestConfiguration';
import {SynchronizationTemplateItemRequestBuilderPatchRequestConfiguration} from './synchronizationTemplateItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the templates property of the microsoft.graph.synchronization entity.
 */
export class SynchronizationTemplateItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the schema property of the microsoft.graph.synchronizationTemplate entity.
     */
    public get schema(): SchemaRequestBuilder {
        return new SchemaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new SynchronizationTemplateItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/applications/{application%2Did}/synchronization/templates/{synchronizationTemplate%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property templates for applications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: SynchronizationTemplateItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Pre-configured synchronization settings for a particular application.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SynchronizationTemplate
     */
    public get(requestConfiguration?: SynchronizationTemplateItemRequestBuilderGetRequestConfiguration | undefined) : Promise<SynchronizationTemplate | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SynchronizationTemplate>(requestInfo, createSynchronizationTemplateFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update (override) the synchronization template associated with a given application.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SynchronizationTemplate
     * @see {@link https://learn.microsoft.com/graph/api/synchronization-synchronizationtemplate-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: SynchronizationTemplate, requestConfiguration?: SynchronizationTemplateItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<SynchronizationTemplate | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SynchronizationTemplate>(requestInfo, createSynchronizationTemplateFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property templates for applications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: SynchronizationTemplateItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Pre-configured synchronization settings for a particular application.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SynchronizationTemplateItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update (override) the synchronization template associated with a given application.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: SynchronizationTemplate, requestConfiguration?: SynchronizationTemplateItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSynchronizationTemplate);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a SynchronizationTemplateItemRequestBuilder
     */
    public withUrl(rawUrl: string) : SynchronizationTemplateItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SynchronizationTemplateItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
