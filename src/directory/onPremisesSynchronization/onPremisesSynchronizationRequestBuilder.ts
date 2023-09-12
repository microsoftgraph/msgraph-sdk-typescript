import { type OnPremisesDirectorySynchronizationCollectionResponse } from '../../models/';
import { createOnPremisesDirectorySynchronizationCollectionResponseFromDiscriminatorValue } from '../../models/createOnPremisesDirectorySynchronizationCollectionResponseFromDiscriminatorValue';
import { createOnPremisesDirectorySynchronizationFromDiscriminatorValue } from '../../models/createOnPremisesDirectorySynchronizationFromDiscriminatorValue';
import { deserializeIntoOnPremisesDirectorySynchronization } from '../../models/deserializeIntoOnPremisesDirectorySynchronization';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { type OnPremisesDirectorySynchronization } from '../../models/onPremisesDirectorySynchronization';
import { serializeOnPremisesDirectorySynchronization } from '../../models/serializeOnPremisesDirectorySynchronization';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { OnPremisesDirectorySynchronizationItemRequestBuilder } from './item/onPremisesDirectorySynchronizationItemRequestBuilder';
import { type OnPremisesSynchronizationRequestBuilderGetRequestConfiguration } from './onPremisesSynchronizationRequestBuilderGetRequestConfiguration';
import { type OnPremisesSynchronizationRequestBuilderPostRequestConfiguration } from './onPremisesSynchronizationRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the onPremisesSynchronization property of the microsoft.graph.directory entity.
 */
export class OnPremisesSynchronizationRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the onPremisesSynchronization property of the microsoft.graph.directory entity.
     * @param onPremisesDirectorySynchronizationId The unique identifier of onPremisesDirectorySynchronization
     * @returns a OnPremisesDirectorySynchronizationItemRequestBuilder
     */
    public byOnPremisesDirectorySynchronizationId(onPremisesDirectorySynchronizationId: string) : OnPremisesDirectorySynchronizationItemRequestBuilder {
        if(!onPremisesDirectorySynchronizationId) throw new Error("onPremisesDirectorySynchronizationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["onPremisesDirectorySynchronization%2Did"] = onPremisesDirectorySynchronizationId
        return new OnPremisesDirectorySynchronizationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new OnPremisesSynchronizationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/directory/onPremisesSynchronization{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Read the properties and relationships of an onPremisesDirectorySynchronization object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnPremisesDirectorySynchronizationCollectionResponse
     */
    public get(requestConfiguration?: OnPremisesSynchronizationRequestBuilderGetRequestConfiguration | undefined) : Promise<OnPremisesDirectorySynchronizationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnPremisesDirectorySynchronizationCollectionResponse>(requestInfo, createOnPremisesDirectorySynchronizationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to onPremisesSynchronization for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnPremisesDirectorySynchronization
     */
    public post(body: OnPremisesDirectorySynchronization, requestConfiguration?: OnPremisesSynchronizationRequestBuilderPostRequestConfiguration | undefined) : Promise<OnPremisesDirectorySynchronization | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnPremisesDirectorySynchronization>(requestInfo, createOnPremisesDirectorySynchronizationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read the properties and relationships of an onPremisesDirectorySynchronization object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OnPremisesSynchronizationRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to onPremisesSynchronization for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: OnPremisesDirectorySynchronization, requestConfiguration?: OnPremisesSynchronizationRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeOnPremisesDirectorySynchronization);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a onPremisesSynchronizationRequestBuilder
     */
    public withUrl(rawUrl: string) : OnPremisesSynchronizationRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new OnPremisesSynchronizationRequestBuilder(rawUrl, this.requestAdapter);
    };
}
