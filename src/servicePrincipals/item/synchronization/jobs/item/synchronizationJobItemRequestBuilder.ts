import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { createSynchronizationJobFromDiscriminatorValue, deserializeIntoSynchronizationJob, serializeSynchronizationJob, type SynchronizationJob } from '../../../../../models/synchronizationJob';
import { PauseRequestBuilder } from './pause/pauseRequestBuilder';
import { ProvisionOnDemandRequestBuilder } from './provisionOnDemand/provisionOnDemandRequestBuilder';
import { RestartRequestBuilder } from './restart/restartRequestBuilder';
import { SchemaRequestBuilder } from './schema/schemaRequestBuilder';
import { StartRequestBuilder } from './start/startRequestBuilder';
import { ValidateCredentialsRequestBuilder } from './validateCredentials/validateCredentialsRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface SynchronizationJobItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface SynchronizationJobItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface SynchronizationJobItemRequestBuilderGetRequestConfiguration {
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
    queryParameters?: SynchronizationJobItemRequestBuilderGetQueryParameters;
}
export interface SynchronizationJobItemRequestBuilderPatchRequestConfiguration {
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
 * Provides operations to manage the jobs property of the microsoft.graph.synchronization entity.
 */
export class SynchronizationJobItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the pause method.
     */
    public get pause(): PauseRequestBuilder {
        return new PauseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the provisionOnDemand method.
     */
    public get provisionOnDemand(): ProvisionOnDemandRequestBuilder {
        return new ProvisionOnDemandRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the restart method.
     */
    public get restart(): RestartRequestBuilder {
        return new RestartRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the schema property of the microsoft.graph.synchronizationJob entity.
     */
    public get schema(): SchemaRequestBuilder {
        return new SchemaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the start method.
     */
    public get start(): StartRequestBuilder {
        return new StartRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the validateCredentials method.
     */
    public get validateCredentials(): ValidateCredentialsRequestBuilder {
        return new ValidateCredentialsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new SynchronizationJobItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/synchronization/jobs/{synchronizationJob%2Did}{?%24select,%24expand}");
    };
    /**
     * Stop the synchronization job, and permanently delete all the state associated with it. Synchronized accounts are left as-is. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/synchronization-synchronizationjob-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: SynchronizationJobItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the existing synchronization job and its properties. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SynchronizationJob
     * @see {@link https://learn.microsoft.com/graph/api/synchronization-synchronizationjob-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SynchronizationJobItemRequestBuilderGetRequestConfiguration | undefined) : Promise<SynchronizationJob | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SynchronizationJob>(requestInfo, createSynchronizationJobFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property jobs in servicePrincipals
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SynchronizationJob
     */
    public patch(body: SynchronizationJob, requestConfiguration?: SynchronizationJobItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<SynchronizationJob | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SynchronizationJob>(requestInfo, createSynchronizationJobFromDiscriminatorValue, errorMapping);
    };
    /**
     * Stop the synchronization job, and permanently delete all the state associated with it. Synchronized accounts are left as-is. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: SynchronizationJobItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the existing synchronization job and its properties. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SynchronizationJobItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property jobs in servicePrincipals
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: SynchronizationJob, requestConfiguration?: SynchronizationJobItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSynchronizationJob);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a SynchronizationJobItemRequestBuilder
     */
    public withUrl(rawUrl: string) : SynchronizationJobItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SynchronizationJobItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
