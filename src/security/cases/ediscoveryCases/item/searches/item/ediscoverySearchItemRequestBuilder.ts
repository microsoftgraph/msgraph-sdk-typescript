import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {EdiscoverySearch} from '../../../../../../models/security/';
import {createEdiscoverySearchFromDiscriminatorValue} from '../../../../../../models/security/createEdiscoverySearchFromDiscriminatorValue';
import {AdditionalSourcesRequestBuilder} from './additionalSources/additionalSourcesRequestBuilder';
import {DataSourceItemRequestBuilder as I860231e803b45916356ab4415de9e4f00c75d6b57892bd05665f99af41076c06} from './additionalSources/item/dataSourceItemRequestBuilder';
import {AddToReviewSetOperationRequestBuilder} from './addToReviewSetOperation/addToReviewSetOperationRequestBuilder';
import {CustodianSourcesRequestBuilder} from './custodianSources/custodianSourcesRequestBuilder';
import {DataSourceItemRequestBuilder as I816d4625b66c6d2c4612002c52b267d5854146b45897bff33e764e473e80311e} from './custodianSources/item/dataSourceItemRequestBuilder';
import {EdiscoverySearchItemRequestBuilderDeleteRequestConfiguration} from './ediscoverySearchItemRequestBuilderDeleteRequestConfiguration';
import {EdiscoverySearchItemRequestBuilderGetRequestConfiguration} from './ediscoverySearchItemRequestBuilderGetRequestConfiguration';
import {EdiscoverySearchItemRequestBuilderPatchRequestConfiguration} from './ediscoverySearchItemRequestBuilderPatchRequestConfiguration';
import {LastEstimateStatisticsOperationRequestBuilder} from './lastEstimateStatisticsOperation/lastEstimateStatisticsOperationRequestBuilder';
import {EstimateStatisticsRequestBuilder} from './microsoftGraphSecurityEstimateStatistics/estimateStatisticsRequestBuilder';
import {PurgeDataRequestBuilder} from './microsoftGraphSecurityPurgeData/purgeDataRequestBuilder';
import {EdiscoveryNoncustodialDataSourceItemRequestBuilder} from './noncustodialSources/item/ediscoveryNoncustodialDataSourceItemRequestBuilder';
import {NoncustodialSourcesRequestBuilder} from './noncustodialSources/noncustodialSourcesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the searches property of the microsoft.graph.security.ediscoveryCase entity.
 */
export class EdiscoverySearchItemRequestBuilder {
    /** Provides operations to manage the additionalSources property of the microsoft.graph.security.ediscoverySearch entity. */
    public get additionalSources(): AdditionalSourcesRequestBuilder {
        return new AdditionalSourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the addToReviewSetOperation property of the microsoft.graph.security.ediscoverySearch entity. */
    public get addToReviewSetOperation(): AddToReviewSetOperationRequestBuilder {
        return new AddToReviewSetOperationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the custodianSources property of the microsoft.graph.security.ediscoverySearch entity. */
    public get custodianSources(): CustodianSourcesRequestBuilder {
        return new CustodianSourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the lastEstimateStatisticsOperation property of the microsoft.graph.security.ediscoverySearch entity. */
    public get lastEstimateStatisticsOperation(): LastEstimateStatisticsOperationRequestBuilder {
        return new LastEstimateStatisticsOperationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the estimateStatistics method. */
    public get microsoftGraphSecurityEstimateStatistics(): EstimateStatisticsRequestBuilder {
        return new EstimateStatisticsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the purgeData method. */
    public get microsoftGraphSecurityPurgeData(): PurgeDataRequestBuilder {
        return new PurgeDataRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the noncustodialSources property of the microsoft.graph.security.ediscoverySearch entity. */
    public get noncustodialSources(): NoncustodialSourcesRequestBuilder {
        return new NoncustodialSourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Provides operations to manage the additionalSources property of the microsoft.graph.security.ediscoverySearch entity.
     * @param id Unique identifier of the item
     * @returns a DataSourceItemRequestBuilder
     */
    public additionalSourcesById(id: string) : I860231e803b45916356ab4415de9e4f00c75d6b57892bd05665f99af41076c06 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["dataSource%2Did"] = id
        return new I860231e803b45916356ab4415de9e4f00c75d6b57892bd05665f99af41076c06(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new EdiscoverySearchItemRequestBuilder and sets the default values.
     * @param ediscoverySearchId key: id of ediscoverySearch
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, ediscoverySearchId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/searches/{ediscoverySearch%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["ediscoverySearch%2Did"] = ediscoverySearchId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Provides operations to manage the custodianSources property of the microsoft.graph.security.ediscoverySearch entity.
     * @param id Unique identifier of the item
     * @returns a DataSourceItemRequestBuilder
     */
    public custodianSourcesById(id: string) : I816d4625b66c6d2c4612002c52b267d5854146b45897bff33e764e473e80311e {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["dataSource%2Did"] = id
        return new I816d4625b66c6d2c4612002c52b267d5854146b45897bff33e764e473e80311e(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property searches for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: EdiscoverySearchItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Returns a list of eDiscoverySearch objects associated with this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoverySearch
     */
    public get(requestConfiguration?: EdiscoverySearchItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoverySearch | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EdiscoverySearch>(requestInfo, createEdiscoverySearchFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the noncustodialSources property of the microsoft.graph.security.ediscoverySearch entity.
     * @param id Unique identifier of the item
     * @returns a EdiscoveryNoncustodialDataSourceItemRequestBuilder
     */
    public noncustodialSourcesById(id: string) : EdiscoveryNoncustodialDataSourceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["ediscoveryNoncustodialDataSource%2Did"] = id
        return new EdiscoveryNoncustodialDataSourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property searches in security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoverySearch
     */
    public patch(body: EdiscoverySearch | undefined, requestConfiguration?: EdiscoverySearchItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoverySearch | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EdiscoverySearch>(requestInfo, createEdiscoverySearchFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property searches for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EdiscoverySearchItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Returns a list of eDiscoverySearch objects associated with this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EdiscoverySearchItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property searches in security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EdiscoverySearch | undefined, requestConfiguration?: EdiscoverySearchItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
