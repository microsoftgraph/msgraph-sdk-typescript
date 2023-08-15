import {createSectionGroupFromDiscriminatorValue} from '../../../../../../models/createSectionGroupFromDiscriminatorValue';
import {deserializeIntoSectionGroup} from '../../../../../../models/deserializeIntoSectionGroup';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import type {SectionGroup} from '../../../../../../models/sectionGroup';
import {serializeSectionGroup} from '../../../../../../models/serializeSectionGroup';
import {ParentNotebookRequestBuilder} from './parentNotebook/parentNotebookRequestBuilder';
import {ParentSectionGroupRequestBuilder} from './parentSectionGroup/parentSectionGroupRequestBuilder';
import {SectionGroupItemRequestBuilderDeleteRequestConfiguration} from './sectionGroupItemRequestBuilderDeleteRequestConfiguration';
import {SectionGroupItemRequestBuilderGetRequestConfiguration} from './sectionGroupItemRequestBuilderGetRequestConfiguration';
import {SectionGroupItemRequestBuilderPatchRequestConfiguration} from './sectionGroupItemRequestBuilderPatchRequestConfiguration';
import {SectionGroupsRequestBuilder} from './sectionGroups/sectionGroupsRequestBuilder';
import {SectionsRequestBuilder} from './sections/sectionsRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sectionGroups property of the microsoft.graph.notebook entity.
 */
export class SectionGroupItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the parentNotebook property of the microsoft.graph.sectionGroup entity.
     */
    public get parentNotebook(): ParentNotebookRequestBuilder {
        return new ParentNotebookRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the parentSectionGroup property of the microsoft.graph.sectionGroup entity.
     */
    public get parentSectionGroup(): ParentSectionGroupRequestBuilder {
        return new ParentSectionGroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sectionGroups property of the microsoft.graph.sectionGroup entity.
     */
    public get sectionGroups(): SectionGroupsRequestBuilder {
        return new SectionGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the sections property of the microsoft.graph.sectionGroup entity.
     */
    public get sections(): SectionsRequestBuilder {
        return new SectionsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new SectionGroupItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/onenote/notebooks/{notebook%2Did}/sectionGroups/{sectionGroup%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property sectionGroups for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: SectionGroupItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * The section groups in the notebook. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SectionGroup
     */
    public get(requestConfiguration?: SectionGroupItemRequestBuilderGetRequestConfiguration | undefined) : Promise<SectionGroup | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SectionGroup>(requestInfo, createSectionGroupFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the navigation property sectionGroups in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SectionGroup
     */
    public patch(body: SectionGroup, requestConfiguration?: SectionGroupItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<SectionGroup | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SectionGroup>(requestInfo, createSectionGroupFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property sectionGroups for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: SectionGroupItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * The section groups in the notebook. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SectionGroupItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property sectionGroups in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: SectionGroup, requestConfiguration?: SectionGroupItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSectionGroup);
        return requestInfo;
    };
}
