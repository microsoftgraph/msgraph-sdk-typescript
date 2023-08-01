import {AccessPackageResourceCollectionResponse} from '../../../../../models/';
import type {AccessPackageResource} from '../../../../../models/accessPackageResource';
import {createAccessPackageResourceCollectionResponseFromDiscriminatorValue} from '../../../../../models/createAccessPackageResourceCollectionResponseFromDiscriminatorValue';
import {createAccessPackageResourceFromDiscriminatorValue} from '../../../../../models/createAccessPackageResourceFromDiscriminatorValue';
import {deserializeIntoAccessPackageResource} from '../../../../../models/deserializeIntoAccessPackageResource';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeAccessPackageResource} from '../../../../../models/serializeAccessPackageResource';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AccessPackageResourceItemRequestBuilder} from './item/accessPackageResourceItemRequestBuilder';
import {ResourcesRequestBuilderGetRequestConfiguration} from './resourcesRequestBuilderGetRequestConfiguration';
import {ResourcesRequestBuilderPostRequestConfiguration} from './resourcesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resources property of the microsoft.graph.accessPackageCatalog entity.
 */
export class ResourcesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the resources property of the microsoft.graph.accessPackageCatalog entity.
     * @param accessPackageResourceId Unique identifier of the item
     * @returns a AccessPackageResourceItemRequestBuilder
     */
    public byAccessPackageResourceId(accessPackageResourceId: string) : AccessPackageResourceItemRequestBuilder {
        if(!accessPackageResourceId) throw new Error("accessPackageResourceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackageResource%2Did"] = accessPackageResourceId
        return new AccessPackageResourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ResourcesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/catalogs/{accessPackageCatalog%2Did}/resources{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of accessPackageResource objects in an accessPackageCatalog.  
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/accesspackagecatalog-list-resources?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ResourcesRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessPackageResourceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResourceCollectionResponse>(requestInfo, createAccessPackageResourceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to resources for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResource
     */
    public post(body: AccessPackageResource | undefined, requestConfiguration?: ResourcesRequestBuilderPostRequestConfiguration | undefined) : Promise<AccessPackageResource | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageResource>(requestInfo, createAccessPackageResourceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of accessPackageResource objects in an accessPackageCatalog.  
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ResourcesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to resources for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AccessPackageResource | undefined, requestConfiguration?: ResourcesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeAccessPackageResource);
        return requestInfo;
    };
}
