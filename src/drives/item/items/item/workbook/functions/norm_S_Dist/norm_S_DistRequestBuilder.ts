import {createWorkbookFunctionResultFromDiscriminatorValue} from '../../../../../../../models/createWorkbookFunctionResultFromDiscriminatorValue';
import {deserializeIntoWorkbookFunctionResult} from '../../../../../../../models/deserializeIntoWorkbookFunctionResult';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {serializeWorkbookFunctionResult} from '../../../../../../../models/serializeWorkbookFunctionResult';
import {WorkbookFunctionResult} from '../../../../../../../models/workbookFunctionResult';
import {deserializeIntoNorm_S_DistPostRequestBody} from './deserializeIntoNorm_S_DistPostRequestBody';
import {Norm_S_DistPostRequestBody} from './norm_S_DistPostRequestBody';
import {Norm_S_DistRequestBuilderPostRequestConfiguration} from './norm_S_DistRequestBuilderPostRequestConfiguration';
import {serializeNorm_S_DistPostRequestBody} from './serializeNorm_S_DistPostRequestBody';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the norm_S_Dist method.
 */
export class Norm_S_DistRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new Norm_S_DistRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/norm_S_Dist");
    };
    /**
     * Invoke action norm_S_Dist
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookFunctionResult
     */
    public post(body: Norm_S_DistPostRequestBody | undefined, requestConfiguration?: Norm_S_DistRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookFunctionResult | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<WorkbookFunctionResult>(requestInfo, createWorkbookFunctionResultFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Invoke action norm_S_Dist
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Norm_S_DistPostRequestBody | undefined, requestConfiguration?: Norm_S_DistRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeNorm_S_DistPostRequestBody);
        return requestInfo;
    };
}
