import {createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue} from '../../../../../models/createTermsAndConditionsAcceptanceStatusFromDiscriminatorValue';
import {deserializeIntoTermsAndConditionsAcceptanceStatus} from '../../../../../models/deserializeIntoTermsAndConditionsAcceptanceStatus';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeTermsAndConditionsAcceptanceStatus} from '../../../../../models/serializeTermsAndConditionsAcceptanceStatus';
import {TermsAndConditionsAcceptanceStatus} from '../../../../../models/termsAndConditionsAcceptanceStatus';
import {TermsAndConditionsRequestBuilder} from './termsAndConditions/termsAndConditionsRequestBuilder';
import {TermsAndConditionsAcceptanceStatusItemRequestBuilderDeleteRequestConfiguration} from './termsAndConditionsAcceptanceStatusItemRequestBuilderDeleteRequestConfiguration';
import {TermsAndConditionsAcceptanceStatusItemRequestBuilderGetRequestConfiguration} from './termsAndConditionsAcceptanceStatusItemRequestBuilderGetRequestConfiguration';
import {TermsAndConditionsAcceptanceStatusItemRequestBuilderPatchRequestConfiguration} from './termsAndConditionsAcceptanceStatusItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

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
     * Delete navigation property acceptanceStatuses for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
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
     * The list of acceptance statuses for this T&C policy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TermsAndConditionsAcceptanceStatus
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
     * Update the navigation property acceptanceStatuses in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TermsAndConditionsAcceptanceStatus
     */
    public patch(body: TermsAndConditionsAcceptanceStatus | undefined, requestConfiguration?: TermsAndConditionsAcceptanceStatusItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<TermsAndConditionsAcceptanceStatus | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
     * Delete navigation property acceptanceStatuses for deviceManagement
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
     * The list of acceptance statuses for this T&C policy.
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
     * Update the navigation property acceptanceStatuses in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: TermsAndConditionsAcceptanceStatus | undefined, requestConfiguration?: TermsAndConditionsAcceptanceStatusItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeTermsAndConditionsAcceptanceStatus);
        return requestInfo;
    };
}
