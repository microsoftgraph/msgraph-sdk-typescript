import {createInferenceClassificationOverrideFromDiscriminatorValue} from '../../../../../models/createInferenceClassificationOverrideFromDiscriminatorValue';
import {deserializeIntoInferenceClassificationOverride} from '../../../../../models/deserializeIntoInferenceClassificationOverride';
import type {InferenceClassificationOverride} from '../../../../../models/inferenceClassificationOverride';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeInferenceClassificationOverride} from '../../../../../models/serializeInferenceClassificationOverride';
import {InferenceClassificationOverrideItemRequestBuilderDeleteRequestConfiguration} from './inferenceClassificationOverrideItemRequestBuilderDeleteRequestConfiguration';
import {InferenceClassificationOverrideItemRequestBuilderGetRequestConfiguration} from './inferenceClassificationOverrideItemRequestBuilderGetRequestConfiguration';
import {InferenceClassificationOverrideItemRequestBuilderPatchRequestConfiguration} from './inferenceClassificationOverrideItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the overrides property of the microsoft.graph.inferenceClassification entity.
 */
export class InferenceClassificationOverrideItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new InferenceClassificationOverrideItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/inferenceClassification/overrides/{inferenceClassificationOverride%2Did}{?%24select}");
    };
    /**
     * Delete an override specified by its ID.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/inferenceclassificationoverride-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: InferenceClassificationOverrideItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of InferenceClassificationOverride
     */
    public get(requestConfiguration?: InferenceClassificationOverrideItemRequestBuilderGetRequestConfiguration | undefined) : Promise<InferenceClassificationOverride | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<InferenceClassificationOverride>(requestInfo, createInferenceClassificationOverrideFromDiscriminatorValue, errorMapping);
    };
    /**
     * Change the classifyAs field of an override as specified. You cannot use PATCH to change any other fields in an inferenceClassificationOverride instance. If an override exists for a sender and the sender changes his/her display name, you can use POST to force an update to the name field in the existing override. If an override exists for a sender and the sender changes his/her SMTP address, deleting the existing override and creating a new one withthe new SMTP address is the only way to 'update' the override for this sender.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of InferenceClassificationOverride
     * @see {@link https://learn.microsoft.com/graph/api/inferenceclassificationoverride-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: InferenceClassificationOverride, requestConfiguration?: InferenceClassificationOverrideItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<InferenceClassificationOverride | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<InferenceClassificationOverride>(requestInfo, createInferenceClassificationOverrideFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete an override specified by its ID.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: InferenceClassificationOverrideItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: InferenceClassificationOverrideItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Change the classifyAs field of an override as specified. You cannot use PATCH to change any other fields in an inferenceClassificationOverride instance. If an override exists for a sender and the sender changes his/her display name, you can use POST to force an update to the name field in the existing override. If an override exists for a sender and the sender changes his/her SMTP address, deleting the existing override and creating a new one withthe new SMTP address is the only way to 'update' the override for this sender.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: InferenceClassificationOverride, requestConfiguration?: InferenceClassificationOverrideItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeInferenceClassificationOverride);
        return requestInfo;
    };
}
