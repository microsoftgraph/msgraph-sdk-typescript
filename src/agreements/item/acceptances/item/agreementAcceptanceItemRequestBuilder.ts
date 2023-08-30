import type {AgreementAcceptance} from '../../../../models/agreementAcceptance';
import {createAgreementAcceptanceFromDiscriminatorValue} from '../../../../models/createAgreementAcceptanceFromDiscriminatorValue';
import {deserializeIntoAgreementAcceptance} from '../../../../models/deserializeIntoAgreementAcceptance';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeAgreementAcceptance} from '../../../../models/serializeAgreementAcceptance';
import {AgreementAcceptanceItemRequestBuilderDeleteRequestConfiguration} from './agreementAcceptanceItemRequestBuilderDeleteRequestConfiguration';
import {AgreementAcceptanceItemRequestBuilderGetRequestConfiguration} from './agreementAcceptanceItemRequestBuilderGetRequestConfiguration';
import {AgreementAcceptanceItemRequestBuilderPatchRequestConfiguration} from './agreementAcceptanceItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the acceptances property of the microsoft.graph.agreement entity.
 */
export class AgreementAcceptanceItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AgreementAcceptanceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/agreements/{agreement%2Did}/acceptances/{agreementAcceptance%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property acceptances for agreements
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AgreementAcceptanceItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read-only. Information about acceptances of this agreement.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AgreementAcceptance
     */
    public get(requestConfiguration?: AgreementAcceptanceItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AgreementAcceptance | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AgreementAcceptance>(requestInfo, createAgreementAcceptanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property acceptances in agreements
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AgreementAcceptance
     */
    public patch(body: AgreementAcceptance, requestConfiguration?: AgreementAcceptanceItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AgreementAcceptance | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AgreementAcceptance>(requestInfo, createAgreementAcceptanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property acceptances for agreements
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AgreementAcceptanceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read-only. Information about acceptances of this agreement.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AgreementAcceptanceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property acceptances in agreements
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AgreementAcceptance, requestConfiguration?: AgreementAcceptanceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAgreementAcceptance);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a AgreementAcceptanceItemRequestBuilder
     */
    public withUrl(rawUrl: string) : AgreementAcceptanceItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AgreementAcceptanceItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
