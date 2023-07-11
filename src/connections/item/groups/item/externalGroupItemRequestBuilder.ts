import {createExternalGroupFromDiscriminatorValue} from '../../../../models/externalConnectors/createExternalGroupFromDiscriminatorValue';
import {deserializeIntoExternalGroup} from '../../../../models/externalConnectors/deserializeIntoExternalGroup';
import {ExternalGroup} from '../../../../models/externalConnectors/externalGroup';
import {serializeExternalGroup} from '../../../../models/externalConnectors/serializeExternalGroup';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {ExternalGroupItemRequestBuilderDeleteRequestConfiguration} from './externalGroupItemRequestBuilderDeleteRequestConfiguration';
import {ExternalGroupItemRequestBuilderGetRequestConfiguration} from './externalGroupItemRequestBuilderGetRequestConfiguration';
import {ExternalGroupItemRequestBuilderPatchRequestConfiguration} from './externalGroupItemRequestBuilderPatchRequestConfiguration';
import {MembersRequestBuilder} from './members/membersRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the groups property of the microsoft.graph.externalConnectors.externalConnection entity.
 */
export class ExternalGroupItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the members property of the microsoft.graph.externalConnectors.externalGroup entity.
     */
    public get members(): MembersRequestBuilder {
        return new MembersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ExternalGroupItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/connections/{externalConnection%2Did}/groups/{externalGroup%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete an externalGroup object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/externalconnectors-externalgroup-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: ExternalGroupItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Get an externalGroup object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ExternalGroup
     * @see {@link https://docs.microsoft.com/graph/api/externalconnectors-externalgroup-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ExternalGroupItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ExternalGroup | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ExternalGroup>(requestInfo, createExternalGroupFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of an externalGroup object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ExternalGroup
     * @see {@link https://docs.microsoft.com/graph/api/externalconnectors-externalgroup-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: ExternalGroup | undefined, requestConfiguration?: ExternalGroupItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<ExternalGroup | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ExternalGroup>(requestInfo, createExternalGroupFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete an externalGroup object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: ExternalGroupItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Get an externalGroup object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ExternalGroupItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of an externalGroup object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ExternalGroup | undefined, requestConfiguration?: ExternalGroupItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeExternalGroup);
        return requestInfo;
    };
}
