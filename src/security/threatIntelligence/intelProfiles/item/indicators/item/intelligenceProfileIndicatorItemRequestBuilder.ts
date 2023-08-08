import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {IntelligenceProfileIndicator} from '../../../../../../models/security/';
import {createIntelligenceProfileIndicatorFromDiscriminatorValue} from '../../../../../../models/security/createIntelligenceProfileIndicatorFromDiscriminatorValue';
import {IntelligenceProfileIndicatorItemRequestBuilderGetRequestConfiguration} from './intelligenceProfileIndicatorItemRequestBuilderGetRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the indicators property of the microsoft.graph.security.intelligenceProfile entity.
 */
export class IntelligenceProfileIndicatorItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new IntelligenceProfileIndicatorItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/intelProfiles/{intelligenceProfile%2Did}/indicators/{intelligenceProfileIndicator%2Did}{?%24select,%24expand}");
    };
    /**
     * Includes an assemblage of high-fidelity network indicators of compromise.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IntelligenceProfileIndicator
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
     * Includes an assemblage of high-fidelity network indicators of compromise.
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
}
