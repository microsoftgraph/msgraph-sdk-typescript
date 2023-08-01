import {ContactCollectionResponse} from '../../../../../../models/';
import type {Contact} from '../../../../../../models/contact';
import {createContactCollectionResponseFromDiscriminatorValue} from '../../../../../../models/createContactCollectionResponseFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from '../../../../../../models/createContactFromDiscriminatorValue';
import {deserializeIntoContact} from '../../../../../../models/deserializeIntoContact';
import {ODataError} from '../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../models/oDataErrors/serializeODataError';
import {serializeContact} from '../../../../../../models/serializeContact';
import {ContactsRequestBuilderGetRequestConfiguration} from './contactsRequestBuilderGetRequestConfiguration';
import {ContactsRequestBuilderPostRequestConfiguration} from './contactsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {ContactItemRequestBuilder} from './item/contactItemRequestBuilder';
import {BaseRequestBuilder, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the contacts property of the microsoft.graph.contactFolder entity.
 */
export class ContactsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the delta method.
     */
    public get delta(): DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the contacts property of the microsoft.graph.contactFolder entity.
     * @param contactId Unique identifier of the item
     * @returns a ContactItemRequestBuilder
     */
    public byContactId(contactId: string) : ContactItemRequestBuilder {
        if(!contactId) throw new Error("contactId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["contact%2Did"] = contactId
        return new ContactItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ContactsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/contactFolders/{contactFolder%2Did}/childFolders/{contactFolder%2Did1}/contacts{?%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get a contact collection from the default Contacts folder of the signed-in user (.../me/contacts), or from the specified contact folder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContactCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/contactfolder-list-contacts?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ContactsRequestBuilderGetRequestConfiguration | undefined) : Promise<ContactCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ContactCollectionResponse>(requestInfo, createContactCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add a contact to the root Contacts folder or to the contacts endpoint of another contact folder.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Contact
     * @see {@link https://learn.microsoft.com/graph/api/contactfolder-post-contacts?view=graph-rest-1.0|Find more info here}
     */
    public post(body: Contact | undefined, requestConfiguration?: ContactsRequestBuilderPostRequestConfiguration | undefined) : Promise<Contact | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Contact>(requestInfo, createContactFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get a contact collection from the default Contacts folder of the signed-in user (.../me/contacts), or from the specified contact folder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ContactsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add a contact to the root Contacts folder or to the contacts endpoint of another contact folder.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: Contact | undefined, requestConfiguration?: ContactsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeContact);
        return requestInfo;
    };
}
