import {WindowsInformationProtectionPolicyCollectionResponseImpl, WindowsInformationProtectionPolicyImpl} from '../../models/';
import {createWindowsInformationProtectionPolicyCollectionResponseFromDiscriminatorValue} from '../../models/createWindowsInformationProtectionPolicyCollectionResponseFromDiscriminatorValue';
import {createWindowsInformationProtectionPolicyFromDiscriminatorValue} from '../../models/createWindowsInformationProtectionPolicyFromDiscriminatorValue';
import {ODataErrorImpl} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {WindowsInformationProtectionPolicy} from '../../models/windowsInformationProtectionPolicy';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {WindowsInformationProtectionPoliciesRequestBuilderGetRequestConfiguration} from './windowsInformationProtectionPoliciesRequestBuilderGetRequestConfiguration';
import {WindowsInformationProtectionPoliciesRequestBuilderPostRequestConfiguration} from './windowsInformationProtectionPoliciesRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the windowsInformationProtectionPolicies property of the microsoft.graph.deviceAppManagement entity. */
export class WindowsInformationProtectionPoliciesRequestBuilder {
    /** The count property */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new WindowsInformationProtectionPoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/deviceAppManagement/windowsInformationProtectionPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Windows information protection for apps running on devices which are not MDM enrolled.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: WindowsInformationProtectionPoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Create new navigation property to windowsInformationProtectionPolicies for deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPostRequestInformation(body: WindowsInformationProtectionPolicy | undefined, requestConfiguration?: WindowsInformationProtectionPoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        const parsableBody = new WindowsInformationProtectionPolicyImpl(body)
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", parsableBody);
        return requestInfo;
    };
    /**
     * Windows information protection for apps running on devices which are not MDM enrolled.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WindowsInformationProtectionPolicyCollectionResponse
     */
    public get(requestConfiguration?: WindowsInformationProtectionPoliciesRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WindowsInformationProtectionPolicyCollectionResponseImpl | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<WindowsInformationProtectionPolicyCollectionResponseImpl>(requestInfo, createWindowsInformationProtectionPolicyCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Create new navigation property to windowsInformationProtectionPolicies for deviceAppManagement
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WindowsInformationProtectionPolicy
     */
    public post(body: WindowsInformationProtectionPolicy | undefined, requestConfiguration?: WindowsInformationProtectionPoliciesRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WindowsInformationProtectionPolicyImpl | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<WindowsInformationProtectionPolicyImpl>(requestInfo, createWindowsInformationProtectionPolicyFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
}
