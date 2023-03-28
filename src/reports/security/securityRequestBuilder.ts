import {SecurityReportsRoot} from '../../models/';
import {createSecurityReportsRootFromDiscriminatorValue} from '../../models/createSecurityReportsRootFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {GetAttackSimulationRepeatOffendersRequestBuilder} from './getAttackSimulationRepeatOffenders/getAttackSimulationRepeatOffendersRequestBuilder';
import {GetAttackSimulationSimulationUserCoverageRequestBuilder} from './getAttackSimulationSimulationUserCoverage/getAttackSimulationSimulationUserCoverageRequestBuilder';
import {GetAttackSimulationTrainingUserCoverageRequestBuilder} from './getAttackSimulationTrainingUserCoverage/getAttackSimulationTrainingUserCoverageRequestBuilder';
import {SecurityRequestBuilderDeleteRequestConfiguration} from './securityRequestBuilderDeleteRequestConfiguration';
import {SecurityRequestBuilderGetRequestConfiguration} from './securityRequestBuilderGetRequestConfiguration';
import {SecurityRequestBuilderPatchRequestConfiguration} from './securityRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the security property of the microsoft.graph.reportRoot entity.
 */
export class SecurityRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to call the getAttackSimulationRepeatOffenders method. */
    public get getAttackSimulationRepeatOffenders(): GetAttackSimulationRepeatOffendersRequestBuilder {
        return new GetAttackSimulationRepeatOffendersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getAttackSimulationSimulationUserCoverage method. */
    public get getAttackSimulationSimulationUserCoverage(): GetAttackSimulationSimulationUserCoverageRequestBuilder {
        return new GetAttackSimulationSimulationUserCoverageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the getAttackSimulationTrainingUserCoverage method. */
    public get getAttackSimulationTrainingUserCoverage(): GetAttackSimulationTrainingUserCoverageRequestBuilder {
        return new GetAttackSimulationTrainingUserCoverageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new SecurityRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/reports/security{?%24select,%24expand}");
    };
    /**
     * Delete navigation property security for reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: SecurityRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Get security from reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SecurityReportsRoot
     */
    public get(requestConfiguration?: SecurityRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SecurityReportsRoot | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<SecurityReportsRoot>(requestInfo, createSecurityReportsRootFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Update the navigation property security in reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of SecurityReportsRoot
     */
    public patch(body: SecurityReportsRoot | undefined, requestConfiguration?: SecurityRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SecurityReportsRoot | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<SecurityReportsRoot>(requestInfo, createSecurityReportsRootFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Delete navigation property security for reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: SecurityRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get security from reports
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SecurityRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property security in reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: SecurityReportsRoot | undefined, requestConfiguration?: SecurityRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
