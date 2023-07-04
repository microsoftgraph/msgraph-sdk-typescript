import {createExtensionPropertyFromDiscriminatorValue} from '../../../../models/createExtensionPropertyFromDiscriminatorValue';
import {deserializeIntoExtensionProperty} from '../../../../models/deserializeIntoExtensionProperty';
import {ExtensionProperty} from '../../../../models/extensionProperty';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeExtensionProperty} from '../../../../models/serializeExtensionProperty';
import {ExtensionPropertyItemRequestBuilderDeleteRequestConfiguration} from './extensionPropertyItemRequestBuilderDeleteRequestConfiguration';
import {ExtensionPropertyItemRequestBuilderGetRequestConfiguration} from './extensionPropertyItemRequestBuilderGetRequestConfiguration';
import {ExtensionPropertyItemRequestBuilderPatchRequestConfiguration} from './extensionPropertyItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the extensionProperties property of the microsoft.graph.application entity.
 */
export class ExtensionPropertyItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ExtensionPropertyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/applications/{application%2Did}/extensionProperties/{extensionProperty%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a directory extension definition represented by an extensionProperty object. You can delete only directory extensions that aren't synced from on-premises active directory (AD).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/extensionproperty-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: ExtensionPropertyItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read a directory extension definition represented by an extensionProperty object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ExtensionProperty
     * @see {@link https://docs.microsoft.com/graph/api/extensionproperty-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ExtensionPropertyItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ExtensionProperty | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ExtensionProperty>(requestInfo, createExtensionPropertyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property extensionProperties in applications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ExtensionProperty
     */
    public patch(body: ExtensionProperty | undefined, requestConfiguration?: ExtensionPropertyItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ExtensionProperty | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ExtensionProperty>(requestInfo, createExtensionPropertyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a directory extension definition represented by an extensionProperty object. You can delete only directory extensions that aren't synced from on-premises active directory (AD).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ExtensionPropertyItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read a directory extension definition represented by an extensionProperty object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ExtensionPropertyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property extensionProperties in applications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ExtensionProperty | undefined, requestConfiguration?: ExtensionPropertyItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeExtensionProperty);
        return requestInfo;
    };
}
