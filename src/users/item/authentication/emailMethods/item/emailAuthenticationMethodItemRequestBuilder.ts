import {createEmailAuthenticationMethodFromDiscriminatorValue} from '../../../../../models/createEmailAuthenticationMethodFromDiscriminatorValue';
import {deserializeIntoEmailAuthenticationMethod} from '../../../../../models/deserializeIntoEmailAuthenticationMethod';
import {EmailAuthenticationMethod} from '../../../../../models/emailAuthenticationMethod';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import {serializeEmailAuthenticationMethod} from '../../../../../models/serializeEmailAuthenticationMethod';
import {EmailAuthenticationMethodItemRequestBuilderDeleteRequestConfiguration} from './emailAuthenticationMethodItemRequestBuilderDeleteRequestConfiguration';
import {EmailAuthenticationMethodItemRequestBuilderGetRequestConfiguration} from './emailAuthenticationMethodItemRequestBuilderGetRequestConfiguration';
import {EmailAuthenticationMethodItemRequestBuilderPatchRequestConfiguration} from './emailAuthenticationMethodItemRequestBuilderPatchRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the emailMethods property of the microsoft.graph.authentication entity.
 */
export class EmailAuthenticationMethodItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new EmailAuthenticationMethodItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/users/{user%2Did}/authentication/emailMethods/{emailAuthenticationMethod%2Did}{?%24select,%24expand}");
    };
    /**
     * Deletes a user's emailAuthenticationMethod object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://docs.microsoft.com/graph/api/emailauthenticationmethod-delete?view=graph-rest-1.0|Find more info here}
     */
    public delete(requestConfiguration?: EmailAuthenticationMethodItemRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
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
     * Retrieve a user's single email authentication method object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EmailAuthenticationMethod
     * @see {@link https://docs.microsoft.com/graph/api/emailauthenticationmethod-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: EmailAuthenticationMethodItemRequestBuilderGetRequestConfiguration | undefined) : Promise<EmailAuthenticationMethod | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EmailAuthenticationMethod>(requestInfo, createEmailAuthenticationMethodFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update a user's email address represented by an emailAuthenticationMethod object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EmailAuthenticationMethod
     * @see {@link https://docs.microsoft.com/graph/api/emailauthenticationmethod-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: EmailAuthenticationMethod | undefined, requestConfiguration?: EmailAuthenticationMethodItemRequestBuilderPatchRequestConfiguration | undefined) : Promise<EmailAuthenticationMethod | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<EmailAuthenticationMethod>(requestInfo, createEmailAuthenticationMethodFromDiscriminatorValue, errorMapping);
    };
    /**
     * Deletes a user's emailAuthenticationMethod object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: EmailAuthenticationMethodItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Retrieve a user's single email authentication method object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: EmailAuthenticationMethodItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update a user's email address represented by an emailAuthenticationMethod object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: EmailAuthenticationMethod | undefined, requestConfiguration?: EmailAuthenticationMethodItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeEmailAuthenticationMethod);
        return requestInfo;
    };
}
