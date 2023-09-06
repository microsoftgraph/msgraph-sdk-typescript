import { createTelecomExpenseManagementPartnerFromDiscriminatorValue } from '../../../models/createTelecomExpenseManagementPartnerFromDiscriminatorValue';
import { deserializeIntoTelecomExpenseManagementPartner } from '../../../models/deserializeIntoTelecomExpenseManagementPartner';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeTelecomExpenseManagementPartner } from '../../../models/serializeTelecomExpenseManagementPartner';
import { type TelecomExpenseManagementPartner } from '../../../models/telecomExpenseManagementPartner';
import { type TelecomExpenseManagementPartnerItemRequestBuilderDeleteRequestConfiguration } from './telecomExpenseManagementPartnerItemRequestBuilderDeleteRequestConfiguration';
import { type TelecomExpenseManagementPartnerItemRequestBuilderGetRequestConfiguration } from './telecomExpenseManagementPartnerItemRequestBuilderGetRequestConfiguration';
import { type TelecomExpenseManagementPartnerItemRequestBuilderPatchRequestConfiguration } from './telecomExpenseManagementPartnerItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the telecomExpenseManagementPartners property of the microsoft.graph.deviceManagement entity.
 */
export class TelecomExpenseManagementPartnerItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new TelecomExpenseManagementPartnerItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/telecomExpenseManagementPartners/{telecomExpenseManagementPartner%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a telecomExpenseManagementPartner.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-tem-telecomexpensemanagementpartner-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: TelecomExpenseManagementPartnerItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read properties and relationships of the telecomExpenseManagementPartner object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TelecomExpenseManagementPartner
     * @see {@link https://learn.microsoft.com/graph/api/intune-tem-telecomexpensemanagementpartner-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TelecomExpenseManagementPartnerItemRequestBuilderGetRequestConfiguration | undefined) : Promise<TelecomExpenseManagementPartner | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TelecomExpenseManagementPartner>(requestInfo, createTelecomExpenseManagementPartnerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a telecomExpenseManagementPartner object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TelecomExpenseManagementPartner
     * @see {@link https://learn.microsoft.com/graph/api/intune-tem-telecomexpensemanagementpartner-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: TelecomExpenseManagementPartner, requestConfiguration?: TelecomExpenseManagementPartnerItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<TelecomExpenseManagementPartner | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TelecomExpenseManagementPartner>(requestInfo, createTelecomExpenseManagementPartnerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a telecomExpenseManagementPartner.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: TelecomExpenseManagementPartnerItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read properties and relationships of the telecomExpenseManagementPartner object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TelecomExpenseManagementPartnerItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a telecomExpenseManagementPartner object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: TelecomExpenseManagementPartner, requestConfiguration?: TelecomExpenseManagementPartnerItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTelecomExpenseManagementPartner);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a TelecomExpenseManagementPartnerItemRequestBuilder
     */
    public withUrl(rawUrl: string) : TelecomExpenseManagementPartnerItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TelecomExpenseManagementPartnerItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
