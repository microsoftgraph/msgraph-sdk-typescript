import {ExtensionProperty, ExtensionPropertyCollectionResponse} from '../../../models/';
import {createExtensionPropertyCollectionResponseFromDiscriminatorValue} from '../../../models/createExtensionPropertyCollectionResponseFromDiscriminatorValue';
import {createExtensionPropertyFromDiscriminatorValue} from '../../../models/createExtensionPropertyFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ExtensionPropertiesRequestBuilderGetRequestConfiguration} from './extensionPropertiesRequestBuilderGetRequestConfiguration';
import {ExtensionPropertiesRequestBuilderPostRequestConfiguration} from './extensionPropertiesRequestBuilderPostRequestConfiguration';
import {ExtensionPropertyItemRequestBuilder} from './item/extensionPropertyItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the extensionProperties property of the microsoft.graph.application entity.
 */
export class ExtensionPropertiesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the extensionProperties property of the microsoft.graph.application entity.
     * @param extensionPropertyId Unique identifier of the item
     * @returns a ExtensionPropertyItemRequestBuilder
     */
    public byExtensionPropertyId(extensionPropertyId: string) : ExtensionPropertyItemRequestBuilder {
        if(!extensionPropertyId) throw new Error("extensionPropertyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["extensionProperty%2Did"] = extensionPropertyId
        return new ExtensionPropertyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ExtensionPropertiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/applications/{application%2Did}/extensionProperties{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ExtensionPropertyCollectionResponse
     */
    public get(requestConfiguration?: ExtensionPropertiesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ExtensionPropertyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ExtensionPropertyCollectionResponse>(requestInfo, createExtensionPropertyCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to extensionProperties for applications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ExtensionProperty
     */
    public post(body: ExtensionProperty | undefined, requestConfiguration?: ExtensionPropertiesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ExtensionProperty | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ExtensionProperty>(requestInfo, createExtensionPropertyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Read-only. Nullable. Supports $expand and $filter (/$count eq 0, /$count ne 0).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ExtensionPropertiesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to extensionProperties for applications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ExtensionProperty | undefined, requestConfiguration?: ExtensionPropertiesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
