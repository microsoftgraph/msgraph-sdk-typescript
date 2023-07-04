import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {IntelligenceProfileIndicatorCollectionResponse} from '../../../../../models/security/';
import {createIntelligenceProfileIndicatorCollectionResponseFromDiscriminatorValue} from '../../../../../models/security/createIntelligenceProfileIndicatorCollectionResponseFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {IndicatorsRequestBuilderGetRequestConfiguration} from './indicatorsRequestBuilderGetRequestConfiguration';
import {IntelligenceProfileIndicatorItemRequestBuilder} from './item/intelligenceProfileIndicatorItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the indicators property of the microsoft.graph.security.intelligenceProfile entity.
 */
export class IndicatorsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the indicators property of the microsoft.graph.security.intelligenceProfile entity.
     * @param intelligenceProfileIndicatorId Unique identifier of the item
     * @returns a IntelligenceProfileIndicatorItemRequestBuilder
     */
    public byIntelligenceProfileIndicatorId(intelligenceProfileIndicatorId: string) : IntelligenceProfileIndicatorItemRequestBuilder {
        if(!intelligenceProfileIndicatorId) throw new Error("intelligenceProfileIndicatorId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["intelligenceProfileIndicator%2Did"] = intelligenceProfileIndicatorId
        return new IntelligenceProfileIndicatorItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new IndicatorsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/intelProfiles/{intelligenceProfile%2Did}/indicators{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the intelligenceProfileIndicator resources from the **indicators** navigation property of an intelligenceProfile.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IntelligenceProfileIndicatorCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/security-intelligenceprofile-list-indicators?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: IndicatorsRequestBuilderGetRequestConfiguration | undefined) : Promise<IntelligenceProfileIndicatorCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IntelligenceProfileIndicatorCollectionResponse>(requestInfo, createIntelligenceProfileIndicatorCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the intelligenceProfileIndicator resources from the **indicators** navigation property of an intelligenceProfile.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IndicatorsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
