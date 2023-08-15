import {createPresenceFromDiscriminatorValue} from '../../models/createPresenceFromDiscriminatorValue';
import {deserializeIntoPresence} from '../../models/deserializeIntoPresence';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import type {Presence} from '../../models/presence';
import {serializePresence} from '../../models/serializePresence';
import {ClearPresenceRequestBuilder} from './clearPresence/clearPresenceRequestBuilder';
import {ClearUserPreferredPresenceRequestBuilder} from './clearUserPreferredPresence/clearUserPreferredPresenceRequestBuilder';
import {PresenceRequestBuilderDeleteRequestConfiguration} from './presenceRequestBuilderDeleteRequestConfiguration';
import {PresenceRequestBuilderGetRequestConfiguration} from './presenceRequestBuilderGetRequestConfiguration';
import {PresenceRequestBuilderPatchRequestConfiguration} from './presenceRequestBuilderPatchRequestConfiguration';
import {SetPresenceRequestBuilder} from './setPresence/setPresenceRequestBuilder';
import {SetUserPreferredPresenceRequestBuilder} from './setUserPreferredPresence/setUserPreferredPresenceRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the presence property of the microsoft.graph.user entity.
 */
export class PresenceRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the clearPresence method.
     */
    public get clearPresence(): ClearPresenceRequestBuilder {
        return new ClearPresenceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the clearUserPreferredPresence method.
     */
    public get clearUserPreferredPresence(): ClearUserPreferredPresenceRequestBuilder {
        return new ClearUserPreferredPresenceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the setPresence method.
     */
    public get setPresence(): SetPresenceRequestBuilder {
        return new SetPresenceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the setUserPreferredPresence method.
     */
    public get setUserPreferredPresence(): SetUserPreferredPresenceRequestBuilder {
        return new SetUserPreferredPresenceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new PresenceRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/presence{?%24select,%24expand}");
    };
    /**
     * Delete navigation property presence for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: PresenceRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get a user's presence information.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Presence
     * @see {@link https://learn.microsoft.com/graph/api/presence-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: PresenceRequestBuilderGetRequestConfiguration | undefined) : Promise<Presence | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Presence>(requestInfo, createPresenceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property presence in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Presence
     */
    public patch(body: Presence, requestConfiguration?: PresenceRequestBuilderPatchRequestConfiguration | undefined) : Promise<Presence | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Presence>(requestInfo, createPresenceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property presence for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: PresenceRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get a user's presence information.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PresenceRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property presence in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Presence, requestConfiguration?: PresenceRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePresence);
        return requestInfo;
    };
}
