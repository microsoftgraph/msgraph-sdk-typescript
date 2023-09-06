import { type ProvisionChannelEmailResult } from '../../../../../../models/';
import { createProvisionChannelEmailResultFromDiscriminatorValue } from '../../../../../../models/createProvisionChannelEmailResultFromDiscriminatorValue';
import { type ODataError } from '../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../models/oDataErrors/serializeODataError';
import { type ProvisionEmailRequestBuilderPostRequestConfiguration } from './provisionEmailRequestBuilderPostRequestConfiguration';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the provisionEmail method.
 */
export class ProvisionEmailRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ProvisionEmailRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/joinedTeams/{team%2Did}/channels/{channel%2Did}/provisionEmail");
    };
    /**
     * Provision an email address for a channel. Microsoft Teams doesn't automatically provision an email address for a channel by default. To have Teams provision an email address, you can call provisionEmail, or through the Teams user interface, select Get email address, which triggers Teams to generate an email address if it has not already provisioned one. To remove the email address of a channel, use the removeEmail method.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ProvisionChannelEmailResult
     * @see {@link https://learn.microsoft.com/graph/api/channel-provisionemail?view=graph-rest-1.0|Find more info here}
     */
    public post(requestConfiguration?: ProvisionEmailRequestBuilderPostRequestConfiguration | undefined) : Promise<ProvisionChannelEmailResult | undefined> {
        const requestInfo = this.toPostRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ProvisionChannelEmailResult>(requestInfo, createProvisionChannelEmailResultFromDiscriminatorValue, errorMapping);
    };
    /**
     * Provision an email address for a channel. Microsoft Teams doesn't automatically provision an email address for a channel by default. To have Teams provision an email address, you can call provisionEmail, or through the Teams user interface, select Get email address, which triggers Teams to generate an email address if it has not already provisioned one. To remove the email address of a channel, use the removeEmail method.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(requestConfiguration?: ProvisionEmailRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a provisionEmailRequestBuilder
     */
    public withUrl(rawUrl: string) : ProvisionEmailRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ProvisionEmailRequestBuilder(rawUrl, this.requestAdapter);
    };
}
