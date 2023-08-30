import {createPresenceFromDiscriminatorValue} from '../../../models/createPresenceFromDiscriminatorValue';
import {deserializeIntoPresence} from '../../../models/deserializeIntoPresence';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import type {Presence} from '../../../models/presence';
import {serializePresence} from '../../../models/serializePresence';
import {ClearPresenceRequestBuilder} from './clearPresence/clearPresenceRequestBuilder';
import {ClearUserPreferredPresenceRequestBuilder} from './clearUserPreferredPresence/clearUserPreferredPresenceRequestBuilder';
import {PresenceItemRequestBuilderDeleteRequestConfiguration} from './presenceItemRequestBuilderDeleteRequestConfiguration';
import {PresenceItemRequestBuilderGetRequestConfiguration} from './presenceItemRequestBuilderGetRequestConfiguration';
import {PresenceItemRequestBuilderPatchRequestConfiguration} from './presenceItemRequestBuilderPatchRequestConfiguration';
import {SetPresenceRequestBuilder} from './setPresence/setPresenceRequestBuilder';
import {SetUserPreferredPresenceRequestBuilder} from './setUserPreferredPresence/setUserPreferredPresenceRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the presences property of the microsoft.graph.cloudCommunications entity.
 */
export class PresenceItemRequestBuilder extends BaseRequestBuilder {
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
     * Instantiates a new PresenceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/communications/presences/{presence%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property presences for communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: PresenceItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
    public get(requestConfiguration?: PresenceItemRequestBuilderGetRequestConfiguration | undefined) : Promise<Presence | undefined> {
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
     * Update the navigation property presences in communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Presence
     */
    public patch(body: Presence, requestConfiguration?: PresenceItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<Presence | undefined> {
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
     * Delete navigation property presences for communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: PresenceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
    public toGetRequestInformation(requestConfiguration?: PresenceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property presences in communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Presence, requestConfiguration?: PresenceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a PresenceItemRequestBuilder
     */
    public withUrl(rawUrl: string) : PresenceItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PresenceItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
