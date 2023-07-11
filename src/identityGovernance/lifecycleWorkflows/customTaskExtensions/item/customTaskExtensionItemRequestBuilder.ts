import {createCustomTaskExtensionFromDiscriminatorValue} from '../../../../models/identityGovernance/createCustomTaskExtensionFromDiscriminatorValue';
import {CustomTaskExtension} from '../../../../models/identityGovernance/customTaskExtension';
import {deserializeIntoCustomTaskExtension} from '../../../../models/identityGovernance/deserializeIntoCustomTaskExtension';
import {serializeCustomTaskExtension} from '../../../../models/identityGovernance/serializeCustomTaskExtension';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {CreatedByRequestBuilder} from './createdBy/createdByRequestBuilder';
import {CustomTaskExtensionItemRequestBuilderDeleteRequestConfiguration} from './customTaskExtensionItemRequestBuilderDeleteRequestConfiguration';
import {CustomTaskExtensionItemRequestBuilderGetRequestConfiguration} from './customTaskExtensionItemRequestBuilderGetRequestConfiguration';
import {CustomTaskExtensionItemRequestBuilderPatchRequestConfiguration} from './customTaskExtensionItemRequestBuilderPatchRequestConfiguration';
import {LastModifiedByRequestBuilder} from './lastModifiedBy/lastModifiedByRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the customTaskExtensions property of the microsoft.graph.identityGovernance.lifecycleWorkflowsContainer entity.
 */
export class CustomTaskExtensionItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the createdBy property of the microsoft.graph.identityGovernance.customTaskExtension entity.
     */
    public get createdBy(): CreatedByRequestBuilder {
        return new CreatedByRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the lastModifiedBy property of the microsoft.graph.identityGovernance.customTaskExtension entity.
     */
    public get lastModifiedBy(): LastModifiedByRequestBuilder {
        return new LastModifiedByRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new CustomTaskExtensionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/lifecycleWorkflows/customTaskExtensions/{customTaskExtension%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a customTaskExtension object. A custom task extension  can only be deleted if it is not referenced in any task objects in a lifecycle workflow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/identitygovernance-customtaskextension-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: CustomTaskExtensionItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a customTaskExtension object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CustomTaskExtension
     * @see {@link https://docs.microsoft.com/graph/api/identitygovernance-customtaskextension-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: CustomTaskExtensionItemRequestBuilderGetRequestConfiguration | undefined) : Promise<CustomTaskExtension | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CustomTaskExtension>(requestInfo, createCustomTaskExtensionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a customTaskExtension object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CustomTaskExtension
     * @see {@link https://docs.microsoft.com/graph/api/identitygovernance-customtaskextension-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: CustomTaskExtension | undefined, requestConfiguration?: CustomTaskExtensionItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<CustomTaskExtension | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<CustomTaskExtension>(requestInfo, createCustomTaskExtensionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a customTaskExtension object. A custom task extension  can only be deleted if it is not referenced in any task objects in a lifecycle workflow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: CustomTaskExtensionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a customTaskExtension object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: CustomTaskExtensionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a customTaskExtension object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: CustomTaskExtension | undefined, requestConfiguration?: CustomTaskExtensionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeCustomTaskExtension);
        return requestInfo;
    };
}
