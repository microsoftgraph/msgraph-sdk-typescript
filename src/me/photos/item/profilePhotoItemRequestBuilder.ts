import {ProfilePhoto} from '../../../models/';
import {createProfilePhotoFromDiscriminatorValue} from '../../../models/createProfilePhotoFromDiscriminatorValue';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {ProfilePhotoItemRequestBuilderGetRequestConfiguration} from './profilePhotoItemRequestBuilderGetRequestConfiguration';
import {ContentRequestBuilder} from './value/contentRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the photos property of the microsoft.graph.user entity.
 */
export class ProfilePhotoItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the media for the user entity.
     */
    public get content(): ContentRequestBuilder {
        return new ContentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ProfilePhotoItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/photos/{profilePhoto%2Did}{?%24select}");
    };
    /**
     * Get photos from me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ProfilePhoto
     */
    public get(requestConfiguration?: ProfilePhotoItemRequestBuilderGetRequestConfiguration | undefined) : Promise<ProfilePhoto | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ProfilePhoto>(requestInfo, createProfilePhotoFromDiscriminatorValue, errorMapping);
    };
    /**
     * Get photos from me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ProfilePhotoItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a ProfilePhotoItemRequestBuilder
     */
    public withUrl(rawUrl: string) : ProfilePhotoItemRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new ProfilePhotoItemRequestBuilder(rawUrl, this.requestAdapter);
    };
}
