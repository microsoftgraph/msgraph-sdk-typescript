import {WindowsInformationProtectionNetworkLearningSummaryCollectionResponse} from '../../models/';
import {createWindowsInformationProtectionNetworkLearningSummaryCollectionResponseFromDiscriminatorValue} from '../../models/createWindowsInformationProtectionNetworkLearningSummaryCollectionResponseFromDiscriminatorValue';
import {createWindowsInformationProtectionNetworkLearningSummaryFromDiscriminatorValue} from '../../models/createWindowsInformationProtectionNetworkLearningSummaryFromDiscriminatorValue';
import {deserializeIntoWindowsInformationProtectionNetworkLearningSummary} from '../../models/deserializeIntoWindowsInformationProtectionNetworkLearningSummary';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeWindowsInformationProtectionNetworkLearningSummary} from '../../models/serializeWindowsInformationProtectionNetworkLearningSummary';
import type {WindowsInformationProtectionNetworkLearningSummary} from '../../models/windowsInformationProtectionNetworkLearningSummary';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilder} from './item/windowsInformationProtectionNetworkLearningSummaryItemRequestBuilder';
import {WindowsInformationProtectionNetworkLearningSummariesRequestBuilderGetRequestConfiguration} from './windowsInformationProtectionNetworkLearningSummariesRequestBuilderGetRequestConfiguration';
import {WindowsInformationProtectionNetworkLearningSummariesRequestBuilderPostRequestConfiguration} from './windowsInformationProtectionNetworkLearningSummariesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the windowsInformationProtectionNetworkLearningSummaries property of the microsoft.graph.deviceManagement entity.
 */
export class WindowsInformationProtectionNetworkLearningSummariesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the windowsInformationProtectionNetworkLearningSummaries property of the microsoft.graph.deviceManagement entity.
     * @param windowsInformationProtectionNetworkLearningSummaryId Unique identifier of the item
     * @returns a WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilder
     */
    public byWindowsInformationProtectionNetworkLearningSummaryId(windowsInformationProtectionNetworkLearningSummaryId: string) : WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilder {
        if(!windowsInformationProtectionNetworkLearningSummaryId) throw new Error("windowsInformationProtectionNetworkLearningSummaryId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsInformationProtectionNetworkLearningSummary%2Did"] = windowsInformationProtectionNetworkLearningSummaryId
        return new WindowsInformationProtectionNetworkLearningSummaryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new WindowsInformationProtectionNetworkLearningSummariesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/windowsInformationProtectionNetworkLearningSummaries{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the windowsInformationProtectionNetworkLearningSummary objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionNetworkLearningSummaryCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-wip-windowsinformationprotectionnetworklearningsummary-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: WindowsInformationProtectionNetworkLearningSummariesRequestBuilderGetRequestConfiguration | undefined) : Promise<WindowsInformationProtectionNetworkLearningSummaryCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsInformationProtectionNetworkLearningSummaryCollectionResponse>(requestInfo, createWindowsInformationProtectionNetworkLearningSummaryCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new windowsInformationProtectionNetworkLearningSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionNetworkLearningSummary
     * @see {@link https://learn.microsoft.com/graph/api/intune-wip-windowsinformationprotectionnetworklearningsummary-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: WindowsInformationProtectionNetworkLearningSummary, requestConfiguration?: WindowsInformationProtectionNetworkLearningSummariesRequestBuilderPostRequestConfiguration | undefined) : Promise<WindowsInformationProtectionNetworkLearningSummary | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsInformationProtectionNetworkLearningSummary>(requestInfo, createWindowsInformationProtectionNetworkLearningSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the windowsInformationProtectionNetworkLearningSummary objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WindowsInformationProtectionNetworkLearningSummariesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new windowsInformationProtectionNetworkLearningSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WindowsInformationProtectionNetworkLearningSummary, requestConfiguration?: WindowsInformationProtectionNetworkLearningSummariesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWindowsInformationProtectionNetworkLearningSummary);
        return requestInfo;
    };
}
