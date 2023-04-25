import {CustomSecurityAttributeDefinition, CustomSecurityAttributeDefinitionCollectionResponse} from '../../models/';
import {createCustomSecurityAttributeDefinitionCollectionResponseFromDiscriminatorValue} from '../../models/createCustomSecurityAttributeDefinitionCollectionResponseFromDiscriminatorValue';
import {createCustomSecurityAttributeDefinitionFromDiscriminatorValue} from '../../models/createCustomSecurityAttributeDefinitionFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CustomSecurityAttributeDefinitionsRequestBuilderGetRequestConfiguration} from './customSecurityAttributeDefinitionsRequestBuilderGetRequestConfiguration';
import {CustomSecurityAttributeDefinitionsRequestBuilderPostRequestConfiguration} from './customSecurityAttributeDefinitionsRequestBuilderPostRequestConfiguration';
import {CustomSecurityAttributeDefinitionItemRequestBuilder} from './item/customSecurityAttributeDefinitionItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the customSecurityAttributeDefinitions property of the microsoft.graph.directory entity.
 */
export class CustomSecurityAttributeDefinitionsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the customSecurityAttributeDefinitions property of the microsoft.graph.directory entity.
     * @param customSecurityAttributeDefinitionId Unique identifier of the item
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
     * Get customSecurityAttributeDefinitions from directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CustomSecurityAttributeDefinitionCollectionResponse
     */
    public get(requestConfiguration?: CustomSecurityAttributeDefinitionsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CustomSecurityAttributeDefinitionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<CustomSecurityAttributeDefinitionCollectionResponse>(requestInfo, createCustomSecurityAttributeDefinitionCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to customSecurityAttributeDefinitions for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CustomSecurityAttributeDefinition
     */
    public post(body: CustomSecurityAttributeDefinition | undefined, requestConfiguration?: CustomSecurityAttributeDefinitionsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CustomSecurityAttributeDefinition | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<CustomSecurityAttributeDefinition>(requestInfo, createCustomSecurityAttributeDefinitionFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get customSecurityAttributeDefinitions from directory
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
     * Create new navigation property to customSecurityAttributeDefinitions for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CustomSecurityAttributeDefinition | undefined, requestConfiguration?: CustomSecurityAttributeDefinitionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
