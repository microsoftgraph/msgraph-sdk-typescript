import {InternalDomainFederationCollectionResponse} from '../../../models/';
import {createInternalDomainFederationCollectionResponseFromDiscriminatorValue} from '../../../models/createInternalDomainFederationCollectionResponseFromDiscriminatorValue';
import {createInternalDomainFederationFromDiscriminatorValue} from '../../../models/createInternalDomainFederationFromDiscriminatorValue';
import {deserializeIntoInternalDomainFederation} from '../../../models/deserializeIntoInternalDomainFederation';
import {InternalDomainFederation} from '../../../models/internalDomainFederation';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeInternalDomainFederation} from '../../../models/serializeInternalDomainFederation';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {FederationConfigurationRequestBuilderGetRequestConfiguration} from './federationConfigurationRequestBuilderGetRequestConfiguration';
import {FederationConfigurationRequestBuilderPostRequestConfiguration} from './federationConfigurationRequestBuilderPostRequestConfiguration';
import {InternalDomainFederationItemRequestBuilder} from './item/internalDomainFederationItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the federationConfiguration property of the microsoft.graph.domain entity.
 */
export class FederationConfigurationRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the federationConfiguration property of the microsoft.graph.domain entity.
     * @param internalDomainFederationId Unique identifier of the item
     * @returns a InternalDomainFederationItemRequestBuilder
     */
    public byInternalDomainFederationId(internalDomainFederationId: string) : InternalDomainFederationItemRequestBuilder {
        if(!internalDomainFederationId) throw new Error("internalDomainFederationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["internalDomainFederation%2Did"] = internalDomainFederationId
        return new InternalDomainFederationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new FederationConfigurationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/domains/{domain%2Did}/federationConfiguration{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Read the properties and relationships of an internalDomainFederation object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of InternalDomainFederationCollectionResponse
     */
    public get(requestConfiguration?: FederationConfigurationRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<InternalDomainFederationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<InternalDomainFederationCollectionResponse>(requestInfo, createInternalDomainFederationCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new internalDomainFederation object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of InternalDomainFederation
     * @see {@link https://docs.microsoft.com/graph/api/domain-post-federationconfiguration?view=graph-rest-1.0|Find more info here}
     */
    public post(body: InternalDomainFederation | undefined, requestConfiguration?: FederationConfigurationRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<InternalDomainFederation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<InternalDomainFederation>(requestInfo, createInternalDomainFederationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Read the properties and relationships of an internalDomainFederation object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: FederationConfigurationRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new internalDomainFederation object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: InternalDomainFederation | undefined, requestConfiguration?: FederationConfigurationRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeInternalDomainFederation);
        return requestInfo;
    };
}
