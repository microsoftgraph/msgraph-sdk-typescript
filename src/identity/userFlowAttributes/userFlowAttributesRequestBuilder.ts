import {IdentityUserFlowAttributeCollectionResponse} from '../../models/';
import {createIdentityUserFlowAttributeCollectionResponseFromDiscriminatorValue} from '../../models/createIdentityUserFlowAttributeCollectionResponseFromDiscriminatorValue';
import {createIdentityUserFlowAttributeFromDiscriminatorValue} from '../../models/createIdentityUserFlowAttributeFromDiscriminatorValue';
import {deserializeIntoIdentityUserFlowAttribute} from '../../models/deserializeIntoIdentityUserFlowAttribute';
import type {IdentityUserFlowAttribute} from '../../models/identityUserFlowAttribute';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeIdentityUserFlowAttribute} from '../../models/serializeIdentityUserFlowAttribute';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {IdentityUserFlowAttributeItemRequestBuilder} from './item/identityUserFlowAttributeItemRequestBuilder';
import {UserFlowAttributesRequestBuilderGetRequestConfiguration} from './userFlowAttributesRequestBuilderGetRequestConfiguration';
import {UserFlowAttributesRequestBuilderPostRequestConfiguration} from './userFlowAttributesRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userFlowAttributes property of the microsoft.graph.identityContainer entity.
 */
export class UserFlowAttributesRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the userFlowAttributes property of the microsoft.graph.identityContainer entity.
     * @param identityUserFlowAttributeId The unique identifier of identityUserFlowAttribute
     * @returns a IdentityUserFlowAttributeItemRequestBuilder
     */
    public byIdentityUserFlowAttributeId(identityUserFlowAttributeId: string) : IdentityUserFlowAttributeItemRequestBuilder {
        if(!identityUserFlowAttributeId) throw new Error("identityUserFlowAttributeId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["identityUserFlowAttribute%2Did"] = identityUserFlowAttributeId
        return new IdentityUserFlowAttributeItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new UserFlowAttributesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identity/userFlowAttributes{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Retrieve a list of identityUserFlowAttribute objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityUserFlowAttributeCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/identityuserflowattribute-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: UserFlowAttributesRequestBuilderGetRequestConfiguration | undefined) : Promise<IdentityUserFlowAttributeCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityUserFlowAttributeCollectionResponse>(requestInfo, createIdentityUserFlowAttributeCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new identityUserFlowAttribute object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityUserFlowAttribute
     * @see {@link https://learn.microsoft.com/graph/api/identityuserflowattribute-post?view=graph-rest-1.0|Find more info here}
     */
    public post(body: IdentityUserFlowAttribute, requestConfiguration?: UserFlowAttributesRequestBuilderPostRequestConfiguration | undefined) : Promise<IdentityUserFlowAttribute | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<IdentityUserFlowAttribute>(requestInfo, createIdentityUserFlowAttributeFromDiscriminatorValue, errorMapping);
    };
    /**
     * Retrieve a list of identityUserFlowAttribute objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: UserFlowAttributesRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new identityUserFlowAttribute object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: IdentityUserFlowAttribute, requestConfiguration?: UserFlowAttributesRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeIdentityUserFlowAttribute);
        return requestInfo;
    };
}
