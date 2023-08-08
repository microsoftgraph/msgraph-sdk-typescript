import {ExternalActivityCollectionResponse} from '../../../../../models/externalConnectors/';
import {createExternalActivityCollectionResponseFromDiscriminatorValue} from '../../../../../models/externalConnectors/createExternalActivityCollectionResponseFromDiscriminatorValue';
import {createExternalActivityFromDiscriminatorValue} from '../../../../../models/externalConnectors/createExternalActivityFromDiscriminatorValue';
import {deserializeIntoExternalActivity} from '../../../../../models/externalConnectors/deserializeIntoExternalActivity';
import type {ExternalActivity} from '../../../../../models/externalConnectors/externalActivity';
import {serializeExternalActivity} from '../../../../../models/externalConnectors/serializeExternalActivity';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {ActivitiesRequestBuilderGetRequestConfiguration} from './activitiesRequestBuilderGetRequestConfiguration';
import {ActivitiesRequestBuilderPostRequestConfiguration} from './activitiesRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ExternalActivityItemRequestBuilder} from './item/externalActivityItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the activities property of the microsoft.graph.externalConnectors.externalItem entity.
 */
export class ActivitiesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the activities property of the microsoft.graph.externalConnectors.externalItem entity.
     * @param externalActivityId Unique identifier of the item
     * @returns a ExternalActivityItemRequestBuilder
     */
    public byExternalActivityId(externalActivityId: string) : ExternalActivityItemRequestBuilder {
        if(!externalActivityId) throw new Error("externalActivityId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["externalActivity%2Did"] = externalActivityId
        return new ExternalActivityItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ActivitiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/connections/{externalConnection%2Did}/items/{externalItem%2Did}/activities{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Returns a list of activities performed on the item. Write-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ExternalActivityCollectionResponse
     */
    public get(requestConfiguration?: ActivitiesRequestBuilderGetRequestConfiguration | undefined) : Promise<ExternalActivityCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ExternalActivityCollectionResponse>(requestInfo, createExternalActivityCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to activities for connections
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ExternalActivity
     */
    public post(body: ExternalActivity, requestConfiguration?: ActivitiesRequestBuilderPostRequestConfiguration | undefined) : Promise<ExternalActivity | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ExternalActivity>(requestInfo, createExternalActivityFromDiscriminatorValue, errorMapping);
    };
    /**
     * Returns a list of activities performed on the item. Write-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ActivitiesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to activities for connections
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ExternalActivity, requestConfiguration?: ActivitiesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeExternalActivity);
        return requestInfo;
    };
}
