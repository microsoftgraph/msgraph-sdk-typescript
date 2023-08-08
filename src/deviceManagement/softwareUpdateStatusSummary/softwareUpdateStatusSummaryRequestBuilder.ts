import {SoftwareUpdateStatusSummary} from '../../models/';
import {createSoftwareUpdateStatusSummaryFromDiscriminatorValue} from '../../models/createSoftwareUpdateStatusSummaryFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {SoftwareUpdateStatusSummaryRequestBuilderGetRequestConfiguration} from './softwareUpdateStatusSummaryRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the softwareUpdateStatusSummary property of the microsoft.graph.deviceManagement entity.
 */
export class SoftwareUpdateStatusSummaryRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SoftwareUpdateStatusSummaryRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/softwareUpdateStatusSummary{?%24select,%24expand}");
    };
    /**
     * Read properties and relationships of the softwareUpdateStatusSummary object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SoftwareUpdateStatusSummary
     * @see {@link https://learn.microsoft.com/graph/api/intune-deviceconfig-softwareupdatestatussummary-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SoftwareUpdateStatusSummaryRequestBuilderGetRequestConfiguration | undefined) : Promise<SoftwareUpdateStatusSummary | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SoftwareUpdateStatusSummary>(requestInfo, createSoftwareUpdateStatusSummaryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read properties and relationships of the softwareUpdateStatusSummary object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SoftwareUpdateStatusSummaryRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
}
