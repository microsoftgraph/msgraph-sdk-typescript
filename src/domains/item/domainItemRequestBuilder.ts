import {Domain} from '../../models/';
import {createDomainFromDiscriminatorValue} from '../../models/createDomainFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {DomainItemRequestBuilderDeleteRequestConfiguration} from './domainItemRequestBuilderDeleteRequestConfiguration';
import {DomainItemRequestBuilderGetRequestConfiguration} from './domainItemRequestBuilderGetRequestConfiguration';
import {DomainItemRequestBuilderPatchRequestConfiguration} from './domainItemRequestBuilderPatchRequestConfiguration';
import {DomainNameReferencesRequestBuilder} from './domainNameReferences/domainNameReferencesRequestBuilder';
import {DirectoryObjectItemRequestBuilder} from './domainNameReferences/item/directoryObjectItemRequestBuilder';
import {FederationConfigurationRequestBuilder} from './federationConfiguration/federationConfigurationRequestBuilder';
import {InternalDomainFederationItemRequestBuilder} from './federationConfiguration/item/internalDomainFederationItemRequestBuilder';
import {ForceDeleteRequestBuilder} from './microsoftGraphForceDelete/forceDeleteRequestBuilder';
import {PromoteRequestBuilder} from './microsoftGraphPromote/promoteRequestBuilder';
import {VerifyRequestBuilder} from './microsoftGraphVerify/verifyRequestBuilder';
import {DomainDnsRecordItemRequestBuilder as I645b7a6c2b2e75703879ecf7aedd6400ebb0b1e58a2b8a9feaf4bbea098347da} from './serviceConfigurationRecords/item/domainDnsRecordItemRequestBuilder';
import {ServiceConfigurationRecordsRequestBuilder} from './serviceConfigurationRecords/serviceConfigurationRecordsRequestBuilder';
import {DomainDnsRecordItemRequestBuilder as Ib1b6b04364f5e14b4cb6820dc9f0e89b24894aa2bef616b4a1220973381758c2} from './verificationDnsRecords/item/domainDnsRecordItemRequestBuilder';
import {VerificationDnsRecordsRequestBuilder} from './verificationDnsRecords/verificationDnsRecordsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of domain entities.
 */
export class DomainItemRequestBuilder {
    /** Provides operations to manage the domainNameReferences property of the microsoft.graph.domain entity. */
    public get domainNameReferences(): DomainNameReferencesRequestBuilder {
        return new DomainNameReferencesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the federationConfiguration property of the microsoft.graph.domain entity. */
    public get federationConfiguration(): FederationConfigurationRequestBuilder {
        return new FederationConfigurationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the forceDelete method. */
    public get microsoftGraphForceDelete(): ForceDeleteRequestBuilder {
        return new ForceDeleteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the promote method. */
    public get microsoftGraphPromote(): PromoteRequestBuilder {
        return new PromoteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the verify method. */
    public get microsoftGraphVerify(): VerifyRequestBuilder {
        return new VerifyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Provides operations to manage the serviceConfigurationRecords property of the microsoft.graph.domain entity. */
    public get serviceConfigurationRecords(): ServiceConfigurationRecordsRequestBuilder {
        return new ServiceConfigurationRecordsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /** Provides operations to manage the verificationDnsRecords property of the microsoft.graph.domain entity. */
    public get verificationDnsRecords(): VerificationDnsRecordsRequestBuilder {
        return new VerificationDnsRecordsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DomainItemRequestBuilder and sets the default values.
     * @param domainId key: id of domain
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, domainId?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/domains/{domain%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["domain%2Did"] = domainId
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Deletes a domain from a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @see {@link https://docs.microsoft.com/graph/api/domain-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: DomainItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Provides operations to manage the domainNameReferences property of the microsoft.graph.domain entity.
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public domainNameReferencesById(id: string) : DirectoryObjectItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new DirectoryObjectItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Provides operations to manage the federationConfiguration property of the microsoft.graph.domain entity.
     * @param id Unique identifier of the item
     * @returns a InternalDomainFederationItemRequestBuilder
     */
    public federationConfigurationById(id: string) : InternalDomainFederationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["internalDomainFederation%2Did"] = id
        return new InternalDomainFederationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Retrieve the properties and relationships of domain object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Domain
     * @see {@link https://docs.microsoft.com/graph/api/domain-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DomainItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Domain | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Domain>(requestInfo, createDomainFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the properties of domain object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Domain
     * @see {@link https://docs.microsoft.com/graph/api/domain-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: Domain | undefined, requestConfiguration?: DomainItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Domain | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Domain>(requestInfo, createDomainFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Provides operations to manage the serviceConfigurationRecords property of the microsoft.graph.domain entity.
     * @param id Unique identifier of the item
     * @returns a DomainDnsRecordItemRequestBuilder
     */
    public serviceConfigurationRecordsById(id: string) : I645b7a6c2b2e75703879ecf7aedd6400ebb0b1e58a2b8a9feaf4bbea098347da {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["domainDnsRecord%2Did"] = id
        return new I645b7a6c2b2e75703879ecf7aedd6400ebb0b1e58a2b8a9feaf4bbea098347da(urlTplParams, this.requestAdapter);
    };
    /**
     * Deletes a domain from a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DomainItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of domain object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DomainItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of domain object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Domain | undefined, requestConfiguration?: DomainItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
     * Provides operations to manage the verificationDnsRecords property of the microsoft.graph.domain entity.
     * @param id Unique identifier of the item
     * @returns a DomainDnsRecordItemRequestBuilder
     */
    public verificationDnsRecordsById(id: string) : Ib1b6b04364f5e14b4cb6820dc9f0e89b24894aa2bef616b4a1220973381758c2 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["domainDnsRecord%2Did"] = id
        return new Ib1b6b04364f5e14b4cb6820dc9f0e89b24894aa2bef616b4a1220973381758c2(urlTplParams, this.requestAdapter);
    };
}
