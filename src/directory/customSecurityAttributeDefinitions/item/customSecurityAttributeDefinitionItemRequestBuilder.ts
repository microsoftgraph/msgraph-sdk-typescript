import {CustomSecurityAttributeDefinition} from '../../../models/';
import {createCustomSecurityAttributeDefinitionFromDiscriminatorValue} from '../../../models/createCustomSecurityAttributeDefinitionFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AllowedValuesRequestBuilder} from './allowedValues/allowedValuesRequestBuilder';
import {CustomSecurityAttributeDefinitionItemRequestBuilderDeleteRequestConfiguration} from './customSecurityAttributeDefinitionItemRequestBuilderDeleteRequestConfiguration';
import {CustomSecurityAttributeDefinitionItemRequestBuilderGetRequestConfiguration} from './customSecurityAttributeDefinitionItemRequestBuilderGetRequestConfiguration';
import {CustomSecurityAttributeDefinitionItemRequestBuilderPatchRequestConfiguration} from './customSecurityAttributeDefinitionItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the customSecurityAttributeDefinitions property of the microsoft.graph.directory entity.
 */
export class CustomSecurityAttributeDefinitionItemRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the allowedValues property of the microsoft.graph.customSecurityAttributeDefinition entity. */
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
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: CustomSecurityAttributeDefinitionItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get customSecurityAttributeDefinitions from directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CustomSecurityAttributeDefinition
     */
    public get(requestConfiguration?: CustomSecurityAttributeDefinitionItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CustomSecurityAttributeDefinition | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<CustomSecurityAttributeDefinition>(requestInfo, createCustomSecurityAttributeDefinitionFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property customSecurityAttributeDefinitions in directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CustomSecurityAttributeDefinition
     */
    public patch(body: CustomSecurityAttributeDefinition | undefined, requestConfiguration?: CustomSecurityAttributeDefinitionItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CustomSecurityAttributeDefinition | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<CustomSecurityAttributeDefinition>(requestInfo, createCustomSecurityAttributeDefinitionFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
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
     * Get customSecurityAttributeDefinitions from directory
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
     * Update the navigation property customSecurityAttributeDefinitions in directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: CustomSecurityAttributeDefinition | undefined, requestConfiguration?: CustomSecurityAttributeDefinitionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
