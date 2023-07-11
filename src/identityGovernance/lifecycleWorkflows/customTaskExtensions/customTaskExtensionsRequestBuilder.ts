import {CustomTaskExtensionCollectionResponse} from '../../../models/identityGovernance/';
import {createCustomTaskExtensionCollectionResponseFromDiscriminatorValue} from '../../../models/identityGovernance/createCustomTaskExtensionCollectionResponseFromDiscriminatorValue';
import {createCustomTaskExtensionFromDiscriminatorValue} from '../../../models/identityGovernance/createCustomTaskExtensionFromDiscriminatorValue';
import {CustomTaskExtension} from '../../../models/identityGovernance/customTaskExtension';
import {deserializeIntoCustomTaskExtension} from '../../../models/identityGovernance/deserializeIntoCustomTaskExtension';
import {serializeCustomTaskExtension} from '../../../models/identityGovernance/serializeCustomTaskExtension';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {CustomTaskExtensionsRequestBuilderGetRequestConfiguration} from './customTaskExtensionsRequestBuilderGetRequestConfiguration';
import {CustomTaskExtensionsRequestBuilderPostRequestConfiguration} from './customTaskExtensionsRequestBuilderPostRequestConfiguration';
import {CustomTaskExtensionItemRequestBuilder} from './item/customTaskExtensionItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the customTaskExtensions property of the microsoft.graph.identityGovernance.lifecycleWorkflowsContainer entity.
 */
export class CustomTaskExtensionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the customTaskExtensions property of the microsoft.graph.identityGovernance.lifecycleWorkflowsContainer entity.
     * @param customTaskExtensionId Unique identifier of the item
     * @returns a CustomTaskExtensionItemRequestBuilder
     */
    public byCustomTaskExtensionId(customTaskExtensionId: string) : CustomTaskExtensionItemRequestBuilder {
        if(!customTaskExtensionId) throw new Error("customTaskExtensionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["customTaskExtension%2Did"] = customTaskExtensionId
        return new CustomTaskExtensionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new CustomTaskExtensionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/customTaskExtensions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the customTaskExtension objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CustomTaskExtensionCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/identitygovernance-lifecycleworkflowscontainer-list-customtaskextensions?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: CustomTaskExtensionsRequestBuilderGetRequestConfiguration | undefined) : Promise<CustomTaskExtensionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CustomTaskExtensionCollectionResponse>(requestInfo, createCustomTaskExtensionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new customTaskExtension object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CustomTaskExtension
     * @see {@link https://docs.microsoft.com/graph/api/identitygovernance-lifecycleworkflowscontainer-post-customtaskextensions?view=graph-rest-1.0|Find more info here}
     */
    public post(body: CustomTaskExtension | undefined, requestConfiguration?: CustomTaskExtensionsRequestBuilderPostRequestConfiguration | undefined) : Promise<CustomTaskExtension | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CustomTaskExtension>(requestInfo, createCustomTaskExtensionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the customTaskExtension objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CustomTaskExtensionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new customTaskExtension object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CustomTaskExtension | undefined, requestConfiguration?: CustomTaskExtensionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCustomTaskExtension);
        return requestInfo;
    };
}
