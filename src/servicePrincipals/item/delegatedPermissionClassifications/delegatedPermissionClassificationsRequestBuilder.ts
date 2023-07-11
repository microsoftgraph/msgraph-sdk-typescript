import {DelegatedPermissionClassificationCollectionResponse} from '../../../models/';
import {createDelegatedPermissionClassificationCollectionResponseFromDiscriminatorValue} from '../../../models/createDelegatedPermissionClassificationCollectionResponseFromDiscriminatorValue';
import {createDelegatedPermissionClassificationFromDiscriminatorValue} from '../../../models/createDelegatedPermissionClassificationFromDiscriminatorValue';
import {DelegatedPermissionClassification} from '../../../models/delegatedPermissionClassification';
import {deserializeIntoDelegatedPermissionClassification} from '../../../models/deserializeIntoDelegatedPermissionClassification';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeDelegatedPermissionClassification} from '../../../models/serializeDelegatedPermissionClassification';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DelegatedPermissionClassificationsRequestBuilderGetRequestConfiguration} from './delegatedPermissionClassificationsRequestBuilderGetRequestConfiguration';
import {DelegatedPermissionClassificationsRequestBuilderPostRequestConfiguration} from './delegatedPermissionClassificationsRequestBuilderPostRequestConfiguration';
import {DelegatedPermissionClassificationItemRequestBuilder} from './item/delegatedPermissionClassificationItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the delegatedPermissionClassifications property of the microsoft.graph.servicePrincipal entity.
 */
export class DelegatedPermissionClassificationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the delegatedPermissionClassifications property of the microsoft.graph.servicePrincipal entity.
     * @param delegatedPermissionClassificationId Unique identifier of the item
     * @returns a DelegatedPermissionClassificationItemRequestBuilder
     */
    public byDelegatedPermissionClassificationId(delegatedPermissionClassificationId: string) : DelegatedPermissionClassificationItemRequestBuilder {
        if(!delegatedPermissionClassificationId) throw new Error("delegatedPermissionClassificationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["delegatedPermissionClassification%2Did"] = delegatedPermissionClassificationId
        return new DelegatedPermissionClassificationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DelegatedPermissionClassificationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/delegatedPermissionClassifications{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve the list of delegatedPermissionClassification currently configured for the delegated permissions exposed by an API.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedPermissionClassificationCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/serviceprincipal-list-delegatedpermissionclassifications?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DelegatedPermissionClassificationsRequestBuilderGetRequestConfiguration | undefined) : Promise<DelegatedPermissionClassificationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedPermissionClassificationCollectionResponse>(requestInfo, createDelegatedPermissionClassificationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Classify a delegated permission by adding a delegatedPermissionClassification to the servicePrincipal representing the API.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedPermissionClassification
     * @see {@link https://docs.microsoft.com/graph/api/serviceprincipal-post-delegatedpermissionclassifications?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DelegatedPermissionClassification | undefined, requestConfiguration?: DelegatedPermissionClassificationsRequestBuilderPostRequestConfiguration | undefined) : Promise<DelegatedPermissionClassification | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedPermissionClassification>(requestInfo, createDelegatedPermissionClassificationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve the list of delegatedPermissionClassification currently configured for the delegated permissions exposed by an API.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DelegatedPermissionClassificationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Classify a delegated permission by adding a delegatedPermissionClassification to the servicePrincipal representing the API.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DelegatedPermissionClassification | undefined, requestConfiguration?: DelegatedPermissionClassificationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDelegatedPermissionClassification);
        return requestInfo;
    };
}
