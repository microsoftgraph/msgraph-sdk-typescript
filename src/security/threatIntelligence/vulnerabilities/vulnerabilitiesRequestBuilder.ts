import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {VulnerabilityCollectionResponse} from '../../../models/security/';
import {createVulnerabilityCollectionResponseFromDiscriminatorValue} from '../../../models/security/createVulnerabilityCollectionResponseFromDiscriminatorValue';
import {createVulnerabilityFromDiscriminatorValue} from '../../../models/security/createVulnerabilityFromDiscriminatorValue';
import {deserializeIntoVulnerability} from '../../../models/security/deserializeIntoVulnerability';
import {serializeVulnerability} from '../../../models/security/serializeVulnerability';
import type {Vulnerability} from '../../../models/security/vulnerability';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {VulnerabilityItemRequestBuilder} from './item/vulnerabilityItemRequestBuilder';
import {VulnerabilitiesRequestBuilderGetRequestConfiguration} from './vulnerabilitiesRequestBuilderGetRequestConfiguration';
import {VulnerabilitiesRequestBuilderPostRequestConfiguration} from './vulnerabilitiesRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the vulnerabilities property of the microsoft.graph.security.threatIntelligence entity.
 */
export class VulnerabilitiesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the vulnerabilities property of the microsoft.graph.security.threatIntelligence entity.
     * @param vulnerabilityId The unique identifier of vulnerability
     * @returns a VulnerabilityItemRequestBuilder
     */
    public byVulnerabilityId(vulnerabilityId: string) : VulnerabilityItemRequestBuilder {
        if(!vulnerabilityId) throw new Error("vulnerabilityId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["vulnerability%2Did"] = vulnerabilityId
        return new VulnerabilityItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new VulnerabilitiesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/threatIntelligence/vulnerabilities{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Read the properties and relationships of a vulnerability object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of VulnerabilityCollectionResponse
     */
    public get(requestConfiguration?: VulnerabilitiesRequestBuilderGetRequestConfiguration | undefined) : Promise<VulnerabilityCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<VulnerabilityCollectionResponse>(requestInfo, createVulnerabilityCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to vulnerabilities for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Vulnerability
     */
    public post(body: Vulnerability, requestConfiguration?: VulnerabilitiesRequestBuilderPostRequestConfiguration | undefined) : Promise<Vulnerability | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Vulnerability>(requestInfo, createVulnerabilityFromDiscriminatorValue, errorMapping);
    };
    /**
     * Read the properties and relationships of a vulnerability object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: VulnerabilitiesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to vulnerabilities for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Vulnerability, requestConfiguration?: VulnerabilitiesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeVulnerability);
        return requestInfo;
    };
}
