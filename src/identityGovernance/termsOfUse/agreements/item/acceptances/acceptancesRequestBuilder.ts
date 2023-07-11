import {AgreementAcceptanceCollectionResponse} from '../../../../../models/';
import {AgreementAcceptance} from '../../../../../models/agreementAcceptance';
import {createAgreementAcceptanceCollectionResponseFromDiscriminatorValue} from '../../../../../models/createAgreementAcceptanceCollectionResponseFromDiscriminatorValue';
import {createAgreementAcceptanceFromDiscriminatorValue} from '../../../../../models/createAgreementAcceptanceFromDiscriminatorValue';
import {deserializeIntoAgreementAcceptance} from '../../../../../models/deserializeIntoAgreementAcceptance';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeAgreementAcceptance} from '../../../../../models/serializeAgreementAcceptance';
import {AcceptancesRequestBuilderGetRequestConfiguration} from './acceptancesRequestBuilderGetRequestConfiguration';
import {AcceptancesRequestBuilderPostRequestConfiguration} from './acceptancesRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AgreementAcceptanceItemRequestBuilder} from './item/agreementAcceptanceItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the acceptances property of the microsoft.graph.agreement entity.
 */
export class AcceptancesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the acceptances property of the microsoft.graph.agreement entity.
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
     * Instantiates a new AcceptancesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/termsOfUse/agreements/{agreement%2Did}/acceptances{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the details about the acceptance records for a specific agreement.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AgreementAcceptanceCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/agreement-list-acceptances?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AcceptancesRequestBuilderGetRequestConfiguration | undefined) : Promise<AgreementAcceptanceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AgreementAcceptanceCollectionResponse>(requestInfo, createAgreementAcceptanceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to acceptances for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AgreementAcceptance
     */
    public post(body: AgreementAcceptance | undefined, requestConfiguration?: AcceptancesRequestBuilderPostRequestConfiguration | undefined) : Promise<AgreementAcceptance | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AgreementAcceptance>(requestInfo, createAgreementAcceptanceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the details about the acceptance records for a specific agreement.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AcceptancesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to acceptances for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AgreementAcceptance | undefined, requestConfiguration?: AcceptancesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAgreementAcceptance);
        return requestInfo;
    };
}
