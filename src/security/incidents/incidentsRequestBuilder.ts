import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {Incident, IncidentCollectionResponse} from '../../models/security/';
import {createIncidentCollectionResponseFromDiscriminatorValue} from '../../models/security/createIncidentCollectionResponseFromDiscriminatorValue';
import {createIncidentFromDiscriminatorValue} from '../../models/security/createIncidentFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {IncidentsRequestBuilderGetRequestConfiguration} from './incidentsRequestBuilderGetRequestConfiguration';
import {IncidentsRequestBuilderPostRequestConfiguration} from './incidentsRequestBuilderPostRequestConfiguration';
import {IncidentItemRequestBuilder} from './item/incidentItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the incidents property of the microsoft.graph.security entity.
 */
export class IncidentsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the incidents property of the microsoft.graph.security entity.
     * @param incidentId Unique identifier of the item
     * @returns a IncidentItemRequestBuilder
     */
    public byIncidentId(incidentId: string) : IncidentItemRequestBuilder {
        if(!incidentId) throw new Error("incidentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["incident%2Did"] = incidentId
        return new IncidentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new IncidentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/incidents{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * A collection of incidents in Microsoft 365 Defender, each of which is a set of correlated alerts and associated metadata that reflects the story of an attack.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IncidentCollectionResponse
     */
    public get(requestConfiguration?: IncidentsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IncidentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<IncidentCollectionResponse>(requestInfo, createIncidentCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to incidents for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Incident
     */
    public post(body: Incident | undefined, requestConfiguration?: IncidentsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Incident | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Incident>(requestInfo, createIncidentFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * A collection of incidents in Microsoft 365 Defender, each of which is a set of correlated alerts and associated metadata that reflects the story of an attack.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IncidentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to incidents for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Incident | undefined, requestConfiguration?: IncidentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
