import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { type IntelligenceProfileCollectionResponse } from '../../../models/security/';
import { createIntelligenceProfileCollectionResponseFromDiscriminatorValue } from '../../../models/security/createIntelligenceProfileCollectionResponseFromDiscriminatorValue';
import { createIntelligenceProfileFromDiscriminatorValue } from '../../../models/security/createIntelligenceProfileFromDiscriminatorValue';
import { deserializeIntoIntelligenceProfile } from '../../../models/security/deserializeIntoIntelligenceProfile';
import { type IntelligenceProfile } from '../../../models/security/intelligenceProfile';
import { serializeIntelligenceProfile } from '../../../models/security/serializeIntelligenceProfile';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { type IntelProfilesRequestBuilderGetRequestConfiguration } from './intelProfilesRequestBuilderGetRequestConfiguration';
import { type IntelProfilesRequestBuilderPostRequestConfiguration } from './intelProfilesRequestBuilderPostRequestConfiguration';
import { IntelligenceProfileItemRequestBuilder } from './item/intelligenceProfileItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the intelProfiles property of the microsoft.graph.security.threatIntelligence entity.
 */
export class IntelProfilesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the intelProfiles property of the microsoft.graph.security.threatIntelligence entity.
     * @param intelligenceProfileId The unique identifier of intelligenceProfile
     * @returns a IntelligenceProfileItemRequestBuilder
     */
    public byIntelligenceProfileId(intelligenceProfileId: string) : IntelligenceProfileItemRequestBuilder {
        if(!intelligenceProfileId) throw new Error("intelligenceProfileId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["intelligenceProfile%2Did"] = intelligenceProfileId
        return new IntelligenceProfileItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new IntelProfilesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/intelProfiles{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the intelligenceProfile objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IntelligenceProfileCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-intelligenceprofile-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: IntelProfilesRequestBuilderGetRequestConfiguration | undefined) : Promise<IntelligenceProfileCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IntelligenceProfileCollectionResponse>(requestInfo, createIntelligenceProfileCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to intelProfiles for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IntelligenceProfile
     */
    public post(body: IntelligenceProfile, requestConfiguration?: IntelProfilesRequestBuilderPostRequestConfiguration | undefined) : Promise<IntelligenceProfile | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IntelligenceProfile>(requestInfo, createIntelligenceProfileFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the intelligenceProfile objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IntelProfilesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to intelProfiles for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: IntelligenceProfile, requestConfiguration?: IntelProfilesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeIntelligenceProfile);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a intelProfilesRequestBuilder
     */
    public withUrl(rawUrl: string) : IntelProfilesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new IntelProfilesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
