import { type BitlockerRecoveryKey } from '../../../../models/';
import { createBitlockerRecoveryKeyFromDiscriminatorValue } from '../../../../models/bitlockerRecoveryKey';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../models/oDataErrors/oDataError';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface BitlockerRecoveryKeyItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface BitlockerRecoveryKeyItemRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: BitlockerRecoveryKeyItemRequestBuilderGetQueryParameters;
}
/**
 * Provides operations to manage the recoveryKeys property of the microsoft.graph.bitlocker entity.
 */
export class BitlockerRecoveryKeyItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new BitlockerRecoveryKeyItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/informationProtection/bitlocker/recoveryKeys/{bitlockerRecoveryKey%2Did}{?%24select,%24expand}");
    };
    /**
     * Retrieve the properties and relationships of a bitlockerRecoveryKey object.  By default, this operation doesn't return the key property that represents the actual recovery key. To include the key property in the response, use the $select OData query parameter. Including the $select query parameter triggers an Azure AD audit of the operation and generates an audit log. For more information on audit logs for bitlocker recovery keys, see the KeyManagement category filter of Azure AD audit logs. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BitlockerRecoveryKey
     * @see {@link https://learn.microsoft.com/graph/api/bitlockerrecoverykey-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: BitlockerRecoveryKeyItemRequestBuilderGetRequestConfiguration | undefined) : Promise<BitlockerRecoveryKey | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<BitlockerRecoveryKey>(requestInfo, createBitlockerRecoveryKeyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the properties and relationships of a bitlockerRecoveryKey object.  By default, this operation doesn't return the key property that represents the actual recovery key. To include the key property in the response, use the $select OData query parameter. Including the $select query parameter triggers an Azure AD audit of the operation and generates an audit log. For more information on audit logs for bitlocker recovery keys, see the KeyManagement category filter of Azure AD audit logs. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: BitlockerRecoveryKeyItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a BitlockerRecoveryKeyItemRequestBuilder
     */
    public withUrl(rawUrl: string) : BitlockerRecoveryKeyItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new BitlockerRecoveryKeyItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
