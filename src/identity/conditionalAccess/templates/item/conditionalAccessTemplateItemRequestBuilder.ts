import {ConditionalAccessTemplate} from '../../../../models/';
import {createConditionalAccessTemplateFromDiscriminatorValue} from '../../../../models/createConditionalAccessTemplateFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {ConditionalAccessTemplateItemRequestBuilderGetRequestConfiguration} from './conditionalAccessTemplateItemRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the templates property of the microsoft.graph.conditionalAccessRoot entity.
 */
export class ConditionalAccessTemplateItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ConditionalAccessTemplateItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/conditionalAccess/templates/{conditionalAccessTemplate%2Did}{?%24select,%24expand}");
    };
    /**
     * Read the properties and relationships of a conditionalAccessTemplate object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConditionalAccessTemplate
     * @see {@link https://docs.microsoft.com/graph/api/conditionalaccesstemplate-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ConditionalAccessTemplateItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ConditionalAccessTemplate | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ConditionalAccessTemplate>(requestInfo, createConditionalAccessTemplateFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read the properties and relationships of a conditionalAccessTemplate object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ConditionalAccessTemplateItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
