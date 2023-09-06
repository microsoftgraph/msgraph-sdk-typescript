import { createCustomSecurityAttributeDefinitionFromDiscriminatorValue } from '../../../models/createCustomSecurityAttributeDefinitionFromDiscriminatorValue';
import { type CustomSecurityAttributeDefinition } from '../../../models/customSecurityAttributeDefinition';
import { deserializeIntoCustomSecurityAttributeDefinition } from '../../../models/deserializeIntoCustomSecurityAttributeDefinition';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeCustomSecurityAttributeDefinition } from '../../../models/serializeCustomSecurityAttributeDefinition';
import { AllowedValuesRequestBuilder } from './allowedValues/allowedValuesRequestBuilder';
import { type CustomSecurityAttributeDefinitionItemRequestBuilderDeleteRequestConfiguration } from './customSecurityAttributeDefinitionItemRequestBuilderDeleteRequestConfiguration';
import { type CustomSecurityAttributeDefinitionItemRequestBuilderGetRequestConfiguration } from './customSecurityAttributeDefinitionItemRequestBuilderGetRequestConfiguration';
import { type CustomSecurityAttributeDefinitionItemRequestBuilderPatchRequestConfiguration } from './customSecurityAttributeDefinitionItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the customSecurityAttributeDefinitions property of the microsoft.graph.directory entity.
 */
export class CustomSecurityAttributeDefinitionItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the allowedValues property of the microsoft.graph.customSecurityAttributeDefinition entity.
     */
    public get allowedValues(): AllowedValuesRequestBuilder {
        return new AllowedValuesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new CustomSecurityAttributeDefinitionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/directory/customSecurityAttributeDefinitions/{customSecurityAttributeDefinition%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property customSecurityAttributeDefinitions for directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: CustomSecurityAttributeDefinitionItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a customSecurityAttributeDefinition object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CustomSecurityAttributeDefinition
     * @see {@link https://learn.microsoft.com/graph/api/customsecurityattributedefinition-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: CustomSecurityAttributeDefinitionItemRequestBuilderGetRequestConfiguration | undefined) : Promise<CustomSecurityAttributeDefinition | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CustomSecurityAttributeDefinition>(requestInfo, createCustomSecurityAttributeDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a customSecurityAttributeDefinition object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CustomSecurityAttributeDefinition
     * @see {@link https://learn.microsoft.com/graph/api/customsecurityattributedefinition-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: CustomSecurityAttributeDefinition, requestConfiguration?: CustomSecurityAttributeDefinitionItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<CustomSecurityAttributeDefinition | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CustomSecurityAttributeDefinition>(requestInfo, createCustomSecurityAttributeDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property customSecurityAttributeDefinitions for directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: CustomSecurityAttributeDefinitionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a customSecurityAttributeDefinition object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CustomSecurityAttributeDefinitionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a customSecurityAttributeDefinition object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: CustomSecurityAttributeDefinition, requestConfiguration?: CustomSecurityAttributeDefinitionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCustomSecurityAttributeDefinition);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a CustomSecurityAttributeDefinitionItemRequestBuilder
     */
    public withUrl(rawUrl: string) : CustomSecurityAttributeDefinitionItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CustomSecurityAttributeDefinitionItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
