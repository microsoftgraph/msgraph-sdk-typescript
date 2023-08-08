import {createSecureScoreControlProfileFromDiscriminatorValue} from '../../../models/createSecureScoreControlProfileFromDiscriminatorValue';
import {deserializeIntoSecureScoreControlProfile} from '../../../models/deserializeIntoSecureScoreControlProfile';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import type {SecureScoreControlProfile} from '../../../models/secureScoreControlProfile';
import {serializeSecureScoreControlProfile} from '../../../models/serializeSecureScoreControlProfile';
import {SecureScoreControlProfileItemRequestBuilderDeleteRequestConfiguration} from './secureScoreControlProfileItemRequestBuilderDeleteRequestConfiguration';
import {SecureScoreControlProfileItemRequestBuilderGetRequestConfiguration} from './secureScoreControlProfileItemRequestBuilderGetRequestConfiguration';
import {SecureScoreControlProfileItemRequestBuilderPatchRequestConfiguration} from './secureScoreControlProfileItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the secureScoreControlProfiles property of the microsoft.graph.security entity.
 */
export class SecureScoreControlProfileItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new SecureScoreControlProfileItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/security/secureScoreControlProfiles/{secureScoreControlProfile%2Did}{?%24select,%24expand}");
    };
    /**
     * Delete navigation property secureScoreControlProfiles for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: SecureScoreControlProfileItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve the properties and relationships of an securescorecontrolprofile object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SecureScoreControlProfile
     * @see {@link https://learn.microsoft.com/graph/api/securescorecontrolprofile-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SecureScoreControlProfileItemRequestBuilderGetRequestConfiguration | undefined) : Promise<SecureScoreControlProfile | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SecureScoreControlProfile>(requestInfo, createSecureScoreControlProfileFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update an editable secureScoreControlProfile object within any integrated solution to change various properties, such as assignedTo or tenantNote.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SecureScoreControlProfile
     * @see {@link https://learn.microsoft.com/graph/api/securescorecontrolprofile-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: SecureScoreControlProfile, requestConfiguration?: SecureScoreControlProfileItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<SecureScoreControlProfile | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<SecureScoreControlProfile>(requestInfo, createSecureScoreControlProfileFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property secureScoreControlProfiles for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: SecureScoreControlProfileItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve the properties and relationships of an securescorecontrolprofile object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SecureScoreControlProfileItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update an editable secureScoreControlProfile object within any integrated solution to change various properties, such as assignedTo or tenantNote.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: SecureScoreControlProfile, requestConfiguration?: SecureScoreControlProfileItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeSecureScoreControlProfile);
        return requestInfo;
    };
}
