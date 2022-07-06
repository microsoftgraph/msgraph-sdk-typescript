import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {EdiscoveryCase} from '../../../../models/security/';
import {createEdiscoveryCaseFromDiscriminatorValue} from '../../../../models/security/createEdiscoveryCaseFromDiscriminatorValue';
import {CloseRequestBuilder} from './close/closeRequestBuilder';
import {CustodiansRequestBuilder} from './custodians/custodiansRequestBuilder';
import {EdiscoveryCustodianItemRequestBuilder} from './custodians/item/ediscoveryCustodianItemRequestBuilder';
import {EdiscoveryCaseItemRequestBuilderDeleteRequestConfiguration} from './ediscoveryCaseItemRequestBuilderDeleteRequestConfiguration';
import {EdiscoveryCaseItemRequestBuilderGetRequestConfiguration} from './ediscoveryCaseItemRequestBuilderGetRequestConfiguration';
import {EdiscoveryCaseItemRequestBuilderPatchRequestConfiguration} from './ediscoveryCaseItemRequestBuilderPatchRequestConfiguration';
import {EdiscoveryNoncustodialDataSourceItemRequestBuilder} from './noncustodialDataSources/item/ediscoveryNoncustodialDataSourceItemRequestBuilder';
import {NoncustodialDataSourcesRequestBuilder} from './noncustodialDataSources/noncustodialDataSourcesRequestBuilder';
import {CaseOperationItemRequestBuilder} from './operations/item/caseOperationItemRequestBuilder';
import {OperationsRequestBuilder} from './operations/operationsRequestBuilder';
import {ReopenRequestBuilder} from './reopen/reopenRequestBuilder';
import {EdiscoveryReviewSetItemRequestBuilder} from './reviewSets/item/ediscoveryReviewSetItemRequestBuilder';
import {ReviewSetsRequestBuilder} from './reviewSets/reviewSetsRequestBuilder';
import {EdiscoverySearchItemRequestBuilder} from './searches/item/ediscoverySearchItemRequestBuilder';
import {SearchesRequestBuilder} from './searches/searchesRequestBuilder';
import {SettingsRequestBuilder} from './settings/settingsRequestBuilder';
import {EdiscoveryReviewTagItemRequestBuilder} from './tags/item/ediscoveryReviewTagItemRequestBuilder';
import {TagsRequestBuilder} from './tags/tagsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the ediscoveryCases property of the microsoft.graph.security.casesRoot entity. */
export class EdiscoveryCaseItemRequestBuilder {
    /** The close property */
    public get close(): CloseRequestBuilder {
        return new CloseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The custodians property */
    public get custodians(): CustodiansRequestBuilder {
        return new CustodiansRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The noncustodialDataSources property */
    public get noncustodialDataSources(): NoncustodialDataSourcesRequestBuilder {
        return new NoncustodialDataSourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The operations property */
    public get operations(): OperationsRequestBuilder {
        return new OperationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The reopen property */
    public get reopen(): ReopenRequestBuilder {
        return new ReopenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The reviewSets property */
    public get reviewSets(): ReviewSetsRequestBuilder {
        return new ReviewSetsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The searches property */
    public get searches(): SearchesRequestBuilder {
        return new SearchesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The settings property */
    public get settings(): SettingsRequestBuilder {
        return new SettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The tags property */
    public get tags(): TagsRequestBuilder {
        return new TagsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new EdiscoveryCaseItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property ediscoveryCases for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: EdiscoveryCaseItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
    public createGetRequestInformation(requestConfiguration?: EdiscoveryCaseItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property ediscoveryCases in security
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: EdiscoveryCase | undefined, requestConfiguration?: EdiscoveryCaseItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.security.cases.ediscoveryCases.item.custodians.item collection
     * @param id Unique identifier of the item
     * @returns a ediscoveryCustodianItemRequestBuilder
     */
    public custodiansById(id: string) : EdiscoveryCustodianItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["ediscoveryCustodian%2Did"] = id
        return new EdiscoveryCustodianItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property ediscoveryCases for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: EdiscoveryCaseItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Get ediscoveryCases from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryCase
     */
    public get(requestConfiguration?: EdiscoveryCaseItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryCase | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EdiscoveryCase>(requestInfo, createEdiscoveryCaseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.security.cases.ediscoveryCases.item.noncustodialDataSources.item collection
     * @param id Unique identifier of the item
     * @returns a ediscoveryNoncustodialDataSourceItemRequestBuilder
     */
    public noncustodialDataSourcesById(id: string) : EdiscoveryNoncustodialDataSourceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["ediscoveryNoncustodialDataSource%2Did"] = id
        return new EdiscoveryNoncustodialDataSourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.security.cases.ediscoveryCases.item.operations.item collection
     * @param id Unique identifier of the item
     * @returns a caseOperationItemRequestBuilder
     */
    public operationsById(id: string) : CaseOperationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["caseOperation%2Did"] = id
        return new CaseOperationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property ediscoveryCases in security
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: EdiscoveryCase | undefined, requestConfiguration?: EdiscoveryCaseItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.security.cases.ediscoveryCases.item.reviewSets.item collection
     * @param id Unique identifier of the item
     * @returns a ediscoveryReviewSetItemRequestBuilder
     */
    public reviewSetsById(id: string) : EdiscoveryReviewSetItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["ediscoveryReviewSet%2Did"] = id
        return new EdiscoveryReviewSetItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.security.cases.ediscoveryCases.item.searches.item collection
     * @param id Unique identifier of the item
     * @returns a ediscoverySearchItemRequestBuilder
     */
    public searchesById(id: string) : EdiscoverySearchItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["ediscoverySearch%2Did"] = id
        return new EdiscoverySearchItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.security.cases.ediscoveryCases.item.tags.item collection
     * @param id Unique identifier of the item
     * @returns a ediscoveryReviewTagItemRequestBuilder
     */
    public tagsById(id: string) : EdiscoveryReviewTagItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["ediscoveryReviewTag%2Did"] = id
        return new EdiscoveryReviewTagItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
