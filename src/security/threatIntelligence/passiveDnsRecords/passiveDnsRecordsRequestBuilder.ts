import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../models/oDataErrors/oDataError';
import { type PassiveDnsRecordCollectionResponse } from '../../../models/security/';
import { createPassiveDnsRecordFromDiscriminatorValue, deserializeIntoPassiveDnsRecord, serializePassiveDnsRecord, type PassiveDnsRecord } from '../../../models/security/passiveDnsRecord';
import { createPassiveDnsRecordCollectionResponseFromDiscriminatorValue } from '../../../models/security/passiveDnsRecordCollectionResponse';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { PassiveDnsRecordItemRequestBuilder } from './item/passiveDnsRecordItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface PassiveDnsRecordsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
export interface PassiveDnsRecordsRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: PassiveDnsRecordsRequestBuilderGetQueryParameters;
}
export interface PassiveDnsRecordsRequestBuilderPostRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the passiveDnsRecords property of the microsoft.graph.security.threatIntelligence entity.
 */
export class PassiveDnsRecordsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the passiveDnsRecords property of the microsoft.graph.security.threatIntelligence entity.
     * @param passiveDnsRecordId The unique identifier of passiveDnsRecord
     * @returns a PassiveDnsRecordItemRequestBuilder
     */
    public byPassiveDnsRecordId(passiveDnsRecordId: string) : PassiveDnsRecordItemRequestBuilder {
        if(!passiveDnsRecordId) throw new Error("passiveDnsRecordId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["passiveDnsRecord%2Did"] = passiveDnsRecordId
        return new PassiveDnsRecordItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PassiveDnsRecordsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/passiveDnsRecords{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Read the properties and relationships of a passiveDnsRecord object. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PassiveDnsRecordCollectionResponse
     */
    public get(requestConfiguration?: PassiveDnsRecordsRequestBuilderGetRequestConfiguration | undefined) : Promise<PassiveDnsRecordCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PassiveDnsRecordCollectionResponse>(requestInfo, createPassiveDnsRecordCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to passiveDnsRecords for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PassiveDnsRecord
     */
    public post(body: PassiveDnsRecord, requestConfiguration?: PassiveDnsRecordsRequestBuilderPostRequestConfiguration | undefined) : Promise<PassiveDnsRecord | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PassiveDnsRecord>(requestInfo, createPassiveDnsRecordFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read the properties and relationships of a passiveDnsRecord object. This API is supported in the following national cloud deployments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PassiveDnsRecordsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to passiveDnsRecords for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PassiveDnsRecord, requestConfiguration?: PassiveDnsRecordsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePassiveDnsRecord);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a passiveDnsRecordsRequestBuilder
     */
    public withUrl(rawUrl: string) : PassiveDnsRecordsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PassiveDnsRecordsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
