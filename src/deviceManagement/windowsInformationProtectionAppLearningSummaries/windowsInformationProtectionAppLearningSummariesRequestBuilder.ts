import {WindowsInformationProtectionAppLearningSummaryCollectionResponse} from '../../models/';
import {createWindowsInformationProtectionAppLearningSummaryCollectionResponseFromDiscriminatorValue} from '../../models/createWindowsInformationProtectionAppLearningSummaryCollectionResponseFromDiscriminatorValue';
import {createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue} from '../../models/createWindowsInformationProtectionAppLearningSummaryFromDiscriminatorValue';
import {deserializeIntoWindowsInformationProtectionAppLearningSummary} from '../../models/deserializeIntoWindowsInformationProtectionAppLearningSummary';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeWindowsInformationProtectionAppLearningSummary} from '../../models/serializeWindowsInformationProtectionAppLearningSummary';
import {WindowsInformationProtectionAppLearningSummary} from '../../models/windowsInformationProtectionAppLearningSummary';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {WindowsInformationProtectionAppLearningSummaryItemRequestBuilder} from './item/windowsInformationProtectionAppLearningSummaryItemRequestBuilder';
import {WindowsInformationProtectionAppLearningSummariesRequestBuilderGetRequestConfiguration} from './windowsInformationProtectionAppLearningSummariesRequestBuilderGetRequestConfiguration';
import {WindowsInformationProtectionAppLearningSummariesRequestBuilderPostRequestConfiguration} from './windowsInformationProtectionAppLearningSummariesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

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
     * @param windowsInformationProtectionAppLearningSummaryId Unique identifier of the item
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
     * The windows information protection app learning summaries.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionAppLearningSummaryCollectionResponse
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
     * Create new navigation property to windowsInformationProtectionAppLearningSummaries for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionAppLearningSummary
     */
    public post(body: WindowsInformationProtectionAppLearningSummary | undefined, requestConfiguration?: WindowsInformationProtectionAppLearningSummariesRequestBuilderPostRequestConfiguration | undefined) : Promise<WindowsInformationProtectionAppLearningSummary | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
     * The windows information protection app learning summaries.
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
     * Create new navigation property to windowsInformationProtectionAppLearningSummaries for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WindowsInformationProtectionAppLearningSummary | undefined, requestConfiguration?: WindowsInformationProtectionAppLearningSummariesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeWindowsInformationProtectionAppLearningSummary);
        return requestInfo;
    };
}
