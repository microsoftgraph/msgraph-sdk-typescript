import { type AccessPackageCollectionResponse } from '../../../../../models/';
import { createAccessPackageCollectionResponseFromDiscriminatorValue } from '../../../../../models/createAccessPackageCollectionResponseFromDiscriminatorValue';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { type AccessPackagesIncompatibleWithRequestBuilderGetRequestConfiguration } from './accessPackagesIncompatibleWithRequestBuilderGetRequestConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { AccessPackageItemRequestBuilder } from './item/accessPackageItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessPackagesIncompatibleWith property of the microsoft.graph.accessPackage entity.
 */
export class AccessPackagesIncompatibleWithRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the accessPackagesIncompatibleWith property of the microsoft.graph.accessPackage entity.
     * @param accessPackageId1 The unique identifier of accessPackage
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
     * Retrieve a list of the accessPackage objects that have marked a specified accessPackage as incompatible.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/accesspackage-list-accesspackagesincompatiblewith?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AccessPackagesIncompatibleWithRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessPackageCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessPackageCollectionResponse>(requestInfo, createAccessPackageCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of the accessPackage objects that have marked a specified accessPackage as incompatible.
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
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a accessPackagesIncompatibleWithRequestBuilder
     */
    public withUrl(rawUrl: string) : AccessPackagesIncompatibleWithRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AccessPackagesIncompatibleWithRequestBuilder(rawUrl, this.requestAdapter);
    };
}
