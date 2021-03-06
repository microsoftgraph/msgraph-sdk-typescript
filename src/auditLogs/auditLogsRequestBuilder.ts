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
import {RestrictedSignInItemRequestBuilder} from './restrictedSignIns/item/restrictedSignInItemRequestBuilder';
import {RestrictedSignInsRequestBuilder} from './restrictedSignIns/restrictedSignInsRequestBuilder';
import {SignInItemRequestBuilder} from './signIns/item/signInItemRequestBuilder';
import {SignInsRequestBuilder} from './signIns/signInsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the auditLogRoot singleton. */
export class AuditLogsRequestBuilder {
    /** The directoryAudits property */
    public get directoryAudits(): DirectoryAuditsRequestBuilder {
        return new DirectoryAuditsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The provisioning property */
    public get provisioning(): ProvisioningRequestBuilder {
        return new ProvisioningRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The restrictedSignIns property */
    public get restrictedSignIns(): RestrictedSignInsRequestBuilder {
        return new RestrictedSignInsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The signIns property */
    public get signIns(): SignInsRequestBuilder {
        return new SignInsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
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
     * Contains different types of audit logs. This resources returns a singleton auditLog resource. It doesn't contain any usable properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: AuditLogsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update auditLogs
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: AuditLogRoot | undefined, requestConfiguration?: AuditLogsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.auditLogs.directoryAudits.item collection
     * @param id Unique identifier of the item
     * @returns a directoryAuditItemRequestBuilder
     */
    public directoryAuditsById(id: string) : DirectoryAuditItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryAudit%2Did"] = id
        return new DirectoryAuditItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Contains different types of audit logs. This resources returns a singleton auditLog resource. It doesn't contain any usable properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AuditLogRoot
     */
    public get(requestConfiguration?: AuditLogsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AuditLogRoot | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AuditLogRoot>(requestInfo, createAuditLogRootFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update auditLogs
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: AuditLogRoot | undefined, requestConfiguration?: AuditLogsRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.auditLogs.provisioning.item collection
     * @param id Unique identifier of the item
     * @returns a provisioningObjectSummaryItemRequestBuilder
     */
    public provisioningById(id: string) : ProvisioningObjectSummaryItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["provisioningObjectSummary%2Did"] = id
        return new ProvisioningObjectSummaryItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.auditLogs.restrictedSignIns.item collection
     * @param id Unique identifier of the item
     * @returns a restrictedSignInItemRequestBuilder
     */
    public restrictedSignInsById(id: string) : RestrictedSignInItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["restrictedSignIn%2Did"] = id
        return new RestrictedSignInItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.auditLogs.signIns.item collection
     * @param id Unique identifier of the item
     * @returns a signInItemRequestBuilder
     */
    public signInsById(id: string) : SignInItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["signIn%2Did"] = id
        return new SignInItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
