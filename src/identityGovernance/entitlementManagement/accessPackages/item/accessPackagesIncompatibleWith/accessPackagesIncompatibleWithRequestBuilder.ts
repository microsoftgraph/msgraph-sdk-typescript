import {AccessPackageCollectionResponse} from '../../../../../models/';
import {createAccessPackageCollectionResponseFromDiscriminatorValue} from '../../../../../models/createAccessPackageCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {AccessPackagesIncompatibleWithRequestBuilderGetRequestConfiguration} from './accessPackagesIncompatibleWithRequestBuilderGetRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AccessPackageItemRequestBuilder} from './item/accessPackageItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessPackagesIncompatibleWith property of the microsoft.graph.accessPackage entity.
 */
export class AccessPackagesIncompatibleWithRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the accessPackagesIncompatibleWith property of the microsoft.graph.accessPackage entity.
     * @param accessPackageId1 Unique identifier of the item
     * @returns a AccessPackageItemRequestBuilder
     */
    public byAccessPackageId1(accessPackageId1: string) : AccessPackageItemRequestBuilder {
        if(!accessPackageId1) throw new Error("accessPackageId1 cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["accessPackage%2Did1"] = accessPackageId1
        return new AccessPackageItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AccessPackagesIncompatibleWithRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/accessPackages/{accessPackage%2Did}/accessPackagesIncompatibleWith{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The access packages that are incompatible with this package. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of AccessPackageCollectionResponse
     */
    public get(requestConfiguration?: AccessPackagesIncompatibleWithRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<AccessPackageCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<AccessPackageCollectionResponse>(requestInfo, createAccessPackageCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The access packages that are incompatible with this package. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AccessPackagesIncompatibleWithRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
}
