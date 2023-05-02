import {createIdentityGovernanceFromDiscriminatorValue} from '../models/createIdentityGovernanceFromDiscriminatorValue';
import {deserializeIntoIdentityGovernance} from '../models/deserializeIntoIdentityGovernance';
import {IdentityGovernance} from '../models/identityGovernance';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import {serializeIdentityGovernance} from '../models/serializeIdentityGovernance';
import {AccessReviewsRequestBuilder} from './accessReviews/accessReviewsRequestBuilder';
import {AppConsentRequestBuilder} from './appConsent/appConsentRequestBuilder';
import {EntitlementManagementRequestBuilder} from './entitlementManagement/entitlementManagementRequestBuilder';
import {IdentityGovernanceRequestBuilderGetRequestConfiguration} from './identityGovernanceRequestBuilderGetRequestConfiguration';
import {IdentityGovernanceRequestBuilderPatchRequestConfiguration} from './identityGovernanceRequestBuilderPatchRequestConfiguration';
import {TermsOfUseRequestBuilder} from './termsOfUse/termsOfUseRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the identityGovernance singleton.
 */
export class IdentityGovernanceRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the accessReviews property of the microsoft.graph.identityGovernance entity. */
    public get accessReviews(): AccessReviewsRequestBuilder {
        return new AccessReviewsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the appConsent property of the microsoft.graph.identityGovernance entity. */
    public get appConsent(): AppConsentRequestBuilder {
        return new AppConsentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the entitlementManagement property of the microsoft.graph.identityGovernance entity. */
    public get entitlementManagement(): EntitlementManagementRequestBuilder {
        return new EntitlementManagementRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the termsOfUse property of the microsoft.graph.identityGovernance entity. */
    public get termsOfUse(): TermsOfUseRequestBuilder {
        return new TermsOfUseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new IdentityGovernanceRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance{?%24select,%24expand}");
    };
    /**
     * Get identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentityGovernance
     */
    public get(requestConfiguration?: IdentityGovernanceRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IdentityGovernance | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<IdentityGovernance>(requestInfo, createIdentityGovernanceFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentityGovernance
     */
    public patch(body: IdentityGovernance | undefined, requestConfiguration?: IdentityGovernanceRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IdentityGovernance | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter?.sendAsync<IdentityGovernance>(requestInfo, createIdentityGovernanceFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IdentityGovernanceRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: IdentityGovernance | undefined, requestConfiguration?: IdentityGovernanceRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeIdentityGovernance);
        return requestInfo;
    };
}
