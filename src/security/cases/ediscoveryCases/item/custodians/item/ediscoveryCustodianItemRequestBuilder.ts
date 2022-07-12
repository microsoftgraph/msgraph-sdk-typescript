import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {EdiscoveryCustodian} from '../../../../../../models/security/';
import {createEdiscoveryCustodianFromDiscriminatorValue} from '../../../../../../models/security/createEdiscoveryCustodianFromDiscriminatorValue';
import {ActivateRequestBuilder} from './activate/activateRequestBuilder';
import {ApplyHoldRequestBuilder} from './applyHold/applyHoldRequestBuilder';
import {EdiscoveryCustodianItemRequestBuilderDeleteRequestConfiguration} from './ediscoveryCustodianItemRequestBuilderDeleteRequestConfiguration';
import {EdiscoveryCustodianItemRequestBuilderGetRequestConfiguration} from './ediscoveryCustodianItemRequestBuilderGetRequestConfiguration';
import {EdiscoveryCustodianItemRequestBuilderPatchRequestConfiguration} from './ediscoveryCustodianItemRequestBuilderPatchRequestConfiguration';
import {LastIndexOperationRequestBuilder} from './lastIndexOperation/lastIndexOperationRequestBuilder';
import {ReleaseRequestBuilder} from './release/releaseRequestBuilder';
import {RemoveHoldRequestBuilder} from './removeHold/removeHoldRequestBuilder';
import {SiteSourceItemRequestBuilder} from './siteSources/item/siteSourceItemRequestBuilder';
import {SiteSourcesRequestBuilder} from './siteSources/siteSourcesRequestBuilder';
import {UnifiedGroupSourceItemRequestBuilder} from './unifiedGroupSources/item/unifiedGroupSourceItemRequestBuilder';
import {UnifiedGroupSourcesRequestBuilder} from './unifiedGroupSources/unifiedGroupSourcesRequestBuilder';
import {UpdateIndexRequestBuilder} from './updateIndex/updateIndexRequestBuilder';
import {UserSourceItemRequestBuilder} from './userSources/item/userSourceItemRequestBuilder';
import {UserSourcesRequestBuilder} from './userSources/userSourcesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the custodians property of the microsoft.graph.security.ediscoveryCase entity. */
export class EdiscoveryCustodianItemRequestBuilder {
    /** The activate property */
    public get activate(): ActivateRequestBuilder {
        return new ActivateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The applyHold property */
    public get applyHold(): ApplyHoldRequestBuilder {
        return new ApplyHoldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The lastIndexOperation property */
    public get lastIndexOperation(): LastIndexOperationRequestBuilder {
        return new LastIndexOperationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The release property */
    public get release(): ReleaseRequestBuilder {
        return new ReleaseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The removeHold property */
    public get removeHold(): RemoveHoldRequestBuilder {
        return new RemoveHoldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The siteSources property */
    public get siteSources(): SiteSourcesRequestBuilder {
        return new SiteSourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unifiedGroupSources property */
    public get unifiedGroupSources(): UnifiedGroupSourcesRequestBuilder {
        return new UnifiedGroupSourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The updateIndex property */
    public get updateIndex(): UpdateIndexRequestBuilder {
        return new UpdateIndexRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /** The userSources property */
    public get userSources(): UserSourcesRequestBuilder {
        return new UserSourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new EdiscoveryCustodianItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/custodians/{ediscoveryCustodian%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property custodians for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: EdiscoveryCustodianItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a list of case ediscoveryCustodian objects for this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: EdiscoveryCustodianItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property custodians in security
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: EdiscoveryCustodian | undefined, requestConfiguration?: EdiscoveryCustodianItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
     * Delete navigation property custodians for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: EdiscoveryCustodianItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Returns a list of case ediscoveryCustodian objects for this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryCustodian
     */
    public get(requestConfiguration?: EdiscoveryCustodianItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryCustodian | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EdiscoveryCustodian>(requestInfo, createEdiscoveryCustodianFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the navigation property custodians in security
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: EdiscoveryCustodian | undefined, requestConfiguration?: EdiscoveryCustodianItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.security.cases.ediscoveryCases.item.custodians.item.siteSources.item collection
     * @param id Unique identifier of the item
     * @returns a siteSourceItemRequestBuilder
     */
    public siteSourcesById(id: string) : SiteSourceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["siteSource%2Did"] = id
        return new SiteSourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.security.cases.ediscoveryCases.item.custodians.item.unifiedGroupSources.item collection
     * @param id Unique identifier of the item
     * @returns a unifiedGroupSourceItemRequestBuilder
     */
    public unifiedGroupSourcesById(id: string) : UnifiedGroupSourceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedGroupSource%2Did"] = id
        return new UnifiedGroupSourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.security.cases.ediscoveryCases.item.custodians.item.userSources.item collection
     * @param id Unique identifier of the item
     * @returns a userSourceItemRequestBuilder
     */
    public userSourcesById(id: string) : UserSourceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userSource%2Did"] = id
        return new UserSourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
