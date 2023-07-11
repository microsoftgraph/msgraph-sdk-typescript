import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {AvailableProviderTypesRequestBuilderGetRequestConfiguration} from './availableProviderTypesRequestBuilderGetRequestConfiguration';
import {createAvailableProviderTypesResponseFromDiscriminatorValue} from './createAvailableProviderTypesResponseFromDiscriminatorValue';
import {AvailableProviderTypesResponse} from './index';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the availableProviderTypes method.
 */
export class AvailableProviderTypesRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AvailableProviderTypesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityProviders/availableProviderTypes(){?%24top,%24skip,%24search,%24filter,%24count}");
    };
    /**
     * Invoke function availableProviderTypes
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AvailableProviderTypesResponse
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider on 2021-08-24 and will be removed 2023-03-15
     */
    public get(requestConfiguration?: AvailableProviderTypesRequestBuilderGetRequestConfiguration | undefined) : Promise<AvailableProviderTypesResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AvailableProviderTypesResponse>(requestInfo, createAvailableProviderTypesResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function availableProviderTypes
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider on 2021-08-24 and will be removed 2023-03-15
     */
    public toGetRequestInformation(requestConfiguration?: AvailableProviderTypesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
