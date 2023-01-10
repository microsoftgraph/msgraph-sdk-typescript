import {AuditLogRoot} from '../models/';
import {createAuditLogRootFromDiscriminatorValue} from '../models/createAuditLogRootFromDiscriminatorValue';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AuditLogsRequestBuilderGetRequestConfiguration} from './auditLogsRequestBuilderGetRequestConfiguration';
import {AuditLogsRequestBuilderPatchRequestConfiguration} from './auditLogsRequestBuilderPatchRequestConfiguration';
import {DirectoryAuditsRequestBuilder} from './directoryAudits/directoryAuditsRequestBuilder';
import {DirectoryAuditItemRequestBuilder} from './directoryAudits/item/directoryAuditItemRequestBuilder';
import {ProvisioningObjectSummaryItemRequestBuilder} from './provisioning/item/provisioningObjectSummaryItemRequestBuilder';
import {ProvisioningRequestBuilder} from './provisioning/provisioningRequestBuilder';
import {SignInItemRequestBuilder} from './signIns/item/signInItemRequestBuilder';
import {SignInsRequestBuilder} from './signIns/signInsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the auditLogRoot singleton.
 */
export class AuditLogsRequestBuilder {
    /** Provides operations to manage the directoryAudits property of the microsoft.graph.auditLogRoot entity. */
    public get directoryAudits(): DirectoryAuditsRequestBuilder {
        return new DirectoryAuditsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** Provides operations to manage the provisioning property of the microsoft.graph.auditLogRoot entity. */
    public get provisioning(): ProvisioningRequestBuilder {
        return new ProvisioningRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the signIns property of the microsoft.graph.auditLogRoot entity. */
    public get signIns(): SignInsRequestBuilder {
        return new SignInsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new AuditLogsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/auditLogs{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Provides operations to manage the directoryAudits property of the microsoft.graph.auditLogRoot entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryAuditItemRequestBuilder
     */
    public directoryAuditsById(id: string) : DirectoryAuditItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryAudit%2Did"] = id
        return new DirectoryAuditItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Get auditLogs
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AuditLogRoot
     */
    public get(requestConfiguration?: AuditLogsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AuditLogRoot | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AuditLogRoot>(requestInfo, createAuditLogRootFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update auditLogs
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AuditLogRoot
     */
    public patch(body: AuditLogRoot | undefined, requestConfiguration?: AuditLogsRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AuditLogRoot | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AuditLogRoot>(requestInfo, createAuditLogRootFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the provisioning property of the microsoft.graph.auditLogRoot entity.
     * @param id Unique identifier of the item
     * @returns a ProvisioningObjectSummaryItemRequestBuilder
     */
    public provisioningById(id: string) : ProvisioningObjectSummaryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["provisioningObjectSummary%2Did"] = id
        return new ProvisioningObjectSummaryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the signIns property of the microsoft.graph.auditLogRoot entity.
     * @param id Unique identifier of the item
     * @returns a SignInItemRequestBuilder
     */
    public signInsById(id: string) : SignInItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["signIn%2Did"] = id
        return new SignInItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Get auditLogs
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AuditLogsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update auditLogs
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AuditLogRoot | undefined, requestConfiguration?: AuditLogsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
