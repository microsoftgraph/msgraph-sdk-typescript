import {SynchronizationJobCollectionResponse} from '../../../../models/';
import {createSynchronizationJobCollectionResponseFromDiscriminatorValue} from '../../../../models/createSynchronizationJobCollectionResponseFromDiscriminatorValue';
import {createSynchronizationJobFromDiscriminatorValue} from '../../../../models/createSynchronizationJobFromDiscriminatorValue';
import {deserializeIntoSynchronizationJob} from '../../../../models/deserializeIntoSynchronizationJob';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeSynchronizationJob} from '../../../../models/serializeSynchronizationJob';
import type {SynchronizationJob} from '../../../../models/synchronizationJob';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SynchronizationJobItemRequestBuilder} from './item/synchronizationJobItemRequestBuilder';
import {JobsRequestBuilderGetRequestConfiguration} from './jobsRequestBuilderGetRequestConfiguration';
import {JobsRequestBuilderPostRequestConfiguration} from './jobsRequestBuilderPostRequestConfiguration';
import {ValidateCredentialsRequestBuilder} from './validateCredentials/validateCredentialsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the jobs property of the microsoft.graph.synchronization entity.
 */
export class JobsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the validateCredentials method.
     */
    public get validateCredentials(): ValidateCredentialsRequestBuilder {
        return new ValidateCredentialsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the jobs property of the microsoft.graph.synchronization entity.
     * @param synchronizationJobId The unique identifier of synchronizationJob
     * @returns a SynchronizationJobItemRequestBuilder
     */
    public bySynchronizationJobId(synchronizationJobId: string) : SynchronizationJobItemRequestBuilder {
        if(!synchronizationJobId) throw new Error("synchronizationJobId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["synchronizationJob%2Did"] = synchronizationJobId
        return new SynchronizationJobItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new JobsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/synchronization/jobs{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List existing jobs for a given application instance (service principal).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SynchronizationJobCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/synchronization-synchronization-list-jobs?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: JobsRequestBuilderGetRequestConfiguration | undefined) : Promise<SynchronizationJobCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SynchronizationJobCollectionResponse>(requestInfo, createSynchronizationJobCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new synchronization job with a default synchronization schema. The job is created in a disabled state. Call Start job to start synchronization.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SynchronizationJob
     * @see {@link https://learn.microsoft.com/graph/api/synchronization-synchronization-post-jobs?view=graph-rest-1.0|Find more info here}
     */
    public post(body: SynchronizationJob, requestConfiguration?: JobsRequestBuilderPostRequestConfiguration | undefined) : Promise<SynchronizationJob | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SynchronizationJob>(requestInfo, createSynchronizationJobFromDiscriminatorValue, errorMapping);
    };
    /**
     * List existing jobs for a given application instance (service principal).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: JobsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new synchronization job with a default synchronization schema. The job is created in a disabled state. Call Start job to start synchronization.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SynchronizationJob, requestConfiguration?: JobsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSynchronizationJob);
        return requestInfo;
    };
}
