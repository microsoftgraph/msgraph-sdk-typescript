import {TenantInformation} from '../../models/';
import {createTenantInformationFromDiscriminatorValue} from '../../models/createTenantInformationFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {FindTenantInformationByDomainNameWithDomainNameRequestBuilderGetRequestConfiguration} from './findTenantInformationByDomainNameWithDomainNameRequestBuilderGetRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the findTenantInformationByDomainName method.
 */
export class FindTenantInformationByDomainNameWithDomainNameRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new FindTenantInformationByDomainNameWithDomainNameRequestBuilder and sets the default values.
     * @param domainName Usage: domainName='{domainName}'
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, domainName?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/tenantRelationships/findTenantInformationByDomainName(domainName='{domainName}')");
        this.pathParameters["domainName"] = domainName
    };
    /**
     * Invoke function findTenantInformationByDomainName
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TenantInformation
     */
    public get(requestConfiguration?: FindTenantInformationByDomainNameWithDomainNameRequestBuilderGetRequestConfiguration | undefined) : Promise<TenantInformation | undefined> {
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
     * Invoke function findTenantInformationByDomainName
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: FindTenantInformationByDomainNameWithDomainNameRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
