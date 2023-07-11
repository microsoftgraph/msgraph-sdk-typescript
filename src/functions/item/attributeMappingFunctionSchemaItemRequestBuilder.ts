import {AttributeMappingFunctionSchema} from '../../models/attributeMappingFunctionSchema';
import {createAttributeMappingFunctionSchemaFromDiscriminatorValue} from '../../models/createAttributeMappingFunctionSchemaFromDiscriminatorValue';
import {deserializeIntoAttributeMappingFunctionSchema} from '../../models/deserializeIntoAttributeMappingFunctionSchema';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeAttributeMappingFunctionSchema} from '../../models/serializeAttributeMappingFunctionSchema';
import {AttributeMappingFunctionSchemaItemRequestBuilderDeleteRequestConfiguration} from './attributeMappingFunctionSchemaItemRequestBuilderDeleteRequestConfiguration';
import {AttributeMappingFunctionSchemaItemRequestBuilderGetRequestConfiguration} from './attributeMappingFunctionSchemaItemRequestBuilderGetRequestConfiguration';
import {AttributeMappingFunctionSchemaItemRequestBuilderPatchRequestConfiguration} from './attributeMappingFunctionSchemaItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of attributeMappingFunctionSchema entities.
 */
export class AttributeMappingFunctionSchemaItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AttributeMappingFunctionSchemaItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/functions/{attributeMappingFunctionSchema%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete entity from functions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AttributeMappingFunctionSchemaItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get entity from functions by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AttributeMappingFunctionSchema
     */
    public get(requestConfiguration?: AttributeMappingFunctionSchemaItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AttributeMappingFunctionSchema | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AttributeMappingFunctionSchema>(requestInfo, createAttributeMappingFunctionSchemaFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update entity in functions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AttributeMappingFunctionSchema
     */
    public patch(body: AttributeMappingFunctionSchema | undefined, requestConfiguration?: AttributeMappingFunctionSchemaItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AttributeMappingFunctionSchema | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AttributeMappingFunctionSchema>(requestInfo, createAttributeMappingFunctionSchemaFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete entity from functions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AttributeMappingFunctionSchemaItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get entity from functions by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AttributeMappingFunctionSchemaItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update entity in functions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AttributeMappingFunctionSchema | undefined, requestConfiguration?: AttributeMappingFunctionSchemaItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAttributeMappingFunctionSchema);
        return requestInfo;
    };
}
