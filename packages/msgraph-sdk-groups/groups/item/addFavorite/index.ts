/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the addFavorite method.
 */
export interface AddFavoriteRequestBuilder extends BaseRequestBuilder<AddFavoriteRequestBuilder> {
    /**
     * Add the group to the list of the current user's favorite groups.  The group shows up in Outlook and Teams favorites. Supported for Microsoft 365 groups only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/group-addfavorite?view=graph-rest-1.0|Find more info here}
     */
     post(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Add the group to the list of the current user's favorite groups.  The group shows up in Outlook and Teams favorites. Supported for Microsoft 365 groups only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const AddFavoriteRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}/addFavorite";
/**
 * Metadata for all the requests in the request builder.
 */
export const AddFavoriteRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: AddFavoriteRequestBuilderUriTemplate,
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
};
/* tslint:enable */
/* eslint-enable */
