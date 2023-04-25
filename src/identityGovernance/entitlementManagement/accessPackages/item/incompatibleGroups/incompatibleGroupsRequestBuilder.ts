import {GroupCollectionResponse} from '../../../../../models/';
import {createGroupCollectionResponseFromDiscriminatorValue} from '../../../../../models/createGroupCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {IncompatibleGroupsRequestBuilderGetRequestConfiguration} from './incompatibleGroupsRequestBuilderGetRequestConfiguration';
import {GroupItemRequestBuilder} from './item/groupItemRequestBuilder';
import {RefRequestBuilder} from './ref/refRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the incompatibleGroups property of the microsoft.graph.accessPackage entity.
 */
export class IncompatibleGroupsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to manage the collection of identityGovernance entities. */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.identityGovernance.entitlementManagement.accessPackages.item.incompatibleGroups.item collection
     * @param groupId Unique identifier of the item
     * @returns a GroupItemRequestBuilder
     */
    public byGroupId(groupId: string) : GroupItemRequestBuilder {
        if(!groupId) throw new Error("groupId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["group%2Did"] = groupId
        return new GroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new IncompatibleGroupsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/accessPackages/{accessPackage%2Did}/incompatibleGroups{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The groups whose members are ineligible to be assigned this access package.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of GroupCollectionResponse
     */
    public get(requestConfiguration?: IncompatibleGroupsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<GroupCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<GroupCollectionResponse>(requestInfo, createGroupCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The groups whose members are ineligible to be assigned this access package.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IncompatibleGroupsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
