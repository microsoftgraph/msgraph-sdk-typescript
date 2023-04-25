import {Contact, ContactCollectionResponse} from '../../../../models/';
import {createContactCollectionResponseFromDiscriminatorValue} from '../../../../models/createContactCollectionResponseFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from '../../../../models/createContactFromDiscriminatorValue';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {ContactsRequestBuilderGetRequestConfiguration} from './contactsRequestBuilderGetRequestConfiguration';
import {ContactsRequestBuilderPostRequestConfiguration} from './contactsRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {ContactItemRequestBuilder} from './item/contactItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the contacts property of the microsoft.graph.contactFolder entity.
 */
export class ContactsRequestBuilder extends BaseRequestBuilder {
    /** Provides operations to count the resources in the collection. */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Provides operations to call the delta method. */
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
        super(pathParameters, requestAdapter, "{+baseurl}/me/contactFolders/{contactFolder%2Did}/contacts{?%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * The contacts in the folder. Navigation property. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of ContactCollectionResponse
     */
    public get(requestConfiguration?: ContactsRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<ContactCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<ContactCollectionResponse>(requestInfo, createContactCollectionResponseFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * Create new navigation property to contacts for me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Contact
     */
    public post(body: Contact | undefined, requestConfiguration?: ContactsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Contact | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendAsync<Contact>(requestInfo, createContactFromDiscriminatorValue, responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    /**
     * The contacts in the folder. Navigation property. Read-only. Nullable.
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
     * Create new navigation property to contacts for me
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
}
