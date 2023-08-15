import {AgreementCollectionResponse} from '../../../models/';
import type {Agreement} from '../../../models/agreement';
import {createAgreementCollectionResponseFromDiscriminatorValue} from '../../../models/createAgreementCollectionResponseFromDiscriminatorValue';
import {createAgreementFromDiscriminatorValue} from '../../../models/createAgreementFromDiscriminatorValue';
import {deserializeIntoAgreement} from '../../../models/deserializeIntoAgreement';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeAgreement} from '../../../models/serializeAgreement';
import {AgreementsRequestBuilderGetRequestConfiguration} from './agreementsRequestBuilderGetRequestConfiguration';
import {AgreementsRequestBuilderPostRequestConfiguration} from './agreementsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AgreementItemRequestBuilder} from './item/agreementItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the agreements property of the microsoft.graph.termsOfUseContainer entity.
 */
export class AgreementsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the agreements property of the microsoft.graph.termsOfUseContainer entity.
     * @param agreementId The unique identifier of agreement
     * @returns a AgreementItemRequestBuilder
     */
    public byAgreementId(agreementId: string) : AgreementItemRequestBuilder {
        if(!agreementId) throw new Error("agreementId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["agreement%2Did"] = agreementId
        return new AgreementItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AgreementsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/termsOfUse/agreements{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of agreement objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AgreementCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/termsofusecontainer-list-agreements?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AgreementsRequestBuilderGetRequestConfiguration | undefined) : Promise<AgreementCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AgreementCollectionResponse>(requestInfo, createAgreementCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new agreement object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Agreement
     * @see {@link https://learn.microsoft.com/graph/api/termsofusecontainer-post-agreements?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Agreement, requestConfiguration?: AgreementsRequestBuilderPostRequestConfiguration | undefined) : Promise<Agreement | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Agreement>(requestInfo, createAgreementFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of agreement objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AgreementsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new agreement object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Agreement, requestConfiguration?: AgreementsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAgreement);
        return requestInfo;
    };
}
