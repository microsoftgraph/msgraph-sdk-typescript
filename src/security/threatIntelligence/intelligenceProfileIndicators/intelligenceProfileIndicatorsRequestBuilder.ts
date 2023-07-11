import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {IntelligenceProfileIndicatorCollectionResponse} from '../../../models/security/';
import {createIntelligenceProfileIndicatorCollectionResponseFromDiscriminatorValue} from '../../../models/security/createIntelligenceProfileIndicatorCollectionResponseFromDiscriminatorValue';
import {createIntelligenceProfileIndicatorFromDiscriminatorValue} from '../../../models/security/createIntelligenceProfileIndicatorFromDiscriminatorValue';
import {deserializeIntoIntelligenceProfileIndicator} from '../../../models/security/deserializeIntoIntelligenceProfileIndicator';
import {IntelligenceProfileIndicator} from '../../../models/security/intelligenceProfileIndicator';
import {serializeIntelligenceProfileIndicator} from '../../../models/security/serializeIntelligenceProfileIndicator';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {IntelligenceProfileIndicatorsRequestBuilderGetRequestConfiguration} from './intelligenceProfileIndicatorsRequestBuilderGetRequestConfiguration';
import {IntelligenceProfileIndicatorsRequestBuilderPostRequestConfiguration} from './intelligenceProfileIndicatorsRequestBuilderPostRequestConfiguration';
import {IntelligenceProfileIndicatorItemRequestBuilder} from './item/intelligenceProfileIndicatorItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the intelligenceProfileIndicators property of the microsoft.graph.security.threatIntelligence entity.
 */
export class IntelligenceProfileIndicatorsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the intelligenceProfileIndicators property of the microsoft.graph.security.threatIntelligence entity.
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
     * Instantiates a new IntelligenceProfileIndicatorsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/intelligenceProfileIndicators{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get intelligenceProfileIndicators from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IntelligenceProfileIndicatorCollectionResponse
     */
    public get(requestConfiguration?: IntelligenceProfileIndicatorsRequestBuilderGetRequestConfiguration | undefined) : Promise<IntelligenceProfileIndicatorCollectionResponse | undefined> {
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
     * Create new navigation property to intelligenceProfileIndicators for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IntelligenceProfileIndicator
     */
    public post(body: IntelligenceProfileIndicator | undefined, requestConfiguration?: IntelligenceProfileIndicatorsRequestBuilderPostRequestConfiguration | undefined) : Promise<IntelligenceProfileIndicator | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IntelligenceProfileIndicator>(requestInfo, createIntelligenceProfileIndicatorFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get intelligenceProfileIndicators from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IntelligenceProfileIndicatorsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to intelligenceProfileIndicators for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: IntelligenceProfileIndicator | undefined, requestConfiguration?: IntelligenceProfileIndicatorsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeIntelligenceProfileIndicator);
        return requestInfo;
    };
}
