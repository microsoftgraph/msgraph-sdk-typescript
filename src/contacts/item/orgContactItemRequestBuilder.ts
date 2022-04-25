import {OrgContact} from '../../models/';
import {createOrgContactFromDiscriminatorValue} from '../../models/createOrgContactFromDiscriminatorValue';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {CheckMemberGroupsRequestBuilder} from './checkMemberGroups/checkMemberGroupsRequestBuilder';
import {CheckMemberObjectsRequestBuilder} from './checkMemberObjects/checkMemberObjectsRequestBuilder';
import {DirectReportsRequestBuilder} from './directReports/directReportsRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i02d1e88a55e481c88f0d5e7fd2ed778c4c3c02cb87aac3b63b2b41a5293b9476} from './directReports/item/directoryObjectItemRequestBuilder';
import {GetMemberGroupsRequestBuilder} from './getMemberGroups/getMemberGroupsRequestBuilder';
import {GetMemberObjectsRequestBuilder} from './getMemberObjects/getMemberObjectsRequestBuilder';
import {ManagerRequestBuilder} from './manager/managerRequestBuilder';
import {DirectoryObjectItemRequestBuilder as i29fdd6398f481eca0b4940db7aa4c0e213a50cb1d60cdf357df70a569f291cd0} from './memberOf/item/directoryObjectItemRequestBuilder';
import {MemberOfRequestBuilder} from './memberOf/memberOfRequestBuilder';
import {OrgContactItemRequestBuilderGetQueryParameters} from './orgContactItemRequestBuilderGetQueryParameters';
import {RestoreRequestBuilder} from './restore/restoreRequestBuilder';
import {DirectoryObjectItemRequestBuilder as if5d79a689908078206c84d24031bb3a79a3a7f3149cf3c8b61510ac9a4bdfc42} from './transitiveMemberOf/item/directoryObjectItemRequestBuilder';
import {TransitiveMemberOfRequestBuilder} from './transitiveMemberOf/transitiveMemberOfRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of orgContact entities.  */
export class OrgContactItemRequestBuilder {
    /** The checkMemberGroups property  */
    public get checkMemberGroups(): CheckMemberGroupsRequestBuilder {
        return new CheckMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The checkMemberObjects property  */
    public get checkMemberObjects(): CheckMemberObjectsRequestBuilder {
        return new CheckMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The directReports property  */
    public get directReports(): DirectReportsRequestBuilder {
        return new DirectReportsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getMemberGroups property  */
    public get getMemberGroups(): GetMemberGroupsRequestBuilder {
        return new GetMemberGroupsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The getMemberObjects property  */
    public get getMemberObjects(): GetMemberObjectsRequestBuilder {
        return new GetMemberObjectsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The manager property  */
    public get manager(): ManagerRequestBuilder {
        return new ManagerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The memberOf property  */
    public get memberOf(): MemberOfRequestBuilder {
        return new MemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    /** The restore property  */
    public get restore(): RestoreRequestBuilder {
        return new RestoreRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The transitiveMemberOf property  */
    public get transitiveMemberOf(): TransitiveMemberOfRequestBuilder {
        return new TransitiveMemberOfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Instantiates a new OrgContactItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/contacts/{orgContact%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete entity from contacts
     * @param headers Request headers
     * @param options Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(headers) requestInfo.headers = headers;
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Get entity from contacts by key
     * @param headers Request headers
     * @param options Request options
     * @param queryParameters Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(queryParameters?: OrgContactItemRequestBuilderGetQueryParameters | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(headers) requestInfo.headers = headers;
        queryParameters && requestInfo.setQueryStringParametersFromRawObject(queryParameters);
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Update entity in contacts
     * @param body 
     * @param headers Request headers
     * @param options Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: OrgContact | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(headers) requestInfo.headers = headers;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        options && requestInfo.addRequestOptions(...options);
        return requestInfo;
    };
    /**
     * Delete entity from contacts
     * @param headers Request headers
     * @param options Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.contacts.item.directReports.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public directReportsById(id: string) : i02d1e88a55e481c88f0d5e7fd2ed778c4c3c02cb87aac3b63b2b41a5293b9476 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i02d1e88a55e481c88f0d5e7fd2ed778c4c3c02cb87aac3b63b2b41a5293b9476(urlTplParams, this.requestAdapter);
    };
    /**
     * Get entity from contacts by key
     * @param headers Request headers
     * @param options Request options
     * @param queryParameters Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of OrgContact
     */
    public get(queryParameters?: OrgContactItemRequestBuilderGetQueryParameters | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<OrgContact | undefined> {
        const requestInfo = this.createGetRequestInformation(
            queryParameters, headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<OrgContact>(requestInfo, createOrgContactFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.contacts.item.memberOf.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public memberOfById(id: string) : i29fdd6398f481eca0b4940db7aa4c0e213a50cb1d60cdf357df70a569f291cd0 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new i29fdd6398f481eca0b4940db7aa4c0e213a50cb1d60cdf357df70a569f291cd0(urlTplParams, this.requestAdapter);
    };
    /**
     * Update entity in contacts
     * @param body 
     * @param headers Request headers
     * @param options Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: OrgContact | undefined, headers?: Record<string, string> | undefined, options?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, headers, options
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.contacts.item.transitiveMemberOf.item collection
     * @param id Unique identifier of the item
     * @returns a directoryObjectItemRequestBuilder
     */
    public transitiveMemberOfById(id: string) : if5d79a689908078206c84d24031bb3a79a3a7f3149cf3c8b61510ac9a4bdfc42 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = id
        return new if5d79a689908078206c84d24031bb3a79a3a7f3149cf3c8b61510ac9a4bdfc42(urlTplParams, this.requestAdapter);
    };
}
