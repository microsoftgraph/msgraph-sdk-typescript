import {AuditLogRoot} from '../models/auditLogRoot';
import {createAuditLogRootFromDiscriminatorValue} from '../models/createAuditLogRootFromDiscriminatorValue';
import {deserializeIntoAuditLogRoot} from '../models/deserializeIntoAuditLogRoot';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeAuditLogRoot} from '../models/serializeAuditLogRoot';
import {AuditLogsRequestBuilderGetRequestConfiguration} from './auditLogsRequestBuilderGetRequestConfiguration';
import {AuditLogsRequestBuilderPatchRequestConfiguration} from './auditLogsRequestBuilderPatchRequestConfiguration';
import {DirectoryAuditsRequestBuilder} from './directoryAudits/directoryAuditsRequestBuilder';
import {ProvisioningRequestBuilder} from './provisioning/provisioningRequestBuilder';
import {SignInsRequestBuilder} from './signIns/signInsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the auditLogRoot singleton.
 */
export class AuditLogsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the directoryAudits property of the microsoft.graph.auditLogRoot entity.
     */
    public get directoryAudits(): DirectoryAuditsRequestBuilder {
        return new DirectoryAuditsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the provisioning property of the microsoft.graph.auditLogRoot entity.
     */
    public get provisioning(): ProvisioningRequestBuilder {
        return new ProvisioningRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the signIns property of the microsoft.graph.auditLogRoot entity.
     */
    public get signIns(): SignInsRequestBuilder {
        return new SignInsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AuditLogsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/auditLogs{?%24select,%24expand}");
    };
    /**
     * Get auditLogs
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuditLogRoot
     */
    public get(requestConfiguration?: AuditLogsRequestBuilderGetRequestConfiguration | undefined) : Promise<AuditLogRoot | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuditLogRoot>(requestInfo, createAuditLogRootFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update auditLogs
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuditLogRoot
     */
    public patch(body: AuditLogRoot | undefined, requestConfiguration?: AuditLogsRequestBuilderPatchRequestConfiguration | undefined) : Promise<AuditLogRoot | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AuditLogRoot>(requestInfo, createAuditLogRootFromDiscriminatorValue, errorMapping);
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAuditLogRoot);
        return requestInfo;
    };
}
