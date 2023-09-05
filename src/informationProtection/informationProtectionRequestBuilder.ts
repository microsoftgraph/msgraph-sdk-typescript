import { createInformationProtectionFromDiscriminatorValue } from '../models/createInformationProtectionFromDiscriminatorValue';
import { deserializeIntoInformationProtection } from '../models/deserializeIntoInformationProtection';
import { type InformationProtection } from '../models/informationProtection';
import { type ODataError } from '../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../models/oDataErrors/serializeODataError';
import { serializeInformationProtection } from '../models/serializeInformationProtection';
import { BitlockerRequestBuilder } from './bitlocker/bitlockerRequestBuilder';
import { type InformationProtectionRequestBuilderGetRequestConfiguration } from './informationProtectionRequestBuilderGetRequestConfiguration';
import { type InformationProtectionRequestBuilderPatchRequestConfiguration } from './informationProtectionRequestBuilderPatchRequestConfiguration';
import { ThreatAssessmentRequestsRequestBuilder } from './threatAssessmentRequests/threatAssessmentRequestsRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the informationProtection singleton.
 */
export class InformationProtectionRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the bitlocker property of the microsoft.graph.informationProtection entity.
     */
    public get bitlocker(): BitlockerRequestBuilder {
        return new BitlockerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the threatAssessmentRequests property of the microsoft.graph.informationProtection entity.
     */
    public get threatAssessmentRequests(): ThreatAssessmentRequestsRequestBuilder {
        return new ThreatAssessmentRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new InformationProtectionRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/informationProtection{?%24select,%24expand}");
    };
    /**
     * Get informationProtection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of InformationProtection
     */
    public get(requestConfiguration?: InformationProtectionRequestBuilderGetRequestConfiguration | undefined) : Promise<InformationProtection | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<InformationProtection>(requestInfo, createInformationProtectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update informationProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of InformationProtection
     */
    public patch(body: InformationProtection, requestConfiguration?: InformationProtectionRequestBuilderPatchRequestConfiguration | undefined) : Promise<InformationProtection | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<InformationProtection>(requestInfo, createInformationProtectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get informationProtection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: InformationProtectionRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update informationProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: InformationProtection, requestConfiguration?: InformationProtectionRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeInformationProtection);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a informationProtectionRequestBuilder
     */
    public withUrl(rawUrl: string) : InformationProtectionRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new InformationProtectionRequestBuilder(rawUrl, this.requestAdapter);
    };
}
