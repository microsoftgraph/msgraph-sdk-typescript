import {createVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponseFromDiscriminatorValue} from './createVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponseFromDiscriminatorValue';
import {VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse} from './index';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to call the verifyWindowsEnrollmentAutoDiscovery method.  */
export class VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder {
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameRequestBuilder and sets the default values.
     * @param domainName Usage: domainName='{domainName}'
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter, domainName?: string | undefined) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceManagement/microsoft.graph.verifyWindowsEnrollmentAutoDiscovery(domainName='{domainName}')";
        const urlTplParams = getPathParameters(pathParameters);
        urlTplParams["domainName"] = domainName
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Invoke function verifyWindowsEnrollmentAutoDiscovery
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createGetRequestInformation(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Invoke function verifyWindowsEnrollmentAutoDiscovery
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse
     */
    public get(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse | undefined> {
        const requestInfo = this.createGetRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendAsync<VerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponse>(requestInfo, createVerifyWindowsEnrollmentAutoDiscoveryWithDomainNameResponseFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}
