import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {EdiscoveryNoncustodialDataSourceCollectionResponse} from '../../../../../../../models/security/';
import {createEdiscoveryNoncustodialDataSourceCollectionResponseFromDiscriminatorValue} from '../../../../../../../models/security/createEdiscoveryNoncustodialDataSourceCollectionResponseFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {EdiscoveryNoncustodialDataSourceItemRequestBuilder} from './item/ediscoveryNoncustodialDataSourceItemRequestBuilder';
import {NoncustodialSourcesRequestBuilderGetRequestConfiguration} from './noncustodialSourcesRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the noncustodialSources property of the microsoft.graph.security.ediscoverySearch entity.
 */
export class NoncustodialSourcesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the noncustodialSources property of the microsoft.graph.security.ediscoverySearch entity.
     * @param ediscoveryNoncustodialDataSourceId The unique identifier of ediscoveryNoncustodialDataSource
     * @returns a EdiscoveryNoncustodialDataSourceItemRequestBuilder
     */
    public byEdiscoveryNoncustodialDataSourceId(ediscoveryNoncustodialDataSourceId: string) : EdiscoveryNoncustodialDataSourceItemRequestBuilder {
        if(!ediscoveryNoncustodialDataSourceId) throw new Error("ediscoveryNoncustodialDataSourceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["ediscoveryNoncustodialDataSource%2Did"] = ediscoveryNoncustodialDataSourceId
        return new EdiscoveryNoncustodialDataSourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new NoncustodialSourcesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/searches/{ediscoverySearch%2Did}/noncustodialSources{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * noncustodialDataSource sources that are included in the eDiscovery search
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryNoncustodialDataSourceCollectionResponse
     */
    public get(requestConfiguration?: NoncustodialSourcesRequestBuilderGetRequestConfiguration | undefined) : Promise<EdiscoveryNoncustodialDataSourceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryNoncustodialDataSourceCollectionResponse>(requestInfo, createEdiscoveryNoncustodialDataSourceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * noncustodialDataSource sources that are included in the eDiscovery search
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: NoncustodialSourcesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
