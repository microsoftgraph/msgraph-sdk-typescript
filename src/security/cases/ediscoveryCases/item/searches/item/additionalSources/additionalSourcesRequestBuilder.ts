import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {DataSourceCollectionResponse} from '../../../../../../../models/security/';
import {createDataSourceCollectionResponseFromDiscriminatorValue} from '../../../../../../../models/security/createDataSourceCollectionResponseFromDiscriminatorValue';
import {createDataSourceFromDiscriminatorValue} from '../../../../../../../models/security/createDataSourceFromDiscriminatorValue';
import type {DataSource} from '../../../../../../../models/security/dataSource';
import {deserializeIntoDataSource} from '../../../../../../../models/security/deserializeIntoDataSource';
import {serializeDataSource} from '../../../../../../../models/security/serializeDataSource';
import {AdditionalSourcesRequestBuilderGetRequestConfiguration} from './additionalSourcesRequestBuilderGetRequestConfiguration';
import {AdditionalSourcesRequestBuilderPostRequestConfiguration} from './additionalSourcesRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DataSourceItemRequestBuilder} from './item/dataSourceItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the additionalSources property of the microsoft.graph.security.ediscoverySearch entity.
 */
export class AdditionalSourcesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
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
     * Get the list of additional sources associated with an eDiscovery search.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DataSourceCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverysearch-list-additionalsources?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AdditionalSourcesRequestBuilderGetRequestConfiguration | undefined) : Promise<DataSourceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DataSourceCollectionResponse>(requestInfo, createDataSourceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new additional source associated with an eDiscovery search.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DataSource
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverysearch-post-additionalsources?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DataSource | undefined, requestConfiguration?: AdditionalSourcesRequestBuilderPostRequestConfiguration | undefined) : Promise<DataSource | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DataSource>(requestInfo, createDataSourceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the list of additional sources associated with an eDiscovery search.
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
     * Create a new additional source associated with an eDiscovery search.
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDataSource);
        return requestInfo;
    };
}
