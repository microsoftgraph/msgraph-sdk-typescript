import {createExternalConnectionFromDiscriminatorValue} from '../../models/externalConnectors/createExternalConnectionFromDiscriminatorValue';
import {deserializeIntoExternalConnection} from '../../models/externalConnectors/deserializeIntoExternalConnection';
import type {ExternalConnection} from '../../models/externalConnectors/externalConnection';
import {serializeExternalConnection} from '../../models/externalConnectors/serializeExternalConnection';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {ExternalConnectionItemRequestBuilderDeleteRequestConfiguration} from './externalConnectionItemRequestBuilderDeleteRequestConfiguration';
import {ExternalConnectionItemRequestBuilderGetRequestConfiguration} from './externalConnectionItemRequestBuilderGetRequestConfiguration';
import {ExternalConnectionItemRequestBuilderPatchRequestConfiguration} from './externalConnectionItemRequestBuilderPatchRequestConfiguration';
import {GroupsRequestBuilder} from './groups/groupsRequestBuilder';
import {ItemsRequestBuilder} from './items/itemsRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {SchemaRequestBuilder} from './schema/schemaRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of externalConnection entities.
 */
export class ExternalConnectionItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the groups property of the microsoft.graph.externalConnectors.externalConnection entity.
     */
    public get groups(): GroupsRequestBuilder {
        return new GroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the items property of the microsoft.graph.externalConnectors.externalConnection entity.
     */
    public get items(): ItemsRequestBuilder {
        return new ItemsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the operations property of the microsoft.graph.externalConnectors.externalConnection entity.
     */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the schema property of the microsoft.graph.externalConnectors.externalConnection entity.
     */
    public get schema(): SchemaRequestBuilder {
        return new SchemaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ExternalConnectionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/connections/{externalConnection%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete entity from connections
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ExternalConnectionItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get entity from connections by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ExternalConnection
     */
    public get(requestConfiguration?: ExternalConnectionItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ExternalConnection | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ExternalConnection>(requestInfo, createExternalConnectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update entity in connections
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ExternalConnection
     */
    public patch(body: ExternalConnection, requestConfiguration?: ExternalConnectionItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ExternalConnection | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ExternalConnection>(requestInfo, createExternalConnectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete entity from connections
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ExternalConnectionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get entity from connections by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ExternalConnectionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update entity in connections
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ExternalConnection, requestConfiguration?: ExternalConnectionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeExternalConnection);
        return requestInfo;
    };
}
