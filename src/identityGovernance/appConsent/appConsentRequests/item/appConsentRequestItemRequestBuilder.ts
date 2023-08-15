import type {AppConsentRequest} from '../../../../models/appConsentRequest';
import {createAppConsentRequestFromDiscriminatorValue} from '../../../../models/createAppConsentRequestFromDiscriminatorValue';
import {deserializeIntoAppConsentRequest} from '../../../../models/deserializeIntoAppConsentRequest';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeAppConsentRequest} from '../../../../models/serializeAppConsentRequest';
import {AppConsentRequestItemRequestBuilderDeleteRequestConfiguration} from './appConsentRequestItemRequestBuilderDeleteRequestConfiguration';
import {AppConsentRequestItemRequestBuilderGetRequestConfiguration} from './appConsentRequestItemRequestBuilderGetRequestConfiguration';
import {AppConsentRequestItemRequestBuilderPatchRequestConfiguration} from './appConsentRequestItemRequestBuilderPatchRequestConfiguration';
import {UserConsentRequestsRequestBuilder} from './userConsentRequests/userConsentRequestsRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the appConsentRequests property of the microsoft.graph.appConsentApprovalRoute entity.
 */
export class AppConsentRequestItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the userConsentRequests property of the microsoft.graph.appConsentRequest entity.
     */
    public get userConsentRequests(): UserConsentRequestsRequestBuilder {
        return new UserConsentRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AppConsentRequestItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/appConsent/appConsentRequests/{appConsentRequest%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property appConsentRequests for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AppConsentRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Read the properties and relationships of an appConsentRequest object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AppConsentRequest
     * @see {@link https://learn.microsoft.com/graph/api/appconsentrequest-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AppConsentRequestItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AppConsentRequest | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AppConsentRequest>(requestInfo, createAppConsentRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property appConsentRequests in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AppConsentRequest
     */
    public patch(body: AppConsentRequest, requestConfiguration?: AppConsentRequestItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AppConsentRequest | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AppConsentRequest>(requestInfo, createAppConsentRequestFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property appConsentRequests for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AppConsentRequestItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Read the properties and relationships of an appConsentRequest object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AppConsentRequestItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property appConsentRequests in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AppConsentRequest, requestConfiguration?: AppConsentRequestItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAppConsentRequest);
        return requestInfo;
    };
}
