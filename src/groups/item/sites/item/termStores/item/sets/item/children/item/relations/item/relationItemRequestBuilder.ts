import { type ODataError } from '../../../../../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../../../../../models/oDataErrors/serializeODataError';
import { createRelationFromDiscriminatorValue } from '../../../../../../../../../../../../models/termStore/createRelationFromDiscriminatorValue';
import { deserializeIntoRelation } from '../../../../../../../../../../../../models/termStore/deserializeIntoRelation';
import { type Relation } from '../../../../../../../../../../../../models/termStore/relation';
import { serializeRelation } from '../../../../../../../../../../../../models/termStore/serializeRelation';
import { FromTermRequestBuilder } from './fromTerm/fromTermRequestBuilder';
import { type RelationItemRequestBuilderDeleteRequestConfiguration } from './relationItemRequestBuilderDeleteRequestConfiguration';
import { type RelationItemRequestBuilderGetRequestConfiguration } from './relationItemRequestBuilderGetRequestConfiguration';
import { type RelationItemRequestBuilderPatchRequestConfiguration } from './relationItemRequestBuilderPatchRequestConfiguration';
import { SetRequestBuilder } from './set/setRequestBuilder';
import { ToTermRequestBuilder } from './toTerm/toTermRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the relations property of the microsoft.graph.termStore.term entity.
 */
export class RelationItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the fromTerm property of the microsoft.graph.termStore.relation entity.
     */
    public get fromTerm(): FromTermRequestBuilder {
        return new FromTermRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the set property of the microsoft.graph.termStore.relation entity.
     */
    public get set(): SetRequestBuilder {
        return new SetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the toTerm property of the microsoft.graph.termStore.relation entity.
     */
    public get toTerm(): ToTermRequestBuilder {
        return new ToTermRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new RelationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/termStores/{store%2Did}/sets/{set%2Did}/children/{term%2Did}/relations/{relation%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property relations for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: RelationItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * To indicate which terms are related to the current term as either pinned or reused.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Relation
     */
    public get(requestConfiguration?: RelationItemRequestBuilderGetRequestConfiguration | undefined) : Promise<Relation | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Relation>(requestInfo, createRelationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property relations in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Relation
     */
    public patch(body: Relation, requestConfiguration?: RelationItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<Relation | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Relation>(requestInfo, createRelationFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property relations for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: RelationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * To indicate which terms are related to the current term as either pinned or reused.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RelationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property relations in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Relation, requestConfiguration?: RelationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeRelation);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a RelationItemRequestBuilder
     */
    public withUrl(rawUrl: string) : RelationItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new RelationItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
