import {CustomCalloutExtensionCollectionResponse} from '../../../../../models/';
import {createCustomCalloutExtensionCollectionResponseFromDiscriminatorValue} from '../../../../../models/createCustomCalloutExtensionCollectionResponseFromDiscriminatorValue';
import {createCustomCalloutExtensionFromDiscriminatorValue} from '../../../../../models/createCustomCalloutExtensionFromDiscriminatorValue';
import type {CustomCalloutExtension} from '../../../../../models/customCalloutExtension';
import {deserializeIntoCustomCalloutExtension} from '../../../../../models/deserializeIntoCustomCalloutExtension';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeCustomCalloutExtension} from '../../../../../models/serializeCustomCalloutExtension';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CustomWorkflowExtensionsRequestBuilderGetRequestConfiguration} from './customWorkflowExtensionsRequestBuilderGetRequestConfiguration';
import {CustomWorkflowExtensionsRequestBuilderPostRequestConfiguration} from './customWorkflowExtensionsRequestBuilderPostRequestConfiguration';
import {CustomCalloutExtensionItemRequestBuilder} from './item/customCalloutExtensionItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the customWorkflowExtensions property of the microsoft.graph.accessPackageCatalog entity.
 */
export class CustomWorkflowExtensionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the customWorkflowExtensions property of the microsoft.graph.accessPackageCatalog entity.
     * @param customCalloutExtensionId Unique identifier of the item
     * @returns a CustomCalloutExtensionItemRequestBuilder
     */
    public byCustomCalloutExtensionId(customCalloutExtensionId: string) : CustomCalloutExtensionItemRequestBuilder {
        if(!customCalloutExtensionId) throw new Error("customCalloutExtensionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["customCalloutExtension%2Did"] = customCalloutExtensionId
        return new CustomCalloutExtensionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CustomWorkflowExtensionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog%2Did}/customWorkflowExtensions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get customWorkflowExtensions from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CustomCalloutExtensionCollectionResponse
     */
    public get(requestConfiguration?: CustomWorkflowExtensionsRequestBuilderGetRequestConfiguration | undefined) : Promise<CustomCalloutExtensionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CustomCalloutExtensionCollectionResponse>(requestInfo, createCustomCalloutExtensionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to customWorkflowExtensions for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CustomCalloutExtension
     */
    public post(body: CustomCalloutExtension | undefined, requestConfiguration?: CustomWorkflowExtensionsRequestBuilderPostRequestConfiguration | undefined) : Promise<CustomCalloutExtension | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CustomCalloutExtension>(requestInfo, createCustomCalloutExtensionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get customWorkflowExtensions from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CustomWorkflowExtensionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to customWorkflowExtensions for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CustomCalloutExtension | undefined, requestConfiguration?: CustomWorkflowExtensionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCustomCalloutExtension);
        return requestInfo;
    };
}
