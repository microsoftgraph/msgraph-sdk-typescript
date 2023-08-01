import {DomainDnsRecordCollectionResponse} from '../models/';
import {createDomainDnsRecordCollectionResponseFromDiscriminatorValue} from '../models/createDomainDnsRecordCollectionResponseFromDiscriminatorValue';
import {createDomainDnsRecordFromDiscriminatorValue} from '../models/createDomainDnsRecordFromDiscriminatorValue';
import {deserializeIntoDomainDnsRecord} from '../models/deserializeIntoDomainDnsRecord';
import type {DomainDnsRecord} from '../models/domainDnsRecord';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeDomainDnsRecord} from '../models/serializeDomainDnsRecord';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DomainDnsRecordsRequestBuilderGetRequestConfiguration} from './domainDnsRecordsRequestBuilderGetRequestConfiguration';
import {DomainDnsRecordsRequestBuilderPostRequestConfiguration} from './domainDnsRecordsRequestBuilderPostRequestConfiguration';
import {DomainDnsRecordItemRequestBuilder} from './item/domainDnsRecordItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of domainDnsRecord entities.
 */
export class DomainDnsRecordsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of domainDnsRecord entities.
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
     * Instantiates a new DomainDnsRecordsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/domainDnsRecords{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get entities from domainDnsRecords
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DomainDnsRecordCollectionResponse
     */
    public get(requestConfiguration?: DomainDnsRecordsRequestBuilderGetRequestConfiguration | undefined) : Promise<DomainDnsRecordCollectionResponse | undefined> {
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
     * Add new entity to domainDnsRecords
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DomainDnsRecord
     */
    public post(body: DomainDnsRecord | undefined, requestConfiguration?: DomainDnsRecordsRequestBuilderPostRequestConfiguration | undefined) : Promise<DomainDnsRecord | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
     * Get entities from domainDnsRecords
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DomainDnsRecordsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add new entity to domainDnsRecords
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DomainDnsRecord | undefined, requestConfiguration?: DomainDnsRecordsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDomainDnsRecord);
        return requestInfo;
    };
}
