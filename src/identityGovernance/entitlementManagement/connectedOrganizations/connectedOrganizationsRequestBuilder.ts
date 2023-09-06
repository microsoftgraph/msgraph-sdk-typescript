import { type ConnectedOrganizationCollectionResponse } from '../../../models/';
import { type ConnectedOrganization } from '../../../models/connectedOrganization';
import { createConnectedOrganizationCollectionResponseFromDiscriminatorValue } from '../../../models/createConnectedOrganizationCollectionResponseFromDiscriminatorValue';
import { createConnectedOrganizationFromDiscriminatorValue } from '../../../models/createConnectedOrganizationFromDiscriminatorValue';
import { deserializeIntoConnectedOrganization } from '../../../models/deserializeIntoConnectedOrganization';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeConnectedOrganization } from '../../../models/serializeConnectedOrganization';
import { type ConnectedOrganizationsRequestBuilderGetRequestConfiguration } from './connectedOrganizationsRequestBuilderGetRequestConfiguration';
import { type ConnectedOrganizationsRequestBuilderPostRequestConfiguration } from './connectedOrganizationsRequestBuilderPostRequestConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { ConnectedOrganizationItemRequestBuilder } from './item/connectedOrganizationItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the connectedOrganizations property of the microsoft.graph.entitlementManagement entity.
 */
export class ConnectedOrganizationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the connectedOrganizations property of the microsoft.graph.entitlementManagement entity.
     * @param connectedOrganizationId The unique identifier of connectedOrganization
     * @returns a ConnectedOrganizationItemRequestBuilder
     */
    public byConnectedOrganizationId(connectedOrganizationId: string) : ConnectedOrganizationItemRequestBuilder {
        if(!connectedOrganizationId) throw new Error("connectedOrganizationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["connectedOrganization%2Did"] = connectedOrganizationId
        return new ConnectedOrganizationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ConnectedOrganizationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/entitlementManagement/connectedOrganizations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of connectedOrganization objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConnectedOrganizationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/entitlementmanagement-list-connectedorganizations?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ConnectedOrganizationsRequestBuilderGetRequestConfiguration | undefined) : Promise<ConnectedOrganizationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ConnectedOrganizationCollectionResponse>(requestInfo, createConnectedOrganizationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new connectedOrganization object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConnectedOrganization
     * @see {@link https://learn.microsoft.com/graph/api/entitlementmanagement-post-connectedorganizations?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ConnectedOrganization, requestConfiguration?: ConnectedOrganizationsRequestBuilderPostRequestConfiguration | undefined) : Promise<ConnectedOrganization | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ConnectedOrganization>(requestInfo, createConnectedOrganizationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of connectedOrganization objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ConnectedOrganizationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new connectedOrganization object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ConnectedOrganization, requestConfiguration?: ConnectedOrganizationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeConnectedOrganization);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a connectedOrganizationsRequestBuilder
     */
    public withUrl(rawUrl: string) : ConnectedOrganizationsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ConnectedOrganizationsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
