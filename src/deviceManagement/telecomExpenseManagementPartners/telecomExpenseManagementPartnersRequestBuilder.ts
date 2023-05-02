import {TelecomExpenseManagementPartnerCollectionResponse} from '../../models/';
import {createTelecomExpenseManagementPartnerCollectionResponseFromDiscriminatorValue} from '../../models/createTelecomExpenseManagementPartnerCollectionResponseFromDiscriminatorValue';
import {createTelecomExpenseManagementPartnerFromDiscriminatorValue} from '../../models/createTelecomExpenseManagementPartnerFromDiscriminatorValue';
import {deserializeIntoTelecomExpenseManagementPartner} from '../../models/deserializeIntoTelecomExpenseManagementPartner';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeTelecomExpenseManagementPartner} from '../../models/serializeTelecomExpenseManagementPartner';
import {TelecomExpenseManagementPartner} from '../../models/telecomExpenseManagementPartner';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TelecomExpenseManagementPartnerItemRequestBuilder} from './item/telecomExpenseManagementPartnerItemRequestBuilder';
import {TelecomExpenseManagementPartnersRequestBuilderGetRequestConfiguration} from './telecomExpenseManagementPartnersRequestBuilderGetRequestConfiguration';
import {TelecomExpenseManagementPartnersRequestBuilderPostRequestConfiguration} from './telecomExpenseManagementPartnersRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the telecomExpenseManagementPartners property of the microsoft.graph.deviceManagement entity.
 */
export class TelecomExpenseManagementPartnersRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the telecomExpenseManagementPartners property of the microsoft.graph.deviceManagement entity.
     * @param telecomExpenseManagementPartnerId Unique identifier of the item
     * @returns a TelecomExpenseManagementPartnerItemRequestBuilder
     */
    public byTelecomExpenseManagementPartnerId(telecomExpenseManagementPartnerId: string) : TelecomExpenseManagementPartnerItemRequestBuilder {
        if(!telecomExpenseManagementPartnerId) throw new Error("telecomExpenseManagementPartnerId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["telecomExpenseManagementPartner%2Did"] = telecomExpenseManagementPartnerId
        return new TelecomExpenseManagementPartnerItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TelecomExpenseManagementPartnersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/telecomExpenseManagementPartners{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The telecom expense management partners.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TelecomExpenseManagementPartnerCollectionResponse
     */
    public get(requestConfiguration?: TelecomExpenseManagementPartnersRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TelecomExpenseManagementPartnerCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<TelecomExpenseManagementPartnerCollectionResponse>(requestInfo, createTelecomExpenseManagementPartnerCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to telecomExpenseManagementPartners for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TelecomExpenseManagementPartner
     */
    public post(body: TelecomExpenseManagementPartner | undefined, requestConfiguration?: TelecomExpenseManagementPartnersRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TelecomExpenseManagementPartner | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<TelecomExpenseManagementPartner>(requestInfo, createTelecomExpenseManagementPartnerFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The telecom expense management partners.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TelecomExpenseManagementPartnersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to telecomExpenseManagementPartners for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TelecomExpenseManagementPartner | undefined, requestConfiguration?: TelecomExpenseManagementPartnersRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeTelecomExpenseManagementPartner);
        return requestInfo;
    };
}
