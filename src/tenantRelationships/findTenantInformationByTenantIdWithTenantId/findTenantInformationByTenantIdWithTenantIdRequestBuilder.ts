import {TenantInformation} from '../../models/';
import {createTenantInformationFromDiscriminatorValue} from '../../models/createTenantInformationFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {FindTenantInformationByTenantIdWithTenantIdRequestBuilderGetRequestConfiguration} from './findTenantInformationByTenantIdWithTenantIdRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the findTenantInformationByTenantId method.
 */
export class FindTenantInformationByTenantIdWithTenantIdRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new FindTenantInformationByTenantIdWithTenantIdRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     * @param tenantId Usage: tenantId='{tenantId}'
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, tenantId?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/tenantRelationships/findTenantInformationByTenantId(tenantId='{tenantId}')");
        this.pathParameters["tenantId"] = tenantId
    };
    /**
     * Invoke function findTenantInformationByTenantId
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TenantInformation
     */
    public get(requestConfiguration?: FindTenantInformationByTenantIdWithTenantIdRequestBuilderGetRequestConfiguration | undefined) : Promise<TenantInformation | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<TenantInformation>(requestInfo, createTenantInformationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function findTenantInformationByTenantId
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: FindTenantInformationByTenantIdWithTenantIdRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
}
