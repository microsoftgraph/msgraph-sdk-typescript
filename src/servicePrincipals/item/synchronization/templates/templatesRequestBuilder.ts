import {SynchronizationTemplateCollectionResponse} from '../../../../models/';
import {createSynchronizationTemplateCollectionResponseFromDiscriminatorValue} from '../../../../models/createSynchronizationTemplateCollectionResponseFromDiscriminatorValue';
import {createSynchronizationTemplateFromDiscriminatorValue} from '../../../../models/createSynchronizationTemplateFromDiscriminatorValue';
import {deserializeIntoSynchronizationTemplate} from '../../../../models/deserializeIntoSynchronizationTemplate';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeSynchronizationTemplate} from '../../../../models/serializeSynchronizationTemplate';
import {SynchronizationTemplate} from '../../../../models/synchronizationTemplate';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {SynchronizationTemplateItemRequestBuilder} from './item/synchronizationTemplateItemRequestBuilder';
import {TemplatesRequestBuilderGetRequestConfiguration} from './templatesRequestBuilderGetRequestConfiguration';
import {TemplatesRequestBuilderPostRequestConfiguration} from './templatesRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the templates property of the microsoft.graph.synchronization entity.
 */
export class TemplatesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the templates property of the microsoft.graph.synchronization entity.
     * @param synchronizationTemplateId Unique identifier of the item
     * @returns a SynchronizationTemplateItemRequestBuilder
     */
    public bySynchronizationTemplateId(synchronizationTemplateId: string) : SynchronizationTemplateItemRequestBuilder {
        if(!synchronizationTemplateId) throw new Error("synchronizationTemplateId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["synchronizationTemplate%2Did"] = synchronizationTemplateId
        return new SynchronizationTemplateItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new TemplatesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/synchronization/templates{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * List the synchronization templates associated with a given application or service principal.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SynchronizationTemplateCollectionResponse
     * @see {@link https://docs.microsoft.com/graph/api/synchronization-synchronization-list-templates?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: TemplatesRequestBuilderGetRequestConfiguration | undefined) : Promise<SynchronizationTemplateCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SynchronizationTemplateCollectionResponse>(requestInfo, createSynchronizationTemplateCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to templates for servicePrincipals
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SynchronizationTemplate
     */
    public post(body: SynchronizationTemplate | undefined, requestConfiguration?: TemplatesRequestBuilderPostRequestConfiguration | undefined) : Promise<SynchronizationTemplate | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SynchronizationTemplate>(requestInfo, createSynchronizationTemplateFromDiscriminatorValue, errorMapping);
    };
    /**
     * List the synchronization templates associated with a given application or service principal.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: TemplatesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to templates for servicePrincipals
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: SynchronizationTemplate | undefined, requestConfiguration?: TemplatesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeSynchronizationTemplate);
        return requestInfo;
    };
}
