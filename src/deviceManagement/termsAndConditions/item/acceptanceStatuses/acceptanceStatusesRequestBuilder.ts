import {TermsAndConditionsAcceptanceStatusCollectionResponse} from '../../../../models/';
import {createTermsAndConditionsAcceptanceStatusCollectionResponseFromDiscriminatorValue} from '../../../../models/createTermsAndConditionsAcceptanceStatusCollectionResponseFromDiscriminatorValue';
import {createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue} from '../../../../models/createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue';
import {deserializeIntoTermsAndConditionsAcceptanceStatus} from '../../../../models/deserializeIntoTermsAndConditionsAcceptanceStatus';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeTermsAndConditionsAcceptanceStatus} from '../../../../models/serializeTermsAndConditionsAcceptanceStatus';
import {TermsAndConditionsAcceptanceStatus} from '../../../../models/termsAndConditionsAcceptanceStatus';
import {AcceptanceStatusesRequestBuilderGetRequestConfiguration} from './acceptanceStatusesRequestBuilderGetRequestConfiguration';
import {AcceptanceStatusesRequestBuilderPostRequestConfiguration} from './acceptanceStatusesRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {TermsAndConditionsAcceptanceStatusItemRequestBuilder} from './item/termsAndConditionsAcceptanceStatusItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the acceptanceStatuses property of the microsoft.graph.termsAndConditions entity.
 */
export class AcceptanceStatusesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the acceptanceStatuses property of the microsoft.graph.termsAndConditions entity.
     * @param termsAndConditionsAcceptanceStatusId Unique identifier of the item
     * @returns a TermsAndConditionsAcceptanceStatusItemRequestBuilder
     */
    public byTermsAndConditionsAcceptanceStatusId(termsAndConditionsAcceptanceStatusId: string) : TermsAndConditionsAcceptanceStatusItemRequestBuilder {
        if(!termsAndConditionsAcceptanceStatusId) throw new Error("termsAndConditionsAcceptanceStatusId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["termsAndConditionsAcceptanceStatus%2Did"] = termsAndConditionsAcceptanceStatusId
        return new TermsAndConditionsAcceptanceStatusItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AcceptanceStatusesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/termsAndConditions/{termsAndConditions%2Did}/acceptanceStatuses{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the termsAndConditionsAcceptanceStatus objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TermsAndConditionsAcceptanceStatusCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/intune-companyterms-termsandconditionsacceptancestatus-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AcceptanceStatusesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TermsAndConditionsAcceptanceStatusCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<TermsAndConditionsAcceptanceStatusCollectionResponse>(requestInfo, createTermsAndConditionsAcceptanceStatusCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create a new termsAndConditionsAcceptanceStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of TermsAndConditionsAcceptanceStatus
     * @see {@link https://docs.microsoft.com/graph/api/intune-companyterms-termsandconditionsacceptancestatus-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: TermsAndConditionsAcceptanceStatus | undefined, requestConfiguration?: AcceptanceStatusesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<TermsAndConditionsAcceptanceStatus | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<TermsAndConditionsAcceptanceStatus>(requestInfo, createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * List properties and relationships of the termsAndConditionsAcceptanceStatus objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AcceptanceStatusesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new termsAndConditionsAcceptanceStatus object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: TermsAndConditionsAcceptanceStatus | undefined, requestConfiguration?: AcceptanceStatusesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeTermsAndConditionsAcceptanceStatus);
        return requestInfo;
    };
}
