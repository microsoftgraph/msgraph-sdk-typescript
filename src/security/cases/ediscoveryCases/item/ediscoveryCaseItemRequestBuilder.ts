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
import {MicrosoftGraphSecurityCloseRequestBuilder} from './microsoftGraphSecurityClose/microsoftGraphSecurityCloseRequestBuilder';
import {MicrosoftGraphSecurityReopenRequestBuilder} from './microsoftGraphSecurityReopen/microsoftGraphSecurityReopenRequestBuilder';
import {NoncustodialDataSourcesRequestBuilder} from './noncustodialDataSources/noncustodialDataSourcesRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {ReviewSetsRequestBuilder} from './reviewSets/reviewSetsRequestBuilder';
import {SearchesRequestBuilder} from './searches/searchesRequestBuilder';
import {SettingsRequestBuilder} from './settings/settingsRequestBuilder';
import {TagsRequestBuilder} from './tags/tagsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the ediscoveryCases property of the microsoft.graph.security.casesRoot entity.
 */
export class EdiscoveryCaseItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the custodians property of the microsoft.graph.security.ediscoveryCase entity.
     */
    public get custodians(): CustodiansRequestBuilder {
        return new CustodiansRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the close method.
     */
    public get microsoftGraphSecurityClose(): MicrosoftGraphSecurityCloseRequestBuilder {
        return new MicrosoftGraphSecurityCloseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the reopen method.
     */
    public get microsoftGraphSecurityReopen(): MicrosoftGraphSecurityReopenRequestBuilder {
        return new MicrosoftGraphSecurityReopenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the noncustodialDataSources property of the microsoft.graph.security.ediscoveryCase entity.
     */
    public get noncustodialDataSources(): NoncustodialDataSourcesRequestBuilder {
        return new NoncustodialDataSourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the operations property of the microsoft.graph.security.ediscoveryCase entity.
     */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the reviewSets property of the microsoft.graph.security.ediscoveryCase entity.
     */
    public get reviewSets(): ReviewSetsRequestBuilder {
        return new ReviewSetsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the searches property of the microsoft.graph.security.ediscoveryCase entity.
     */
    public get searches(): SearchesRequestBuilder {
        return new SearchesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the settings property of the microsoft.graph.security.ediscoveryCase entity.
     */
    public get settings(): SettingsRequestBuilder {
        return new SettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the tags property of the microsoft.graph.security.ediscoveryCase entity.
     */
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
     * Delete an ediscoveryCase object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/security-casesroot-delete-ediscoverycases?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: EdiscoveryCaseItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Read the properties and relationships of an ediscoveryCase object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryCase
     * @see {@link https://docs.microsoft.com/graph/api/security-ediscoverycase-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: EdiscoveryCaseItemRequestBuilderGetRequestConfiguration | undefined) : Promise<EdiscoveryCase | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryCase>(requestInfo, createEdiscoveryCaseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of an ediscoveryCase object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryCase
     * @see {@link https://docs.microsoft.com/graph/api/security-ediscoverycase-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: EdiscoveryCase | undefined, requestConfiguration?: EdiscoveryCaseItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<EdiscoveryCase | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryCase>(requestInfo, createEdiscoveryCaseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete an ediscoveryCase object.
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
     * Read the properties and relationships of an ediscoveryCase object.
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
     * Update the properties of an ediscoveryCase object.
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
