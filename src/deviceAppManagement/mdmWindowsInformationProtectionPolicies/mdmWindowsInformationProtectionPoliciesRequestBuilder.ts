import {MdmWindowsInformationProtectionPolicyCollectionResponse} from '../../models/';
import {createMdmWindowsInformationProtectionPolicyCollectionResponseFromDiscriminatorValue} from '../../models/createMdmWindowsInformationProtectionPolicyCollectionResponseFromDiscriminatorValue';
import {createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue} from '../../models/createMdmWindowsInformationProtectionPolicyFromDiscriminatorValue';
import {deserializeIntoMdmWindowsInformationProtectionPolicy} from '../../models/deserializeIntoMdmWindowsInformationProtectionPolicy';
import {MdmWindowsInformationProtectionPolicy} from '../../models/mdmWindowsInformationProtectionPolicy';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeMdmWindowsInformationProtectionPolicy} from '../../models/serializeMdmWindowsInformationProtectionPolicy';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {MdmWindowsInformationProtectionPolicyItemRequestBuilder} from './item/mdmWindowsInformationProtectionPolicyItemRequestBuilder';
import {MdmWindowsInformationProtectionPoliciesRequestBuilderGetRequestConfiguration} from './mdmWindowsInformationProtectionPoliciesRequestBuilderGetRequestConfiguration';
import {MdmWindowsInformationProtectionPoliciesRequestBuilderPostRequestConfiguration} from './mdmWindowsInformationProtectionPoliciesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

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
     * @param mdmWindowsInformationProtectionPolicyId Unique identifier of the item
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
     * Windows information protection for apps running on devices which are MDM enrolled.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MdmWindowsInformationProtectionPolicyCollectionResponse
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
     * Create new navigation property to mdmWindowsInformationProtectionPolicies for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MdmWindowsInformationProtectionPolicy
     */
    public post(body: MdmWindowsInformationProtectionPolicy | undefined, requestConfiguration?: MdmWindowsInformationProtectionPoliciesRequestBuilderPostRequestConfiguration | undefined) : Promise<MdmWindowsInformationProtectionPolicy | undefined> {
        if(!body) throw new Error("body cannot be undefined");
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
     * Windows information protection for apps running on devices which are MDM enrolled.
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
     * Create new navigation property to mdmWindowsInformationProtectionPolicies for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: MdmWindowsInformationProtectionPolicy | undefined, requestConfiguration?: MdmWindowsInformationProtectionPoliciesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeMdmWindowsInformationProtectionPolicy);
        return requestInfo;
    };
}
