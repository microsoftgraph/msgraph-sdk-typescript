import {SchemaExtension} from '../../models/';
import {createSchemaExtensionFromDiscriminatorValue} from '../../models/createSchemaExtensionFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {SchemaExtensionItemRequestBuilderDeleteRequestConfiguration} from './schemaExtensionItemRequestBuilderDeleteRequestConfiguration';
import {SchemaExtensionItemRequestBuilderGetRequestConfiguration} from './schemaExtensionItemRequestBuilderGetRequestConfiguration';
import {SchemaExtensionItemRequestBuilderPatchRequestConfiguration} from './schemaExtensionItemRequestBuilderPatchRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of schemaExtension entities.
 */
export class SchemaExtensionItemRequestBuilder {
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new SchemaExtensionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param schemaExtensionId key: id of schemaExtension
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, schemaExtensionId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/schemaExtensions/{schemaExtension%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["schemaExtension%2Did"] = schemaExtensionId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete the definition of a schema extension. Only the app that created the schema extension (owner app) can delete the schema extension definition, and only when the extension is in the `InDevelopment` state. Deleting a schema extension definition does not affect accessing custom data that has been added to resource instances based on that definition.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @see {@link https://docs.microsoft.com/graph/api/schemaextension-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: SchemaExtensionItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Get schemaExtension
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SchemaExtension
     * @see {@link https://docs.microsoft.com/graph/api/schemaextension-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SchemaExtensionItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SchemaExtension | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<SchemaExtension>(requestInfo, createSchemaExtensionFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update properties in the definition of the specified schemaExtension. Additive updates to the extension can only be made when the extension is in the `InDevelopment` or `Available` status. This means custom properties or target resource types cannot be removed from the definition, but new custom properties can be added and the description of the extension changed. The update applies to all the resources that are included in the **targetTypes** property of the extension. These resources are among the supporting resource types. For delegated flows, the signed-in user can update a schema extension as long as the **owner** property of the extension is set to the **appId** of an application the signed-in user owns. That application can be the one that initially created the extension, or some other application owned by the signed-in user.  This criteria for the **owner** property allows a signed-in user to make updates through other applications they don't own, such as Microsoft Graph Explorer. When using Graph Explorer to update a **schemaExtension** resource, include the **owner** property in the PATCH request body. For more information, see the Extensions section in Known issues with Microsoft Graph.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SchemaExtension
     * @see {@link https://docs.microsoft.com/graph/api/schemaextension-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: SchemaExtension | undefined, requestConfiguration?: SchemaExtensionItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SchemaExtension | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<SchemaExtension>(requestInfo, createSchemaExtensionFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete the definition of a schema extension. Only the app that created the schema extension (owner app) can delete the schema extension definition, and only when the extension is in the `InDevelopment` state. Deleting a schema extension definition does not affect accessing custom data that has been added to resource instances based on that definition.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: SchemaExtensionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get schemaExtension
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SchemaExtensionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update properties in the definition of the specified schemaExtension. Additive updates to the extension can only be made when the extension is in the `InDevelopment` or `Available` status. This means custom properties or target resource types cannot be removed from the definition, but new custom properties can be added and the description of the extension changed. The update applies to all the resources that are included in the **targetTypes** property of the extension. These resources are among the supporting resource types. For delegated flows, the signed-in user can update a schema extension as long as the **owner** property of the extension is set to the **appId** of an application the signed-in user owns. That application can be the one that initially created the extension, or some other application owned by the signed-in user.  This criteria for the **owner** property allows a signed-in user to make updates through other applications they don't own, such as Microsoft Graph Explorer. When using Graph Explorer to update a **schemaExtension** resource, include the **owner** property in the PATCH request body. For more information, see the Extensions section in Known issues with Microsoft Graph.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: SchemaExtension | undefined, requestConfiguration?: SchemaExtensionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
