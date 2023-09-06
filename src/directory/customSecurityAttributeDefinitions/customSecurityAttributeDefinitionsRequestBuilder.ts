import { type CustomSecurityAttributeDefinitionCollectionResponse } from '../../models/';
import { createCustomSecurityAttributeDefinitionCollectionResponseFromDiscriminatorValue } from '../../models/createCustomSecurityAttributeDefinitionCollectionResponseFromDiscriminatorValue';
import { createCustomSecurityAttributeDefinitionFromDiscriminatorValue } from '../../models/createCustomSecurityAttributeDefinitionFromDiscriminatorValue';
import { type CustomSecurityAttributeDefinition } from '../../models/customSecurityAttributeDefinition';
import { deserializeIntoCustomSecurityAttributeDefinition } from '../../models/deserializeIntoCustomSecurityAttributeDefinition';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeCustomSecurityAttributeDefinition } from '../../models/serializeCustomSecurityAttributeDefinition';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { type CustomSecurityAttributeDefinitionsRequestBuilderGetRequestConfiguration } from './customSecurityAttributeDefinitionsRequestBuilderGetRequestConfiguration';
import { type CustomSecurityAttributeDefinitionsRequestBuilderPostRequestConfiguration } from './customSecurityAttributeDefinitionsRequestBuilderPostRequestConfiguration';
import { CustomSecurityAttributeDefinitionItemRequestBuilder } from './item/customSecurityAttributeDefinitionItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the customSecurityAttributeDefinitions property of the microsoft.graph.directory entity.
 */
export class CustomSecurityAttributeDefinitionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the customSecurityAttributeDefinitions property of the microsoft.graph.directory entity.
     * @param customSecurityAttributeDefinitionId The unique identifier of customSecurityAttributeDefinition
     * @returns a CustomSecurityAttributeDefinitionItemRequestBuilder
     */
    public byCustomSecurityAttributeDefinitionId(customSecurityAttributeDefinitionId: string) : CustomSecurityAttributeDefinitionItemRequestBuilder {
        if(!customSecurityAttributeDefinitionId) throw new Error("customSecurityAttributeDefinitionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["customSecurityAttributeDefinition%2Did"] = customSecurityAttributeDefinitionId
        return new CustomSecurityAttributeDefinitionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CustomSecurityAttributeDefinitionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/directory/customSecurityAttributeDefinitions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the customSecurityAttributeDefinition objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CustomSecurityAttributeDefinitionCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/directory-list-customsecurityattributedefinitions?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: CustomSecurityAttributeDefinitionsRequestBuilderGetRequestConfiguration | undefined) : Promise<CustomSecurityAttributeDefinitionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CustomSecurityAttributeDefinitionCollectionResponse>(requestInfo, createCustomSecurityAttributeDefinitionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new customSecurityAttributeDefinition object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CustomSecurityAttributeDefinition
     * @see {@link https://learn.microsoft.com/graph/api/directory-post-customsecurityattributedefinitions?view=graph-rest-1.0|Find more info here}
     */
    public post(body: CustomSecurityAttributeDefinition, requestConfiguration?: CustomSecurityAttributeDefinitionsRequestBuilderPostRequestConfiguration | undefined) : Promise<CustomSecurityAttributeDefinition | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CustomSecurityAttributeDefinition>(requestInfo, createCustomSecurityAttributeDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the customSecurityAttributeDefinition objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CustomSecurityAttributeDefinitionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new customSecurityAttributeDefinition object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CustomSecurityAttributeDefinition, requestConfiguration?: CustomSecurityAttributeDefinitionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCustomSecurityAttributeDefinition);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a customSecurityAttributeDefinitionsRequestBuilder
     */
    public withUrl(rawUrl: string) : CustomSecurityAttributeDefinitionsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new CustomSecurityAttributeDefinitionsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
