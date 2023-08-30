import {createKeyCredentialFromDiscriminatorValue} from '../../../models/createKeyCredentialFromDiscriminatorValue';
import {deserializeIntoKeyCredential} from '../../../models/deserializeIntoKeyCredential';
import type {KeyCredential} from '../../../models/keyCredential';
import {ODataError} from '../../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../../models/oDataErrors/serializeODataError';
import {serializeKeyCredential} from '../../../models/serializeKeyCredential';
import type {AddKeyPostRequestBody} from './addKeyPostRequestBody';
import {AddKeyRequestBuilderPostRequestConfiguration} from './addKeyRequestBuilderPostRequestConfiguration';
import {deserializeIntoAddKeyPostRequestBody} from './deserializeIntoAddKeyPostRequestBody';
import {serializeAddKeyPostRequestBody} from './serializeAddKeyPostRequestBody';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the addKey method.
 */
export class AddKeyRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new AddKeyRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/applications/{application%2Did}/addKey");
    };
    /**
     * Add a key credential to an application. This method, along with removeKey can be used by an application to automate rolling its expiring keys. As part of the request validation for this method, a proof of possession of an existing key is verified before the action can be performed.  Applications that don’t have any existing valid certificates (no certificates have been added yet, or all certificates have expired), won’t be able to use this service action. You can use the Update application operation to perform an update instead.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of KeyCredential
     * @see {@link https://learn.microsoft.com/graph/api/application-addkey?view=graph-rest-1.0|Find more info here}
     */
    public post(body: AddKeyPostRequestBody, requestConfiguration?: AddKeyRequestBuilderPostRequestConfiguration | undefined) : Promise<KeyCredential | undefined> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<KeyCredential>(requestInfo, createKeyCredentialFromDiscriminatorValue, errorMapping);
    };
    /**
     * Add a key credential to an application. This method, along with removeKey can be used by an application to automate rolling its expiring keys. As part of the request validation for this method, a proof of possession of an existing key is verified before the action can be performed.  Applications that don’t have any existing valid certificates (no certificates have been added yet, or all certificates have expired), won’t be able to use this service action. You can use the Update application operation to perform an update instead.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: AddKeyPostRequestBody, requestConfiguration?: AddKeyRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeAddKeyPostRequestBody);
        return requestInfo;
    };
    /**
     * Returns a request builder with the provided arbitrary URL. Using this method means any other path or query parameters are ignored.
     * @param rawUrl The raw URL to use for the request builder.
     * @returns a addKeyRequestBuilder
     */
    public withUrl(rawUrl: string) : AddKeyRequestBuilder {
        if(!rawUrl) throw new Error("rawUrl cannot be undefined");
        return new AddKeyRequestBuilder(rawUrl, this.requestAdapter);
    };
}
