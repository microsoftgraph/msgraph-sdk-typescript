import {Set} from '../../../../../../../../models/microsoft/graph/termStore/set';
import {ChildrenRequestBuilder} from './children/childrenRequestBuilder';
import {TermRequestBuilder as i5e3afc40db010b9c43bc82885df209d9505497837061db0f8ca72afcfd78d571} from './children/item/termRequestBuilder';
import {ParentGroupRequestBuilder} from './parentGroup/parentGroupRequestBuilder';
import {RelationRequestBuilder} from './relations/item/relationRequestBuilder';
import {RelationsRequestBuilder} from './relations/relationsRequestBuilder';
import {TermRequestBuilder as i206c6b7d67e9629e7ff79b77623083dc5a1b74cda107d05ae05dd885c66684f2} from './terms/item/termRequestBuilder';
import {TermsRequestBuilder} from './terms/termsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /sites/{site-id}/termStores/{store-id}/groups/{group-id}/sets/{set-id}  */
export class SetRequestBuilder {
    public get children(): ChildrenRequestBuilder {
        return new ChildrenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get parentGroup(): ParentGroupRequestBuilder {
        return new ParentGroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get relations(): RelationsRequestBuilder {
        return new RelationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get terms(): TermsRequestBuilder {
        return new TermsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.sites.item.termStores.item.groups.item.sets.item.children.item collection
     * @param id Unique identifier of the item
     * @returns a termRequestBuilder
     */
    public childrenById(id: string) : i5e3afc40db010b9c43bc82885df209d9505497837061db0f8ca72afcfd78d571 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["term_id"] = id
        return new i5e3afc40db010b9c43bc82885df209d9505497837061db0f8ca72afcfd78d571(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SetRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/sites/{site_id}/termStores/{store_id}/groups/{group_id}/sets/{set_id}{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * All sets under the group in a term [store].
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        requestInfo.headers = h;
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * All sets under the group in a term [store].
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * All sets under the group in a term [store].
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Set | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(...o);
        return requestInfo;
    };
    /**
     * All sets under the group in a term [store].
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * All sets under the group in a term [store].
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Set
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Set | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<Set>(requestInfo, Set, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * All sets under the group in a term [store].
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Set | undefined, h?: Record<string, string> | undefined, o?: RequestOption[] | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.sites.item.termStores.item.groups.item.sets.item.relations.item collection
     * @param id Unique identifier of the item
     * @returns a relationRequestBuilder
     */
    public relationsById(id: string) : RelationRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["relation_id"] = id
        return new RelationRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.sites.item.termStores.item.groups.item.sets.item.terms.item collection
     * @param id Unique identifier of the item
     * @returns a termRequestBuilder
     */
    public termsById(id: string) : i206c6b7d67e9629e7ff79b77623083dc5a1b74cda107d05ae05dd885c66684f2 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["term_id"] = id
        return new i206c6b7d67e9629e7ff79b77623083dc5a1b74cda107d05ae05dd885c66684f2(urlTplParams, this.requestAdapter);
    };
}