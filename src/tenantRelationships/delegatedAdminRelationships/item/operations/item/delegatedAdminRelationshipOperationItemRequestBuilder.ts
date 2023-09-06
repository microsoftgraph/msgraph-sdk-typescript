import { createDelegatedAdminRelationshipOperationFromDiscriminatorValue } from '../../../../../models/createDelegatedAdminRelationshipOperationFromDiscriminatorValue';
import { type DelegatedAdminRelationshipOperation } from '../../../../../models/delegatedAdminRelationshipOperation';
import { deserializeIntoDelegatedAdminRelationshipOperation } from '../../../../../models/deserializeIntoDelegatedAdminRelationshipOperation';
import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { serializeDelegatedAdminRelationshipOperation } from '../../../../../models/serializeDelegatedAdminRelationshipOperation';
import { type DelegatedAdminRelationshipOperationItemRequestBuilderDeleteRequestConfiguration } from './delegatedAdminRelationshipOperationItemRequestBuilderDeleteRequestConfiguration';
import { type DelegatedAdminRelationshipOperationItemRequestBuilderGetRequestConfiguration } from './delegatedAdminRelationshipOperationItemRequestBuilderGetRequestConfiguration';
import { type DelegatedAdminRelationshipOperationItemRequestBuilderPatchRequestConfiguration } from './delegatedAdminRelationshipOperationItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the operations property of the microsoft.graph.delegatedAdminRelationship entity.
 */
export class DelegatedAdminRelationshipOperationItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DelegatedAdminRelationshipOperationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/tenantRelationships/delegatedAdminRelationships/{delegatedAdminRelationship%2Did}/operations/{delegatedAdminRelationshipOperation%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property operations for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: DelegatedAdminRelationshipOperationItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties of a delegatedAdminRelationshipOperation object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedAdminRelationshipOperation
     * @see {@link https://learn.microsoft.com/graph/api/delegatedadminrelationshipoperation-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: DelegatedAdminRelationshipOperationItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DelegatedAdminRelationshipOperation | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedAdminRelationshipOperation>(requestInfo, createDelegatedAdminRelationshipOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property operations in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedAdminRelationshipOperation
     */
    public patch(body: DelegatedAdminRelationshipOperation, requestConfiguration?: DelegatedAdminRelationshipOperationItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DelegatedAdminRelationshipOperation | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedAdminRelationshipOperation>(requestInfo, createDelegatedAdminRelationshipOperationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property operations for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DelegatedAdminRelationshipOperationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties of a delegatedAdminRelationshipOperation object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DelegatedAdminRelationshipOperationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property operations in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DelegatedAdminRelationshipOperation, requestConfiguration?: DelegatedAdminRelationshipOperationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDelegatedAdminRelationshipOperation);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a DelegatedAdminRelationshipOperationItemRequestBuilder
     */
    public withUrl(rawUrl: string) : DelegatedAdminRelationshipOperationItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DelegatedAdminRelationshipOperationItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
