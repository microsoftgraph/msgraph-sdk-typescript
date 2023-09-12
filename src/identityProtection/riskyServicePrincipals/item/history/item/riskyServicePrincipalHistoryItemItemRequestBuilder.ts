import { createRiskyServicePrincipalHistoryItemFromDiscriminatorValue } from '../../../../../models/createRiskyServicePrincipalHistoryItemFromDiscriminatorValue';
import { deserializeIntoRiskyServicePrincipalHistoryItem } from '../../../../../models/deserializeIntoRiskyServicePrincipalHistoryItem';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { type RiskyServicePrincipalHistoryItem } from '../../../../../models/riskyServicePrincipalHistoryItem';
import { serializeRiskyServicePrincipalHistoryItem } from '../../../../../models/serializeRiskyServicePrincipalHistoryItem';
import { type RiskyServicePrincipalHistoryItemItemRequestBuilderDeleteRequestConfiguration } from './riskyServicePrincipalHistoryItemItemRequestBuilderDeleteRequestConfiguration';
import { type RiskyServicePrincipalHistoryItemItemRequestBuilderGetRequestConfiguration } from './riskyServicePrincipalHistoryItemItemRequestBuilderGetRequestConfiguration';
import { type RiskyServicePrincipalHistoryItemItemRequestBuilderPatchRequestConfiguration } from './riskyServicePrincipalHistoryItemItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the history property of the microsoft.graph.riskyServicePrincipal entity.
 */
export class RiskyServicePrincipalHistoryItemItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new RiskyServicePrincipalHistoryItemItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityProtection/riskyServicePrincipals/{riskyServicePrincipal%2Did}/history/{riskyServicePrincipalHistoryItem%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property history for identityProtection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: RiskyServicePrincipalHistoryItemItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Represents the risk history of Azure AD service principals.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RiskyServicePrincipalHistoryItem
     */
    public get(requestConfiguration?: RiskyServicePrincipalHistoryItemItemRequestBuilderGetRequestConfiguration | undefined) : Promise<RiskyServicePrincipalHistoryItem | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RiskyServicePrincipalHistoryItem>(requestInfo, createRiskyServicePrincipalHistoryItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property history in identityProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RiskyServicePrincipalHistoryItem
     */
    public patch(body: RiskyServicePrincipalHistoryItem, requestConfiguration?: RiskyServicePrincipalHistoryItemItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<RiskyServicePrincipalHistoryItem | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RiskyServicePrincipalHistoryItem>(requestInfo, createRiskyServicePrincipalHistoryItemFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property history for identityProtection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: RiskyServicePrincipalHistoryItemItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Represents the risk history of Azure AD service principals.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RiskyServicePrincipalHistoryItemItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property history in identityProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: RiskyServicePrincipalHistoryItem, requestConfiguration?: RiskyServicePrincipalHistoryItemItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeRiskyServicePrincipalHistoryItem);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a RiskyServicePrincipalHistoryItemItemRequestBuilder
     */
    public withUrl(rawUrl: string) : RiskyServicePrincipalHistoryItemItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RiskyServicePrincipalHistoryItemItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
