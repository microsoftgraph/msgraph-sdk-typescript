import {DirectoryObjectCollectionResponse} from '../../../../models/';
import {createDirectoryObjectCollectionResponseFromDiscriminatorValue} from '../../../../models/createDirectoryObjectCollectionResponseFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {GraphApplicationRequestBuilder} from './graphApplication/graphApplicationRequestBuilder';
import {GraphDeviceRequestBuilder} from './graphDevice/graphDeviceRequestBuilder';
import {GraphGroupRequestBuilder} from './graphGroup/graphGroupRequestBuilder';
import {GraphOrgContactRequestBuilder} from './graphOrgContact/graphOrgContactRequestBuilder';
import {GraphServicePrincipalRequestBuilder} from './graphServicePrincipal/graphServicePrincipalRequestBuilder';
import {GraphUserRequestBuilder} from './graphUser/graphUserRequestBuilder';
import {MembersRequestBuilderGetRequestConfiguration} from './membersRequestBuilderGetRequestConfiguration';
import {RefRequestBuilder} from './ref/refRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the members property of the microsoft.graph.administrativeUnit entity.
 */
export class MembersRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to application. */
    public get graphApplication(): GraphApplicationRequestBuilder {
        return new GraphApplicationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to device. */
    public get graphDevice(): GraphDeviceRequestBuilder {
        return new GraphDeviceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to group. */
    public get graphGroup(): GraphGroupRequestBuilder {
        return new GraphGroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to orgContact. */
    public get graphOrgContact(): GraphOrgContactRequestBuilder {
        return new GraphOrgContactRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to servicePrincipal. */
    public get graphServicePrincipal(): GraphServicePrincipalRequestBuilder {
        return new GraphServicePrincipalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Casts the previous resource to user. */
    public get graphUser(): GraphUserRequestBuilder {
        return new GraphUserRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** Provides operations to manage the collection of directory entities. */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new MembersRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/directory/administrativeUnits/{administrativeUnit%2Did}/members{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Users and groups that are members of this administrative unit. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of DirectoryObjectCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/administrativeunit-list-members?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: MembersRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<DirectoryObjectCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<DirectoryObjectCollectionResponse>(requestInfo, createDirectoryObjectCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Users and groups that are members of this administrative unit. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: MembersRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
