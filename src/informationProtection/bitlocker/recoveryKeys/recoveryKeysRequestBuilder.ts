import {BitlockerRecoveryKeyCollectionResponse} from '../../../models/';
import {createBitlockerRecoveryKeyCollectionResponseFromDiscriminatorValue} from '../../../models/createBitlockerRecoveryKeyCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {BitlockerRecoveryKeyItemRequestBuilder} from './item/bitlockerRecoveryKeyItemRequestBuilder';
import {RecoveryKeysRequestBuilderGetRequestConfiguration} from './recoveryKeysRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the recoveryKeys property of the microsoft.graph.bitlocker entity.
 */
export class RecoveryKeysRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the recoveryKeys property of the microsoft.graph.bitlocker entity.
     * @param bitlockerRecoveryKeyId The unique identifier of bitlockerRecoveryKey
     * @returns a BitlockerRecoveryKeyItemRequestBuilder
     */
    public byBitlockerRecoveryKeyId(bitlockerRecoveryKeyId: string) : BitlockerRecoveryKeyItemRequestBuilder {
        if(!bitlockerRecoveryKeyId) throw new Error("bitlockerRecoveryKeyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["bitlockerRecoveryKey%2Did"] = bitlockerRecoveryKeyId
        return new BitlockerRecoveryKeyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RecoveryKeysRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/informationProtection/bitlocker/recoveryKeys{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the bitlockerRecoveryKey objects and their properties.  This operation does not return the key property. For information about how to read the key property, see Get bitlockerRecoveryKey.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BitlockerRecoveryKeyCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/bitlocker-list-recoverykeys?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RecoveryKeysRequestBuilderGetRequestConfiguration | undefined) : Promise<BitlockerRecoveryKeyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BitlockerRecoveryKeyCollectionResponse>(requestInfo, createBitlockerRecoveryKeyCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the bitlockerRecoveryKey objects and their properties.  This operation does not return the key property. For information about how to read the key property, see Get bitlockerRecoveryKey.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RecoveryKeysRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a recoveryKeysRequestBuilder
     */
    public withUrl(rawUrl: string) : RecoveryKeysRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RecoveryKeysRequestBuilder(rawUrl, this.requestAdapter);
    };
}
