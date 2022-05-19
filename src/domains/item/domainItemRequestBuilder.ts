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
import {ForceDeleteRequestBuilder} from './forceDelete/forceDeleteRequestBuilder';
import {DomainDnsRecordItemRequestBuilder as if42c50e3e2ba9cccdeb447503ef296586e785bdceb37d68d3f26a20ec7a74730} from './serviceConfigurationRecords/item/domainDnsRecordItemRequestBuilder';
import {ServiceConfigurationRecordsRequestBuilder} from './serviceConfigurationRecords/serviceConfigurationRecordsRequestBuilder';
import {DomainDnsRecordItemRequestBuilder as i34c2b049a11a56a0e845314c4913041442dc5d005e49ac8abe88e67f09a2a130} from './verificationDnsRecords/item/domainDnsRecordItemRequestBuilder';
import {VerificationDnsRecordsRequestBuilder} from './verificationDnsRecords/verificationDnsRecordsRequestBuilder';
import {VerifyRequestBuilder} from './verify/verifyRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of domain entities. */
export class DomainItemRequestBuilder {
    /** The domainNameReferences property */
    public get domainNameReferences(): DomainNameReferencesRequestBuilder {
        return new DomainNameReferencesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The federationConfiguration property */
    public get federationConfiguration(): FederationConfigurationRequestBuilder {
        return new FederationConfigurationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The forceDelete property */
    public get forceDelete(): ForceDeleteRequestBuilder {
        return new ForceDeleteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The serviceConfigurationRecords property */
    public get serviceConfigurationRecords(): ServiceConfigurationRecordsRequestBuilder {
        return new ServiceConfigurationRecordsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /** The verificationDnsRecords property */
    public get verificationDnsRecords(): VerificationDnsRecordsRequestBuilder {
        return new VerificationDnsRecordsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The verify property */
    public get verify(): VerifyRequestBuilder {
        return new VerifyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DomainItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/domains/{domain%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Deletes a domain from a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: DomainItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
    public createGetRequestInformation(requestConfiguration?: DomainItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of domain object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Domain | undefined, requestConfiguration?: DomainItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
     * Deletes a domain from a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: DomainItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.domains.item.domainNameReferences.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public domainNameReferencesById(id: string) : DirectoryObjectItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new DirectoryObjectItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.domains.item.federationConfiguration.item collection
     * @param id Unique identifier of the item
     * @returns a internalDomainFederationItemRequestBuilder
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
     */
    public get(requestConfiguration?: DomainItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Domain | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Domain>(requestInfo, createDomainFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the properties of domain object.
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Domain | undefined, requestConfiguration?: DomainItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.domains.item.serviceConfigurationRecords.item collection
     * @param id Unique identifier of the item
     * @returns a domainDnsRecordItemRequestBuilder
     */
    public serviceConfigurationRecordsById(id: string) : if42c50e3e2ba9cccdeb447503ef296586e785bdceb37d68d3f26a20ec7a74730 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["domainDnsRecord%2Did"] = id
        return new if42c50e3e2ba9cccdeb447503ef296586e785bdceb37d68d3f26a20ec7a74730(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.domains.item.verificationDnsRecords.item collection
     * @param id Unique identifier of the item
     * @returns a domainDnsRecordItemRequestBuilder
     */
    public verificationDnsRecordsById(id: string) : i34c2b049a11a56a0e845314c4913041442dc5d005e49ac8abe88e67f09a2a130 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["domainDnsRecord%2Did"] = id
        return new i34c2b049a11a56a0e845314c4913041442dc5d005e49ac8abe88e67f09a2a130(urlTplParams, this.requestAdapter);
    };
}
