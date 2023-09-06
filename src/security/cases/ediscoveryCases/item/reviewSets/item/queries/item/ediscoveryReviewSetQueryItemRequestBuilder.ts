import { type ODataError } from '../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../models/oDataErrors/serializeODataError';
import { createEdiscoveryReviewSetQueryFromDiscriminatorValue } from '../../../../../../../../models/security/createEdiscoveryReviewSetQueryFromDiscriminatorValue';
import { deserializeIntoEdiscoveryReviewSetQuery } from '../../../../../../../../models/security/deserializeIntoEdiscoveryReviewSetQuery';
import { type EdiscoveryReviewSetQuery } from '../../../../../../../../models/security/ediscoveryReviewSetQuery';
import { serializeEdiscoveryReviewSetQuery } from '../../../../../../../../models/security/serializeEdiscoveryReviewSetQuery';
import { type EdiscoveryReviewSetQueryItemRequestBuilderDeleteRequestConfiguration } from './ediscoveryReviewSetQueryItemRequestBuilderDeleteRequestConfiguration';
import { type EdiscoveryReviewSetQueryItemRequestBuilderGetRequestConfiguration } from './ediscoveryReviewSetQueryItemRequestBuilderGetRequestConfiguration';
import { type EdiscoveryReviewSetQueryItemRequestBuilderPatchRequestConfiguration } from './ediscoveryReviewSetQueryItemRequestBuilderPatchRequestConfiguration';
import { MicrosoftGraphSecurityApplyTagsRequestBuilder } from './microsoftGraphSecurityApplyTags/microsoftGraphSecurityApplyTagsRequestBuilder';
import { MicrosoftGraphSecurityExportRequestBuilder } from './microsoftGraphSecurityExport/microsoftGraphSecurityExportRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the queries property of the microsoft.graph.security.ediscoveryReviewSet entity.
 */
export class EdiscoveryReviewSetQueryItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the applyTags method.
     */
    public get microsoftGraphSecurityApplyTags(): MicrosoftGraphSecurityApplyTagsRequestBuilder {
        return new MicrosoftGraphSecurityApplyTagsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the export method.
     */
    public get microsoftGraphSecurityExport(): MicrosoftGraphSecurityExportRequestBuilder {
        return new MicrosoftGraphSecurityExportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new EdiscoveryReviewSetQueryItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/reviewSets/{ediscoveryReviewSet%2Did}/queries/{ediscoveryReviewSetQuery%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete an ediscoveryReviewSetQuery object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoveryreviewset-delete-queries?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: EdiscoveryReviewSetQueryItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of an ediscoveryReviewSetQuery object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryReviewSetQuery
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoveryreviewsetquery-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: EdiscoveryReviewSetQueryItemRequestBuilderGetRequestConfiguration | undefined) : Promise<EdiscoveryReviewSetQuery | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryReviewSetQuery>(requestInfo, createEdiscoveryReviewSetQueryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of an ediscoveryReviewSetQuery object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryReviewSetQuery
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoveryreviewsetquery-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: EdiscoveryReviewSetQuery, requestConfiguration?: EdiscoveryReviewSetQueryItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<EdiscoveryReviewSetQuery | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryReviewSetQuery>(requestInfo, createEdiscoveryReviewSetQueryFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete an ediscoveryReviewSetQuery object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EdiscoveryReviewSetQueryItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of an ediscoveryReviewSetQuery object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EdiscoveryReviewSetQueryItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of an ediscoveryReviewSetQuery object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EdiscoveryReviewSetQuery, requestConfiguration?: EdiscoveryReviewSetQueryItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeEdiscoveryReviewSetQuery);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a EdiscoveryReviewSetQueryItemRequestBuilder
     */
    public withUrl(rawUrl: string) : EdiscoveryReviewSetQueryItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new EdiscoveryReviewSetQueryItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
