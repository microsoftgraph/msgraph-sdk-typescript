import { type AccessReviewReviewer } from '../../../../../../../../models/accessReviewReviewer';
import { createAccessReviewReviewerFromDiscriminatorValue } from '../../../../../../../../models/createAccessReviewReviewerFromDiscriminatorValue';
import { deserializeIntoAccessReviewReviewer } from '../../../../../../../../models/deserializeIntoAccessReviewReviewer';
import { type ODataError } from '../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../models/oDataErrors/serializeODataError';
import { serializeAccessReviewReviewer } from '../../../../../../../../models/serializeAccessReviewReviewer';
import { type AccessReviewReviewerItemRequestBuilderDeleteRequestConfiguration } from './accessReviewReviewerItemRequestBuilderDeleteRequestConfiguration';
import { type AccessReviewReviewerItemRequestBuilderGetRequestConfiguration } from './accessReviewReviewerItemRequestBuilderGetRequestConfiguration';
import { type AccessReviewReviewerItemRequestBuilderPatchRequestConfiguration } from './accessReviewReviewerItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the contactedReviewers property of the microsoft.graph.accessReviewInstance entity.
 */
export class AccessReviewReviewerItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AccessReviewReviewerItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition%2Did}/instances/{accessReviewInstance%2Did}/contactedReviewers/{accessReviewReviewer%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property contactedReviewers for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: AccessReviewReviewerItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewReviewer
     */
    public get(requestConfiguration?: AccessReviewReviewerItemRequestBuilderGetRequestConfiguration | undefined) : Promise<AccessReviewReviewer | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessReviewReviewer>(requestInfo, createAccessReviewReviewerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property contactedReviewers in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewReviewer
     */
    public patch(body: AccessReviewReviewer, requestConfiguration?: AccessReviewReviewerItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<AccessReviewReviewer | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AccessReviewReviewer>(requestInfo, createAccessReviewReviewerFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property contactedReviewers for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: AccessReviewReviewerItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Returns the collection of reviewers who were contacted to complete this review. While the reviewers and fallbackReviewers properties of the accessReviewScheduleDefinition might specify group owners or managers as reviewers, contactedReviewers returns their individual identities. Supports $select. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AccessReviewReviewerItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property contactedReviewers in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: AccessReviewReviewer, requestConfiguration?: AccessReviewReviewerItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAccessReviewReviewer);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a AccessReviewReviewerItemRequestBuilder
     */
    public withUrl(rawUrl: string) : AccessReviewReviewerItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AccessReviewReviewerItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
