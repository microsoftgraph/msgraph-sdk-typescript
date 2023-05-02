import {InferenceClassificationOverrideCollectionResponse} from '../../../../models/';
import {createInferenceClassificationOverrideCollectionResponseFromDiscriminatorValue} from '../../../../models/createInferenceClassificationOverrideCollectionResponseFromDiscriminatorValue';
import {createInferenceClassificationOverrideFromDiscriminatorValue} from '../../../../models/createInferenceClassificationOverrideFromDiscriminatorValue';
import {deserializeIntoInferenceClassificationOverride} from '../../../../models/deserializeIntoInferenceClassificationOverride';
import {InferenceClassificationOverride} from '../../../../models/inferenceClassificationOverride';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeInferenceClassificationOverride} from '../../../../models/serializeInferenceClassificationOverride';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {InferenceClassificationOverrideItemRequestBuilder} from './item/inferenceClassificationOverrideItemRequestBuilder';
import {OverridesRequestBuilderGetRequestConfiguration} from './overridesRequestBuilderGetRequestConfiguration';
import {OverridesRequestBuilderPostRequestConfiguration} from './overridesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the overrides property of the microsoft.graph.inferenceClassification entity.
 */
export class OverridesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the overrides property of the microsoft.graph.inferenceClassification entity.
     * @param inferenceClassificationOverrideId Unique identifier of the item
     * @returns a InferenceClassificationOverrideItemRequestBuilder
     */
    public byInferenceClassificationOverrideId(inferenceClassificationOverrideId: string) : InferenceClassificationOverrideItemRequestBuilder {
        if(!inferenceClassificationOverrideId) throw new Error("inferenceClassificationOverrideId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["inferenceClassificationOverride%2Did"] = inferenceClassificationOverrideId
        return new InferenceClassificationOverrideItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new OverridesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/inferenceClassification/overrides{?%24top,%24skip,%24filter,%24count,%24orderby,%24select}");
    };
    /**
     * A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of InferenceClassificationOverrideCollectionResponse
     */
    public get(requestConfiguration?: OverridesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<InferenceClassificationOverrideCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<InferenceClassificationOverrideCollectionResponse>(requestInfo, createInferenceClassificationOverrideCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to overrides for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of InferenceClassificationOverride
     */
    public post(body: InferenceClassificationOverride | undefined, requestConfiguration?: OverridesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<InferenceClassificationOverride | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<InferenceClassificationOverride>(requestInfo, createInferenceClassificationOverrideFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: OverridesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to overrides for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: InferenceClassificationOverride | undefined, requestConfiguration?: OverridesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeInferenceClassificationOverride);
        return requestInfo;
    };
}
