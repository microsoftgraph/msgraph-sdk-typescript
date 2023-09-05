import { type WindowsInformationProtectionAppLearningSummaryCollectionResponse } from '../../models/';
import { createWindowsInformationProtectionAppLearningSummaryCollectionResponseFromDiscriminatorValue } from '../../models/createWindowsInformationProtectionAppLearningSummaryCollectionResponseFromDiscriminatorValue';
import { createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue } from '../../models/createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue';
import { deserializeIntoWindowsInformationProtectionAppLearningSummary } from '../../models/deserializeIntoWindowsInformationProtectionAppLearningSummary';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeWindowsInformationProtectionAppLearningSummary } from '../../models/serializeWindowsInformationProtectionAppLearningSummary';
import { type WindowsInformationProtectionAppLearningSummary } from '../../models/windowsInformationProtectionAppLearningSummary';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { WindowsInformationProtectionAppLearningSummaryItemRequestBuilder } from './item/windowsInformationProtectionAppLearningSummaryItemRequestBuilder';
import { type WindowsInformationProtectionAppLearningSummariesRequestBuilderGetRequestConfiguration } from './windowsInformationProtectionAppLearningSummariesRequestBuilderGetRequestConfiguration';
import { type WindowsInformationProtectionAppLearningSummariesRequestBuilderPostRequestConfiguration } from './windowsInformationProtectionAppLearningSummariesRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the windowsInformationProtectionAppLearningSummaries property of the microsoft.graph.deviceManagement entity.
 */
export class WindowsInformationProtectionAppLearningSummariesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the windowsInformationProtectionAppLearningSummaries property of the microsoft.graph.deviceManagement entity.
     * @param windowsInformationProtectionAppLearningSummaryId The unique identifier of windowsInformationProtectionAppLearningSummary
     * @returns a WindowsInformationProtectionAppLearningSummaryItemRequestBuilder
     */
    public byWindowsInformationProtectionAppLearningSummaryId(windowsInformationProtectionAppLearningSummaryId: string) : WindowsInformationProtectionAppLearningSummaryItemRequestBuilder {
        if(!windowsInformationProtectionAppLearningSummaryId) throw new Error("windowsInformationProtectionAppLearningSummaryId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsInformationProtectionAppLearningSummary%2Did"] = windowsInformationProtectionAppLearningSummaryId
        return new WindowsInformationProtectionAppLearningSummaryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new WindowsInformationProtectionAppLearningSummariesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/windowsInformationProtectionAppLearningSummaries{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the windowsInformationProtectionAppLearningSummary objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionAppLearningSummaryCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-wip-windowsinformationprotectionapplearningsummary-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: WindowsInformationProtectionAppLearningSummariesRequestBuilderGetRequestConfiguration | undefined) : Promise<WindowsInformationProtectionAppLearningSummaryCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsInformationProtectionAppLearningSummaryCollectionResponse>(requestInfo, createWindowsInformationProtectionAppLearningSummaryCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new windowsInformationProtectionAppLearningSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionAppLearningSummary
     * @see {@link https://learn.microsoft.com/graph/api/intune-wip-windowsinformationprotectionapplearningsummary-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: WindowsInformationProtectionAppLearningSummary, requestConfiguration?: WindowsInformationProtectionAppLearningSummariesRequestBuilderPostRequestConfiguration | undefined) : Promise<WindowsInformationProtectionAppLearningSummary | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsInformationProtectionAppLearningSummary>(requestInfo, createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the windowsInformationProtectionAppLearningSummary objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WindowsInformationProtectionAppLearningSummariesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new windowsInformationProtectionAppLearningSummary object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WindowsInformationProtectionAppLearningSummary, requestConfiguration?: WindowsInformationProtectionAppLearningSummariesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWindowsInformationProtectionAppLearningSummary);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a windowsInformationProtectionAppLearningSummariesRequestBuilder
     */
    public withUrl(rawUrl: string) : WindowsInformationProtectionAppLearningSummariesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new WindowsInformationProtectionAppLearningSummariesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
