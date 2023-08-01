import {RiskyServicePrincipalHistoryItemCollectionResponse} from '../../../../models/';
import {createRiskyServicePrincipalHistoryItemCollectionResponseFromDiscriminatorValue} from '../../../../models/createRiskyServicePrincipalHistoryItemCollectionResponseFromDiscriminatorValue';
import {createRiskyServicePrincipalHistoryItemFromDiscriminatorValue} from '../../../../models/createRiskyServicePrincipalHistoryItemFromDiscriminatorValue';
import {deserializeIntoRiskyServicePrincipalHistoryItem} from '../../../../models/deserializeIntoRiskyServicePrincipalHistoryItem';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import type {RiskyServicePrincipalHistoryItem} from '../../../../models/riskyServicePrincipalHistoryItem';
import {serializeRiskyServicePrincipalHistoryItem} from '../../../../models/serializeRiskyServicePrincipalHistoryItem';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {HistoryRequestBuilderGetRequestConfiguration} from './historyRequestBuilderGetRequestConfiguration';
import {HistoryRequestBuilderPostRequestConfiguration} from './historyRequestBuilderPostRequestConfiguration';
import {RiskyServicePrincipalHistoryItemItemRequestBuilder} from './item/riskyServicePrincipalHistoryItemItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the history property of the microsoft.graph.riskyServicePrincipal entity.
 */
export class HistoryRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the history property of the microsoft.graph.riskyServicePrincipal entity.
     * @param riskyServicePrincipalHistoryItemId Unique identifier of the item
     * @returns a RiskyServicePrincipalHistoryItemItemRequestBuilder
     */
    public byRiskyServicePrincipalHistoryItemId(riskyServicePrincipalHistoryItemId: string) : RiskyServicePrincipalHistoryItemItemRequestBuilder {
        if(!riskyServicePrincipalHistoryItemId) throw new Error("riskyServicePrincipalHistoryItemId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["riskyServicePrincipalHistoryItem%2Did"] = riskyServicePrincipalHistoryItemId
        return new RiskyServicePrincipalHistoryItemItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new HistoryRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityProtection/riskyServicePrincipals/{riskyServicePrincipal%2Did}/history{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the risk history of a riskyServicePrincipal object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RiskyServicePrincipalHistoryItemCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/riskyserviceprincipal-list-history?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: HistoryRequestBuilderGetRequestConfiguration | undefined) : Promise<RiskyServicePrincipalHistoryItemCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RiskyServicePrincipalHistoryItemCollectionResponse>(requestInfo, createRiskyServicePrincipalHistoryItemCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to history for identityProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RiskyServicePrincipalHistoryItem
     */
    public post(body: RiskyServicePrincipalHistoryItem | undefined, requestConfiguration?: HistoryRequestBuilderPostRequestConfiguration | undefined) : Promise<RiskyServicePrincipalHistoryItem | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RiskyServicePrincipalHistoryItem>(requestInfo, createRiskyServicePrincipalHistoryItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the risk history of a riskyServicePrincipal object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: HistoryRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to history for identityProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: RiskyServicePrincipalHistoryItem | undefined, requestConfiguration?: HistoryRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeRiskyServicePrincipalHistoryItem);
        return requestInfo;
    };
}
