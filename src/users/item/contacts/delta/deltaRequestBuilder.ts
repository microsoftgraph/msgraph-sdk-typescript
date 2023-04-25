import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {createDeltaResponseFromDiscriminatorValue} from './createDeltaResponseFromDiscriminatorValue';
import {DeltaRequestBuilderGetRequestConfiguration} from './deltaRequestBuilderGetRequestConfiguration';
import {DeltaResponse} from './index';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the delta method.
 */
export class DeltaRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DeltaRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/contacts/delta(){?%24top,%24skip,%24search,%24filter,%24count,%24select,%24orderby}");
    };
    /**
     * Invoke function delta
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DeltaResponse
     */
    public get(requestConfiguration?: DeltaRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DeltaResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DeltaResponse>(requestInfo, createDeltaResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Invoke function delta
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DeltaRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
