import {createWorkbookNamedItemFromDiscriminatorValue} from '../../../../../../../models/createWorkbookNamedItemFromDiscriminatorValue';
import {deserializeIntoWorkbookNamedItem} from '../../../../../../../models/deserializeIntoWorkbookNamedItem';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookNamedItem} from '../../../../../../../models/serializeWorkbookNamedItem';
import {WorkbookNamedItem} from '../../../../../../../models/workbookNamedItem';
import {AddPostRequestBody} from './addPostRequestBody';
import {AddRequestBuilderPostRequestConfiguration} from './addRequestBuilderPostRequestConfiguration';
import {deserializeIntoAddPostRequestBody} from './deserializeIntoAddPostRequestBody';
import {serializeAddPostRequestBody} from './serializeAddPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the add method.
 */
export class AddRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AddRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/names/add");
    };
    /**
     * Adds a new name to the collection of the given scope using the user's locale for the formula.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookNamedItem
     * @see {@link https://docs.microsoft.com/graph/api/nameditem-add?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AddPostRequestBody | undefined, requestConfiguration?: AddRequestBuilderPostRequestConfiguration | undefined) : Promise<WorkbookNamedItem | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
    public toPostRequestInformation(body: AddPostRequestBody | undefined, requestConfiguration?: AddRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAddPostRequestBody);
        return requestInfo;
    };
}
