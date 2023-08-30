import {createDelegatedPermissionClassificationFromDiscriminatorValue} from '../../../../models/createDelegatedPermissionClassificationFromDiscriminatorValue';
import type {DelegatedPermissionClassification} from '../../../../models/delegatedPermissionClassification';
import {deserializeIntoDelegatedPermissionClassification} from '../../../../models/deserializeIntoDelegatedPermissionClassification';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeDelegatedPermissionClassification} from '../../../../models/serializeDelegatedPermissionClassification';
import {DelegatedPermissionClassificationItemRequestBuilderDeleteRequestConfiguration} from './delegatedPermissionClassificationItemRequestBuilderDeleteRequestConfiguration';
import {DelegatedPermissionClassificationItemRequestBuilderGetRequestConfiguration} from './delegatedPermissionClassificationItemRequestBuilderGetRequestConfiguration';
import {DelegatedPermissionClassificationItemRequestBuilderPatchRequestConfiguration} from './delegatedPermissionClassificationItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the delegatedPermissionClassifications property of the microsoft.graph.servicePrincipal entity.
 */
export class DelegatedPermissionClassificationItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DelegatedPermissionClassificationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/delegatedPermissionClassifications/{delegatedPermissionClassification%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a delegatedPermissionClassification which had previously been set for a delegated permission.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/serviceprincipal-delete-delegatedpermissionclassifications?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: DelegatedPermissionClassificationItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get delegatedPermissionClassifications from servicePrincipals
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedPermissionClassification
     */
    public get(requestConfiguration?: DelegatedPermissionClassificationItemRequestBuilderGetRequestConfiguration | undefined) : Promise<DelegatedPermissionClassification | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedPermissionClassification>(requestInfo, createDelegatedPermissionClassificationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property delegatedPermissionClassifications in servicePrincipals
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DelegatedPermissionClassification
     */
    public patch(body: DelegatedPermissionClassification, requestConfiguration?: DelegatedPermissionClassificationItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<DelegatedPermissionClassification | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DelegatedPermissionClassification>(requestInfo, createDelegatedPermissionClassificationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a delegatedPermissionClassification which had previously been set for a delegated permission.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: DelegatedPermissionClassificationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get delegatedPermissionClassifications from servicePrincipals
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DelegatedPermissionClassificationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property delegatedPermissionClassifications in servicePrincipals
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: DelegatedPermissionClassification, requestConfiguration?: DelegatedPermissionClassificationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDelegatedPermissionClassification);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a DelegatedPermissionClassificationItemRequestBuilder
     */
    public withUrl(rawUrl: string) : DelegatedPermissionClassificationItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DelegatedPermissionClassificationItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
