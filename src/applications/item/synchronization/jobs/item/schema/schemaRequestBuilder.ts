import {createSynchronizationSchemaFromDiscriminatorValue} from '../../../../../../models/createSynchronizationSchemaFromDiscriminatorValue';
import {deserializeIntoSynchronizationSchema} from '../../../../../../models/deserializeIntoSynchronizationSchema';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeSynchronizationSchema} from '../../../../../../models/serializeSynchronizationSchema';
import type {SynchronizationSchema} from '../../../../../../models/synchronizationSchema';
import {DirectoriesRequestBuilder} from './directories/directoriesRequestBuilder';
import {FilterOperatorsRequestBuilder} from './filterOperators/filterOperatorsRequestBuilder';
import {FunctionsRequestBuilder} from './functions/functionsRequestBuilder';
import {ParseExpressionRequestBuilder} from './parseExpression/parseExpressionRequestBuilder';
import {SchemaRequestBuilderDeleteRequestConfiguration} from './schemaRequestBuilderDeleteRequestConfiguration';
import {SchemaRequestBuilderGetRequestConfiguration} from './schemaRequestBuilderGetRequestConfiguration';
import {SchemaRequestBuilderPatchRequestConfiguration} from './schemaRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the schema property of the microsoft.graph.synchronizationJob entity.
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
        super(pathParameters, requestAdapter, "{+baseurl}/applications/{application%2Did}/synchronization/jobs/{synchronizationJob%2Did}/schema{?%24select,%24expand}");
    };
    /**
     * Delete navigation property schema for applications
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
     * Retrieve the schema for a given synchronization job or template.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SynchronizationSchema
     * @see {@link https://learn.microsoft.com/graph/api/synchronization-synchronizationschema-get?view=graph-rest-1.0|Find more info here}
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
     * Update the synchronization schema for a given job or template. This method fully replaces the current schema with the one provided in the request. To update the schema of a template, make the call on the application object. You must be the owner of the application.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SynchronizationSchema
     * @see {@link https://learn.microsoft.com/graph/api/synchronization-synchronizationschema-update?view=graph-rest-1.0|Find more info here}
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
     * Delete navigation property schema for applications
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
     * Retrieve the schema for a given synchronization job or template.
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
     * Update the synchronization schema for a given job or template. This method fully replaces the current schema with the one provided in the request. To update the schema of a template, make the call on the application object. You must be the owner of the application.
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
}
