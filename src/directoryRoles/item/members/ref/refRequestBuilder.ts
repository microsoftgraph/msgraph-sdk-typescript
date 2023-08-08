import {StringCollectionResponse} from '../../../../models/';
import {createStringCollectionResponseFromDiscriminatorValue} from '../../../../models/createStringCollectionResponseFromDiscriminatorValue';
import {deserializeIntoReferenceCreate} from '../../../../models/deserializeIntoReferenceCreate';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import type {ReferenceCreate} from '../../../../models/referenceCreate';
import {serializeReferenceCreate} from '../../../../models/serializeReferenceCreate';
import {RefRequestBuilderGetRequestConfiguration} from './refRequestBuilderGetRequestConfiguration';
import {RefRequestBuilderPostRequestConfiguration} from './refRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of directoryRole entities.
 */
export class RefRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new RefRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/directoryRoles/{directoryRole%2Did}/members/$ref{?%24top,%24skip,%24search,%24filter,%24count,%24orderby}");
    };
    /**
     * Users that are members of this directory role. HTTP Methods: GET, POST, DELETE. Read-only. Nullable. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of StringCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/directoryrole-list-members?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: RefRequestBuilderGetRequestConfiguration | undefined) : Promise<StringCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<StringCollectionResponse>(requestInfo, createStringCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create a new directory role member. You can use both the object ID and template ID of the directoryRole with this API. The template ID of a built-in role is immutable and can be seen in the role description on the Azure portal. For details, see Role template IDs.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/directoryrole-post-members?view=graph-rest-1.0|Find more info here}
     */
    public post(body: ReferenceCreate, requestConfiguration?: RefRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Users that are members of this directory role. HTTP Methods: GET, POST, DELETE. Read-only. Nullable. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RefRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create a new directory role member. You can use both the object ID and template ID of the directoryRole with this API. The template ID of a built-in role is immutable and can be seen in the role description on the Azure portal. For details, see Role template IDs.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: ReferenceCreate, requestConfiguration?: RefRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeReferenceCreate);
        return requestInfo;
    };
}
