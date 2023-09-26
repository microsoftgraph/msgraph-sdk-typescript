import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../models/oDataErrors/oDataError';
import { createThreatIntelligenceFromDiscriminatorValue, deserializeIntoThreatIntelligence, serializeThreatIntelligence, type ThreatIntelligence } from '../../models/security/threatIntelligence';
import { ArticleIndicatorsRequestBuilder } from './articleIndicators/articleIndicatorsRequestBuilder';
import { ArticlesRequestBuilder } from './articles/articlesRequestBuilder';
import { HostComponentsRequestBuilder } from './hostComponents/hostComponentsRequestBuilder';
import { HostCookiesRequestBuilder } from './hostCookies/hostCookiesRequestBuilder';
import { HostsRequestBuilder } from './hosts/hostsRequestBuilder';
import { HostTrackersRequestBuilder } from './hostTrackers/hostTrackersRequestBuilder';
import { IntelligenceProfileIndicatorsRequestBuilder } from './intelligenceProfileIndicators/intelligenceProfileIndicatorsRequestBuilder';
import { IntelProfilesRequestBuilder } from './intelProfiles/intelProfilesRequestBuilder';
import { PassiveDnsRecordsRequestBuilder } from './passiveDnsRecords/passiveDnsRecordsRequestBuilder';
import { VulnerabilitiesRequestBuilder } from './vulnerabilities/vulnerabilitiesRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface ThreatIntelligenceRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface ThreatIntelligenceRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface ThreatIntelligenceRequestBuilderGetRequestConfiguration {
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
    queryParameters?: ThreatIntelligenceRequestBuilderGetQueryParameters;
}
export interface ThreatIntelligenceRequestBuilderPatchRequestConfiguration {
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
 * Provides operations to manage the threatIntelligence property of the microsoft.graph.security entity.
 */
export class ThreatIntelligenceRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the articleIndicators property of the microsoft.graph.security.threatIntelligence entity.
     */
    public get articleIndicators(): ArticleIndicatorsRequestBuilder {
        return new ArticleIndicatorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the articles property of the microsoft.graph.security.threatIntelligence entity.
     */
    public get articles(): ArticlesRequestBuilder {
        return new ArticlesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the hostComponents property of the microsoft.graph.security.threatIntelligence entity.
     */
    public get hostComponents(): HostComponentsRequestBuilder {
        return new HostComponentsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the hostCookies property of the microsoft.graph.security.threatIntelligence entity.
     */
    public get hostCookies(): HostCookiesRequestBuilder {
        return new HostCookiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the hosts property of the microsoft.graph.security.threatIntelligence entity.
     */
    public get hosts(): HostsRequestBuilder {
        return new HostsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the hostTrackers property of the microsoft.graph.security.threatIntelligence entity.
     */
    public get hostTrackers(): HostTrackersRequestBuilder {
        return new HostTrackersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the intelligenceProfileIndicators property of the microsoft.graph.security.threatIntelligence entity.
     */
    public get intelligenceProfileIndicators(): IntelligenceProfileIndicatorsRequestBuilder {
        return new IntelligenceProfileIndicatorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the intelProfiles property of the microsoft.graph.security.threatIntelligence entity.
     */
    public get intelProfiles(): IntelProfilesRequestBuilder {
        return new IntelProfilesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the passiveDnsRecords property of the microsoft.graph.security.threatIntelligence entity.
     */
    public get passiveDnsRecords(): PassiveDnsRecordsRequestBuilder {
        return new PassiveDnsRecordsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the vulnerabilities property of the microsoft.graph.security.threatIntelligence entity.
     */
    public get vulnerabilities(): VulnerabilitiesRequestBuilder {
        return new VulnerabilitiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ThreatIntelligenceRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence{?%24select,%24expand}");
    };
    /**
     * Delete navigation property threatIntelligence for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ThreatIntelligenceRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get threatIntelligence from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ThreatIntelligence
     */
    public get(requestConfiguration?: ThreatIntelligenceRequestBuilderGetRequestConfiguration | undefined) : Promise<ThreatIntelligence | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ThreatIntelligence>(requestInfo, createThreatIntelligenceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property threatIntelligence in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ThreatIntelligence
     */
    public patch(body: ThreatIntelligence, requestConfiguration?: ThreatIntelligenceRequestBuilderPatchRequestConfiguration | undefined) : Promise<ThreatIntelligence | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ThreatIntelligence>(requestInfo, createThreatIntelligenceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property threatIntelligence for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ThreatIntelligenceRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get threatIntelligence from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ThreatIntelligenceRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property threatIntelligence in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ThreatIntelligence, requestConfiguration?: ThreatIntelligenceRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeThreatIntelligence);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a threatIntelligenceRequestBuilder
     */
    public withUrl(rawUrl: string) : ThreatIntelligenceRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ThreatIntelligenceRequestBuilder(rawUrl, this.requestAdapter);
    };
}
