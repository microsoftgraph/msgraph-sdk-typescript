import {DefaultManagedAppProtectionCollectionResponse} from '../../models/';
import {createDefaultManagedAppProtectionCollectionResponseFromDiscriminatorValue} from '../../models/createDefaultManagedAppProtectionCollectionResponseFromDiscriminatorValue';
import {createDefaultManagedAppProtectionFromDiscriminatorValue} from '../../models/createDefaultManagedAppProtectionFromDiscriminatorValue';
import {DefaultManagedAppProtection} from '../../models/defaultManagedAppProtection';
import {deserializeIntoDefaultManagedAppProtection} from '../../models/deserializeIntoDefaultManagedAppProtection';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeDefaultManagedAppProtection} from '../../models/serializeDefaultManagedAppProtection';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DefaultManagedAppProtectionsRequestBuilderGetRequestConfiguration} from './defaultManagedAppProtectionsRequestBuilderGetRequestConfiguration';
import {DefaultManagedAppProtectionsRequestBuilderPostRequestConfiguration} from './defaultManagedAppProtectionsRequestBuilderPostRequestConfiguration';
import {DefaultManagedAppProtectionItemRequestBuilder} from './item/defaultManagedAppProtectionItemRequestBuilder';
import {BaseRequestBuilder, getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the defaultManagedAppProtections property of the microsoft.graph.deviceAppManagement entity.
 */
export class DefaultManagedAppProtectionsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to count the resources in the collection.
     */
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to manage the defaultManagedAppProtections property of the microsoft.graph.deviceAppManagement entity.
     * @param defaultManagedAppProtectionId Unique identifier of the item
     * @returns a DefaultManagedAppProtectionItemRequestBuilder
     */
    public byDefaultManagedAppProtectionId(defaultManagedAppProtectionId: string) : DefaultManagedAppProtectionItemRequestBuilder {
        if(!defaultManagedAppProtectionId) throw new Error("defaultManagedAppProtectionId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["defaultManagedAppProtection%2Did"] = defaultManagedAppProtectionId
        return new DefaultManagedAppProtectionItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new DefaultManagedAppProtectionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/deviceAppManagement/defaultManagedAppProtections{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Default managed app policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DefaultManagedAppProtectionCollectionResponse
     */
    public get(requestConfiguration?: DefaultManagedAppProtectionsRequestBuilderGetRequestConfiguration | undefined) : Promise<DefaultManagedAppProtectionCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DefaultManagedAppProtectionCollectionResponse>(requestInfo, createDefaultManagedAppProtectionCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Create new navigation property to defaultManagedAppProtections for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DefaultManagedAppProtection
     */
    public post(body: DefaultManagedAppProtection | undefined, requestConfiguration?: DefaultManagedAppProtectionsRequestBuilderPostRequestConfiguration | undefined) : Promise<DefaultManagedAppProtection | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DefaultManagedAppProtection>(requestInfo, createDefaultManagedAppProtectionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Default managed app policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: DefaultManagedAppProtectionsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Create new navigation property to defaultManagedAppProtections for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DefaultManagedAppProtection | undefined, requestConfiguration?: DefaultManagedAppProtectionsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body as any, serializeDefaultManagedAppProtection);
        return requestInfo;
    };
}
