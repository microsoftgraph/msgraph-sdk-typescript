import {WorkbookRange} from '../../../../../../../../../../models/';
import {createWorkbookRangeFromDiscriminatorValue} from '../../../../../../../../../../models/createWorkbookRangeFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../../models/oDataErrors/serializeODataError';
import {RangeRequestBuilderGetRequestConfiguration} from './rangeRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the range method.
 */
export class RangeRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new RangeRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/names/{workbookNamedItem%2Did}/range()");
    };
    /**
     * Returns the range object that is associated with the name. Throws an exception if the named item's type is not a range.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookRange
     * @see {@link https://learn.microsoft.com/graph/api/nameditem-range?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RangeRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookRange | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookRange>(requestInfo, createWorkbookRangeFromDiscriminatorValue, errorMapping);
    };
    /**
     * Returns the range object that is associated with the name. Throws an exception if the named item's type is not a range.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RangeRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a rangeRequestBuilder
     */
    public withUrl(rawUrl: string) : RangeRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RangeRequestBuilder(rawUrl, this.requestAdapter);
    };
}
