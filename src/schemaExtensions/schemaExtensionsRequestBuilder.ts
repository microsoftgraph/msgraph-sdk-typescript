import {SchemaExtensionCollectionResponse} from '../models/';
import {createSchemaExtensionCollectionResponseFromDiscriminatorValue} from '../models/createSchemaExtensionCollectionResponseFromDiscriminatorValue';
import {createSchemaExtensionFromDiscriminatorValue} from '../models/createSchemaExtensionFromDiscriminatorValue';
import {deserializeIntoSchemaExtension} from '../models/deserializeIntoSchemaExtension';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {SchemaExtension} from '../models/schemaExtension';
import {serializeSchemaExtension} from '../models/serializeSchemaExtension';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SchemaExtensionItemRequestBuilder} from './item/schemaExtensionItemRequestBuilder';
import {SchemaExtensionsRequestBuilderGetRequestConfiguration} from './schemaExtensionsRequestBuilderGetRequestConfiguration';
import {SchemaExtensionsRequestBuilderPostRequestConfiguration} from './schemaExtensionsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of schemaExtension entities.
 */
export class SchemaExtensionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of schemaExtension entities.
     * @param schemaExtensionId Unique identifier of the item
     * @returns a SchemaExtensionItemRequestBuilder
     */
    public bySchemaExtensionId(schemaExtensionId: string) : SchemaExtensionItemRequestBuilder {
        if(!schemaExtensionId) throw new Error("schemaExtensionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["schemaExtension%2Did"] = schemaExtensionId
        return new SchemaExtensionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SchemaExtensionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/schemaExtensions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of schemaExtension objects in your tenant. The schema extensions can be `InDevelopment`, `Available`, or `Deprecated` and includes schema extensions:+ Created by any apps you own in the current tenant.+ Owned by other apps that are marked as `Available`.+ Created by other developers from other tenants and marked as `Available`. This is different from other APIs that only return tenant-specific data. Extension data created based on schema extension definitions is tenant-specific and can only be accessed by apps explicitly granted permission. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SchemaExtensionCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/schemaextension-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SchemaExtensionsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SchemaExtensionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<SchemaExtensionCollectionResponse>(requestInfo, createSchemaExtensionCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new schemaExtension definition and its associated schema extension property to extend a supporting resource type. Schema extensions let you add strongly-typed custom data to a resource. The app that creates a schema extension is the owner app. Depending on the state of the extension, the owner app, and only the owner app, may update or delete the extension.  See examples of how to define a schema extension that describes a training course, use the schema extension definition to create a new group with training course data, and add training course data to an existing group.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SchemaExtension
     * @see {@link https://docs.microsoft.com/graph/api/schemaextension-post-schemaextensions?view=graph-rest-1.0|Find more info here}
     */
    public post(body: SchemaExtension | undefined, requestConfiguration?: SchemaExtensionsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SchemaExtension | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<SchemaExtension>(requestInfo, createSchemaExtensionFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get a list of schemaExtension objects in your tenant. The schema extensions can be `InDevelopment`, `Available`, or `Deprecated` and includes schema extensions:+ Created by any apps you own in the current tenant.+ Owned by other apps that are marked as `Available`.+ Created by other developers from other tenants and marked as `Available`. This is different from other APIs that only return tenant-specific data. Extension data created based on schema extension definitions is tenant-specific and can only be accessed by apps explicitly granted permission. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SchemaExtensionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new schemaExtension definition and its associated schema extension property to extend a supporting resource type. Schema extensions let you add strongly-typed custom data to a resource. The app that creates a schema extension is the owner app. Depending on the state of the extension, the owner app, and only the owner app, may update or delete the extension.  See examples of how to define a schema extension that describes a training course, use the schema extension definition to create a new group with training course data, and add training course data to an existing group.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SchemaExtension | undefined, requestConfiguration?: SchemaExtensionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSchemaExtension);
        return requestInfo;
    };
}
