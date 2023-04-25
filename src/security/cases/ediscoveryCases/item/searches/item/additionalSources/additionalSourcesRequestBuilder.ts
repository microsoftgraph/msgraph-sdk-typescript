import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {DataSource, DataSourceCollectionResponse} from '../../../../../../../models/security/';
import {createDataSourceCollectionResponseFromDiscriminatorValue} from '../../../../../../../models/security/createDataSourceCollectionResponseFromDiscriminatorValue';
import {createDataSourceFromDiscriminatorValue} from '../../../../../../../models/security/createDataSourceFromDiscriminatorValue';
import {AdditionalSourcesRequestBuilderGetRequestConfiguration} from './additionalSourcesRequestBuilderGetRequestConfiguration';
import {AdditionalSourcesRequestBuilderPostRequestConfiguration} from './additionalSourcesRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DataSourceItemRequestBuilder} from './item/dataSourceItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the additionalSources property of the microsoft.graph.security.ediscoverySearch entity.
 */
export class AdditionalSourcesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the additionalSources property of the microsoft.graph.security.ediscoverySearch entity.
     * @param dataSourceId Unique identifier of the item
     * @returns a DataSourceItemRequestBuilder
     */
    public byDataSourceId(dataSourceId: string) : DataSourceItemRequestBuilder {
        if(!dataSourceId) throw new Error("dataSourceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["dataSource%2Did"] = dataSourceId
        return new DataSourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AdditionalSourcesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/searches/{ediscoverySearch%2Did}/additionalSources{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Adds an additional source to the eDiscovery search.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DataSourceCollectionResponse
     */
    public get(requestConfiguration?: AdditionalSourcesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DataSourceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DataSourceCollectionResponse>(requestInfo, createDataSourceCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to additionalSources for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DataSource
     */
    public post(body: DataSource | undefined, requestConfiguration?: AdditionalSourcesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DataSource | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DataSource>(requestInfo, createDataSourceFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Adds an additional source to the eDiscovery search.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AdditionalSourcesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to additionalSources for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DataSource | undefined, requestConfiguration?: AdditionalSourcesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
