import {ServicePrincipalRiskDetectionCollectionResponse} from '../../models/';
import {createServicePrincipalRiskDetectionCollectionResponseFromDiscriminatorValue} from '../../models/createServicePrincipalRiskDetectionCollectionResponseFromDiscriminatorValue';
import {createServicePrincipalRiskDetectionFromDiscriminatorValue} from '../../models/createServicePrincipalRiskDetectionFromDiscriminatorValue';
import {deserializeIntoServicePrincipalRiskDetection} from '../../models/deserializeIntoServicePrincipalRiskDetection';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeServicePrincipalRiskDetection} from '../../models/serializeServicePrincipalRiskDetection';
import type {ServicePrincipalRiskDetection} from '../../models/servicePrincipalRiskDetection';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ServicePrincipalRiskDetectionItemRequestBuilder} from './item/servicePrincipalRiskDetectionItemRequestBuilder';
import {ServicePrincipalRiskDetectionsRequestBuilderGetRequestConfiguration} from './servicePrincipalRiskDetectionsRequestBuilderGetRequestConfiguration';
import {ServicePrincipalRiskDetectionsRequestBuilderPostRequestConfiguration} from './servicePrincipalRiskDetectionsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the servicePrincipalRiskDetections property of the microsoft.graph.identityProtectionRoot entity.
 */
export class ServicePrincipalRiskDetectionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the servicePrincipalRiskDetections property of the microsoft.graph.identityProtectionRoot entity.
     * @param servicePrincipalRiskDetectionId Unique identifier of the item
     * @returns a ServicePrincipalRiskDetectionItemRequestBuilder
     */
    public byServicePrincipalRiskDetectionId(servicePrincipalRiskDetectionId: string) : ServicePrincipalRiskDetectionItemRequestBuilder {
        if(!servicePrincipalRiskDetectionId) throw new Error("servicePrincipalRiskDetectionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["servicePrincipalRiskDetection%2Did"] = servicePrincipalRiskDetectionId
        return new ServicePrincipalRiskDetectionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ServicePrincipalRiskDetectionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityProtection/servicePrincipalRiskDetections{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the properties of a collection of servicePrincipalRiskDetection objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServicePrincipalRiskDetectionCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/identityprotectionroot-list-serviceprincipalriskdetections?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ServicePrincipalRiskDetectionsRequestBuilderGetRequestConfiguration | undefined) : Promise<ServicePrincipalRiskDetectionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServicePrincipalRiskDetectionCollectionResponse>(requestInfo, createServicePrincipalRiskDetectionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to servicePrincipalRiskDetections for identityProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServicePrincipalRiskDetection
     */
    public post(body: ServicePrincipalRiskDetection, requestConfiguration?: ServicePrincipalRiskDetectionsRequestBuilderPostRequestConfiguration | undefined) : Promise<ServicePrincipalRiskDetection | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ServicePrincipalRiskDetection>(requestInfo, createServicePrincipalRiskDetectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the properties of a collection of servicePrincipalRiskDetection objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ServicePrincipalRiskDetectionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to servicePrincipalRiskDetections for identityProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ServicePrincipalRiskDetection, requestConfiguration?: ServicePrincipalRiskDetectionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeServicePrincipalRiskDetection);
        return requestInfo;
    };
}
