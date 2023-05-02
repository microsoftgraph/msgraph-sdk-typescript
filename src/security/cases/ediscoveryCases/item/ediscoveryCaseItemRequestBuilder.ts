import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {createEdiscoveryCaseFromDiscriminatorValue} from '../../../../models/security/createEdiscoveryCaseFromDiscriminatorValue';
import {deserializeIntoEdiscoveryCase} from '../../../../models/security/deserializeIntoEdiscoveryCase';
import {EdiscoveryCase} from '../../../../models/security/ediscoveryCase';
import {serializeEdiscoveryCase} from '../../../../models/security/serializeEdiscoveryCase';
import {CustodiansRequestBuilder} from './custodians/custodiansRequestBuilder';
import {EdiscoveryCaseItemRequestBuilderDeleteRequestConfiguration} from './ediscoveryCaseItemRequestBuilderDeleteRequestConfiguration';
import {EdiscoveryCaseItemRequestBuilderGetRequestConfiguration} from './ediscoveryCaseItemRequestBuilderGetRequestConfiguration';
import {EdiscoveryCaseItemRequestBuilderPatchRequestConfiguration} from './ediscoveryCaseItemRequestBuilderPatchRequestConfiguration';
import {NoncustodialDataSourcesRequestBuilder} from './noncustodialDataSources/noncustodialDataSourcesRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {ReviewSetsRequestBuilder} from './reviewSets/reviewSetsRequestBuilder';
import {SearchesRequestBuilder} from './searches/searchesRequestBuilder';
import {SecurityCloseRequestBuilder} from './securityClose/securityCloseRequestBuilder';
import {SecurityReopenRequestBuilder} from './securityReopen/securityReopenRequestBuilder';
import {SettingsRequestBuilder} from './settings/settingsRequestBuilder';
import {TagsRequestBuilder} from './tags/tagsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the ediscoveryCases property of the microsoft.graph.security.casesRoot entity.
 */
export class EdiscoveryCaseItemRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the custodians property of the microsoft.graph.security.ediscoveryCase entity. */
    public get custodians(): CustodiansRequestBuilder {
        return new CustodiansRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the noncustodialDataSources property of the microsoft.graph.security.ediscoveryCase entity. */
    public get noncustodialDataSources(): NoncustodialDataSourcesRequestBuilder {
        return new NoncustodialDataSourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the operations property of the microsoft.graph.security.ediscoveryCase entity. */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the reviewSets property of the microsoft.graph.security.ediscoveryCase entity. */
    public get reviewSets(): ReviewSetsRequestBuilder {
        return new ReviewSetsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the searches property of the microsoft.graph.security.ediscoveryCase entity. */
    public get searches(): SearchesRequestBuilder {
        return new SearchesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the close method. */
    public get securityClose(): SecurityCloseRequestBuilder {
        return new SecurityCloseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the reopen method. */
    public get securityReopen(): SecurityReopenRequestBuilder {
        return new SecurityReopenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the settings property of the microsoft.graph.security.ediscoveryCase entity. */
    public get settings(): SettingsRequestBuilder {
        return new SettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the tags property of the microsoft.graph.security.ediscoveryCase entity. */
    public get tags(): TagsRequestBuilder {
        return new TagsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new EdiscoveryCaseItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property ediscoveryCases for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: EdiscoveryCaseItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Get ediscoveryCases from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryCase
     */
    public get(requestConfiguration?: EdiscoveryCaseItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryCase | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<EdiscoveryCase>(requestInfo, createEdiscoveryCaseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property ediscoveryCases in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryCase
     */
    public patch(body: EdiscoveryCase | undefined, requestConfiguration?: EdiscoveryCaseItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryCase | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<EdiscoveryCase>(requestInfo, createEdiscoveryCaseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property ediscoveryCases for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EdiscoveryCaseItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get ediscoveryCases from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EdiscoveryCaseItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property ediscoveryCases in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EdiscoveryCase | undefined, requestConfiguration?: EdiscoveryCaseItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeEdiscoveryCase);
        return requestInfo;
    };
}
