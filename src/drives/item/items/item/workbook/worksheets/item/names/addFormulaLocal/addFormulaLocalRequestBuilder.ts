import {createWorkbookNamedItemFromDiscriminatorValue} from '../../../../../../../../../models/createWorkbookNamedItemFromDiscriminatorValue';
import {deserializeIntoWorkbookNamedItem} from '../../../../../../../../../models/deserializeIntoWorkbookNamedItem';
import {ODataError} from '../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookNamedItem} from '../../../../../../../../../models/serializeWorkbookNamedItem';
import type {WorkbookNamedItem} from '../../../../../../../../../models/workbookNamedItem';
import type {AddFormulaLocalPostRequestBody} from './addFormulaLocalPostRequestBody';
import {AddFormulaLocalRequestBuilderPostRequestConfiguration} from './addFormulaLocalRequestBuilderPostRequestConfiguration';
import {deserializeIntoAddFormulaLocalPostRequestBody} from './deserializeIntoAddFormulaLocalPostRequestBody';
import {serializeAddFormulaLocalPostRequestBody} from './serializeAddFormulaLocalPostRequestBody';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the addFormulaLocal method.
 */
export class AddFormulaLocalRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AddFormulaLocalRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/names/addFormulaLocal");
    };
    /**
     * Adds a new name to the collection of the given scope using the user's locale for the formula.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookNamedItem
     * @see {@link https://learn.microsoft.com/graph/api/nameditem-addformulalocal?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AddFormulaLocalPostRequestBody, requestConfiguration?: AddFormulaLocalRequestBuilderPostRequestConfiguration | undefined) : Promise<WorkbookNamedItem | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WorkbookNamedItem>(requestInfo, createWorkbookNamedItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Adds a new name to the collection of the given scope using the user's locale for the formula.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AddFormulaLocalPostRequestBody, requestConfiguration?: AddFormulaLocalRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAddFormulaLocalPostRequestBody);
        return requestInfo;
    };
}
