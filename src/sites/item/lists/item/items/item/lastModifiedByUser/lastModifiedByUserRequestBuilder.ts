import {User} from '../../../../../../../models/';
import {createUserFromDiscriminatorValue} from '../../../../../../../models/createUserFromDiscriminatorValue';
import {ODataError} from '../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../models/oDataErrors/serializeODataError';
import {LastModifiedByUserRequestBuilderGetRequestConfiguration} from './lastModifiedByUserRequestBuilderGetRequestConfiguration';
import {MailboxSettingsRequestBuilder} from './mailboxSettings/mailboxSettingsRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the lastModifiedByUser property of the microsoft.graph.baseItem entity.
 */
export class LastModifiedByUserRequestBuilder extends BaseRequestBuilder {
    /**
     * The mailboxSettings property
     */
    public get mailboxSettings(): MailboxSettingsRequestBuilder {
        return new MailboxSettingsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new LastModifiedByUserRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/sites/{site%2Did}/lists/{list%2Did}/items/{listItem%2Did}/lastModifiedByUser{?%24select,%24expand}");
    };
    /**
     * Identity of the user who last modified the item. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of User
     */
    public get(requestConfiguration?: LastModifiedByUserRequestBuilderGetRequestConfiguration | undefined) : Promise<User | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<User>(requestInfo, createUserFromDiscriminatorValue, errorMapping);
    };
    /**
     * Identity of the user who last modified the item. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: LastModifiedByUserRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * @returns a lastModifiedByUserRequestBuilder
     */
    public withUrl(rawUrl: string) : LastModifiedByUserRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new LastModifiedByUserRequestBuilder(rawUrl, this.requestAdapter);
    };
}
