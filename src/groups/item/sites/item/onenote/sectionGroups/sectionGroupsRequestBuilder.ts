import {SectionGroupCollectionResponse} from '../../../../../../models/';
import {createSectionGroupCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createSectionGroupCollectionResponseFromDiscriminatorValue';
import {createSectionGroupFromDiscriminatorValue} from '../../../../../../models/createSectionGroupFromDiscriminatorValue';
import {deserializeIntoSectionGroup} from '../../../../../../models/deserializeIntoSectionGroup';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import type {SectionGroup} from '../../../../../../models/sectionGroup';
import {serializeSectionGroup} from '../../../../../../models/serializeSectionGroup';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SectionGroupItemRequestBuilder} from './item/sectionGroupItemRequestBuilder';
import {SectionGroupsRequestBuilderGetRequestConfiguration} from './sectionGroupsRequestBuilderGetRequestConfiguration';
import {SectionGroupsRequestBuilderPostRequestConfiguration} from './sectionGroupsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sectionGroups property of the microsoft.graph.onenote entity.
 */
export class SectionGroupsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sectionGroups property of the microsoft.graph.onenote entity.
     * @param sectionGroupId The unique identifier of sectionGroup
     * @returns a SectionGroupItemRequestBuilder
     */
    public bySectionGroupId(sectionGroupId: string) : SectionGroupItemRequestBuilder {
        if(!sectionGroupId) throw new Error("sectionGroupId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["sectionGroup%2Did"] = sectionGroupId
        return new SectionGroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SectionGroupsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/onenote/sectionGroups{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of sectionGroup objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SectionGroupCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/onenote-list-sectiongroups?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SectionGroupsRequestBuilderGetRequestConfiguration | undefined) : Promise<SectionGroupCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SectionGroupCollectionResponse>(requestInfo, createSectionGroupCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to sectionGroups for groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SectionGroup
     */
    public post(body: SectionGroup, requestConfiguration?: SectionGroupsRequestBuilderPostRequestConfiguration | undefined) : Promise<SectionGroup | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SectionGroup>(requestInfo, createSectionGroupFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of sectionGroup objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SectionGroupsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to sectionGroups for groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SectionGroup, requestConfiguration?: SectionGroupsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSectionGroup);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a sectionGroupsRequestBuilder
     */
    public withUrl(rawUrl: string) : SectionGroupsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SectionGroupsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
