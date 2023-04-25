import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CheckMemberGroupsRequestBuilderPostRequestConfiguration} from './checkMemberGroupsRequestBuilderPostRequestConfiguration';
import {createCheckMemberGroupsResponseFromDiscriminatorValue} from './createCheckMemberGroupsResponseFromDiscriminatorValue';
import {CheckMemberGroupsPostRequestBody, CheckMemberGroupsResponse} from './index';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the checkMemberGroups method.
 */
export class CheckMemberGroupsRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CheckMemberGroupsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/directoryRoleTemplates/{directoryRoleTemplate%2Did}/checkMemberGroups");
    };
    /**
     * Invoke action checkMemberGroups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of CheckMemberGroupsResponse
     */
    public post(body: CheckMemberGroupsPostRequestBody | undefined, requestConfiguration?: CheckMemberGroupsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<CheckMemberGroupsResponse | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<CheckMemberGroupsResponse>(requestInfo, createCheckMemberGroupsResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Invoke action checkMemberGroups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CheckMemberGroupsPostRequestBody | undefined, requestConfiguration?: CheckMemberGroupsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
