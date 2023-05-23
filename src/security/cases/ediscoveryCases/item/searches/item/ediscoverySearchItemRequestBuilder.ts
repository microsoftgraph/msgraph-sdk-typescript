import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {createEdiscoverySearchFromDiscriminatorValue} from '../../../../../../models/security/createEdiscoverySearchFromDiscriminatorValue';
import {deserializeIntoEdiscoverySearch} from '../../../../../../models/security/deserializeIntoEdiscoverySearch';
import {EdiscoverySearch} from '../../../../../../models/security/ediscoverySearch';
import {serializeEdiscoverySearch} from '../../../../../../models/security/serializeEdiscoverySearch';
import {AdditionalSourcesRequestBuilder} from './additionalSources/additionalSourcesRequestBuilder';
import {AddToReviewSetOperationRequestBuilder} from './addToReviewSetOperation/addToReviewSetOperationRequestBuilder';
import {CustodianSourcesRequestBuilder} from './custodianSources/custodianSourcesRequestBuilder';
import {EdiscoverySearchItemRequestBuilderDeleteRequestConfiguration} from './ediscoverySearchItemRequestBuilderDeleteRequestConfiguration';
import {EdiscoverySearchItemRequestBuilderGetRequestConfiguration} from './ediscoverySearchItemRequestBuilderGetRequestConfiguration';
import {EdiscoverySearchItemRequestBuilderPatchRequestConfiguration} from './ediscoverySearchItemRequestBuilderPatchRequestConfiguration';
import {LastEstimateStatisticsOperationRequestBuilder} from './lastEstimateStatisticsOperation/lastEstimateStatisticsOperationRequestBuilder';
import {MicrosoftGraphSecurityEstimateStatisticsRequestBuilder} from './microsoftGraphSecurityEstimateStatistics/microsoftGraphSecurityEstimateStatisticsRequestBuilder';
import {MicrosoftGraphSecurityPurgeDataRequestBuilder} from './microsoftGraphSecurityPurgeData/microsoftGraphSecurityPurgeDataRequestBuilder';
import {NoncustodialSourcesRequestBuilder} from './noncustodialSources/noncustodialSourcesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the searches property of the microsoft.graph.security.ediscoveryCase entity.
 */
export class EdiscoverySearchItemRequestBuilder extends BaseRequestBuilder {
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
    public get microsoftGraphSecurityEstimateStatistics(): MicrosoftGraphSecurityEstimateStatisticsRequestBuilder {
        return new MicrosoftGraphSecurityEstimateStatisticsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the purgeData method. */
    public get microsoftGraphSecurityPurgeData(): MicrosoftGraphSecurityPurgeDataRequestBuilder {
        return new MicrosoftGraphSecurityPurgeDataRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the noncustodialSources property of the microsoft.graph.security.ediscoverySearch entity. */
    public get noncustodialSources(): NoncustodialSourcesRequestBuilder {
        return new NoncustodialSourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new EdiscoverySearchItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/searches/{ediscoverySearch%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete an ediscoverySearch object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @see {@link https://docs.microsoft.com/graph/api/security-ediscoverycase-delete-searches?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: EdiscoverySearchItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Read the properties and relationships of an ediscoverySearch object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoverySearch
     * @see {@link https://docs.microsoft.com/graph/api/security-ediscoverysearch-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: EdiscoverySearchItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoverySearch | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<EdiscoverySearch>(requestInfo, createEdiscoverySearchFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the properties of an ediscoverySearch object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoverySearch
     * @see {@link https://docs.microsoft.com/graph/api/security-ediscoverysearch-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: EdiscoverySearch | undefined, requestConfiguration?: EdiscoverySearchItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoverySearch | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<EdiscoverySearch>(requestInfo, createEdiscoverySearchFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete an ediscoverySearch object.
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
     * Read the properties and relationships of an ediscoverySearch object.
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
     * Update the properties of an ediscoverySearch object.
     * @param body The request body
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeEdiscoverySearch);
        return requestInfo;
    };
}
