import { type OnenoteSection } from '../../../../../../../../../../../../../../models/';
import { createOnenoteSectionFromDiscriminatorValue } from '../../../../../../../../../../../../../../models/createOnenoteSectionFromDiscriminatorValue';
import { type ODataError } from '../../../../../../../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../../../../../../../models/oDataErrors/serializeODataError';
import { type ParentSectionRequestBuilderGetRequestConfiguration } from './parentSectionRequestBuilderGetRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the parentSection property of the microsoft.graph.onenotePage entity.
 */
export class ParentSectionRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ParentSectionRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/onenote/notebooks/{notebook%2Did}/sectionGroups/{sectionGroup%2Did}/sections/{onenoteSection%2Did}/pages/{onenotePage%2Did}/parentSection{?%24select,%24expand}");
    };
    /**
     * The section that contains the page. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnenoteSection
     */
    public get(requestConfiguration?: ParentSectionRequestBuilderGetRequestConfiguration | undefined) : Promise<OnenoteSection | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OnenoteSection>(requestInfo, createOnenoteSectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * The section that contains the page. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ParentSectionRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a parentSectionRequestBuilder
     */
    public withUrl(rawUrl: string) : ParentSectionRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ParentSectionRequestBuilder(rawUrl, this.requestAdapter);
    };
}
