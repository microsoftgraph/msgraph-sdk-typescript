import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import type {AddActivitiesPostRequestBody} from './addActivitiesPostRequestBody';
import type {AddActivitiesResponse} from './addActivitiesResponse';
import {createAddActivitiesResponseFromDiscriminatorValue} from './createAddActivitiesResponseFromDiscriminatorValue';
import {deserializeIntoAddActivitiesPostRequestBody} from './deserializeIntoAddActivitiesPostRequestBody';
import {deserializeIntoAddActivitiesResponse} from './deserializeIntoAddActivitiesResponse';
import {MicrosoftGraphExternalConnectorsAddActivitiesRequestBuilderPostRequestConfiguration} from './microsoftGraphExternalConnectorsAddActivitiesRequestBuilderPostRequestConfiguration';
import {serializeAddActivitiesPostRequestBody} from './serializeAddActivitiesPostRequestBody';
import {serializeAddActivitiesResponse} from './serializeAddActivitiesResponse';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the addActivities method.
 */
export class MicrosoftGraphExternalConnectorsAddActivitiesRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new MicrosoftGraphExternalConnectorsAddActivitiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/connections/{externalConnection%2Did}/items/{externalItem%2Did}/microsoft.graph.externalConnectors.addActivities");
    };
    /**
     * Invoke action addActivities
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AddActivitiesResponse
     */
    public post(body: AddActivitiesPostRequestBody, requestConfiguration?: MicrosoftGraphExternalConnectorsAddActivitiesRequestBuilderPostRequestConfiguration | undefined) : Promise<AddActivitiesResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AddActivitiesResponse>(requestInfo, createAddActivitiesResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke action addActivities
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AddActivitiesPostRequestBody, requestConfiguration?: MicrosoftGraphExternalConnectorsAddActivitiesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAddActivitiesPostRequestBody);
        return requestInfo;
    };
}
