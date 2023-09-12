import { type ODataError } from '../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../models/oDataErrors/serializeODataError';
import { type AddGroupPostRequestBody } from './addGroupPostRequestBody';
import { type AddGroupRequestBuilderPostRequestConfiguration } from './addGroupRequestBuilderPostRequestConfiguration';
import { type AddGroupResponse } from './addGroupResponse';
import { createAddGroupResponseFromDiscriminatorValue } from './createAddGroupResponseFromDiscriminatorValue';
import { deserializeIntoAddGroupPostRequestBody } from './deserializeIntoAddGroupPostRequestBody';
import { deserializeIntoAddGroupResponse } from './deserializeIntoAddGroupResponse';
import { serializeAddGroupPostRequestBody } from './serializeAddGroupPostRequestBody';
import { serializeAddGroupResponse } from './serializeAddGroupResponse';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the addGroup method.
 */
export class AddGroupRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AddGroupRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/groups/{group%2Did}/groupLifecyclePolicies/{groupLifecyclePolicy%2Did}/addGroup");
    };
    /**
     * Adds specific groups to a lifecycle policy. This action limits the group lifecycle policy to a set of groups only if the managedGroupTypes property of groupLifecyclePolicy is set to Selected.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AddGroupResponse
     * @see {@link https://learn.microsoft.com/graph/api/grouplifecyclepolicy-addgroup?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AddGroupPostRequestBody, requestConfiguration?: AddGroupRequestBuilderPostRequestConfiguration | undefined) : Promise<AddGroupResponse | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<AddGroupResponse>(requestInfo, createAddGroupResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Adds specific groups to a lifecycle policy. This action limits the group lifecycle policy to a set of groups only if the managedGroupTypes property of groupLifecyclePolicy is set to Selected.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AddGroupPostRequestBody, requestConfiguration?: AddGroupRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAddGroupPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a addGroupRequestBuilder
     */
    public withUrl(rawUrl: string) : AddGroupRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AddGroupRequestBuilder(rawUrl, this.requestAdapter);
    };
}
