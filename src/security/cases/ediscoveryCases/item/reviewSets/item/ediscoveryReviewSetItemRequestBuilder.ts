import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {createEdiscoveryReviewSetFromDiscriminatorValue} from '../../../../../../models/security/createEdiscoveryReviewSetFromDiscriminatorValue';
import {deserializeIntoEdiscoveryReviewSet} from '../../../../../../models/security/deserializeIntoEdiscoveryReviewSet';
import type {EdiscoveryReviewSet} from '../../../../../../models/security/ediscoveryReviewSet';
import {serializeEdiscoveryReviewSet} from '../../../../../../models/security/serializeEdiscoveryReviewSet';
import {EdiscoveryReviewSetItemRequestBuilderDeleteRequestConfiguration} from './ediscoveryReviewSetItemRequestBuilderDeleteRequestConfiguration';
import {EdiscoveryReviewSetItemRequestBuilderGetRequestConfiguration} from './ediscoveryReviewSetItemRequestBuilderGetRequestConfiguration';
import {EdiscoveryReviewSetItemRequestBuilderPatchRequestConfiguration} from './ediscoveryReviewSetItemRequestBuilderPatchRequestConfiguration';
import {MicrosoftGraphSecurityAddToReviewSetRequestBuilder} from './microsoftGraphSecurityAddToReviewSet/microsoftGraphSecurityAddToReviewSetRequestBuilder';
import {MicrosoftGraphSecurityExportRequestBuilder} from './microsoftGraphSecurityExport/microsoftGraphSecurityExportRequestBuilder';
import {QueriesRequestBuilder} from './queries/queriesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the reviewSets property of the microsoft.graph.security.ediscoveryCase entity.
 */
export class EdiscoveryReviewSetItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to call the addToReviewSet method.
     */
    public get microsoftGraphSecurityAddToReviewSet(): MicrosoftGraphSecurityAddToReviewSetRequestBuilder {
        return new MicrosoftGraphSecurityAddToReviewSetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the export method.
     */
    public get microsoftGraphSecurityExport(): MicrosoftGraphSecurityExportRequestBuilder {
        return new MicrosoftGraphSecurityExportRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the queries property of the microsoft.graph.security.ediscoveryReviewSet entity.
     */
    public get queries(): QueriesRequestBuilder {
        return new QueriesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new EdiscoveryReviewSetItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/reviewSets/{ediscoveryReviewSet%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property reviewSets for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: EdiscoveryReviewSetItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of an ediscoveryReviewSet object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryReviewSet
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoveryreviewset-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: EdiscoveryReviewSetItemRequestBuilderGetRequestConfiguration | undefined) : Promise<EdiscoveryReviewSet | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryReviewSet>(requestInfo, createEdiscoveryReviewSetFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property reviewSets in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryReviewSet
     */
    public patch(body: EdiscoveryReviewSet | undefined, requestConfiguration?: EdiscoveryReviewSetItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<EdiscoveryReviewSet | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EdiscoveryReviewSet>(requestInfo, createEdiscoveryReviewSetFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property reviewSets for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EdiscoveryReviewSetItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of an ediscoveryReviewSet object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EdiscoveryReviewSetItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property reviewSets in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EdiscoveryReviewSet | undefined, requestConfiguration?: EdiscoveryReviewSetItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeEdiscoveryReviewSet);
        return requestInfo;
    };
}
