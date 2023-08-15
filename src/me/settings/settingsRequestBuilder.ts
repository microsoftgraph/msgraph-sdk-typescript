import {createUserSettingsFromDiscriminatorValue} from '../../models/createUserSettingsFromDiscriminatorValue';
import {deserializeIntoUserSettings} from '../../models/deserializeIntoUserSettings';
import {ODataError} from '../../models/oDataErrors/';
import {createODataErrorFromDiscriminatorValue} from '../../models/oDataErrors/createODataErrorFromDiscriminatorValue';
import {deserializeIntoODataError} from '../../models/oDataErrors/deserializeIntoODataError';
import {serializeODataError} from '../../models/oDataErrors/serializeODataError';
import {serializeUserSettings} from '../../models/serializeUserSettings';
import type {UserSettings} from '../../models/userSettings';
import {SettingsRequestBuilderDeleteRequestConfiguration} from './settingsRequestBuilderDeleteRequestConfiguration';
import {SettingsRequestBuilderGetRequestConfiguration} from './settingsRequestBuilderGetRequestConfiguration';
import {SettingsRequestBuilderPatchRequestConfiguration} from './settingsRequestBuilderPatchRequestConfiguration';
import {ShiftPreferencesRequestBuilder} from './shiftPreferences/shiftPreferencesRequestBuilder';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the settings property of the microsoft.graph.user entity.
 */
export class SettingsRequestBuilder extends BaseRequestBuilder {
    /**
     * Provides operations to manage the shiftPreferences property of the microsoft.graph.userSettings entity.
     */
    public get shiftPreferences(): ShiftPreferencesRequestBuilder {
        return new ShiftPreferencesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new SettingsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/me/settings{?%24select,%24expand}");
    };
    /**
     * Delete navigation property settings for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public delete(requestConfiguration?: SettingsRequestBuilderDeleteRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * Read the user and organization userSettings object.To learn how to update the properties of the userSettings object, see update user settings.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserSettings
     * @see {@link https://learn.microsoft.com/graph/api/usersettings-get?view=graph-rest-1.0|Find more info here}
     */
    public get(requestConfiguration?: SettingsRequestBuilderGetRequestConfiguration | undefined) : Promise<UserSettings | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserSettings>(requestInfo, createUserSettingsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Update the properties of the userSettings object. Users in the same organization can have different settings based on their preference or on the organization policies. To get the user current settings, see current user settings. 
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserSettings
     * @see {@link https://learn.microsoft.com/graph/api/usersettings-update?view=graph-rest-1.0|Find more info here}
     */
    public patch(body: UserSettings, requestConfiguration?: SettingsRequestBuilderPatchRequestConfiguration | undefined) : Promise<UserSettings | undefined> {
        const requestInfo = this.toPatchRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendAsync<UserSettings>(requestInfo, createUserSettingsFromDiscriminatorValue, errorMapping);
    };
    /**
     * Delete navigation property settings for me
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toDeleteRequestInformation(requestConfiguration?: SettingsRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * Read the user and organization userSettings object.To learn how to update the properties of the userSettings object, see update user settings.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: SettingsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
     * Update the properties of the userSettings object. Users in the same organization can have different settings based on their preference or on the organization policies. To get the user current settings, see current user settings. 
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPatchRequestInformation(body: UserSettings, requestConfiguration?: SettingsRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
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
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUserSettings);
        return requestInfo;
    };
}
