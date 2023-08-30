import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import type {AddPostRequestBody} from './addPostRequestBody';
import {AddRequestBuilderPostRequestConfiguration} from './addRequestBuilderPostRequestConfiguration';
import type {AddResponse} from './addResponse';
import {createAddResponseFromDiscriminatorValue} from './createAddResponseFromDiscriminatorValue';
import {deserializeIntoAddPostRequestBody} from './deserializeIntoAddPostRequestBody';
import {deserializeIntoAddResponse} from './deserializeIntoAddResponse';
import {serializeAddPostRequestBody} from './serializeAddPostRequestBody';
import {serializeAddResponse} from './serializeAddResponse';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the add method.
 */
export class AddRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AddRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/joinedTeams/{team%2Did}/primaryChannel/members/add");
    };
    /**
     * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn't be created.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AddResponse
     * @see {@link https://learn.microsoft.com/graph/api/conversationmembers-add?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AddPostRequestBody, requestConfiguration?: AddRequestBuilderPostRequestConfiguration | undefined) : Promise<AddResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AddResponse>(requestInfo, createAddResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn't be created.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AddPostRequestBody, requestConfiguration?: AddRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAddPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a addRequestBuilder
     */
    public withUrl(rawUrl: string) : AddRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AddRequestBuilder(rawUrl, this.requestAdapter);
    };
}
