import { createProfilePhotoFromDiscriminatorValue } from '../../../../../../../../models/createProfilePhotoFromDiscriminatorValue';
import { deserializeIntoProfilePhoto } from '../../../../../../../../models/deserializeIntoProfilePhoto';
import { type ODataError } from '../../../../../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../../../../../models/oDataErrors/serializeODataError';
import { type ProfilePhoto } from '../../../../../../../../models/profilePhoto';
import { serializeProfilePhoto } from '../../../../../../../../models/serializeProfilePhoto';
import { type PhotoRequestBuilderGetRequestConfiguration } from './photoRequestBuilderGetRequestConfiguration';
import { type PhotoRequestBuilderPatchRequestConfiguration } from './photoRequestBuilderPatchRequestConfiguration';
import { ContentRequestBuilder } from './value/contentRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the photo property of the microsoft.graph.contact entity.
 */
export class PhotoRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the media for the user entity.
     */
    public get content(): ContentRequestBuilder {
        return new ContentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new PhotoRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/contactFolders/{contactFolder%2Did}/childFolders/{contactFolder%2Did1}/contacts/{contact%2Did}/photo{?%24select}");
    };
    /**
     * Optional contact picture. You can get or set a photo for a contact.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ProfilePhoto
     */
    public get(requestConfiguration?: PhotoRequestBuilderGetRequestConfiguration | undefined) : Promise<ProfilePhoto | undefined> {
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
     * Update the navigation property photo in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ProfilePhoto
     */
    public patch(body: ProfilePhoto, requestConfiguration?: PhotoRequestBuilderPatchRequestConfiguration | undefined) : Promise<ProfilePhoto | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<ProfilePhoto>(requestInfo, createProfilePhotoFromDiscriminatorValue, errorMapping);
    };
    /**
     * Optional contact picture. You can get or set a photo for a contact.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: PhotoRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the navigation property photo in me
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: ProfilePhoto, requestConfiguration?: PhotoRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeProfilePhoto);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a photoRequestBuilder
     */
    public withUrl(rawUrl: string) : PhotoRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new PhotoRequestBuilder(rawUrl, this.requestAdapter);
    };
}
