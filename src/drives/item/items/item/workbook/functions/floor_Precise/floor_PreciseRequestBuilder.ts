import {createWorkbookFunctionResultFromDiscriminatorValue} from '../../../../../../../models/createWorkbookFunctionResultFromDiscriminatorValue';
import {deserializeIntoWorkbookFunctionResult} from '../../../../../../../models/deserializeIntoWorkbookFunctionResult';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookFunctionResult} from '../../../../../../../models/serializeWorkbookFunctionResult';
import {WorkbookFunctionResult} from '../../../../../../../models/workbookFunctionResult';
import {deserializeIntoFloor_PrecisePostRequestBody} from './deserializeIntoFloor_PrecisePostRequestBody';
import {Floor_PrecisePostRequestBody} from './floor_PrecisePostRequestBody';
import {Floor_PreciseRequestBuilderPostRequestConfiguration} from './floor_PreciseRequestBuilderPostRequestConfiguration';
import {serializeFloor_PrecisePostRequestBody} from './serializeFloor_PrecisePostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the floor_Precise method.
 */
export class Floor_PreciseRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new Floor_PreciseRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/floor_Precise");
    };
    /**
     * Invoke action floor_Precise
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookFunctionResult
     */
    public post(body: Floor_PrecisePostRequestBody | undefined, requestConfiguration?: Floor_PreciseRequestBuilderPostRequestConfiguration | undefined) : Promise<WorkbookFunctionResult | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookFunctionResult>(requestInfo, createWorkbookFunctionResultFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke action floor_Precise
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Floor_PrecisePostRequestBody | undefined, requestConfiguration?: Floor_PreciseRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeFloor_PrecisePostRequestBody);
        return requestInfo;
    };
}
