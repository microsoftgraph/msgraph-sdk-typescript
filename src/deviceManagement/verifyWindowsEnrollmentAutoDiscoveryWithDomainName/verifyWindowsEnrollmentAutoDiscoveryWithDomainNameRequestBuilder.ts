import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {createVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponseFromDiscriminatorValue} from './createVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponseFromDiscriminatorValue';
import {VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse} from './index';
import {VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilderGetRequestConfiguration} from './verifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilderGetRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the verifyWindowsEnrollmentAutoDiscovery method.
 */
export class VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder {
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder and sets the default values.
     * @param domainName Usage: domainName='{domainName}'
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, domainName?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/verifyWindowsEnrollmentAutoDiscovery(domainName='{domainName}')";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["domainName"] = domainName
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke function verifyWindowsEnrollmentAutoDiscovery
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse
     */
    public get(requestConfiguration?: VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse>(requestInfo, createVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
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
}
