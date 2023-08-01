import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {createIntelligenceProfileFromDiscriminatorValue} from '../../../../models/security/createIntelligenceProfileFromDiscriminatorValue';
import {deserializeIntoIntelligenceProfile} from '../../../../models/security/deserializeIntoIntelligenceProfile';
import type {IntelligenceProfile} from '../../../../models/security/intelligenceProfile';
import {serializeIntelligenceProfile} from '../../../../models/security/serializeIntelligenceProfile';
import {IndicatorsRequestBuilder} from './indicators/indicatorsRequestBuilder';
import {IntelligenceProfileItemRequestBuilderDeleteRequestConfiguration} from './intelligenceProfileItemRequestBuilderDeleteRequestConfiguration';
import {IntelligenceProfileItemRequestBuilderGetRequestConfiguration} from './intelligenceProfileItemRequestBuilderGetRequestConfiguration';
import {IntelligenceProfileItemRequestBuilderPatchRequestConfiguration} from './intelligenceProfileItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the intelProfiles property of the microsoft.graph.security.threatIntelligence entity.
 */
export class IntelligenceProfileItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the indicators property of the microsoft.graph.security.intelligenceProfile entity.
     */
    public get indicators(): IndicatorsRequestBuilder {
        return new IndicatorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new IntelligenceProfileItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/intelProfiles/{intelligenceProfile%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property intelProfiles for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: IntelligenceProfileItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a intelligenceProfile object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IntelligenceProfile
     * @see {@link https://learn.microsoft.com/graph/api/security-intelligenceprofile-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: IntelligenceProfileItemRequestBuilderGetRequestConfiguration | undefined) : Promise<IntelligenceProfile | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IntelligenceProfile>(requestInfo, createIntelligenceProfileFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property intelProfiles in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IntelligenceProfile
     */
    public patch(body: IntelligenceProfile | undefined, requestConfiguration?: IntelligenceProfileItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<IntelligenceProfile | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IntelligenceProfile>(requestInfo, createIntelligenceProfileFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property intelProfiles for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: IntelligenceProfileItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a intelligenceProfile object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IntelligenceProfileItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property intelProfiles in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: IntelligenceProfile | undefined, requestConfiguration?: IntelligenceProfileItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeIntelligenceProfile);
        return requestInfo;
    };
}
