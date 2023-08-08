import {serializeTeleconferenceDeviceQuality} from '../../../models/serializeTeleconferenceDeviceQuality';
import type {TeleconferenceDeviceQuality} from '../../../models/teleconferenceDeviceQuality';
import type {LogTeleconferenceDeviceQualityPostRequestBody} from './logTeleconferenceDeviceQualityPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLogTeleconferenceDeviceQualityPostRequestBody(writer: SerializationWriter, logTeleconferenceDeviceQualityPostRequestBody: LogTeleconferenceDeviceQualityPostRequestBody | undefined = {} as LogTeleconferenceDeviceQualityPostRequestBody) : void {
        writer.writeObjectValue<TeleconferenceDeviceQuality>("quality", logTeleconferenceDeviceQualityPostRequestBody.quality, serializeTeleconferenceDeviceQuality);
        writer.writeAdditionalData(logTeleconferenceDeviceQualityPostRequestBody.additionalData);
}
