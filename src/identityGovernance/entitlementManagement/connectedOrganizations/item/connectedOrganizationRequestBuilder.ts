import {ConnectedOrganization} from '../../../../models/microsoft/graph/connectedOrganization';
import {ExternalSponsorsRequestBuilder} from './externalSponsors/externalSponsorsRequestBuilder';
import {DirectoryObjectRequestBuilder as i548b9f07931390e4b48319ec033bdf51f89e95b44b3c78cd6396aadc38b4a033} from './externalSponsors/item/directoryObjectRequestBuilder';
import {InternalSponsorsRequestBuilder} from './internalSponsors/internalSponsorsRequestBuilder';
import {DirectoryObjectRequestBuilder as i6442fa1692b265777bc71c158a888b264ce6a4f03612d02a64954d6ceb6da8cd} from './internalSponsors/item/directoryObjectRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization-id}  */
export class ConnectedOrganizationRequestBuilder {
    public get externalSponsors(): ExternalSponsorsRequestBuilder {
        return new ExternalSponsorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get internalSponsors(): InternalSponsorsRequestBuilder {
        return new InternalSponsorsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Map<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new ConnectedOrganizationRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Map<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/identityGovernance/entitlementManagement/connectedOrganizations/{connectedOrganization_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property connectedOrganizations for identityGovernance
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        h && requestInfo.setHeadersFromRawObject(h);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Get connectedOrganizations from identityGovernance
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        h && requestInfo.setHeadersFromRawObject(h);
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Update the navigation property connectedOrganizations in identityGovernance
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: ConnectedOrganization | undefined, h?: object | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        h && requestInfo.setHeadersFromRawObject(h);
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * Delete navigation property connectedOrganizations for identityGovernance
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.identityGovernance.entitlementManagement.connectedOrganizations.item.externalSponsors.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectRequestBuilder
     */
    public externalSponsorsById(id: string) : i548b9f07931390e4b48319ec033bdf51f89e95b44b3c78cd6396aadc38b4a033 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("directoryObject_id", id);
        return new i548b9f07931390e4b48319ec033bdf51f89e95b44b3c78cd6396aadc38b4a033(urlTplParams, this.requestAdapter);
    };
    /**
     * Get connectedOrganizations from identityGovernance
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ConnectedOrganization
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ConnectedOrganization | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<ConnectedOrganization>(requestInfo, ConnectedOrganization, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the MicrosoftGraph.identityGovernance.entitlementManagement.connectedOrganizations.item.internalSponsors.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectRequestBuilder
     */
    public internalSponsorsById(id: string) : i6442fa1692b265777bc71c158a888b264ce6a4f03612d02a64954d6ceb6da8cd {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        id && urlTplParams.set("directoryObject_id", id);
        return new i6442fa1692b265777bc71c158a888b264ce6a4f03612d02a64954d6ceb6da8cd(urlTplParams, this.requestAdapter);
    };
    /**
     * Update the navigation property connectedOrganizations in identityGovernance
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: ConnectedOrganization | undefined, h?: object | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
}
