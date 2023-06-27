import {RemoteAssistancePartnerCollectionResponse} from '../../models/';
import {createRemoteAssistancePartnerCollectionResponseFromDiscriminatorValue} from '../../models/createRemoteAssistancePartnerCollectionResponseFromDiscriminatorValue';
import {createRemoteAssistancePartnerFromDiscriminatorValue} from '../../models/createRemoteAssistancePartnerFromDiscriminatorValue';
import {deserializeIntoRemoteAssistancePartner} from '../../models/deserializeIntoRemoteAssistancePartner';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {RemoteAssistancePartner} from '../../models/remoteAssistancePartner';
import {serializeRemoteAssistancePartner} from '../../models/serializeRemoteAssistancePartner';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {RemoteAssistancePartnerItemRequestBuilder} from './item/remoteAssistancePartnerItemRequestBuilder';
import {RemoteAssistancePartnersRequestBuilderGetRequestConfiguration} from './remoteAssistancePartnersRequestBuilderGetRequestConfiguration';
import {RemoteAssistancePartnersRequestBuilderPostRequestConfiguration} from './remoteAssistancePartnersRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the remoteAssistancePartners property of the microsoft.graph.deviceManagement entity.
 */
export class RemoteAssistancePartnersRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the remoteAssistancePartners property of the microsoft.graph.deviceManagement entity.
     * @param remoteAssistancePartnerId Unique identifier of the item
     * @returns a RemoteAssistancePartnerItemRequestBuilder
     */
    public byRemoteAssistancePartnerId(remoteAssistancePartnerId: string) : RemoteAssistancePartnerItemRequestBuilder {
        if(!remoteAssistancePartnerId) throw new Error("remoteAssistancePartnerId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["remoteAssistancePartner%2Did"] = remoteAssistancePartnerId
        return new RemoteAssistancePartnerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RemoteAssistancePartnersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/remoteAssistancePartners{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the remoteAssistancePartner objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of RemoteAssistancePartnerCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/intune-remoteassistance-remoteassistancepartner-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RemoteAssistancePartnersRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<RemoteAssistancePartnerCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<RemoteAssistancePartnerCollectionResponse>(requestInfo, createRemoteAssistancePartnerCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new remoteAssistancePartner object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of RemoteAssistancePartner
     * @see {@link https://docs.microsoft.com/graph/api/intune-remoteassistance-remoteassistancepartner-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: RemoteAssistancePartner | undefined, requestConfiguration?: RemoteAssistancePartnersRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<RemoteAssistancePartner | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<RemoteAssistancePartner>(requestInfo, createRemoteAssistancePartnerFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * List properties and relationships of the remoteAssistancePartner objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RemoteAssistancePartnersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new remoteAssistancePartner object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: RemoteAssistancePartner | undefined, requestConfiguration?: RemoteAssistancePartnersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeRemoteAssistancePartner);
        return requestInfo;
    };
}
