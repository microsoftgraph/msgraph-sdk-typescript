import {createPrivacyFromDiscriminatorValue} from '../models/createPrivacyFromDiscriminatorValue';
import {deserializeIntoPrivacy} from '../models/deserializeIntoPrivacy';
import {ODataError} from '../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../models/oDataErrors/serializeODataError';
import type {Privacy} from '../models/privacy';
import {serializePrivacy} from '../models/serializePrivacy';
import {PrivacyRequestBuilderGetRequestConfiguration} from './privacyRequestBuilderGetRequestConfiguration';
import {PrivacyRequestBuilderPatchRequestConfiguration} from './privacyRequestBuilderPatchRequestConfiguration';
import {SubjectRightsRequestsRequestBuilder} from './subjectRightsRequests/subjectRightsRequestsRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the privacy singleton.
 */
export class PrivacyRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the subjectRightsRequests property of the microsoft.graph.privacy entity.
     */
    public get subjectRightsRequests(): SubjectRightsRequestsRequestBuilder {
        return new SubjectRightsRequestsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new PrivacyRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/privacy{?%24select,%24expand}");
    };
    /**
     * Get privacy
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Privacy
     */
    public get(requestConfiguration?: PrivacyRequestBuilderGetRequestConfiguration | undefined) : Promise<Privacy | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Privacy>(requestInfo, createPrivacyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update privacy
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Privacy
     */
    public patch(body: Privacy, requestConfiguration?: PrivacyRequestBuilderPatchRequestConfiguration | undefined) : Promise<Privacy | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Privacy>(requestInfo, createPrivacyFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get privacy
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PrivacyRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update privacy
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: Privacy, requestConfiguration?: PrivacyRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializePrivacy);
        return requestInfo;
    };
}
