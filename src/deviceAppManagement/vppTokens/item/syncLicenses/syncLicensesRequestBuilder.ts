import { type VppToken } from '../../../../models/';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { createVppTokenFromDiscriminatorValue } from '../../../../models/vppToken';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface SyncLicensesRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to call the syncLicenses method.
 */
export class SyncLicensesRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SyncLicensesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/vppTokens/{vppToken%2Did}/syncLicenses");
    };
    /**
     * Syncs licenses associated with a specific appleVolumePurchaseProgramToken
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of VppToken
     * @see {@link https://learn.microsoft.com/graph/api/intune-onboarding-vpptoken-synclicenses?view=graph-rest-1.0|Find more info here}
     */
    public post(requestConfiguration?: SyncLicensesRequestBuilderPostRequestConfiguration | undefined) : Promise<VppToken | undefined> {
        const requestInfo = this.toPostRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<VppToken>(requestInfo, createVppTokenFromDiscriminatorValue, errorMapping);
    };
    /**
     * Syncs licenses associated with a specific appleVolumePurchaseProgramToken
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(requestConfiguration?: SyncLicensesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a syncLicensesRequestBuilder
     */
    public withUrl(rawUrl: string) : SyncLicensesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SyncLicensesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
