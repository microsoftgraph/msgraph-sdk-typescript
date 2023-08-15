import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {deserializeIntoWipeManagedAppRegistrationsByDeviceTagPostRequestBody} from './deserializeIntoWipeManagedAppRegistrationsByDeviceTagPostRequestBody';
import {serializeWipeManagedAppRegistrationsByDeviceTagPostRequestBody} from './serializeWipeManagedAppRegistrationsByDeviceTagPostRequestBody';
import type {WipeManagedAppRegistrationsByDeviceTagPostRequestBody} from './wipeManagedAppRegistrationsByDeviceTagPostRequestBody';
import {WipeManagedAppRegistrationsByDeviceTagRequestBuilderPostRequestConfiguration} from './wipeManagedAppRegistrationsByDeviceTagRequestBuilderPostRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the wipeManagedAppRegistrationsByDeviceTag method.
 */
export class WipeManagedAppRegistrationsByDeviceTagRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new WipeManagedAppRegistrationsByDeviceTagRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/wipeManagedAppRegistrationsByDeviceTag");
    };
    /**
     * Issues a wipe operation on an app registration with specified device tag.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/intune-mam-user-wipemanagedappregistrationsbydevicetag?view=graph-rest-1.0|Find more info here}
     */
    public post(body: WipeManagedAppRegistrationsByDeviceTagPostRequestBody, requestConfiguration?: WipeManagedAppRegistrationsByDeviceTagRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Issues a wipe operation on an app registration with specified device tag.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: WipeManagedAppRegistrationsByDeviceTagPostRequestBody, requestConfiguration?: WipeManagedAppRegistrationsByDeviceTagRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeWipeManagedAppRegistrationsByDeviceTagPostRequestBody);
        return requestInfo;
    };
}
