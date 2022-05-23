import {ODataErrorImpl} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {SetImpl} from '../../../../../models/termStore/';
import {createSetFromDiscriminatorValue} from '../../../../../models/termStore/createSetFromDiscriminatorValue';
import {Set} from '../../../../../models/termStore/set';
import {ChildrenRequestBuilder} from './children/childrenRequestBuilder';
import {TermItemRequestBuilder as id1c887d086469fb2e6f458ca523754d3361b9e2b9cd28443020c946f6edb98f7} from './children/item/termItemRequestBuilder';
import {ParentGroupRequestBuilder} from './parentGroup/parentGroupRequestBuilder';
import {RelationItemRequestBuilder} from './relations/item/relationItemRequestBuilder';
import {RelationsRequestBuilder} from './relations/relationsRequestBuilder';
import {SetItemRequestBuilderDeleteRequestConfiguration} from './setItemRequestBuilderDeleteRequestConfiguration';
import {SetItemRequestBuilderGetRequestConfiguration} from './setItemRequestBuilderGetRequestConfiguration';
import {SetItemRequestBuilderPatchRequestConfiguration} from './setItemRequestBuilderPatchRequestConfiguration';
import {TermItemRequestBuilder as ic82b4e38472365b3de07d3075a1d8036ac1c2cee23b365bdae720a590690b282} from './terms/item/termItemRequestBuilder';
import {TermsRequestBuilder} from './terms/termsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the sets property of the microsoft.graph.termStore.store entity. */
export class SetItemRequestBuilder {
    /** The children property */
    public get children(): ChildrenRequestBuilder {
        return new ChildrenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The parentGroup property */
    public get parentGroup(): ParentGroupRequestBuilder {
        return new ParentGroupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private readonly pathParameters: Record<string, unknown>;
    /** The relations property */
    public get relations(): RelationsRequestBuilder {
        return new RelationsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private readonly requestAdapter: RequestAdapter;
    /** The terms property */
    public get terms(): TermsRequestBuilder {
        return new TermsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private readonly urlTemplate: string;
    /**
     * Gets an item from the MicrosoftGraph.sites.item.termStore.sets.item.children.item collection
     * @param id Unique identifier of the item
     * @returns a termItemRequestBuilder
     */
    public childrenById(id: string) : id1c887d086469fb2e6f458ca523754d3361b9e2b9cd28443020c946f6edb98f7 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["term%2Did"] = id
        return new id1c887d086469fb2e6f458ca523754d3361b9e2b9cd28443020c946f6edb98f7(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new SetItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/sites/{site%2Did}/termStore/sets/{set%2Did}{?%24select,%24expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property sets for sites
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(requestConfiguration?: SetItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
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
     * Collection of all sets available in the term store.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createGetRequestInformation(requestConfiguration?: SetItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Update the navigation property sets in sites
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: Set | undefined, requestConfiguration?: SetItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        const parsableBody = new SetImpl(body)
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", parsableBody);
        return requestInfo;
    };
    /**
     * Delete navigation property sets for sites
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(requestConfiguration?: SetItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
     * Collection of all sets available in the term store.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Set
     */
    public get(requestConfiguration?: SetItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<SetImpl | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<SetImpl>(requestInfo, createSetFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the navigation property sets in sites
     * @param body 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: Set | undefined, requestConfiguration?: SetItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
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
    /**
     * Gets an item from the MicrosoftGraph.sites.item.termStore.sets.item.relations.item collection
     * @param id Unique identifier of the item
     * @returns a relationItemRequestBuilder
     */
    public relationsById(id: string) : RelationItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["relation%2Did"] = id
        return new RelationItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the MicrosoftGraph.sites.item.termStore.sets.item.terms.item collection
     * @param id Unique identifier of the item
     * @returns a termItemRequestBuilder
     */
    public termsById(id: string) : ic82b4e38472365b3de07d3075a1d8036ac1c2cee23b365bdae720a590690b282 {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["term%2Did"] = id
        return new ic82b4e38472365b3de07d3075a1d8036ac1c2cee23b365bdae720a590690b282(urlTplParams, this.requestAdapter);
    };
}
