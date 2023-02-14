import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {EdiscoveryCustodian} from '../../../../../../models/security/';
import {createEdiscoveryCustodianFromDiscriminatorValue} from '../../../../../../models/security/createEdiscoveryCustodianFromDiscriminatorValue';
import {EdiscoveryCustodianItemRequestBuilderDeleteRequestConfiguration} from './ediscoveryCustodianItemRequestBuilderDeleteRequestConfiguration';
import {EdiscoveryCustodianItemRequestBuilderGetRequestConfiguration} from './ediscoveryCustodianItemRequestBuilderGetRequestConfiguration';
import {EdiscoveryCustodianItemRequestBuilderPatchRequestConfiguration} from './ediscoveryCustodianItemRequestBuilderPatchRequestConfiguration';
import {LastIndexOperationRequestBuilder} from './lastIndexOperation/lastIndexOperationRequestBuilder';
import {MicrosoftGraphSecurityActivateRequestBuilder} from './microsoftGraphSecurityActivate/microsoftGraphSecurityActivateRequestBuilder';
import {MicrosoftGraphSecurityApplyHoldRequestBuilder} from './microsoftGraphSecurityApplyHold/microsoftGraphSecurityApplyHoldRequestBuilder';
import {MicrosoftGraphSecurityReleaseRequestBuilder} from './microsoftGraphSecurityRelease/microsoftGraphSecurityReleaseRequestBuilder';
import {MicrosoftGraphSecurityRemoveHoldRequestBuilder} from './microsoftGraphSecurityRemoveHold/microsoftGraphSecurityRemoveHoldRequestBuilder';
import {MicrosoftGraphSecurityUpdateIndexRequestBuilder} from './microsoftGraphSecurityUpdateIndex/microsoftGraphSecurityUpdateIndexRequestBuilder';
import {SiteSourceItemRequestBuilder} from './siteSources/item/siteSourceItemRequestBuilder';
import {SiteSourcesRequestBuilder} from './siteSources/siteSourcesRequestBuilder';
import {UnifiedGroupSourceItemRequestBuilder} from './unifiedGroupSources/item/unifiedGroupSourceItemRequestBuilder';
import {UnifiedGroupSourcesRequestBuilder} from './unifiedGroupSources/unifiedGroupSourcesRequestBuilder';
import {UserSourceItemRequestBuilder} from './userSources/item/userSourceItemRequestBuilder';
import {UserSourcesRequestBuilder} from './userSources/userSourcesRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the custodians property of the microsoft.graph.security.ediscoveryCase entity.
 */
export class EdiscoveryCustodianItemRequestBuilder {
    /** Provides operations to manage the lastIndexOperation property of the microsoft.graph.security.ediscoveryCustodian entity. */
    public get lastIndexOperation(): LastIndexOperationRequestBuilder {
        return new LastIndexOperationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the activate method. */
    public get microsoftGraphSecurityActivate(): MicrosoftGraphSecurityActivateRequestBuilder {
        return new MicrosoftGraphSecurityActivateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the applyHold method. */
    public get microsoftGraphSecurityApplyHold(): MicrosoftGraphSecurityApplyHoldRequestBuilder {
        return new MicrosoftGraphSecurityApplyHoldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the release method. */
    public get microsoftGraphSecurityRelease(): MicrosoftGraphSecurityReleaseRequestBuilder {
        return new MicrosoftGraphSecurityReleaseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the removeHold method. */
    public get microsoftGraphSecurityRemoveHold(): MicrosoftGraphSecurityRemoveHoldRequestBuilder {
        return new MicrosoftGraphSecurityRemoveHoldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the updateIndex method. */
    public get microsoftGraphSecurityUpdateIndex(): MicrosoftGraphSecurityUpdateIndexRequestBuilder {
        return new MicrosoftGraphSecurityUpdateIndexRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the siteSources property of the microsoft.graph.security.ediscoveryCustodian entity. */
    public get siteSources(): SiteSourcesRequestBuilder {
        return new SiteSourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the unifiedGroupSources property of the microsoft.graph.security.ediscoveryCustodian entity. */
    public get unifiedGroupSources(): UnifiedGroupSourcesRequestBuilder {
        return new UnifiedGroupSourcesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /** Provides operations to manage the userSources property of the microsoft.graph.security.ediscoveryCustodian entity. */
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
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: EdiscoveryCustodianItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Returns a list of case ediscoveryCustodian objects for this case.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryCustodian
     */
    public get(requestConfiguration?: EdiscoveryCustodianItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryCustodian | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EdiscoveryCustodian>(requestInfo, createEdiscoveryCustodianFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property custodians in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of EdiscoveryCustodian
     */
    public patch(body: EdiscoveryCustodian | undefined, requestConfiguration?: EdiscoveryCustodianItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<EdiscoveryCustodian | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<EdiscoveryCustodian>(requestInfo, createEdiscoveryCustodianFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the siteSources property of the microsoft.graph.security.ediscoveryCustodian entity.
     * @param id Unique identifier of the item
     * @returns a SiteSourceItemRequestBuilder
     */
    public siteSourcesById(id: string) : SiteSourceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["siteSource%2Did"] = id
        return new SiteSourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Delete navigation property custodians for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EdiscoveryCustodianItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
    public toGetRequestInformation(requestConfiguration?: EdiscoveryCustodianItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property custodians in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EdiscoveryCustodian | undefined, requestConfiguration?: EdiscoveryCustodianItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
    /**
     * Provides operations to manage the unifiedGroupSources property of the microsoft.graph.security.ediscoveryCustodian entity.
     * @param id Unique identifier of the item
     * @returns a UnifiedGroupSourceItemRequestBuilder
     */
    public unifiedGroupSourcesById(id: string) : UnifiedGroupSourceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["unifiedGroupSource%2Did"] = id
        return new UnifiedGroupSourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the userSources property of the microsoft.graph.security.ediscoveryCustodian entity.
     * @param id Unique identifier of the item
     * @returns a UserSourceItemRequestBuilder
     */
    public userSourcesById(id: string) : UserSourceItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userSource%2Did"] = id
        return new UserSourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
