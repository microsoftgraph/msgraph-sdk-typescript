import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {createIntelligenceProfileIndicatorFromDiscriminatorValue} from '../../../../models/security/createIntelligenceProfileIndicatorFromDiscriminatorValue';
import {deserializeIntoIntelligenceProfileIndicator} from '../../../../models/security/deserializeIntoIntelligenceProfileIndicator';
import type {IntelligenceProfileIndicator} from '../../../../models/security/intelligenceProfileIndicator';
import {serializeIntelligenceProfileIndicator} from '../../../../models/security/serializeIntelligenceProfileIndicator';
import {ArtifactRequestBuilder} from './artifact/artifactRequestBuilder';
import {IntelligenceProfileIndicatorItemRequestBuilderDeleteRequestConfiguration} from './intelligenceProfileIndicatorItemRequestBuilderDeleteRequestConfiguration';
import {IntelligenceProfileIndicatorItemRequestBuilderGetRequestConfiguration} from './intelligenceProfileIndicatorItemRequestBuilderGetRequestConfiguration';
import {IntelligenceProfileIndicatorItemRequestBuilderPatchRequestConfiguration} from './intelligenceProfileIndicatorItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the intelligenceProfileIndicators property of the microsoft.graph.security.threatIntelligence entity.
 */
export class IntelligenceProfileIndicatorItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the artifact property of the microsoft.graph.security.indicator entity.
     */
    public get artifact(): ArtifactRequestBuilder {
        return new ArtifactRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new IntelligenceProfileIndicatorItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/intelligenceProfileIndicators/{intelligenceProfileIndicator%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property intelligenceProfileIndicators for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: IntelligenceProfileIndicatorItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a intelligenceProfileIndicator object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IntelligenceProfileIndicator
     * @see {@link https://learn.microsoft.com/graph/api/security-intelligenceprofileindicator-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: IntelligenceProfileIndicatorItemRequestBuilderGetRequestConfiguration | undefined) : Promise<IntelligenceProfileIndicator | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IntelligenceProfileIndicator>(requestInfo, createIntelligenceProfileIndicatorFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property intelligenceProfileIndicators in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IntelligenceProfileIndicator
     */
    public patch(body: IntelligenceProfileIndicator | undefined, requestConfiguration?: IntelligenceProfileIndicatorItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<IntelligenceProfileIndicator | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IntelligenceProfileIndicator>(requestInfo, createIntelligenceProfileIndicatorFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property intelligenceProfileIndicators for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: IntelligenceProfileIndicatorItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a intelligenceProfileIndicator object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IntelligenceProfileIndicatorItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property intelligenceProfileIndicators in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: IntelligenceProfileIndicator | undefined, requestConfiguration?: IntelligenceProfileIndicatorItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeIntelligenceProfileIndicator);
        return requestInfo;
    };
}
