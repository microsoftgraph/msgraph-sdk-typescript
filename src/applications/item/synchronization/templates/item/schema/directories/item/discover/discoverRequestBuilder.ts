import {DirectoryDefinition} from '../../../../../../../../../models/';
import {createDirectoryDefinitionFromDiscriminatorValue} from '../../../../../../../../../models/createDirectoryDefinitionFromDiscriminatorValue';
import {ODataError} from '../../../../../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../../../../../models/oDataErrors/serializeODataError';
import {DiscoverRequestBuilderPostRequestConfiguration} from './discoverRequestBuilderPostRequestConfiguration';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the discover method.
 */
export class DiscoverRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new DiscoverRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/applications/{application%2Did}/synchronization/templates/{synchronizationTemplate%2Did}/schema/directories/{directoryDefinition%2Did}/discover");
    };
    /**
     * Discover the latest schema definition for provisioning to an application. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectoryDefinition
     * @see {@link https://learn.microsoft.com/graph/api/synchronization-directorydefinition-discover?view=graph-rest-1.0|Find more info here}
     */
    public post(requestConfiguration?: DiscoverRequestBuilderPostRequestConfiguration | undefined) : Promise<DirectoryDefinition | undefined> {
        const requestInfo = this.toPostRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<DirectoryDefinition>(requestInfo, createDirectoryDefinitionFromDiscriminatorValue, errorMapping);
    };
    /**
     * Discover the latest schema definition for provisioning to an application. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(requestConfiguration?: DiscoverRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a discoverRequestBuilder
     */
    public withUrl(rawUrl: string) : DiscoverRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new DiscoverRequestBuilder(rawUrl, this.requestAdapter);
    };
}
