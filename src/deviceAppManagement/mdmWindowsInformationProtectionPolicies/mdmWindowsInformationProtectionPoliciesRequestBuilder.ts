import {MdmWindowsInformationProtectionPolicyCollectionResponse} from '../../models/';
import {createMdmWindowsInformationProtectionPolicyCollectionResponseFromDiscriminatorValue} from '../../models/createMdmWindowsInformationProtectionPolicyCollectionResponseFromDiscriminatorValue';
import {createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue} from '../../models/createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue';
import {deserializeIntoMdmWindowsInformationProtectionPolicy} from '../../models/deserializeIntoMdmWindowsInformationProtectionPolicy';
import type {MdmWindowsInformationProtectionPolicy} from '../../models/mdmWindowsInformationProtectionPolicy';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeMdmWindowsInformationProtectionPolicy} from '../../models/serializeMdmWindowsInformationProtectionPolicy';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {MdmWindowsInformationProtectionPolicyItemRequestBuilder} from './item/mdmWindowsInformationProtectionPolicyItemRequestBuilder';
import {MdmWindowsInformationProtectionPoliciesRequestBuilderGetRequestConfiguration} from './mdmWindowsInformationProtectionPoliciesRequestBuilderGetRequestConfiguration';
import {MdmWindowsInformationProtectionPoliciesRequestBuilderPostRequestConfiguration} from './mdmWindowsInformationProtectionPoliciesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the mdmWindowsInformationProtectionPolicies property of the microsoft.graph.deviceAppManagement entity.
 */
export class MdmWindowsInformationProtectionPoliciesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the mdmWindowsInformationProtectionPolicies property of the microsoft.graph.deviceAppManagement entity.
     * @param mdmWindowsInformationProtectionPolicyId The unique identifier of mdmWindowsInformationProtectionPolicy
     * @returns a MdmWindowsInformationProtectionPolicyItemRequestBuilder
     */
    public byMdmWindowsInformationProtectionPolicyId(mdmWindowsInformationProtectionPolicyId: string) : MdmWindowsInformationProtectionPolicyItemRequestBuilder {
        if(!mdmWindowsInformationProtectionPolicyId) throw new Error("mdmWindowsInformationProtectionPolicyId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["mdmWindowsInformationProtectionPolicy%2Did"] = mdmWindowsInformationProtectionPolicyId
        return new MdmWindowsInformationProtectionPolicyItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new MdmWindowsInformationProtectionPoliciesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/mdmWindowsInformationProtectionPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List properties and relationships of the mdmWindowsInformationProtectionPolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MdmWindowsInformationProtectionPolicyCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-mdmwindowsinformationprotectionpolicy-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MdmWindowsInformationProtectionPoliciesRequestBuilderGetRequestConfiguration | undefined) : Promise<MdmWindowsInformationProtectionPolicyCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MdmWindowsInformationProtectionPolicyCollectionResponse>(requestInfo, createMdmWindowsInformationProtectionPolicyCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new mdmWindowsInformationProtectionPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MdmWindowsInformationProtectionPolicy
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-mdmwindowsinformationprotectionpolicy-create?view=graph-rest-1.0|Find more info here}
     */
    public post(body: MdmWindowsInformationProtectionPolicy, requestConfiguration?: MdmWindowsInformationProtectionPoliciesRequestBuilderPostRequestConfiguration | undefined) : Promise<MdmWindowsInformationProtectionPolicy | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<MdmWindowsInformationProtectionPolicy>(requestInfo, createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue, errorMapping);
    };
    /**
     * List properties and relationships of the mdmWindowsInformationProtectionPolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MdmWindowsInformationProtectionPoliciesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new mdmWindowsInformationProtectionPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MdmWindowsInformationProtectionPolicy, requestConfiguration?: MdmWindowsInformationProtectionPoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeMdmWindowsInformationProtectionPolicy);
        return requestInfo;
    };
}
