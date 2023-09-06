import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { createVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponseFromDiscriminatorValue } from './createVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponseFromDiscriminatorValue';
import { type VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse } from './index';
import { type VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilderGetRequestConfiguration } from './verifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the verifyWindowsEnrollmentAutoDiscovery method.
 */
export class VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder and sets the default values.
     * @param domainName Usage: domainName='{domainName}'
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, domainName?: string | undefined) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceManagement/verifyWindowsEnrollmentAutoDiscovery(domainName='{domainName}')");
        this.pathParameters["domainName"] = domainName
    };
    /**
     * Invoke function verifyWindowsEnrollmentAutoDiscovery
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse
     */
    public get(requestConfiguration?: VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilderGetRequestConfiguration | undefined) : Promise<VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse>(requestInfo, createVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Invoke function verifyWindowsEnrollmentAutoDiscovery
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a verifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder
     */
    public withUrl(rawUrl: string) : VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder(rawUrl, this.requestAdapter);
    };
}
