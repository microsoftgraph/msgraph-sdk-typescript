import { type WorkbookChart } from '../../../../../../../../../models/';
import { createWorkbookChartFromDiscriminatorValue } from '../../../../../../../../../models/createWorkbookChartFromDiscriminatorValue';
import { type ODataError } from '../../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../../models/oDataErrors/serializeODataError';
import { type ItemWithNameRequestBuilderGetRequestConfiguration } from './itemWithNameRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the item method.
 */
export class ItemWithNameRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ItemWithNameRequestBuilder and sets the default values.
     * @param name Usage: name='{name}'
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, name?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/item(name='{name}')");
        this.pathParameters["name"] = name
    };
    /**
     * Invoke function item
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookChart
     */
    public get(requestConfiguration?: ItemWithNameRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookChart | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookChart>(requestInfo, createWorkbookChartFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function item
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ItemWithNameRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a itemWithNameRequestBuilder
     */
    public withUrl(rawUrl: string) : ItemWithNameRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ItemWithNameRequestBuilder(rawUrl, this.requestAdapter);
    };
}
