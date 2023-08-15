import {ExternalConnectionCollectionResponse} from '../models/externalConnectors/';
import {createExternalConnectionCollectionResponseFromDiscriminatorValue} from '../models/externalConnectors/createExternalConnectionCollectionResponseFromDiscriminatorValue';
import {createExternalConnectionFromDiscriminatorValue} from '../models/externalConnectors/createExternalConnectionFromDiscriminatorValue';
import {deserializeIntoExternalConnection} from '../models/externalConnectors/deserializeIntoExternalConnection';
import type {ExternalConnection} from '../models/externalConnectors/externalConnection';
import {serializeExternalConnection} from '../models/externalConnectors/serializeExternalConnection';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {ConnectionsRequestBuilderGetRequestConfiguration} from './connectionsRequestBuilderGetRequestConfiguration';
import {ConnectionsRequestBuilderPostRequestConfiguration} from './connectionsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ExternalConnectionItemRequestBuilder} from './item/externalConnectionItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of externalConnection entities.
 */
export class ConnectionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of externalConnection entities.
     * @param externalConnectionId The unique identifier of externalConnection
     * @returns a ExternalConnectionItemRequestBuilder
     */
    public byExternalConnectionId(externalConnectionId: string) : ExternalConnectionItemRequestBuilder {
        if(!externalConnectionId) throw new Error("externalConnectionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["externalConnection%2Did"] = externalConnectionId
        return new ExternalConnectionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ConnectionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/connections{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get entities from connections
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ExternalConnectionCollectionResponse
     */
    public get(requestConfiguration?: ConnectionsRequestBuilderGetRequestConfiguration | undefined) : Promise<ExternalConnectionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ExternalConnectionCollectionResponse>(requestInfo, createExternalConnectionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add new entity to connections
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ExternalConnection
     */
    public post(body: ExternalConnection, requestConfiguration?: ConnectionsRequestBuilderPostRequestConfiguration | undefined) : Promise<ExternalConnection | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ExternalConnection>(requestInfo, createExternalConnectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get entities from connections
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ConnectionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add new entity to connections
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ExternalConnection, requestConfiguration?: ConnectionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeExternalConnection);
        return requestInfo;
    };
}
