import {AgreementAcceptanceCollectionResponse} from '../../models/';
import {createAgreementAcceptanceCollectionResponseFromDiscriminatorValue} from '../../models/createAgreementAcceptanceCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AgreementAcceptancesRequestBuilderGetRequestConfiguration} from './agreementAcceptancesRequestBuilderGetRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AgreementAcceptanceItemRequestBuilder} from './item/agreementAcceptanceItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the agreementAcceptances property of the microsoft.graph.user entity.
 */
export class AgreementAcceptancesRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the agreementAcceptances property of the microsoft.graph.user entity.
     * @param agreementAcceptanceId Unique identifier of the item
     * @returns a AgreementAcceptanceItemRequestBuilder
     */
    public byAgreementAcceptanceId(agreementAcceptanceId: string) : AgreementAcceptanceItemRequestBuilder {
        if(!agreementAcceptanceId) throw new Error("agreementAcceptanceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["agreementAcceptance%2Did"] = agreementAcceptanceId
        return new AgreementAcceptanceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AgreementAcceptancesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/agreementAcceptances{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The user's terms of use acceptance statuses. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AgreementAcceptanceCollectionResponse
     */
    public get(requestConfiguration?: AgreementAcceptancesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AgreementAcceptanceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AgreementAcceptanceCollectionResponse>(requestInfo, createAgreementAcceptanceCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The user's terms of use acceptance statuses. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AgreementAcceptancesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
}
