import { createIdentityUserFlowAttributeFromDiscriminatorValue } from '../../../models/createIdentityUserFlowAttributeFromDiscriminatorValue';
import { deserializeIntoIdentityUserFlowAttribute } from '../../../models/deserializeIntoIdentityUserFlowAttribute';
import { type IdentityUserFlowAttribute } from '../../../models/identityUserFlowAttribute';
import { type ODataError } from '../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../models/oDataErrors/serializeODataError';
import { serializeIdentityUserFlowAttribute } from '../../../models/serializeIdentityUserFlowAttribute';
import { type IdentityUserFlowAttributeItemRequestBuilderDeleteRequestConfiguration } from './identityUserFlowAttributeItemRequestBuilderDeleteRequestConfiguration';
import { type IdentityUserFlowAttributeItemRequestBuilderGetRequestConfiguration } from './identityUserFlowAttributeItemRequestBuilderGetRequestConfiguration';
import { type IdentityUserFlowAttributeItemRequestBuilderPatchRequestConfiguration } from './identityUserFlowAttributeItemRequestBuilderPatchRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userFlowAttributes property of the microsoft.graph.identityContainer entity.
 */
export class IdentityUserFlowAttributeItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new IdentityUserFlowAttributeItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/userFlowAttributes/{identityUserFlowAttribute%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete an identityUserFlowAttribute. Only custom user flow attributes can be deleted.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/identityuserflowattribute-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: IdentityUserFlowAttributeItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of a identityUserFlowAttribute object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityUserFlowAttribute
     * @see {@link https://learn.microsoft.com/graph/api/identityuserflowattribute-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: IdentityUserFlowAttributeItemRequestBuilderGetRequestConfiguration | undefined) : Promise<IdentityUserFlowAttribute | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityUserFlowAttribute>(requestInfo, createIdentityUserFlowAttributeFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of a identityUserFlowAttribute object. Only custom user flow attributes can be updated.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityUserFlowAttribute
     * @see {@link https://learn.microsoft.com/graph/api/identityuserflowattribute-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: IdentityUserFlowAttribute, requestConfiguration?: IdentityUserFlowAttributeItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<IdentityUserFlowAttribute | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityUserFlowAttribute>(requestInfo, createIdentityUserFlowAttributeFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete an identityUserFlowAttribute. Only custom user flow attributes can be deleted.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: IdentityUserFlowAttributeItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of a identityUserFlowAttribute object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: IdentityUserFlowAttributeItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of a identityUserFlowAttribute object. Only custom user flow attributes can be updated.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: IdentityUserFlowAttribute, requestConfiguration?: IdentityUserFlowAttributeItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeIdentityUserFlowAttribute);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a IdentityUserFlowAttributeItemRequestBuilder
     */
    public withUrl(rawUrl: string) : IdentityUserFlowAttributeItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new IdentityUserFlowAttributeItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
