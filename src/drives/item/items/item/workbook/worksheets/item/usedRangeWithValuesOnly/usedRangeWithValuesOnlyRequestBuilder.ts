import {WorkbookRange} from '../../../../../../../../models/';
import {createWorkbookRangeFromDiscriminatorValue} from '../../../../../../../../models/createWorkbookRangeFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {UsedRangeWithValuesOnlyRequestBuilderGetRequestConfiguration} from './usedRangeWithValuesOnlyRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the usedRange method.
 */
export class UsedRangeWithValuesOnlyRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new UsedRangeWithValuesOnlyRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param valuesOnly Usage: valuesOnly={valuesOnly}
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, valuesOnly?: boolean | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/usedRange(valuesOnly={valuesOnly})");
        this.pathParameters["valuesOnly"] = valuesOnly
    };
    /**
     * Invoke function usedRange
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookRange
     */
    public get(requestConfiguration?: UsedRangeWithValuesOnlyRequestBuilderGetRequestConfiguration | undefined) : Promise<WorkbookRange | undefined> {
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
     * Invoke function usedRange
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UsedRangeWithValuesOnlyRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
}
