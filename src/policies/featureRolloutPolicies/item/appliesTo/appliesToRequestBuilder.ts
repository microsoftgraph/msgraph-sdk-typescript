import {DirectoryObjectCollectionResponse} from '../../../../models/';
import {createDirectoryObjectCollectionResponseFromDiscriminatorValue} from '../../../../models/createDirectoryObjectCollectionResponseFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from '../../../../models/createDirectoryObjectFromDiscriminatorValue';
import {deserializeIntoDirectoryObject} from '../../../../models/deserializeIntoDirectoryObject';
import type {DirectoryObject} from '../../../../models/directoryObject';
import {ODataError} from '../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../models/oDataErrors/serializeODataError';
import {serializeDirectoryObject} from '../../../../models/serializeDirectoryObject';
import {AppliesToRequestBuilderGetRequestConfiguration} from './appliesToRequestBuilderGetRequestConfiguration';
import {AppliesToRequestBuilderPostRequestConfiguration} from './appliesToRequestBuilderPostRequestConfiguration';
import {CountRequestBuilder} from './count/countRequestBuilder';
import {DeltaRequestBuilder} from './delta/deltaRequestBuilder';
import {GetAvailableExtensionPropertiesRequestBuilder} from './getAvailableExtensionProperties/getAvailableExtensionPropertiesRequestBuilder';
import {GetByIdsRequestBuilder} from './getByIds/getByIdsRequestBuilder';
import {DirectoryObjectItemRequestBuilder} from './item/directoryObjectItemRequestBuilder';
import {RefRequestBuilder} from './ref/refRequestBuilder';
import {ValidatePropertiesRequestBuilder} from './validateProperties/validatePropertiesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the appliesTo property of the microsoft.graph.featureRolloutPolicy entity.
 */
export class AppliesToRequestBuilder extends BaseRequestBuilder {
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
     * Provides operations to manage the collection of policyRoot entities.
     */
    public get ref(): RefRequestBuilder {
        return new RefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Provides operations to call the validateProperties method.
     */
    public get validateProperties(): ValidatePropertiesRequestBuilder {
        return new ValidatePropertiesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.policies.featureRolloutPolicies.item.appliesTo.item collection
     * @param directoryObjectId Unique identifier of the item
     * @returns a DirectoryObjectItemRequestBuilder
     */
    public byDirectoryObjectId(directoryObjectId: string) : DirectoryObjectItemRequestBuilder {
        if(!directoryObjectId) throw new Error("directoryObjectId cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["directoryObject%2Did"] = directoryObjectId
        return new DirectoryObjectItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new AppliesToRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/policies/featureRolloutPolicies/{featureRolloutPolicy%2Did}/appliesTo{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}");
    };
    /**
     * Nullable. Specifies a list of directoryObjects that feature is enabled for.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectoryObjectCollectionResponse
     */
    public get(requestConfiguration?: AppliesToRequestBuilderGetRequestConfiguration | undefined) : Promise<DirectoryObjectCollectionResponse | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DirectoryObjectCollectionResponse>(requestInfo, createDirectoryObjectCollectionResponseFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add an appliesTo on a featureRolloutPolicy object to specify the directoryObject to which the featureRolloutPolicy should be applied.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectoryObject
     * @see {@link https://learn.microsoft.com/graph/api/featurerolloutpolicy-post-appliesto?view=graph-rest-1.0|Find more info here}
     */
    public post(body: DirectoryObject, requestConfiguration?: AppliesToRequestBuilderPostRequestConfiguration | undefined) : Promise<DirectoryObject | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DirectoryObject>(requestInfo, createDirectoryObjectFromDiscriminatorValue, errorMapping);
    };
    /**
     * Nullable. Specifies a list of directoryObjects that feature is enabled for.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: AppliesToRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Add an appliesTo on a featureRolloutPolicy object to specify the directoryObject to which the featureRolloutPolicy should be applied.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: DirectoryObject, requestConfiguration?: AppliesToRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeDirectoryObject);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a appliesToRequestBuilder
     */
    public withUrl(rawUrl: string) : AppliesToRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AppliesToRequestBuilder(rawUrl, this.requestAdapter);
    };
}
