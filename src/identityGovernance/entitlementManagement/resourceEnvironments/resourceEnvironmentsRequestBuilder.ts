import {AccessPackageResourceEnvironmentCollectionResponse} from '../../../models/';
import type {AccessPackageResourceEnvironment} from '../../../models/accessPackageResourceEnvironment';
import {createAccessPackageResourceEnvironmentCollectionResponseFromDiscriminatorValue} from '../../../models/createAccessPackageResourceEnvironmentCollectionResponseFromDiscriminatorValue';
import {createAccessPackageResourceEnvironmentFromDiscriminatorValue} from '../../../models/createAccessPackageResourceEnvironmentFromDiscriminatorValue';
import {deserializeIntoAccessPackageResourceEnvironment} from '../../../models/deserializeIntoAccessPackageResourceEnvironment';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeAccessPackageResourceEnvironment} from '../../../models/serializeAccessPackageResourceEnvironment';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AccessPackageResourceEnvironmentItemRequestBuilder} from './item/accessPackageResourceEnvironmentItemRequestBuilder';
import {ResourceEnvironmentsRequestBuilderGetRequestConfiguration} from './resourceEnvironmentsRequestBuilderGetRequestConfiguration';
import {ResourceEnvironmentsRequestBuilderPostRequestConfiguration} from './resourceEnvironmentsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resourceEnvironments property of the microsoft.graph.entitlementManagement entity.
 */
export class ResourceEnvironmentsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the resourceEnvironments property of the microsoft.graph.entitlementManagement entity.
     * @param accessPackageResourceEnvironmentId Unique identifier of the item
     * @returns a AccessPackageResourceEnvironmentItemRequestBuilder
     */
    public byAccessPackageResourceEnvironmentId(accessPackageResourceEnvironmentId: string) : AccessPackageResourceEnvironmentItemRequestBuilder {
        if(!accessPackageResourceEnvironmentId) throw new Error("accessPackageResourceEnvironmentId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageResourceEnvironment%2Did"] = accessPackageResourceEnvironmentId
        return new AccessPackageResourceEnvironmentItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ResourceEnvironmentsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/resourceEnvironments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of accessPackageResourceEnvironment objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceEnvironmentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/entitlementmanagement-list-resourceenvironments?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ResourceEnvironmentsRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessPackageResourceEnvironmentCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResourceEnvironmentCollectionResponse>(requestInfo, createAccessPackageResourceEnvironmentCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to resourceEnvironments for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceEnvironment
     */
    public post(body: AccessPackageResourceEnvironment | undefined, requestConfiguration?: ResourceEnvironmentsRequestBuilderPostRequestConfiguration | undefined) : Promise<AccessPackageResourceEnvironment | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResourceEnvironment>(requestInfo, createAccessPackageResourceEnvironmentFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of accessPackageResourceEnvironment objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ResourceEnvironmentsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to resourceEnvironments for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AccessPackageResourceEnvironment | undefined, requestConfiguration?: ResourceEnvironmentsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessPackageResourceEnvironment);
        return requestInfo;
    };
}
