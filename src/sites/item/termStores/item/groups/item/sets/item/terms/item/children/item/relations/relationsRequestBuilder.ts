import {ODataError} from '../../../../../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../../../../../models/oDataErrors/serializeODataError';
import {RelationCollectionResponse} from '../../../../../../../../../../../../../models/termStore/';
import {createRelationCollectionResponseFromDiscriminatorValue} from '../../../../../../../../../../../../../models/termStore/createRelationCollectionResponseFromDiscriminatorValue';
import {createRelationFromDiscriminatorValue} from '../../../../../../../../../../../../../models/termStore/createRelationFromDiscriminatorValue';
import {deserializeIntoRelation} from '../../../../../../../../../../../../../models/termStore/deserializeIntoRelation';
import type {Relation} from '../../../../../../../../../../../../../models/termStore/relation';
import {serializeRelation} from '../../../../../../../../../../../../../models/termStore/serializeRelation';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {RelationItemRequestBuilder} from './item/relationItemRequestBuilder';
import {RelationsRequestBuilderGetRequestConfiguration} from './relationsRequestBuilderGetRequestConfiguration';
import {RelationsRequestBuilderPostRequestConfiguration} from './relationsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the relations property of the microsoft.graph.termStore.term entity.
 */
export class RelationsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the relations property of the microsoft.graph.termStore.term entity.
     * @param relationId Unique identifier of the item
     * @returns a RelationItemRequestBuilder
     */
    public byRelationId(relationId: string) : RelationItemRequestBuilder {
        if(!relationId) throw new Error("relationId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["relation%2Did"] = relationId
        return new RelationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RelationsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/{site%2Did}/termStores/{store%2Did}/groups/{group%2Did}/sets/{set%2Did}/terms/{term%2Did}/children/{term%2Did1}/relations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * To indicate which terms are related to the current term as either pinned or reused.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RelationCollectionResponse
     */
    public get(requestConfiguration?: RelationsRequestBuilderGetRequestConfiguration | undefined) : Promise<RelationCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<RelationCollectionResponse>(requestInfo, createRelationCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to relations for sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Relation
     */
    public post(body: Relation | undefined, requestConfiguration?: RelationsRequestBuilderPostRequestConfiguration | undefined) : Promise<Relation | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Relation>(requestInfo, createRelationFromDiscriminatorValue, errorMapping);
    };
    /**
     * To indicate which terms are related to the current term as either pinned or reused.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RelationsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to relations for sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Relation | undefined, requestConfiguration?: RelationsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeRelation);
        return requestInfo;
    };
}
