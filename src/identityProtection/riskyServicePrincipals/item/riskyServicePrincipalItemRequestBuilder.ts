import { createRiskyServicePrincipalFromDiscriminatorValue } from '../../../models/createRiskyServicePrincipalFromDiscriminatorValue';
import { deserializeIntoRiskyServicePrincipal } from '../../../models/deserializeIntoRiskyServicePrincipal';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { type RiskyServicePrincipal } from '../../../models/riskyServicePrincipal';
import { serializeRiskyServicePrincipal } from '../../../models/serializeRiskyServicePrincipal';
import { HistoryRequestBuilder } from './history/historyRequestBuilder';
import { type RiskyServicePrincipalItemRequestBuilderDeleteRequestConfiguration } from './riskyServicePrincipalItemRequestBuilderDeleteRequestConfiguration';
import { type RiskyServicePrincipalItemRequestBuilderGetRequestConfiguration } from './riskyServicePrincipalItemRequestBuilderGetRequestConfiguration';
import { type RiskyServicePrincipalItemRequestBuilderPatchRequestConfiguration } from './riskyServicePrincipalItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the riskyServicePrincipals property of the microsoft.graph.identityProtectionRoot entity.
 */
export class RiskyServicePrincipalItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the history property of the microsoft.graph.riskyServicePrincipal entity.
     */
    public get history(): HistoryRequestBuilder {
        return new HistoryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new RiskyServicePrincipalItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityProtection/riskyServicePrincipals/{riskyServicePrincipal%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property riskyServicePrincipals for identityProtection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: RiskyServicePrincipalItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a riskyServicePrincipal object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RiskyServicePrincipal
     * @see {@link https://learn.microsoft.com/graph/api/riskyserviceprincipal-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RiskyServicePrincipalItemRequestBuilderGetRequestConfiguration | undefined) : Promise<RiskyServicePrincipal | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RiskyServicePrincipal>(requestInfo, createRiskyServicePrincipalFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property riskyServicePrincipals in identityProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RiskyServicePrincipal
     */
    public patch(body: RiskyServicePrincipal, requestConfiguration?: RiskyServicePrincipalItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<RiskyServicePrincipal | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RiskyServicePrincipal>(requestInfo, createRiskyServicePrincipalFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property riskyServicePrincipals for identityProtection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: RiskyServicePrincipalItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a riskyServicePrincipal object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RiskyServicePrincipalItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property riskyServicePrincipals in identityProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: RiskyServicePrincipal, requestConfiguration?: RiskyServicePrincipalItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeRiskyServicePrincipal);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a RiskyServicePrincipalItemRequestBuilder
     */
    public withUrl(rawUrl: string) : RiskyServicePrincipalItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RiskyServicePrincipalItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
