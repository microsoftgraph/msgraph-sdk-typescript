import {createDomainFromDiscriminatorValue} from '../../models/createDomainFromDiscriminatorValue';
import {deserializeIntoDomain} from '../../models/deserializeIntoDomain';
import {Domain} from '../../models/domain';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeDomain} from '../../models/serializeDomain';
import {DomainItemRequestBuilderDeleteRequestConfiguration} from './domainItemRequestBuilderDeleteRequestConfiguration';
import {DomainItemRequestBuilderGetRequestConfiguration} from './domainItemRequestBuilderGetRequestConfiguration';
import {DomainItemRequestBuilderPatchRequestConfiguration} from './domainItemRequestBuilderPatchRequestConfiguration';
import {DomainNameReferencesRequestBuilder} from './domainNameReferences/domainNameReferencesRequestBuilder';
import {FederationConfigurationRequestBuilder} from './federationConfiguration/federationConfigurationRequestBuilder';
import {ForceDeleteRequestBuilder} from './forceDelete/forceDeleteRequestBuilder';
import {PromoteRequestBuilder} from './promote/promoteRequestBuilder';
import {ServiceConfigurationRecordsRequestBuilder} from './serviceConfigurationRecords/serviceConfigurationRecordsRequestBuilder';
import {VerificationDnsRecordsRequestBuilder} from './verificationDnsRecords/verificationDnsRecordsRequestBuilder';
import {VerifyRequestBuilder} from './verify/verifyRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of domain entities.
 */
export class DomainItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the domainNameReferences property of the microsoft.graph.domain entity.
     */
    public get domainNameReferences(): DomainNameReferencesRequestBuilder {
        return new DomainNameReferencesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the federationConfiguration property of the microsoft.graph.domain entity.
     */
    public get federationConfiguration(): FederationConfigurationRequestBuilder {
        return new FederationConfigurationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the forceDelete method.
     */
    public get forceDelete(): ForceDeleteRequestBuilder {
        return new ForceDeleteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the promote method.
     */
    public get promote(): PromoteRequestBuilder {
        return new PromoteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the serviceConfigurationRecords property of the microsoft.graph.domain entity.
     */
    public get serviceConfigurationRecords(): ServiceConfigurationRecordsRequestBuilder {
        return new ServiceConfigurationRecordsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the verificationDnsRecords property of the microsoft.graph.domain entity.
     */
    public get verificationDnsRecords(): VerificationDnsRecordsRequestBuilder {
        return new VerificationDnsRecordsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the verify method.
     */
    public get verify(): VerifyRequestBuilder {
        return new VerifyRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new DomainItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/domains/{domain%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a domain from a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/domain-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: DomainItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of domain object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Domain
     * @see {@link https://docs.microsoft.com/graph/api/domain-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DomainItemRequestBuilderGetRequestConfiguration | undefined) : Promise<Domain | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Domain>(requestInfo, createDomainFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of domain object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Domain
     * @see {@link https://docs.microsoft.com/graph/api/domain-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: Domain | undefined, requestConfiguration?: DomainItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<Domain | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Domain>(requestInfo, createDomainFromDiscriminatorValue, errorMapping);
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDomain);
        return requestInfo;
    };
}
