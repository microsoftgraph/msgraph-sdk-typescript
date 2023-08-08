import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {createTriggerTypesRootFromDiscriminatorValue} from '../../models/security/createTriggerTypesRootFromDiscriminatorValue';
import {deserializeIntoTriggerTypesRoot} from '../../models/security/deserializeIntoTriggerTypesRoot';
import {serializeTriggerTypesRoot} from '../../models/security/serializeTriggerTypesRoot';
import type {TriggerTypesRoot} from '../../models/security/triggerTypesRoot';
import {RetentionEventTypesRequestBuilder} from './retentionEventTypes/retentionEventTypesRequestBuilder';
import {TriggerTypesRequestBuilderDeleteRequestConfiguration} from './triggerTypesRequestBuilderDeleteRequestConfiguration';
import {TriggerTypesRequestBuilderGetRequestConfiguration} from './triggerTypesRequestBuilderGetRequestConfiguration';
import {TriggerTypesRequestBuilderPatchRequestConfiguration} from './triggerTypesRequestBuilderPatchRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the triggerTypes property of the microsoft.graph.security entity.
 */
export class TriggerTypesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the retentionEventTypes property of the microsoft.graph.security.triggerTypesRoot entity.
     */
    public get retentionEventTypes(): RetentionEventTypesRequestBuilder {
        return new RetentionEventTypesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new TriggerTypesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/triggerTypes{?%24select,%24expand}");
    };
    /**
     * Delete navigation property triggerTypes for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: TriggerTypesRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get triggerTypes from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TriggerTypesRoot
     */
    public get(requestConfiguration?: TriggerTypesRequestBuilderGetRequestConfiguration | undefined) : Promise<TriggerTypesRoot | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TriggerTypesRoot>(requestInfo, createTriggerTypesRootFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property triggerTypes in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TriggerTypesRoot
     */
    public patch(body: TriggerTypesRoot, requestConfiguration?: TriggerTypesRequestBuilderPatchRequestConfiguration | undefined) : Promise<TriggerTypesRoot | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TriggerTypesRoot>(requestInfo, createTriggerTypesRootFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property triggerTypes for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: TriggerTypesRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get triggerTypes from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TriggerTypesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property triggerTypes in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: TriggerTypesRoot, requestConfiguration?: TriggerTypesRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTriggerTypesRoot);
        return requestInfo;
    };
}
