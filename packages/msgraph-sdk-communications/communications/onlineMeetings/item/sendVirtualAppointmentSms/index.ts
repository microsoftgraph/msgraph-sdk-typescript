/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAttendeeNotificationInfoFromDiscriminatorValue, serializeAttendeeNotificationInfo, type AttendeeNotificationInfo, VirtualAppointmentMessageType, VirtualAppointmentMessageTypeObject } from '@microsoft/msgraph-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SendVirtualAppointmentSmsPostRequestBody}
 */
// @ts-ignore
export function createSendVirtualAppointmentSmsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoSendVirtualAppointmentSmsPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param SendVirtualAppointmentSmsPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoSendVirtualAppointmentSmsPostRequestBody(sendVirtualAppointmentSmsPostRequestBody: Partial<SendVirtualAppointmentSmsPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "attendees": n => { sendVirtualAppointmentSmsPostRequestBody.attendees = n.getCollectionOfObjectValues<AttendeeNotificationInfo>(createAttendeeNotificationInfoFromDiscriminatorValue); },
        "backingStoreEnabled": n => { sendVirtualAppointmentSmsPostRequestBody.backingStoreEnabled = true; },
        "messageType": n => { sendVirtualAppointmentSmsPostRequestBody.messageType = n.getEnumValue<VirtualAppointmentMessageType>(VirtualAppointmentMessageTypeObject); },
    }
}
export interface SendVirtualAppointmentSmsPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * The attendees property
     */
    attendees?: AttendeeNotificationInfo[] | null;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The messageType property
     */
    messageType?: VirtualAppointmentMessageType | null;
}
/**
 * Provides operations to call the sendVirtualAppointmentSms method.
 */
export interface SendVirtualAppointmentSmsRequestBuilder extends BaseRequestBuilder<SendVirtualAppointmentSmsRequestBuilder> {
    /**
     * Send an SMS notification to external attendees when a Teams virtual appointment is confirmed, rescheduled, or canceled. This feature requires Teams premium. Attendees must have a valid United States phone number to receive these SMS notifications.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/virtualappointment-sendvirtualappointmentsms?view=graph-rest-1.0|Find more info here}
     */
     post(body: SendVirtualAppointmentSmsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Send an SMS notification to external attendees when a Teams virtual appointment is confirmed, rescheduled, or canceled. This feature requires Teams premium. Attendees must have a valid United States phone number to receive these SMS notifications.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: SendVirtualAppointmentSmsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SendVirtualAppointmentSmsPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeSendVirtualAppointmentSmsPostRequestBody(writer: SerializationWriter, sendVirtualAppointmentSmsPostRequestBody: Partial<SendVirtualAppointmentSmsPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!sendVirtualAppointmentSmsPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeCollectionOfObjectValues<AttendeeNotificationInfo>("attendees", sendVirtualAppointmentSmsPostRequestBody.attendees, serializeAttendeeNotificationInfo);
    writer.writeEnumValue<VirtualAppointmentMessageType>("messageType", sendVirtualAppointmentSmsPostRequestBody.messageType);
    writer.writeAdditionalData(sendVirtualAppointmentSmsPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const SendVirtualAppointmentSmsRequestBuilderUriTemplate = "{+baseurl}/communications/onlineMeetings/{onlineMeeting%2Did}/sendVirtualAppointmentSms";
/**
 * Metadata for all the requests in the request builder.
 */
export const SendVirtualAppointmentSmsRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: SendVirtualAppointmentSmsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSendVirtualAppointmentSmsPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
