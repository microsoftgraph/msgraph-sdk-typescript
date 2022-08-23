import {ConnectedOrganization} from '../../../../models/';
import {createConnectedOrganizationFromDiscriminatorValue} from '../../../../models/createConnectedOrganizationFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ConnectedOrganizationItemRequestBuilderDeleteRequestConfiguration} from './connectedOrganizationItemRequestBuilderDeleteRequestConfiguration';
import {ConnectedOrganizationItemRequestBuilderGetRequestConfiguration} from './connectedOrganizationItemRequestBuilderGetRequestConfiguration';
import {ConnectedOrganizationItemRequestBuilderPatchRequestConfiguration} from './connectedOrganizationItemRequestBuilderPatchRequestConfiguration';
import {ExternalSponsorsRequestBuilder} from './externalSponsors/externalSponsorsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i7878104e7b0ea53246ac468b5705cce3cfc580d4222a924819428d7221076aa2} from './externalSponsors/item/directoryObjectItemRequestBuilder';
import {InternalSponsorsRequestBuilder} from './internalSponsors/internalSponsorsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i8a781ad6078cf6e70aa40eeebfc1c290e68a68bb1597594a6a8f9d0f0ea3b516} from './internalSponsors/item/directoryObjectItemRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the connectedOrganizations property of the microsoft.graph.entitlementManagement entity. */
export class ConnectedOrganizationItemRequestBuilder {
    /** The externalSponsors property */
    public get externalSponsors(): ExternalSponsorsRequestBuilder {
        return new ExternalSponsorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The internalSponsors property */
    public get internalSponsors(): InternalSponsorsRequestBuilder {
        return new InternalSponsorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new ConnectedOrganizationItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property connectedOrganizations for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: ConnectedOrganizationItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * References to a directory or domain of another organization whose users can request access.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: ConnectedOrganizationItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property connectedOrganizations in identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ConnectedOrganization | undefined, requestConfiguration?: ConnectedOrganizationItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    /**
     * Delete navigation property connectedOrganizations for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: ConnectedOrganizationItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.identityGovernance.entitlementManagement.connectedOrganizations.item.externalSponsors.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public externalSponsorsById(id: string) : i7878104e7b0ea53246ac468b5705cce3cfc580d4222a924819428d7221076aa2 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i7878104e7b0ea53246ac468b5705cce3cfc580d4222a924819428d7221076aa2(urlTplParams, this.requestAdapter);
    };
    /**
     * References to a directory or domain of another organization whose users can request access.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ConnectedOrganization
     */
    public get(requestConfiguration?: ConnectedOrganizationItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ConnectedOrganization | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ConnectedOrganization>(requestInfo, createConnectedOrganizationFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.identityGovernance.entitlementManagement.connectedOrganizations.item.internalSponsors.item collection
     * @param id Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public internalSponsorsById(id: string) : i8a781ad6078cf6e70aa40eeebfc1c290e68a68bb1597594a6a8f9d0f0ea3b516 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i8a781ad6078cf6e70aa40eeebfc1c290e68a68bb1597594a6a8f9d0f0ea3b516(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property connectedOrganizations in identityGovernance
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ConnectedOrganization | undefined, requestConfiguration?: ConnectedOrganizationItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
}
