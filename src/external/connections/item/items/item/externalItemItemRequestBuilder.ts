import {createExternalItemFromDiscriminatorValue} from '../../../../../models/externalConnectors/createExternalItemFromDiscriminatorValue';
import {deserializeIntoExternalItem} from '../../../../../models/externalConnectors/deserializeIntoExternalItem';
import {ExternalItem} from '../../../../../models/externalConnectors/externalItem';
import {serializeExternalItem} from '../../../../../models/externalConnectors/serializeExternalItem';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {ActivitiesRequestBuilder} from './activities/activitiesRequestBuilder';
import {ExternalItemItemRequestBuilderDeleteRequestConfiguration} from './externalItemItemRequestBuilderDeleteRequestConfiguration';
import {ExternalItemItemRequestBuilderGetRequestConfiguration} from './externalItemItemRequestBuilderGetRequestConfiguration';
import {ExternalItemItemRequestBuilderPutRequestConfiguration} from './externalItemItemRequestBuilderPutRequestConfiguration';
import {MicrosoftGraphExternalConnectorsAddActivitiesRequestBuilder} from './microsoftGraphExternalConnectorsAddActivities/microsoftGraphExternalConnectorsAddActivitiesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the items property of the microsoft.graph.externalConnectors.externalConnection entity.
 */
export class ExternalItemItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the activities property of the microsoft.graph.externalConnectors.externalItem entity.
     */
    public get activities(): ActivitiesRequestBuilder {
        return new ActivitiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the addActivities method.
     */
    public get microsoftGraphExternalConnectorsAddActivities(): MicrosoftGraphExternalConnectorsAddActivitiesRequestBuilder {
        return new MicrosoftGraphExternalConnectorsAddActivitiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ExternalItemItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/external/connections/{externalConnection%2Did}/items/{externalItem%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete an externalItem object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/externalconnectors-externalitem-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: ExternalItemItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of an externalItem object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ExternalItem
     * @see {@link https://docs.microsoft.com/graph/api/externalconnectors-externalitem-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ExternalItemItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ExternalItem | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ExternalItem>(requestInfo, createExternalItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property items in external
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ExternalItem
     */
    public put(body: ExternalItem | undefined, requestConfiguration?: ExternalItemItemRequestBuilderPutRequestConfiguration | undefined) : Promise<ExternalItem | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPutRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ExternalItem>(requestInfo, createExternalItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete an externalItem object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ExternalItemItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of an externalItem object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ExternalItemItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property items in external
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPutRequestInformation(body: ExternalItem | undefined, requestConfiguration?: ExternalItemItemRequestBuilderPutRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PUT;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeExternalItem);
        return requestInfo;
    };
}
