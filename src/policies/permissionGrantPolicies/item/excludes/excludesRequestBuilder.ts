import {PermissionGrantConditionSetCollectionResponse} from '../../../../models/';
import {createPermissionGrantConditionSetCollectionResponseFromDiscriminatorValue} from '../../../../models/createPermissionGrantConditionSetCollectionResponseFromDiscriminatorValue';
import {createPermissionGrantConditionSetFromDiscriminatorValue} from '../../../../models/createPermissionGrantConditionSetFromDiscriminatorValue';
import {deserializeIntoPermissionGrantConditionSet} from '../../../../models/deserializeIntoPermissionGrantConditionSet';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {PermissionGrantConditionSet} from '../../../../models/permissionGrantConditionSet';
import {serializePermissionGrantConditionSet} from '../../../../models/serializePermissionGrantConditionSet';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {ExcludesRequestBuilderGetRequestConfiguration} from './excludesRequestBuilderGetRequestConfiguration';
import {ExcludesRequestBuilderPostRequestConfiguration} from './excludesRequestBuilderPostRequestConfiguration';
import {PermissionGrantConditionSetItemRequestBuilder} from './item/permissionGrantConditionSetItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the excludes property of the microsoft.graph.permissionGrantPolicy entity.
 */
export class ExcludesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the excludes property of the microsoft.graph.permissionGrantPolicy entity.
     * @param permissionGrantConditionSetId Unique identifier of the item
     * @returns a PermissionGrantConditionSetItemRequestBuilder
     */
    public byPermissionGrantConditionSetId(permissionGrantConditionSetId: string) : PermissionGrantConditionSetItemRequestBuilder {
        if(!permissionGrantConditionSetId) throw new Error("permissionGrantConditionSetId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["permissionGrantConditionSet%2Did"] = permissionGrantConditionSetId
        return new PermissionGrantConditionSetItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ExcludesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/permissionGrantPolicies/{permissionGrantPolicy%2Did}/excludes{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the condition sets which are *excluded* in a permissionGrantPolicy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PermissionGrantConditionSetCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/permissiongrantpolicy-list-excludes?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ExcludesRequestBuilderGetRequestConfiguration | undefined) : Promise<PermissionGrantConditionSetCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PermissionGrantConditionSetCollectionResponse>(requestInfo, createPermissionGrantConditionSetCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add conditions under which a permission grant event is *excluded* in a permission grant policy. You do this by adding a permissionGrantConditionSet to the **excludes** collection of a  permissionGrantPolicy.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PermissionGrantConditionSet
     * @see {@link https://docs.microsoft.com/graph/api/permissiongrantpolicy-post-excludes?view=graph-rest-1.0|Find more info here}
     */
    public post(body: PermissionGrantConditionSet | undefined, requestConfiguration?: ExcludesRequestBuilderPostRequestConfiguration | undefined) : Promise<PermissionGrantConditionSet | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<PermissionGrantConditionSet>(requestInfo, createPermissionGrantConditionSetFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the condition sets which are *excluded* in a permissionGrantPolicy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ExcludesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add conditions under which a permission grant event is *excluded* in a permission grant policy. You do this by adding a permissionGrantConditionSet to the **excludes** collection of a  permissionGrantPolicy.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: PermissionGrantConditionSet | undefined, requestConfiguration?: ExcludesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializePermissionGrantConditionSet);
        return requestInfo;
    };
}
