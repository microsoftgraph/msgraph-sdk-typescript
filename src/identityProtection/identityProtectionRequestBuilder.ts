import {IdentityProtectionRoot} from '../models/';
import {createIdentityProtectionRootFromDiscriminatorValue} from '../models/createIdentityProtectionRootFromDiscriminatorValue';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {IdentityProtectionRequestBuilderGetRequestConfiguration} from './identityProtectionRequestBuilderGetRequestConfiguration';
import {IdentityProtectionRequestBuilderPatchRequestConfiguration} from './identityProtectionRequestBuilderPatchRequestConfiguration';
import {RiskDetectionsRequestBuilder} from './riskDetections/riskDetectionsRequestBuilder';
import {RiskyServicePrincipalsRequestBuilder} from './riskyServicePrincipals/riskyServicePrincipalsRequestBuilder';
import {RiskyUsersRequestBuilder} from './riskyUsers/riskyUsersRequestBuilder';
import {ServicePrincipalRiskDetectionsRequestBuilder} from './servicePrincipalRiskDetections/servicePrincipalRiskDetectionsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the identityProtectionRoot singleton.
 */
export class IdentityProtectionRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to manage the riskDetections property of the microsoft.graph.identityProtectionRoot entity. */
    public get riskDetections(): RiskDetectionsRequestBuilder {
        return new RiskDetectionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the riskyServicePrincipals property of the microsoft.graph.identityProtectionRoot entity. */
    public get riskyServicePrincipals(): RiskyServicePrincipalsRequestBuilder {
        return new RiskyServicePrincipalsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the riskyUsers property of the microsoft.graph.identityProtectionRoot entity. */
    public get riskyUsers(): RiskyUsersRequestBuilder {
        return new RiskyUsersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the servicePrincipalRiskDetections property of the microsoft.graph.identityProtectionRoot entity. */
    public get servicePrincipalRiskDetections(): ServicePrincipalRiskDetectionsRequestBuilder {
        return new ServicePrincipalRiskDetectionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new IdentityProtectionRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityProtection{?%24select,%24expand}");
    };
    /**
     * Get identityProtection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentityProtectionRoot
     */
    public get(requestConfiguration?: IdentityProtectionRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IdentityProtectionRoot | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<IdentityProtectionRoot>(requestInfo, createIdentityProtectionRootFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update identityProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of IdentityProtectionRoot
     */
    public patch(body: IdentityProtectionRoot | undefined, requestConfiguration?: IdentityProtectionRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<IdentityProtectionRoot | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<IdentityProtectionRoot>(requestInfo, createIdentityProtectionRootFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get identityProtection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IdentityProtectionRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update identityProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: IdentityProtectionRoot | undefined, requestConfiguration?: IdentityProtectionRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
