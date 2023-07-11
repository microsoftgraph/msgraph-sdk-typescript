import {ExtractSensitivityLabelsResult} from '../../../../../models/';
import {createExtractSensitivityLabelsResultFromDiscriminatorValue} from '../../../../../models/createExtractSensitivityLabelsResultFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {ExtractSensitivityLabelsRequestBuilderPostRequestConfiguration} from './extractSensitivityLabelsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the extractSensitivityLabels method.
 */
export class ExtractSensitivityLabelsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ExtractSensitivityLabelsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/extractSensitivityLabels");
    };
    /**
     * Invoke action extractSensitivityLabels
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ExtractSensitivityLabelsResult
     */
    public post(requestConfiguration?: ExtractSensitivityLabelsRequestBuilderPostRequestConfiguration | undefined) : Promise<ExtractSensitivityLabelsResult | undefined> {
        const requestInfo = this.toPostRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ExtractSensitivityLabelsResult>(requestInfo, createExtractSensitivityLabelsResultFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke action extractSensitivityLabels
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(requestConfiguration?: ExtractSensitivityLabelsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
}
