import {DomainDnsRecordCollectionResponse} from '../../../models/';
import {createDomainDnsRecordCollectionResponseFromDiscriminatorValue} from '../../../models/createDomainDnsRecordCollectionResponseFromDiscriminatorValue';
import {createDomainDnsRecordFromDiscriminatorValue} from '../../../models/createDomainDnsRecordFromDiscriminatorValue';
import {deserializeIntoDomainDnsRecord} from '../../../models/deserializeIntoDomainDnsRecord';
import type {DomainDnsRecord} from '../../../models/domainDnsRecord';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeDomainDnsRecord} from '../../../models/serializeDomainDnsRecord';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DomainDnsRecordItemRequestBuilder} from './item/domainDnsRecordItemRequestBuilder';
import {VerificationDnsRecordsRequestBuilderGetRequestConfiguration} from './verificationDnsRecordsRequestBuilderGetRequestConfiguration';
import {VerificationDnsRecordsRequestBuilderPostRequestConfiguration} from './verificationDnsRecordsRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the verificationDnsRecords property of the microsoft.graph.domain entity.
 */
export class VerificationDnsRecordsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the verificationDnsRecords property of the microsoft.graph.domain entity.
     * @param domainDnsRecordId Unique identifier of the item
     * @returns a DomainDnsRecordItemRequestBuilder
     */
    public byDomainDnsRecordId(domainDnsRecordId: string) : DomainDnsRecordItemRequestBuilder {
        if(!domainDnsRecordId) throw new Error("domainDnsRecordId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["domainDnsRecord%2Did"] = domainDnsRecordId
        return new DomainDnsRecordItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new VerificationDnsRecordsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/domains/{domain%2Did}/verificationDnsRecords{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of domainDnsRecord objects. You cannot use an associated domain with your Azure AD tenant until ownership is verified. To verify the ownership of the domain, retrieve the domain verification records and add the details to the zone file of the domain. This can be done through the domain registrar or DNS server configuration. Root domains require verification. For example, contoso.com requires verification. If a root domain is verified, subdomains of the root domain are automatically verified. For example, subdomain.contoso.com is automatically be verified if contoso.com has been verified.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DomainDnsRecordCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/domain-list-verificationdnsrecords?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: VerificationDnsRecordsRequestBuilderGetRequestConfiguration | undefined) : Promise<DomainDnsRecordCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DomainDnsRecordCollectionResponse>(requestInfo, createDomainDnsRecordCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to verificationDnsRecords for domains
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DomainDnsRecord
     */
    public post(body: DomainDnsRecord, requestConfiguration?: VerificationDnsRecordsRequestBuilderPostRequestConfiguration | undefined) : Promise<DomainDnsRecord | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DomainDnsRecord>(requestInfo, createDomainDnsRecordFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of domainDnsRecord objects. You cannot use an associated domain with your Azure AD tenant until ownership is verified. To verify the ownership of the domain, retrieve the domain verification records and add the details to the zone file of the domain. This can be done through the domain registrar or DNS server configuration. Root domains require verification. For example, contoso.com requires verification. If a root domain is verified, subdomains of the root domain are automatically verified. For example, subdomain.contoso.com is automatically be verified if contoso.com has been verified.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: VerificationDnsRecordsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to verificationDnsRecords for domains
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DomainDnsRecord, requestConfiguration?: VerificationDnsRecordsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDomainDnsRecord);
        return requestInfo;
    };
}
