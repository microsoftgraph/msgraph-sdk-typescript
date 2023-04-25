import {RiskyServicePrincipal, RiskyServicePrincipalCollectionResponse} from '../../models/';
import {createRiskyServicePrincipalCollectionResponseFromDiscriminatorValue} from '../../models/createRiskyServicePrincipalCollectionResponseFromDiscriminatorValue';
import {createRiskyServicePrincipalFromDiscriminatorValue} from '../../models/createRiskyServicePrincipalFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ConfirmCompromisedRequestBuilder} from './confirmCompromised/confirmCompromisedRequestBuilder';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DismissRequestBuilder} from './dismiss/dismissRequestBuilder';
import {RiskyServicePrincipalItemRequestBuilder} from './item/riskyServicePrincipalItemRequestBuilder';
import {RiskyServicePrincipalsRequestBuilderGetRequestConfiguration} from './riskyServicePrincipalsRequestBuilderGetRequestConfiguration';
import {RiskyServicePrincipalsRequestBuilderPostRequestConfiguration} from './riskyServicePrincipalsRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the riskyServicePrincipals property of the microsoft.graph.identityProtectionRoot entity.
 */
export class RiskyServicePrincipalsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to call the confirmCompromised method. */
    public get confirmCompromised(): ConfirmCompromisedRequestBuilder {
        return new ConfirmCompromisedRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the dismiss method. */
    public get dismiss(): DismissRequestBuilder {
        return new DismissRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the riskyServicePrincipals property of the microsoft.graph.identityProtectionRoot entity.
     * @param riskyServicePrincipalId Unique identifier of the item
     * @returns a RiskyServicePrincipalItemRequestBuilder
     */
    public byRiskyServicePrincipalId(riskyServicePrincipalId: string) : RiskyServicePrincipalItemRequestBuilder {
        if(!riskyServicePrincipalId) throw new Error("riskyServicePrincipalId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["riskyServicePrincipal%2Did"] = riskyServicePrincipalId
        return new RiskyServicePrincipalItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new RiskyServicePrincipalsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/identityProtection/riskyServicePrincipals{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Azure AD service principals that are at risk.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of RiskyServicePrincipalCollectionResponse
     */
    public get(requestConfiguration?: RiskyServicePrincipalsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<RiskyServicePrincipalCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<RiskyServicePrincipalCollectionResponse>(requestInfo, createRiskyServicePrincipalCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to riskyServicePrincipals for identityProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of RiskyServicePrincipal
     */
    public post(body: RiskyServicePrincipal | undefined, requestConfiguration?: RiskyServicePrincipalsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<RiskyServicePrincipal | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<RiskyServicePrincipal>(requestInfo, createRiskyServicePrincipalFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Azure AD service principals that are at risk.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: RiskyServicePrincipalsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to riskyServicePrincipals for identityProtection
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: RiskyServicePrincipal | undefined, requestConfiguration?: RiskyServicePrincipalsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
