import { createOnPremisesConditionalAccessSettingsFromDiscriminatorValue } from '../../models/createOnPremisesConditionalAccessSettingsFromDiscriminatorValue';
import { deserializeIntoOnPremisesConditionalAccessSettings } from '../../models/deserializeIntoOnPremisesConditionalAccessSettings';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { type OnPremisesConditionalAccessSettings } from '../../models/onPremisesConditionalAccessSettings';
import { serializeOnPremisesConditionalAccessSettings } from '../../models/serializeOnPremisesConditionalAccessSettings';
import { type ConditionalAccessSettingsRequestBuilderDeleteRequestConfiguration } from './conditionalAccessSettingsRequestBuilderDeleteRequestConfiguration';
import { type ConditionalAccessSettingsRequestBuilderGetRequestConfiguration } from './conditionalAccessSettingsRequestBuilderGetRequestConfiguration';
import { type ConditionalAccessSettingsRequestBuilderPatchRequestConfiguration } from './conditionalAccessSettingsRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the conditionalAccessSettings property of the microsoft.graph.deviceManagement entity.
 */
export class ConditionalAccessSettingsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ConditionalAccessSettingsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/conditionalAccessSettings{?%24select,%24expand}");
    };
    /**
     * Delete navigation property conditionalAccessSettings for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ConditionalAccessSettingsRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the onPremisesConditionalAccessSettings object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnPremisesConditionalAccessSettings
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-onpremisesconditionalaccesssettings-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ConditionalAccessSettingsRequestBuilderGetRequestConfiguration | undefined) : Promise<OnPremisesConditionalAccessSettings | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnPremisesConditionalAccessSettings>(requestInfo, createOnPremisesConditionalAccessSettingsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a onPremisesConditionalAccessSettings object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnPremisesConditionalAccessSettings
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-onpremisesconditionalaccesssettings-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: OnPremisesConditionalAccessSettings, requestConfiguration?: ConditionalAccessSettingsRequestBuilderPatchRequestConfiguration | undefined) : Promise<OnPremisesConditionalAccessSettings | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnPremisesConditionalAccessSettings>(requestInfo, createOnPremisesConditionalAccessSettingsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property conditionalAccessSettings for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ConditionalAccessSettingsRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the onPremisesConditionalAccessSettings object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ConditionalAccessSettingsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a onPremisesConditionalAccessSettings object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: OnPremisesConditionalAccessSettings, requestConfiguration?: ConditionalAccessSettingsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeOnPremisesConditionalAccessSettings);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a conditionalAccessSettingsRequestBuilder
     */
    public withUrl(rawUrl: string) : ConditionalAccessSettingsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ConditionalAccessSettingsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
