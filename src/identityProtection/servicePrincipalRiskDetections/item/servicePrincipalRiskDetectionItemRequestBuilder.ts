import {createServicePrincipalRiskDetectionFromDiscriminatorValue} from '../../../models/createServicePrincipalRiskDetectionFromDiscriminatorValue';
import {deserializeIntoServicePrincipalRiskDetection} from '../../../models/deserializeIntoServicePrincipalRiskDetection';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeServicePrincipalRiskDetection} from '../../../models/serializeServicePrincipalRiskDetection';
import type {ServicePrincipalRiskDetection} from '../../../models/servicePrincipalRiskDetection';
import {ServicePrincipalRiskDetectionItemRequestBuilderDeleteRequestConfiguration} from './servicePrincipalRiskDetectionItemRequestBuilderDeleteRequestConfiguration';
import {ServicePrincipalRiskDetectionItemRequestBuilderGetRequestConfiguration} from './servicePrincipalRiskDetectionItemRequestBuilderGetRequestConfiguration';
import {ServicePrincipalRiskDetectionItemRequestBuilderPatchRequestConfiguration} from './servicePrincipalRiskDetectionItemRequestBuilderPatchRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the servicePrincipalRiskDetections property of the microsoft.graph.identityProtectionRoot entity.
 */
export class ServicePrincipalRiskDetectionItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ServicePrincipalRiskDetectionItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityProtection/servicePrincipalRiskDetections/{servicePrincipalRiskDetection%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property servicePrincipalRiskDetections for identityProtection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: ServicePrincipalRiskDetectionItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a servicePrincipalRiskDetection object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServicePrincipalRiskDetection
     * @see {@link https://learn.microsoft.com/graph/api/serviceprincipalriskdetection-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ServicePrincipalRiskDetectionItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ServicePrincipalRiskDetection | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServicePrincipalRiskDetection>(requestInfo, createServicePrincipalRiskDetectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property servicePrincipalRiskDetections in identityProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServicePrincipalRiskDetection
     */
    public patch(body: ServicePrincipalRiskDetection, requestConfiguration?: ServicePrincipalRiskDetectionItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ServicePrincipalRiskDetection | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServicePrincipalRiskDetection>(requestInfo, createServicePrincipalRiskDetectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property servicePrincipalRiskDetections for identityProtection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ServicePrincipalRiskDetectionItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a servicePrincipalRiskDetection object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ServicePrincipalRiskDetectionItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property servicePrincipalRiskDetections in identityProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ServicePrincipalRiskDetection, requestConfiguration?: ServicePrincipalRiskDetectionItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeServicePrincipalRiskDetection);
        return requestInfo;
    };
}
