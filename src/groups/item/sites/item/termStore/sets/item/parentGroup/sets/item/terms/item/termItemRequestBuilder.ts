import { type ODataError } from '../../../../../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../../../../../models/oDataErrors/serializeODataError';
import { createTermFromDiscriminatorValue } from '../../../../../../../../../../../../models/termStore/createTermFromDiscriminatorValue';
import { deserializeIntoTerm } from '../../../../../../../../../../../../models/termStore/deserializeIntoTerm';
import { serializeTerm } from '../../../../../../../../../../../../models/termStore/serializeTerm';
import { type Term } from '../../../../../../../../../../../../models/termStore/term';
import { ChildrenRequestBuilder } from './children/childrenRequestBuilder';
import { RelationsRequestBuilder } from './relations/relationsRequestBuilder';
import { SetRequestBuilder } from './set/setRequestBuilder';
import { type TermItemRequestBuilderDeleteRequestConfiguration } from './termItemRequestBuilderDeleteRequestConfiguration';
import { type TermItemRequestBuilderGetRequestConfiguration } from './termItemRequestBuilderGetRequestConfiguration';
import { type TermItemRequestBuilderPatchRequestConfiguration } from './termItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the terms property of the microsoft.graph.termStore.set entity.
 */
export class TermItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the children property of the microsoft.graph.termStore.term entity.
     */
    public get children(): ChildrenRequestBuilder {
        return new ChildrenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the relations property of the microsoft.graph.termStore.term entity.
     */
    public get relations(): RelationsRequestBuilder {
        return new RelationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the set property of the microsoft.graph.termStore.term entity.
     */
    public get set(): SetRequestBuilder {
        return new SetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new TermItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/termStore/sets/{set%2Did}/parentGroup/sets/{set%2Did1}/terms/{term%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete a term object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/termstore-term-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: TermItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a term object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Term
     * @see {@link https://learn.microsoft.com/graph/api/termstore-term-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TermItemRequestBuilderGetRequestConfiguration | undefined) : Promise<Term | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Term>(requestInfo, createTermFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a term object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Term
     * @see {@link https://learn.microsoft.com/graph/api/termstore-term-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: Term, requestConfiguration?: TermItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<Term | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Term>(requestInfo, createTermFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete a term object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: TermItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a term object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TermItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a term object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Term, requestConfiguration?: TermItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeTerm);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a TermItemRequestBuilder
     */
    public withUrl(rawUrl: string) : TermItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new TermItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
