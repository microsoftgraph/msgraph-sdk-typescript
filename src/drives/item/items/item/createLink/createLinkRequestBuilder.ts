import {createPermissionFromDiscriminatorValue} from '../../../../../models/createPermissionFromDiscriminatorValue';
import {deserializeIntoPermission} from '../../../../../models/deserializeIntoPermission';
import {ODataError} from '../../../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../../../models/oDataErrors/serializeODataError';
import type {Permission} from '../../../../../models/permission';
import {serializePermission} from '../../../../../models/serializePermission';
import type {CreateLinkPostRequestBody} from './createLinkPostRequestBody';
import {CreateLinkRequestBuilderPostRequestConfiguration} from './createLinkRequestBuilderPostRequestConfiguration';
import {deserializeIntoCreateLinkPostRequestBody} from './deserializeIntoCreateLinkPostRequestBody';
import {serializeCreateLinkPostRequestBody} from './serializeCreateLinkPostRequestBody';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the createLink method.
 */
export class CreateLinkRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new CreateLinkRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/createLink");
    };
    /**
     * You can use createLink action to share a DriveItem via a sharing link. The createLink action will create a new sharing link if the specified link type doesn't already exist for the calling application.If a sharing link of the specified type already exists for the app, the existing sharing link will be returned. DriveItem resources inherit sharing permissions from their ancestors.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Permission
     * @see {@link https://learn.microsoft.com/graph/api/driveitem-createlink?view=graph-rest-1.0|Find more info here}
     */
    public post(body: CreateLinkPostRequestBody, requestConfiguration?: CreateLinkRequestBuilderPostRequestConfiguration | undefined) : Promise<Permission | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<Permission>(requestInfo, createPermissionFromDiscriminatorValue, errorMapping);
    };
    /**
     * You can use createLink action to share a DriveItem via a sharing link. The createLink action will create a new sharing link if the specified link type doesn't already exist for the calling application.If a sharing link of the specified type already exists for the app, the existing sharing link will be returned. DriveItem resources inherit sharing permissions from their ancestors.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CreateLinkPostRequestBody, requestConfiguration?: CreateLinkRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCreateLinkPostRequestBody);
        return requestInfo;
    };
}
