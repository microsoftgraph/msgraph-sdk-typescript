import {createInternalDomainFederationFromDiscriminatorValue} from '../../../../models/createInternalDomainFederationFromDiscriminatorValue';
import {deserializeIntoInternalDomainFederation} from '../../../../models/deserializeIntoInternalDomainFederation';
import type {InternalDomainFederation} from '../../../../models/internalDomainFederation';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeInternalDomainFederation} from '../../../../models/serializeInternalDomainFederation';
import {InternalDomainFederationItemRequestBuilderDeleteRequestConfiguration} from './internalDomainFederationItemRequestBuilderDeleteRequestConfiguration';
import {InternalDomainFederationItemRequestBuilderGetRequestConfiguration} from './internalDomainFederationItemRequestBuilderGetRequestConfiguration';
import {InternalDomainFederationItemRequestBuilderPatchRequestConfiguration} from './internalDomainFederationItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the federationConfiguration property of the microsoft.graph.domain entity.
 */
export class InternalDomainFederationItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new InternalDomainFederationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/domains/{domain%2Did}/federationConfiguration/{internalDomainFederation%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete an internalDomainFederation object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/internaldomainfederation-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: InternalDomainFederationItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of an internalDomainFederation object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of InternalDomainFederation
     * @see {@link https://learn.microsoft.com/graph/api/internaldomainfederation-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: InternalDomainFederationItemRequestBuilderGetRequestConfiguration | undefined) : Promise<InternalDomainFederation | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<InternalDomainFederation>(requestInfo, createInternalDomainFederationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of an internalDomainFederation object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of InternalDomainFederation
     * @see {@link https://learn.microsoft.com/graph/api/internaldomainfederation-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: InternalDomainFederation, requestConfiguration?: InternalDomainFederationItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<InternalDomainFederation | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<InternalDomainFederation>(requestInfo, createInternalDomainFederationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete an internalDomainFederation object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: InternalDomainFederationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of an internalDomainFederation object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: InternalDomainFederationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of an internalDomainFederation object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: InternalDomainFederation, requestConfiguration?: InternalDomainFederationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeInternalDomainFederation);
        return requestInfo;
    };
}
