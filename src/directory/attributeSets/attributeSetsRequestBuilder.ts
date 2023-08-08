import {AttributeSetCollectionResponse} from '../../models/';
import type {AttributeSet} from '../../models/attributeSet';
import {createAttributeSetCollectionResponseFromDiscriminatorValue} from '../../models/createAttributeSetCollectionResponseFromDiscriminatorValue';
import {createAttributeSetFromDiscriminatorValue} from '../../models/createAttributeSetFromDiscriminatorValue';
import {deserializeIntoAttributeSet} from '../../models/deserializeIntoAttributeSet';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeAttributeSet} from '../../models/serializeAttributeSet';
import {AttributeSetsRequestBuilderGetRequestConfiguration} from './attributeSetsRequestBuilderGetRequestConfiguration';
import {AttributeSetsRequestBuilderPostRequestConfiguration} from './attributeSetsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {AttributeSetItemRequestBuilder} from './item/attributeSetItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the attributeSets property of the microsoft.graph.directory entity.
 */
export class AttributeSetsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the attributeSets property of the microsoft.graph.directory entity.
     * @param attributeSetId Unique identifier of the item
     * @returns a AttributeSetItemRequestBuilder
     */
    public byAttributeSetId(attributeSetId: string) : AttributeSetItemRequestBuilder {
        if(!attributeSetId) throw new Error("attributeSetId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["attributeSet%2Did"] = attributeSetId
        return new AttributeSetItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AttributeSetsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/directory/attributeSets{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a list of the attributeSet objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AttributeSetCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/directory-list-attributesets?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: AttributeSetsRequestBuilderGetRequestConfiguration | undefined) : Promise<AttributeSetCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AttributeSetCollectionResponse>(requestInfo, createAttributeSetCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new attributeSet object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AttributeSet
     * @see {@link https://learn.microsoft.com/graph/api/directory-post-attributesets?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AttributeSet, requestConfiguration?: AttributeSetsRequestBuilderPostRequestConfiguration | undefined) : Promise<AttributeSet | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AttributeSet>(requestInfo, createAttributeSetFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a list of the attributeSet objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AttributeSetsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new attributeSet object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AttributeSet, requestConfiguration?: AttributeSetsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAttributeSet);
        return requestInfo;
    };
}
