import { type UserCollectionResponse } from '../../../../models/';
import { createUserCollectionResponseFromDiscriminatorValue } from '../../../../models/createUserCollectionResponseFromDiscriminatorValue';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { type ApproversRequestBuilderGetRequestConfiguration } from './approversRequestBuilderGetRequestConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { UserItemRequestBuilder } from './item/userItemRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the approvers property of the microsoft.graph.subjectRightsRequest entity.
 */
export class ApproversRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     * @deprecated The subject rights request API under Privacy is deprecated and will stop working on  March 22, 2025. Please use the new API under Security. as of 2022-02/PrivacyDeprecate on 2022-03-22 and will be removed 2025-03-20
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the approvers property of the microsoft.graph.subjectRightsRequest entity.
     * @param userId The unique identifier of user
     * @returns a UserItemRequestBuilder
     * @deprecated The subject rights request API under Privacy is deprecated and will stop working on  March 22, 2025. Please use the new API under Security. as of 2022-02/PrivacyDeprecate on 2022-03-22 and will be removed 2025-03-20
     */
    public byUserId(userId: string) : UserItemRequestBuilder {
        if(!userId) throw new Error("userId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["user%2Did"] = userId
        return new UserItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ApproversRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/privacy/subjectRightsRequests/{subjectRightsRequest%2Did}/approvers{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get approvers from privacy
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserCollectionResponse
     * @deprecated The subject rights request API under Privacy is deprecated and will stop working on  March 22, 2025. Please use the new API under Security. as of 2022-02/PrivacyDeprecate on 2022-03-22 and will be removed 2025-03-20
     */
    public get(requestConfiguration?: ApproversRequestBuilderGetRequestConfiguration | undefined) : Promise<UserCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserCollectionResponse>(requestInfo, createUserCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get approvers from privacy
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The subject rights request API under Privacy is deprecated and will stop working on  March 22, 2025. Please use the new API under Security. as of 2022-02/PrivacyDeprecate on 2022-03-22 and will be removed 2025-03-20
     */
    public toGetRequestInformation(requestConfiguration?: ApproversRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a approversRequestBuilder
     * @deprecated The subject rights request API under Privacy is deprecated and will stop working on  March 22, 2025. Please use the new API under Security. as of 2022-02/PrivacyDeprecate on 2022-03-22 and will be removed 2025-03-20
     */
    public withUrl(rawUrl: string) : ApproversRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ApproversRequestBuilder(rawUrl, this.requestAdapter);
    };
}
