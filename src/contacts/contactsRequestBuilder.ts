import { type OrgContactCollectionResponse } from '../models/';
import { createOrgContactCollectionResponseFromDiscriminatorValue } from '../models/createOrgContactCollectionResponseFromDiscriminatorValue';
import { createOrgContactFromDiscriminatorValue } from '../models/createOrgContactFromDiscriminatorValue';
import { deserializeIntoOrgContact } from '../models/deserializeIntoOrgContact';
import { type ODataError } from '../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../models/oDataErrors/serializeODataError';
import { type OrgContact } from '../models/orgContact';
import { serializeOrgContact } from '../models/serializeOrgContact';
import { type ContactsRequestBuilderGetRequestConfiguration } from './contactsRequestBuilderGetRequestConfiguration';
import { type ContactsRequestBuilderPostRequestConfiguration } from './contactsRequestBuilderPostRequestConfiguration';
import { CountRequestBuilder } from './count/countRequestBuilder';
import { DeltaRequestBuilder } from './delta/deltaRequestBuilder';
import { GetAvailableExtensionPropertiesRequestBuilder } from './getAvailableExtensionProperties/getAvailableExtensionPropertiesRequestBuilder';
import { GetByIdsRequestBuilder } from './getByIds/getByIdsRequestBuilder';
import { OrgContactItemRequestBuilder } from './item/orgContactItemRequestBuilder';
import { ValidatePropertiesRequestBuilder } from './validateProperties/validatePropertiesRequestBuilder';
import { BaseRequestBuilder, getPathParameters, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of orgContact entities.
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
     * Provides operations to call the getAvailableExtensionProperties method.
     */
    public get getAvailableExtensionProperties(): GetAvailableExtensionPropertiesRequestBuilder {
        return new GetAvailableExtensionPropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the getByIds method.
     */
    public get getByIds(): GetByIdsRequestBuilder {
        return new GetByIdsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the validateProperties method.
     */
    public get validateProperties(): ValidatePropertiesRequestBuilder {
        return new ValidatePropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the collection of orgContact entities.
     * @param orgContactId The unique identifier of orgContact
     * @returns a OrgContactItemRequestBuilder
     */
    public byOrgContactId(orgContactId: string) : OrgContactItemRequestBuilder {
        if(!orgContactId) throw new Error("orgContactId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["orgContact%2Did"] = orgContactId
        return new OrgContactItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ContactsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/contacts{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Get the list of organizational contacts for this organization.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OrgContactCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/orgcontact-list?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: ContactsRequestBuilderGetRequestConfiguration | undefined) : Promise<OrgContactCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OrgContactCollectionResponse>(requestInfo, createOrgContactCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add new entity to contacts
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OrgContact
     */
    public post(body: OrgContact, requestConfiguration?: ContactsRequestBuilderPostRequestConfiguration | undefined) : Promise<OrgContact | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<OrgContact>(requestInfo, createOrgContactFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get the list of organizational contacts for this organization.
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
     * Add new entity to contacts
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: OrgContact, requestConfiguration?: ContactsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeOrgContact);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a contactsRequestBuilder
     */
    public withUrl(rawUrl: string) : ContactsRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ContactsRequestBuilder(rawUrl, this.requestAdapter);
    };
}
