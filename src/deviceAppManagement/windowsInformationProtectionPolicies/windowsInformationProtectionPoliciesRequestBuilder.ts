import { type WindowsInformationProtectionPolicyCollectionResponse } from '../../models/';
import { createWindowsInformationProtectionPolicyCollectionResponseFromDiscriminatorValue } from '../../models/createWindowsInformationProtectionPolicyCollectionResponseFromDiscriminatorValue';
import { createWindowsInformationProtectionPolicyFromDiscriminatorValue } from '../../models/createWindowsInformationProtectionPolicyFromDiscriminatorValue';
import { deserializeIntoWindowsInformationProtectionPolicy } from '../../models/deserializeIntoWindowsInformationProtectionPolicy';
import { type ODataError } from '../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../models/oDataErrors/serializeODataError';
import { serializeWindowsInformationProtectionPolicy } from '../../models/serializeWindowsInformationProtectionPolicy';
import { type WindowsInformationProtectionPolicy } from '../../models/windowsInformationProtectionPolicy';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { WindowsInformationProtectionPolicyItemRequestBuilder } from './item/windowsInformationProtectionPolicyItemRequestBuilder';
import { type WindowsInformationProtectionPoliciesRequestBuilderGetRequestConfiguration } from './windowsInformationProtectionPoliciesRequestBuilderGetRequestConfiguration';
import { type WindowsInformationProtectionPoliciesRequestBuilderPostRequestConfiguration } from './windowsInformationProtectionPoliciesRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the windowsInformationProtectionPolicies property of the microsoft.graph.deviceAppManagement entity.
 */
export class WindowsInformationProtectionPoliciesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the windowsInformationProtectionPolicies property of the microsoft.graph.deviceAppManagement entity.
     * @param windowsInformationProtectionPolicyId The unique identifier of windowsInformationProtectionPolicy
     * @returns a WindowsInformationProtectionPolicyItemRequestBuilder
     */
    public byWindowsInformationProtectionPolicyId(windowsInformationProtectionPolicyId: string) : WindowsInformationProtectionPolicyItemRequestBuilder {
        if(!windowsInformationProtectionPolicyId) throw new Error("windowsInformationProtectionPolicyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["windowsInformationProtectionPolicy%2Did"] = windowsInformationProtectionPolicyId
        return new WindowsInformationProtectionPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new WindowsInformationProtectionPoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/windowsInformationProtectionPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the windowsInformationProtectionPolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionPolicyCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-windowsinformationprotectionpolicy-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: WindowsInformationProtectionPoliciesRequestBuilderGetRequestConfiguration | undefined) : Promise<WindowsInformationProtectionPolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsInformationProtectionPolicyCollectionResponse>(requestInfo, createWindowsInformationProtectionPolicyCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new windowsInformationProtectionPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsInformationProtectionPolicy
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-windowsinformationprotectionpolicy-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: WindowsInformationProtectionPolicy, requestConfiguration?: WindowsInformationProtectionPoliciesRequestBuilderPostRequestConfiguration | undefined) : Promise<WindowsInformationProtectionPolicy | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<WindowsInformationProtectionPolicy>(requestInfo, createWindowsInformationProtectionPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the windowsInformationProtectionPolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: WindowsInformationProtectionPoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new windowsInformationProtectionPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WindowsInformationProtectionPolicy, requestConfiguration?: WindowsInformationProtectionPoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWindowsInformationProtectionPolicy);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a windowsInformationProtectionPoliciesRequestBuilder
     */
    public withUrl(rawUrl: string) : WindowsInformationProtectionPoliciesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new WindowsInformationProtectionPoliciesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
