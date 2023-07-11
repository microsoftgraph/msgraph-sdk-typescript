import {createRemoteAssistancePartnerFromDiscriminatorValue} from '../../../models/createRemoteAssistancePartnerFromDiscriminatorValue';
import {deserializeIntoRemoteAssistancePartner} from '../../../models/deserializeIntoRemoteAssistancePartner';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {RemoteAssistancePartner} from '../../../models/remoteAssistancePartner';
import {serializeRemoteAssistancePartner} from '../../../models/serializeRemoteAssistancePartner';
import {BeginOnboardingRequestBuilder} from './beginOnboarding/beginOnboardingRequestBuilder';
import {DisconnectRequestBuilder} from './disconnect/disconnectRequestBuilder';
import {RemoteAssistancePartnerItemRequestBuilderDeleteRequestConfiguration} from './remoteAssistancePartnerItemRequestBuilderDeleteRequestConfiguration';
import {RemoteAssistancePartnerItemRequestBuilderGetRequestConfiguration} from './remoteAssistancePartnerItemRequestBuilderGetRequestConfiguration';
import {RemoteAssistancePartnerItemRequestBuilderPatchRequestConfiguration} from './remoteAssistancePartnerItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the remoteAssistancePartners property of the microsoft.graph.deviceManagement entity.
 */
export class RemoteAssistancePartnerItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the beginOnboarding method.
     */
    public get beginOnboarding(): BeginOnboardingRequestBuilder {
        return new BeginOnboardingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the disconnect method.
     */
    public get disconnect(): DisconnectRequestBuilder {
        return new DisconnectRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new RemoteAssistancePartnerItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/remoteAssistancePartners/{remoteAssistancePartner%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a remoteAssistancePartner.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/intune-remoteassistance-remoteassistancepartner-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: RemoteAssistancePartnerItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the remoteAssistancePartner object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RemoteAssistancePartner
     * @see {@link https://docs.microsoft.com/graph/api/intune-remoteassistance-remoteassistancepartner-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RemoteAssistancePartnerItemRequestBuilderGetRequestConfiguration | undefined) : Promise<RemoteAssistancePartner | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RemoteAssistancePartner>(requestInfo, createRemoteAssistancePartnerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a remoteAssistancePartner object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RemoteAssistancePartner
     * @see {@link https://docs.microsoft.com/graph/api/intune-remoteassistance-remoteassistancepartner-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: RemoteAssistancePartner | undefined, requestConfiguration?: RemoteAssistancePartnerItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<RemoteAssistancePartner | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RemoteAssistancePartner>(requestInfo, createRemoteAssistancePartnerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a remoteAssistancePartner.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: RemoteAssistancePartnerItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the remoteAssistancePartner object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RemoteAssistancePartnerItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a remoteAssistancePartner object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: RemoteAssistancePartner | undefined, requestConfiguration?: RemoteAssistancePartnerItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeRemoteAssistancePartner);
        return requestInfo;
    };
}
