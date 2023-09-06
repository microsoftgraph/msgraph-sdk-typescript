import { type SectionGroupCollectionResponse } from '../../../../../../models/';
import { createSectionGroupCollectionResponseFromDiscriminatorValue } from '../../../../../../models/createSectionGroupCollectionResponseFromDiscriminatorValue';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { SectionGroupItemRequestBuilder } from './item/sectionGroupItemRequestBuilder';
import { type SectionGroupsRequestBuilderGetRequestConfiguration } from './sectionGroupsRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sectionGroups property of the microsoft.graph.sectionGroup entity.
 */
export class SectionGroupsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sectionGroups property of the microsoft.graph.sectionGroup entity.
     * @param sectionGroupId1 The unique identifier of sectionGroup
     * @returns a SectionGroupItemRequestBuilder
     */
    public bySectionGroupId1(sectionGroupId1: string) : SectionGroupItemRequestBuilder {
        if(!sectionGroupId1) throw new Error("sectionGroupId1 cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["sectionGroup%2Did1"] = sectionGroupId1
        return new SectionGroupItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SectionGroupsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/onenote/sectionGroups/{sectionGroup%2Did}/sectionGroups{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of section groups from the specified section group.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SectionGroupCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/sectiongroup-list-sectiongroups?view=graph-rest-1.0|Find more info here}
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
     * Retrieve a list of section groups from the specified section group.
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a sectionGroupsRequestBuilder
     */
    public withUrl(rawUrl: string) : SectionGroupsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new SectionGroupsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
