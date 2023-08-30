import {DomainCollectionResponse} from '../models/';
import {createDomainCollectionResponseFromDiscriminatorValue} from '../models/createDomainCollectionResponseFromDiscriminatorValue';
import {createDomainFromDiscriminatorValue} from '../models/createDomainFromDiscriminatorValue';
import {deserializeIntoDomain} from '../models/deserializeIntoDomain';
import type {Domain} from '../models/domain';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeDomain} from '../models/serializeDomain';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DomainsRequestBuilderGetRequestConfiguration} from './domainsRequestBuilderGetRequestConfiguration';
import {DomainsRequestBuilderPostRequestConfiguration} from './domainsRequestBuilderPostRequestConfiguration';
import {DomainItemRequestBuilder} from './item/domainItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of domain entities.
 */
export class DomainsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of domain entities.
     * @param domainId The unique identifier of domain
     * @returns a DomainItemRequestBuilder
     */
    public byDomainId(domainId: string) : DomainItemRequestBuilder {
        if(!domainId) throw new Error("domainId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["domain%2Did"] = domainId
        return new DomainItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DomainsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/domains{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of domain objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DomainCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/domain-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DomainsRequestBuilderGetRequestConfiguration | undefined) : Promise<DomainCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DomainCollectionResponse>(requestInfo, createDomainCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Adds a domain to the tenant. Important: You cannot use an associated domain with your Azure AD tenant until ownership is verified. See List verificationDnsRecords for details. Root domains require verification. For example, contoso.com requires verification. If a root domain is verified, subdomains of the root domain are automatically verified. For example, subdomain.contoso.com is automatically be verified if contoso.com has been verified.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Domain
     * @see {@link https://learn.microsoft.com/graph/api/domain-post-domains?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Domain, requestConfiguration?: DomainsRequestBuilderPostRequestConfiguration | undefined) : Promise<Domain | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Domain>(requestInfo, createDomainFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of domain objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DomainsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Adds a domain to the tenant. Important: You cannot use an associated domain with your Azure AD tenant until ownership is verified. See List verificationDnsRecords for details. Root domains require verification. For example, contoso.com requires verification. If a root domain is verified, subdomains of the root domain are automatically verified. For example, subdomain.contoso.com is automatically be verified if contoso.com has been verified.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Domain, requestConfiguration?: DomainsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDomain);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a domainsRequestBuilder
     */
    public withUrl(rawUrl: string) : DomainsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DomainsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
