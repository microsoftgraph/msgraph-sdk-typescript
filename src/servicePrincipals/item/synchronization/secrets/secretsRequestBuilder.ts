import {createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue} from '../../../../models/createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue';
import {deserializeIntoSynchronizationSecretKeyStringValuePair} from '../../../../models/deserializeIntoSynchronizationSecretKeyStringValuePair';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeSynchronizationSecretKeyStringValuePair} from '../../../../models/serializeSynchronizationSecretKeyStringValuePair';
import type {SynchronizationSecretKeyStringValuePair} from '../../../../models/synchronizationSecretKeyStringValuePair';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SecretsRequestBuilderPutRequestConfiguration} from './secretsRequestBuilderPutRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /servicePrincipals/{servicePrincipal-id}/synchronization/secrets
 */
export class SecretsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new SecretsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/synchronization/secrets");
    };
    /**
     * Update property secrets value.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SynchronizationSecretKeyStringValuePair
     */
    public put(body: SynchronizationSecretKeyStringValuePair[], requestConfiguration?: SecretsRequestBuilderPutRequestConfiguration | undefined) : Promise<SynchronizationSecretKeyStringValuePair[] | undefined> {
        const requestInfo = this.toPutRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendCollectionAsync<SynchronizationSecretKeyStringValuePair>(requestInfo, createSynchronizationSecretKeyStringValuePairFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update property secrets value.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPutRequestInformation(body: SynchronizationSecretKeyStringValuePair[], requestConfiguration?: SecretsRequestBuilderPutRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PUT;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSynchronizationSecretKeyStringValuePair);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a secretsRequestBuilder
     */
    public withUrl(rawUrl: string) : SecretsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SecretsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
