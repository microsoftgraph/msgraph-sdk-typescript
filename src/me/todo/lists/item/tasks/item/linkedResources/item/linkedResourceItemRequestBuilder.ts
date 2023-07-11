import {createLinkedResourceFromDiscriminatorValue} from '../../../../../../../../models/createLinkedResourceFromDiscriminatorValue';
import {deserializeIntoLinkedResource} from '../../../../../../../../models/deserializeIntoLinkedResource';
import {LinkedResource} from '../../../../../../../../models/linkedResource';
import {ODataError} from '../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../models/oDataErrors/serializeODataError';
import {serializeLinkedResource} from '../../../../../../../../models/serializeLinkedResource';
import {LinkedResourceItemRequestBuilderDeleteRequestConfiguration} from './linkedResourceItemRequestBuilderDeleteRequestConfiguration';
import {LinkedResourceItemRequestBuilderGetRequestConfiguration} from './linkedResourceItemRequestBuilderGetRequestConfiguration';
import {LinkedResourceItemRequestBuilderPatchRequestConfiguration} from './linkedResourceItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the linkedResources property of the microsoft.graph.todoTask entity.
 */
export class LinkedResourceItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new LinkedResourceItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/todo/lists/{todoTaskList%2Did}/tasks/{todoTask%2Did}/linkedResources/{linkedResource%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a linkedResource object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/linkedresource-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: LinkedResourceItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Read the properties and relationships of a linkedResource object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LinkedResource
     * @see {@link https://docs.microsoft.com/graph/api/linkedresource-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: LinkedResourceItemRequestBuilderGetRequestConfiguration | undefined) : Promise<LinkedResource | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LinkedResource>(requestInfo, createLinkedResourceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a linkedResource object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LinkedResource
     * @see {@link https://docs.microsoft.com/graph/api/linkedresource-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: LinkedResource | undefined, requestConfiguration?: LinkedResourceItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<LinkedResource | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<LinkedResource>(requestInfo, createLinkedResourceFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a linkedResource object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: LinkedResourceItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Read the properties and relationships of a linkedResource object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: LinkedResourceItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a linkedResource object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: LinkedResource | undefined, requestConfiguration?: LinkedResourceItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeLinkedResource);
        return requestInfo;
    };
}
