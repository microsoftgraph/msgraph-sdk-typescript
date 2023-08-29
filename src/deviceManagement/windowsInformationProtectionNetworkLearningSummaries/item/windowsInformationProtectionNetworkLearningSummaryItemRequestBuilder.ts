import {createWindowsInformationProtectionNetworkLearningSummaryFromDiscriminatorValue} from '../../../models/createWindowsInformationProtectionNetworkLearningSummaryFromDiscriminatorValue';
import {deserializeIntoWindowsInformationProtectionNetworkLearningSummary} from '../../../models/deserializeIntoWindowsInformationProtectionNetworkLearningSummary';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeWindowsInformationProtectionNetworkLearningSummary} from '../../../models/serializeWindowsInformationProtectionNetworkLearningSummary';
import type {WindowsInformationProtectionNetworkLearningSummary} from '../../../models/windowsInformationProtectionNetworkLearningSummary';
import {WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilderDeleteRequestConfiguration} from './windowsInformationProtectionNetworkLearningSummaryItemRequestBuilderDeleteRequestConfiguration';
import {WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilderGetRequestConfiguration} from './windowsInformationProtectionNetworkLearningSummaryItemRequestBuilderGetRequestConfiguration';
import {WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilderPatchRequestConfiguration} from './windowsInformationProtectionNetworkLearningSummaryItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the windowsInformationProtectionNetworkLearningSummaries property of the microsoft.graph.deviceManagement entity.
 */
export class WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/windowsInformationProtectionNetworkLearningSummaries/{windowsInformationProtectionNetworkLearningSummary%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a windowsInformationProtectionNetworkLearningSummary.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-wip-windowsinformationprotectionnetworklearningsummary-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the windowsInformationProtectionNetworkLearningSummary object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionNetworkLearningSummary
     * @see {@link https://learn.microsoft.com/graph/api/intune-wip-windowsinformationprotectionnetworklearningsummary-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilderGetRequestConfiguration | undefined) : Promise<WindowsInformationProtectionNetworkLearningSummary | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsInformationProtectionNetworkLearningSummary>(requestInfo, createWindowsInformationProtectionNetworkLearningSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a windowsInformationProtectionNetworkLearningSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionNetworkLearningSummary
     * @see {@link https://learn.microsoft.com/graph/api/intune-wip-windowsinformationprotectionnetworklearningsummary-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: WindowsInformationProtectionNetworkLearningSummary, requestConfiguration?: WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<WindowsInformationProtectionNetworkLearningSummary | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsInformationProtectionNetworkLearningSummary>(requestInfo, createWindowsInformationProtectionNetworkLearningSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a windowsInformationProtectionNetworkLearningSummary.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the windowsInformationProtectionNetworkLearningSummary object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a windowsInformationProtectionNetworkLearningSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: WindowsInformationProtectionNetworkLearningSummary, requestConfiguration?: WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWindowsInformationProtectionNetworkLearningSummary);
        return requestInfo;
    };
}
