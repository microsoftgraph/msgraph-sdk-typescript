import {IdentityApiConnectorCollectionResponse} from '../../models/';
import {createIdentityApiConnectorCollectionResponseFromDiscriminatorValue} from '../../models/createIdentityApiConnectorCollectionResponseFromDiscriminatorValue';
import {createIdentityApiConnectorFromDiscriminatorValue} from '../../models/createIdentityApiConnectorFromDiscriminatorValue';
import {deserializeIntoIdentityApiConnector} from '../../models/deserializeIntoIdentityApiConnector';
import type {IdentityApiConnector} from '../../models/identityApiConnector';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeIdentityApiConnector} from '../../models/serializeIdentityApiConnector';
import {ApiConnectorsRequestBuilderGetRequestConfiguration} from './apiConnectorsRequestBuilderGetRequestConfiguration';
import {ApiConnectorsRequestBuilderPostRequestConfiguration} from './apiConnectorsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {IdentityApiConnectorItemRequestBuilder} from './item/identityApiConnectorItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the apiConnectors property of the microsoft.graph.identityContainer entity.
 */
export class ApiConnectorsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the apiConnectors property of the microsoft.graph.identityContainer entity.
     * @param identityApiConnectorId The unique identifier of identityApiConnector
     * @returns a IdentityApiConnectorItemRequestBuilder
     */
    public byIdentityApiConnectorId(identityApiConnectorId: string) : IdentityApiConnectorItemRequestBuilder {
        if(!identityApiConnectorId) throw new Error("identityApiConnectorId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["identityApiConnector%2Did"] = identityApiConnectorId
        return new IdentityApiConnectorItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ApiConnectorsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/apiConnectors{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Read the properties of an identityApiConnector object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityApiConnectorCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/identityapiconnector-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ApiConnectorsRequestBuilderGetRequestConfiguration | undefined) : Promise<IdentityApiConnectorCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityApiConnectorCollectionResponse>(requestInfo, createIdentityApiConnectorCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new identityApiConnector object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityApiConnector
     * @see {@link https://learn.microsoft.com/graph/api/identityapiconnector-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: IdentityApiConnector, requestConfiguration?: ApiConnectorsRequestBuilderPostRequestConfiguration | undefined) : Promise<IdentityApiConnector | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityApiConnector>(requestInfo, createIdentityApiConnectorFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read the properties of an identityApiConnector object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ApiConnectorsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new identityApiConnector object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: IdentityApiConnector, requestConfiguration?: ApiConnectorsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeIdentityApiConnector);
        return requestInfo;
    };
}
