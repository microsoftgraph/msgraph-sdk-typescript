import { createSynchronizationSchemaFromDiscriminatorValue } from '../../../../../../models/createSynchronizationSchemaFromDiscriminatorValue';
import { deserializeIntoSynchronizationSchema } from '../../../../../../models/deserializeIntoSynchronizationSchema';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { serializeSynchronizationSchema } from '../../../../../../models/serializeSynchronizationSchema';
import { type SynchronizationSchema } from '../../../../../../models/synchronizationSchema';
import { DirectoriesRequestBuilder } from './directories/directoriesRequestBuilder';
import { FilterOperatorsRequestBuilder } from './filterOperators/filterOperatorsRequestBuilder';
import { FunctionsRequestBuilder } from './functions/functionsRequestBuilder';
import { ParseExpressionRequestBuilder } from './parseExpression/parseExpressionRequestBuilder';
import { type SchemaRequestBuilderDeleteRequestConfiguration } from './schemaRequestBuilderDeleteRequestConfiguration';
import { type SchemaRequestBuilderGetRequestConfiguration } from './schemaRequestBuilderGetRequestConfiguration';
import { type SchemaRequestBuilderPatchRequestConfiguration } from './schemaRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the schema property of the microsoft.graph.synchronizationTemplate entity.
 */
export class SchemaRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the directories property of the microsoft.graph.synchronizationSchema entity.
     */
    public get directories(): DirectoriesRequestBuilder {
        return new DirectoriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the filterOperators method.
     */
    public get filterOperators(): FilterOperatorsRequestBuilder {
        return new FilterOperatorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the functions method.
     */
    public get functions(): FunctionsRequestBuilder {
        return new FunctionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the parseExpression method.
     */
    public get parseExpression(): ParseExpressionRequestBuilder {
        return new ParseExpressionRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new SchemaRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/synchronization/templates/{synchronizationTemplate%2Did}/schema{?%24select,%24expand}");
    };
    /**
     * Delete navigation property schema for servicePrincipals
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: SchemaRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Default synchronization schema for the jobs based on this template.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SynchronizationSchema
     */
    public get(requestConfiguration?: SchemaRequestBuilderGetRequestConfiguration | undefined) : Promise<SynchronizationSchema | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SynchronizationSchema>(requestInfo, createSynchronizationSchemaFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property schema in servicePrincipals
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SynchronizationSchema
     */
    public patch(body: SynchronizationSchema, requestConfiguration?: SchemaRequestBuilderPatchRequestConfiguration | undefined) : Promise<SynchronizationSchema | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SynchronizationSchema>(requestInfo, createSynchronizationSchemaFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property schema for servicePrincipals
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: SchemaRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Default synchronization schema for the jobs based on this template.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SchemaRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property schema in servicePrincipals
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: SynchronizationSchema, requestConfiguration?: SchemaRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSynchronizationSchema);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a schemaRequestBuilder
     */
    public withUrl(rawUrl: string) : SchemaRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SchemaRequestBuilder(rawUrl, this.requestAdapter);
    };
}
