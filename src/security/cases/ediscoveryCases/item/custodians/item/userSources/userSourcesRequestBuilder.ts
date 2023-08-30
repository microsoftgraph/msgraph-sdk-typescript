import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {UserSourceCollectionResponse} from '../../../../../../../models/security/';
import {createUserSourceCollectionResponseFromDiscriminatorValue} from '../../../../../../../models/security/createUserSourceCollectionResponseFromDiscriminatorValue';
import {createUserSourceFromDiscriminatorValue} from '../../../../../../../models/security/createUserSourceFromDiscriminatorValue';
import {deserializeIntoUserSource} from '../../../../../../../models/security/deserializeIntoUserSource';
import {serializeUserSource} from '../../../../../../../models/security/serializeUserSource';
import type {UserSource} from '../../../../../../../models/security/userSource';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {UserSourceItemRequestBuilder} from './item/userSourceItemRequestBuilder';
import {UserSourcesRequestBuilderGetRequestConfiguration} from './userSourcesRequestBuilderGetRequestConfiguration';
import {UserSourcesRequestBuilderPostRequestConfiguration} from './userSourcesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userSources property of the microsoft.graph.security.ediscoveryCustodian entity.
 */
export class UserSourcesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userSources property of the microsoft.graph.security.ediscoveryCustodian entity.
     * @param userSourceId The unique identifier of userSource
     * @returns a UserSourceItemRequestBuilder
     */
    public byUserSourceId(userSourceId: string) : UserSourceItemRequestBuilder {
        if(!userSourceId) throw new Error("userSourceId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["userSource%2Did"] = userSourceId
        return new UserSourceItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserSourcesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/custodians/{ediscoveryCustodian%2Did}/userSources{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the userSource objects associated with an ediscoveryCustodian.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserSourceCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycustodian-list-usersources?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UserSourcesRequestBuilderGetRequestConfiguration | undefined) : Promise<UserSourceCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserSourceCollectionResponse>(requestInfo, createUserSourceCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new userSource object associated with an eDiscovery custodian.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserSource
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverycustodian-post-usersources?view=graph-rest-1.0|Find more info here}
     */
    public post(body: UserSource, requestConfiguration?: UserSourcesRequestBuilderPostRequestConfiguration | undefined) : Promise<UserSource | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserSource>(requestInfo, createUserSourceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the userSource objects associated with an ediscoveryCustodian.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserSourcesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new userSource object associated with an eDiscovery custodian.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: UserSource, requestConfiguration?: UserSourcesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserSource);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a userSourcesRequestBuilder
     */
    public withUrl(rawUrl: string) : UserSourcesRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new UserSourcesRequestBuilder(rawUrl, this.requestAdapter);
    };
}
