import {PresenceCollectionResponse} from '../../models/';
import {createPresenceCollectionResponseFromDiscriminatorValue} from '../../models/createPresenceCollectionResponseFromDiscriminatorValue';
import {createPresenceFromDiscriminatorValue} from '../../models/createPresenceFromDiscriminatorValue';
import {deserializeIntoPresence} from '../../models/deserializeIntoPresence';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import type {Presence} from '../../models/presence';
import {serializePresence} from '../../models/serializePresence';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {PresenceItemRequestBuilder} from './item/presenceItemRequestBuilder';
import {PresencesRequestBuilderGetRequestConfiguration} from './presencesRequestBuilderGetRequestConfiguration';
import {PresencesRequestBuilderPostRequestConfiguration} from './presencesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the presences property of the microsoft.graph.cloudCommunications entity.
 */
export class PresencesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the presences property of the microsoft.graph.cloudCommunications entity.
     * @param presenceId Unique identifier of the item
     * @returns a PresenceItemRequestBuilder
     */
    public byPresenceId(presenceId: string) : PresenceItemRequestBuilder {
        if(!presenceId) throw new Error("presenceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["presence%2Did"] = presenceId
        return new PresenceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new PresencesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/presences{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a user's presence information.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PresenceCollectionResponse
     */
    public get(requestConfiguration?: PresencesRequestBuilderGetRequestConfiguration | undefined) : Promise<PresenceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PresenceCollectionResponse>(requestInfo, createPresenceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to presences for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Presence
     */
    public post(body: Presence, requestConfiguration?: PresencesRequestBuilderPostRequestConfiguration | undefined) : Promise<Presence | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Presence>(requestInfo, createPresenceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a user's presence information.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PresencesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to presences for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Presence, requestConfiguration?: PresencesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePresence);
        return requestInfo;
    };
}
