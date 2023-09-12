import { type Bitlocker } from '../../models/';
import { createBitlockerFromDiscriminatorValue } from '../../models/createBitlockerFromDiscriminatorValue';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { type BitlockerRequestBuilderGetRequestConfiguration } from './bitlockerRequestBuilderGetRequestConfiguration';
import { RecoveryKeysRequestBuilder } from './recoveryKeys/recoveryKeysRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the bitlocker property of the microsoft.graph.informationProtection entity.
 */
export class BitlockerRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the recoveryKeys property of the microsoft.graph.bitlocker entity.
     */
    public get recoveryKeys(): RecoveryKeysRequestBuilder {
        return new RecoveryKeysRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new BitlockerRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/informationProtection/bitlocker{?%24select,%24expand}");
    };
    /**
     * Get bitlocker from informationProtection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Bitlocker
     */
    public get(requestConfiguration?: BitlockerRequestBuilderGetRequestConfiguration | undefined) : Promise<Bitlocker | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Bitlocker>(requestInfo, createBitlockerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get bitlocker from informationProtection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: BitlockerRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a bitlockerRequestBuilder
     */
    public withUrl(rawUrl: string) : BitlockerRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new BitlockerRequestBuilder(rawUrl, this.requestAdapter);
    };
}
