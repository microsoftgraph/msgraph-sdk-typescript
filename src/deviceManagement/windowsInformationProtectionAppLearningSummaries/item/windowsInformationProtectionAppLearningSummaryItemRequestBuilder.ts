import { createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue } from '../../../models/createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue';
import { deserializeIntoWindowsInformationProtectionAppLearningSummary } from '../../../models/deserializeIntoWindowsInformationProtectionAppLearningSummary';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeWindowsInformationProtectionAppLearningSummary } from '../../../models/serializeWindowsInformationProtectionAppLearningSummary';
import { type WindowsInformationProtectionAppLearningSummary } from '../../../models/windowsInformationProtectionAppLearningSummary';
import { type WindowsInformationProtectionAppLearningSummaryItemRequestBuilderDeleteRequestConfiguration } from './windowsInformationProtectionAppLearningSummaryItemRequestBuilderDeleteRequestConfiguration';
import { type WindowsInformationProtectionAppLearningSummaryItemRequestBuilderGetRequestConfiguration } from './windowsInformationProtectionAppLearningSummaryItemRequestBuilderGetRequestConfiguration';
import { type WindowsInformationProtectionAppLearningSummaryItemRequestBuilderPatchRequestConfiguration } from './windowsInformationProtectionAppLearningSummaryItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the windowsInformationProtectionAppLearningSummaries property of the microsoft.graph.deviceManagement entity.
 */
export class WindowsInformationProtectionAppLearningSummaryItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new WindowsInformationProtectionAppLearningSummaryItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/windowsInformationProtectionAppLearningSummaries/{windowsInformationProtectionAppLearningSummary%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a windowsInformationProtectionAppLearningSummary.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-wip-windowsinformationprotectionapplearningsummary-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: WindowsInformationProtectionAppLearningSummaryItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the windowsInformationProtectionAppLearningSummary object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionAppLearningSummary
     * @see {@link https://learn.microsoft.com/graph/api/intune-wip-windowsinformationprotectionapplearningsummary-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: WindowsInformationProtectionAppLearningSummaryItemRequestBuilderGetRequestConfiguration | undefined) : Promise<WindowsInformationProtectionAppLearningSummary | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsInformationProtectionAppLearningSummary>(requestInfo, createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a windowsInformationProtectionAppLearningSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionAppLearningSummary
     * @see {@link https://learn.microsoft.com/graph/api/intune-wip-windowsinformationprotectionapplearningsummary-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: WindowsInformationProtectionAppLearningSummary, requestConfiguration?: WindowsInformationProtectionAppLearningSummaryItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<WindowsInformationProtectionAppLearningSummary | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsInformationProtectionAppLearningSummary>(requestInfo, createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a windowsInformationProtectionAppLearningSummary.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: WindowsInformationProtectionAppLearningSummaryItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the windowsInformationProtectionAppLearningSummary object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WindowsInformationProtectionAppLearningSummaryItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a windowsInformationProtectionAppLearningSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WindowsInformationProtectionAppLearningSummary, requestConfiguration?: WindowsInformationProtectionAppLearningSummaryItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWindowsInformationProtectionAppLearningSummary);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a WindowsInformationProtectionAppLearningSummaryItemRequestBuilder
     */
    public withUrl(rawUrl: string) : WindowsInformationProtectionAppLearningSummaryItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new WindowsInformationProtectionAppLearningSummaryItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
