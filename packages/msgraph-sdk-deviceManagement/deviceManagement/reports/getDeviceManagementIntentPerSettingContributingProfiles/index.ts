/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {GetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody}
 */
// @ts-ignore
export function createGetDeviceManagementIntentPerSettingContributingProfilesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param GetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody(getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody: Partial<GetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.backingStoreEnabled = true; },
        "filter": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.search = n.getStringValue(); },
        "select": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.top = n.getNumberValue(); },
    }
}
export interface GetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The filter property
     */
    filter?: string | null;
    /**
     * The groupBy property
     */
    groupBy?: string[] | null;
    /**
     * The name property
     */
    name?: string | null;
    /**
     * The orderBy property
     */
    orderBy?: string[] | null;
    /**
     * The search property
     */
    search?: string | null;
    /**
     * The select property
     */
    select?: string[] | null;
    /**
     * The sessionId property
     */
    sessionId?: string | null;
    /**
     * The skip property
     */
    skip?: number | null;
    /**
     * The top property
     */
    top?: number | null;
}
/**
 * Provides operations to call the getDeviceManagementIntentPerSettingContributingProfiles method.
 */
export interface GetDeviceManagementIntentPerSettingContributingProfilesRequestBuilder extends BaseRequestBuilder<GetDeviceManagementIntentPerSettingContributingProfilesRequestBuilder> {
    /**
     * Not yet documented
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/intune-reporting-devicemanagementreports-getdevicemanagementintentpersettingcontributingprofiles?view=graph-rest-1.0|Find more info here}
     */
     post(body: GetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Not yet documented
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: GetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param GetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeGetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody(writer: SerializationWriter, getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody: Partial<GetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("filter", getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.filter);
    writer.writeCollectionOfPrimitiveValues<string>("groupBy", getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.groupBy);
    writer.writeStringValue("name", getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.name);
    writer.writeCollectionOfPrimitiveValues<string>("orderBy", getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.orderBy);
    writer.writeStringValue("search", getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.search);
    writer.writeCollectionOfPrimitiveValues<string>("select", getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.select);
    writer.writeStringValue("sessionId", getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.sessionId);
    writer.writeNumberValue("skip", getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.skip);
    writer.writeNumberValue("top", getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.top);
    writer.writeAdditionalData(getDeviceManagementIntentPerSettingContributingProfilesPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const GetDeviceManagementIntentPerSettingContributingProfilesRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/reports/getDeviceManagementIntentPerSettingContributingProfiles";
/**
 * Metadata for all the requests in the request builder.
 */
export const GetDeviceManagementIntentPerSettingContributingProfilesRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: GetDeviceManagementIntentPerSettingContributingProfilesRequestBuilderUriTemplate,
        responseBodyContentType: "application/octet-stream, application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetDeviceManagementIntentPerSettingContributingProfilesPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
