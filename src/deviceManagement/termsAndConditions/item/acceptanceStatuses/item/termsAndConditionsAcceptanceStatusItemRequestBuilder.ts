import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError } from '../../../../../models/oDataErrors/oDataError';
import { createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue, deserializeIntoTermsAndConditionsAcceptanceStatus, serializeTermsAndConditionsAcceptanceStatus, type TermsAndConditionsAcceptanceStatus } from '../../../../../models/termsAndConditionsAcceptanceStatus';
import { TermsAndConditionsRequestBuilder } from './termsAndConditions/termsAndConditionsRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

export interface TermsAndConditionsAcceptanceStatusItemRequestBuilderDeleteRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
export interface TermsAndConditionsAcceptanceStatusItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
export interface TermsAndConditionsAcceptanceStatusItemRequestBuilderGetRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
    /**
     * Request query parameters
     */
    queryParameters?: TermsAndConditionsAcceptanceStatusItemRequestBuilderGetQueryParameters;
}
export interface TermsAndConditionsAcceptanceStatusItemRequestBuilderPatchRequestConfiguration {
    /**
     * Request headers
     */
    headers?: Record<string, string[]>;
    /**
     * Request options
     */
    options?: RequestOption[];
}
/**
 * Provides operations to manage the acceptanceStatuses property of the microsoft.graph.termsAndConditions entity.
 */
export class TermsAndConditionsAcceptanceStatusItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the termsAndConditions property of the microsoft.graph.termsAndConditionsAcceptanceStatus entity.
     */
    public get termsAndConditions(): TermsAndConditionsRequestBuilder {
        return new TermsAndConditionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new TermsAndConditionsAcceptanceStatusItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/termsAndConditions/{termsAndConditions%2Did}/acceptanceStatuses/{termsAndConditionsAcceptanceStatus%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a termsAndConditionsAcceptanceStatus.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-companyterms-termsandconditionsacceptancestatus-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: TermsAndConditionsAcceptanceStatusItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the termsAndConditionsAcceptanceStatus object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TermsAndConditionsAcceptanceStatus
     * @see {@link https://learn.microsoft.com/graph/api/intune-companyterms-termsandconditionsacceptancestatus-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TermsAndConditionsAcceptanceStatusItemRequestBuilderGetRequestConfiguration | undefined) : Promise<TermsAndConditionsAcceptanceStatus | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TermsAndConditionsAcceptanceStatus>(requestInfo, createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a termsAndConditionsAcceptanceStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TermsAndConditionsAcceptanceStatus
     * @see {@link https://learn.microsoft.com/graph/api/intune-companyterms-termsandconditionsacceptancestatus-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: TermsAndConditionsAcceptanceStatus, requestConfiguration?: TermsAndConditionsAcceptanceStatusItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<TermsAndConditionsAcceptanceStatus | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TermsAndConditionsAcceptanceStatus>(requestInfo, createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a termsAndConditionsAcceptanceStatus.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: TermsAndConditionsAcceptanceStatusItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the termsAndConditionsAcceptanceStatus object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TermsAndConditionsAcceptanceStatusItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a termsAndConditionsAcceptanceStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: TermsAndConditionsAcceptanceStatus, requestConfiguration?: TermsAndConditionsAcceptanceStatusItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTermsAndConditionsAcceptanceStatus);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a TermsAndConditionsAcceptanceStatusItemRequestBuilder
     */
    public withUrl(rawUrl: string) : TermsAndConditionsAcceptanceStatusItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TermsAndConditionsAcceptanceStatusItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
