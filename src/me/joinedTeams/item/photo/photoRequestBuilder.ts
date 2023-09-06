import { createProfilePhotoFromDiscriminatorValue } from '../../../../models/createProfilePhotoFromDiscriminatorValue';
import { deserializeIntoProfilePhoto } from '../../../../models/deserializeIntoProfilePhoto';
import { type ODataError } from '../../../../models/oDataErrors/';
import { createODataErrorFromDiscriminatorValue } from '../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import { deserializeIntoODataError } from '../../../../models/oDataErrors/deserializeIntoODataError';
import { serializeODataError } from '../../../../models/oDataErrors/serializeODataError';
import { type ProfilePhoto } from '../../../../models/profilePhoto';
import { serializeProfilePhoto } from '../../../../models/serializeProfilePhoto';
import { type PhotoRequestBuilderGetRequestConfiguration } from './photoRequestBuilderGetRequestConfiguration';
import { type PhotoRequestBuilderPatchRequestConfiguration } from './photoRequestBuilderPatchRequestConfiguration';
import { ContentRequestBuilder } from './value/contentRequestBuilder';
import { BaseRequestBuilder, HttpMethod, RequestInformation, type Parsable, type ParsableFactory, type RequestAdapter, type RequestOption } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the photo property of the microsoft.graph.team entity.
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
        super(pathParameters, requestAdapter, "{+baseurl}/me/joinedTeams/{team%2Did}/photo{?%24select,%24expand}");
    };
    /**
     * Get the specified profilePhoto or its metadata (profilePhoto properties). The supported sizes of HD photos on Microsoft 365 are as follows: 48x48, 64x64, 96x96, 120x120, 240x240,360x360, 432x432, 504x504, and 648x648. Photos can be any dimension if they are stored in Azure Active Directory. You can get the metadata of the largest available photo, or specify a size to get the metadata for that photo size.If the size you request is not available, you can still get a smaller size that the user has uploaded and made available.For example, if the user uploads a photo that is 504x504 pixels, all but the 648x648 size of photo will be available for download.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ProfilePhoto
     * @see {@link https://learn.microsoft.com/graph/api/profilephoto-get?view=graph-rest-1.0|Find more info here}
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
     * Get the specified profilePhoto or its metadata (profilePhoto properties). The supported sizes of HD photos on Microsoft 365 are as follows: 48x48, 64x64, 96x96, 120x120, 240x240,360x360, 432x432, 504x504, and 648x648. Photos can be any dimension if they are stored in Azure Active Directory. You can get the metadata of the largest available photo, or specify a size to get the metadata for that photo size.If the size you request is not available, you can still get a smaller size that the user has uploaded and made available.For example, if the user uploads a photo that is 504x504 pixels, all but the 648x648 size of photo will be available for download.
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
