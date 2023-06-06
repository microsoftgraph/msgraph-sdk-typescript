import {createSynchronizationJobFromDiscriminatorValue} from '../../../../../models/createSynchronizationJobFromDiscriminatorValue';
import {deserializeIntoSynchronizationJob} from '../../../../../models/deserializeIntoSynchronizationJob';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeSynchronizationJob} from '../../../../../models/serializeSynchronizationJob';
import {SynchronizationJob} from '../../../../../models/synchronizationJob';
import {PauseRequestBuilder} from './pause/pauseRequestBuilder';
import {ProvisionOnDemandRequestBuilder} from './provisionOnDemand/provisionOnDemandRequestBuilder';
import {RestartRequestBuilder} from './restart/restartRequestBuilder';
import {SchemaRequestBuilder} from './schema/schemaRequestBuilder';
import {StartRequestBuilder} from './start/startRequestBuilder';
import {SynchronizationJobItemRequestBuilderDeleteRequestConfiguration} from './synchronizationJobItemRequestBuilderDeleteRequestConfiguration';
import {SynchronizationJobItemRequestBuilderGetRequestConfiguration} from './synchronizationJobItemRequestBuilderGetRequestConfiguration';
import {SynchronizationJobItemRequestBuilderPatchRequestConfiguration} from './synchronizationJobItemRequestBuilderPatchRequestConfiguration';
import {ValidateCredentialsRequestBuilder} from './validateCredentials/validateCredentialsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the jobs property of the microsoft.graph.synchronization entity.
 */
export class SynchronizationJobItemRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to call the pause method. */
    public get pause(): PauseRequestBuilder {
        return new PauseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the provisionOnDemand method. */
    public get provisionOnDemand(): ProvisionOnDemandRequestBuilder {
        return new ProvisionOnDemandRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the restart method. */
    public get restart(): RestartRequestBuilder {
        return new RestartRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the schema property of the microsoft.graph.synchronizationJob entity. */
    public get schema(): SchemaRequestBuilder {
        return new SchemaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the start method. */
    public get start(): StartRequestBuilder {
        return new StartRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the validateCredentials method. */
    public get validateCredentials(): ValidateCredentialsRequestBuilder {
        return new ValidateCredentialsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new SynchronizationJobItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/applications/{application%2Did}/synchronization/jobs/{synchronizationJob%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property jobs for applications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: SynchronizationJobItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get jobs from applications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SynchronizationJob
     */
    public get(requestConfiguration?: SynchronizationJobItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SynchronizationJob | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<SynchronizationJob>(requestInfo, createSynchronizationJobFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property jobs in applications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SynchronizationJob
     */
    public patch(body: SynchronizationJob | undefined, requestConfiguration?: SynchronizationJobItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SynchronizationJob | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<SynchronizationJob>(requestInfo, createSynchronizationJobFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property jobs for applications
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
     * Get jobs from applications
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
     * Update the navigation property jobs in applications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: SynchronizationJob | undefined, requestConfiguration?: SynchronizationJobItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSynchronizationJob);
        return requestInfo;
    };
}
