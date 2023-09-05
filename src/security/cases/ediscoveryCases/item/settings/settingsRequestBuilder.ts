import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { createEdiscoveryCaseSettingsFromDiscriminatorValue } from '../../../../../models/security/createEdiscoveryCaseSettingsFromDiscriminatorValue';
import { deserializeIntoEdiscoveryCaseSettings } from '../../../../../models/security/deserializeIntoEdiscoveryCaseSettings';
import { type EdiscoveryCaseSettings } from '../../../../../models/security/ediscoveryCaseSettings';
import { serializeEdiscoveryCaseSettings } from '../../../../../models/security/serializeEdiscoveryCaseSettings';
import { MicrosoftGraphSecurityResetToDefaultRequestBuilder } from './microsoftGraphSecurityResetToDefault/microsoftGraphSecurityResetToDefaultRequestBuilder';
import { type SettingsRequestBuilderDeleteRequestConfiguration } from './settingsRequestBuilderDeleteRequestConfiguration';
import { type SettingsRequestBuilderGetRequestConfiguration } from './settingsRequestBuilderGetRequestConfiguration';
import { type SettingsRequestBuilderPatchRequestConfiguration } from './settingsRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the settings property of the microsoft.graph.security.ediscoveryCase entity.
 */
export class SettingsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the resetToDefault method.
     */
    public get microsoftGraphSecurityResetToDefault(): MicrosoftGraphSecurityResetToDefaultRequestBuilder {
        return new MicrosoftGraphSecurityResetToDefaultRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new SettingsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/settings{?%24select,%24expand}");
    };
    /**
     * Delete navigation property settings for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: SettingsRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of an ediscoveryCaseSettings object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryCaseSettings
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycasesettings-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SettingsRequestBuilderGetRequestConfiguration | undefined) : Promise<EdiscoveryCaseSettings | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryCaseSettings>(requestInfo, createEdiscoveryCaseSettingsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of an ediscoveryCaseSettings object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryCaseSettings
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycasesettings-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: EdiscoveryCaseSettings, requestConfiguration?: SettingsRequestBuilderPatchRequestConfiguration | undefined) : Promise<EdiscoveryCaseSettings | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryCaseSettings>(requestInfo, createEdiscoveryCaseSettingsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property settings for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: SettingsRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of an ediscoveryCaseSettings object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SettingsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of an ediscoveryCaseSettings object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EdiscoveryCaseSettings, requestConfiguration?: SettingsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEdiscoveryCaseSettings);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a settingsRequestBuilder
     */
    public withUrl(rawUrl: string) : SettingsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SettingsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
