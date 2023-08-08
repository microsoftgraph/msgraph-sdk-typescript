import {createIdentityProviderBaseFromDiscriminatorValue} from '../../../models/createIdentityProviderBaseFromDiscriminatorValue';
import {deserializeIntoIdentityProviderBase} from '../../../models/deserializeIntoIdentityProviderBase';
import type {IdentityProviderBase} from '../../../models/identityProviderBase';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeIdentityProviderBase} from '../../../models/serializeIdentityProviderBase';
import {IdentityProviderBaseItemRequestBuilderDeleteRequestConfiguration} from './identityProviderBaseItemRequestBuilderDeleteRequestConfiguration';
import {IdentityProviderBaseItemRequestBuilderGetRequestConfiguration} from './identityProviderBaseItemRequestBuilderGetRequestConfiguration';
import {IdentityProviderBaseItemRequestBuilderPatchRequestConfiguration} from './identityProviderBaseItemRequestBuilderPatchRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the federationConfigurations property of the microsoft.graph.directory entity.
 */
export class IdentityProviderBaseItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new IdentityProviderBaseItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/directory/federationConfigurations/{identityProviderBase%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a samlOrWsFedExternalDomainFederation object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/samlorwsfedexternaldomainfederation-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: IdentityProviderBaseItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityProviderBase
     */
    public get(requestConfiguration?: IdentityProviderBaseItemRequestBuilderGetRequestConfiguration | undefined) : Promise<IdentityProviderBase | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityProviderBase>(requestInfo, createIdentityProviderBaseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property federationConfigurations in directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityProviderBase
     */
    public patch(body: IdentityProviderBase, requestConfiguration?: IdentityProviderBaseItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<IdentityProviderBase | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityProviderBase>(requestInfo, createIdentityProviderBaseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a samlOrWsFedExternalDomainFederation object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: IdentityProviderBaseItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IdentityProviderBaseItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property federationConfigurations in directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: IdentityProviderBase, requestConfiguration?: IdentityProviderBaseItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeIdentityProviderBase);
        return requestInfo;
    };
}
