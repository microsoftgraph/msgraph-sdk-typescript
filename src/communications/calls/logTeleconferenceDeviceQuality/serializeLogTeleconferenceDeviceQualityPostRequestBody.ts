import {serializeTeleconferenceDeviceQuality} from '../../../models/serializeTeleconferenceDeviceQuality';
import {TeleconferenceDeviceQuality} from '../../../models/teleconferenceDeviceQuality';
import {LogTeleconferenceDeviceQualityPostRequestBody} from './logTeleconferenceDeviceQualityPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLogTeleconferenceDeviceQualityPostRequestBody(logTeleconferenceDeviceQualityPostRequestBody: LogTeleconferenceDeviceQualityPostRequestBody | undefined = {} as LogTeleconferenceDeviceQualityPostRequestBody, writer: SerializationWriter) : void {
        writer.writeObjectValue<TeleconferenceDeviceQuality>("quality", logTeleconferenceDeviceQualityPostRequestBody.quality, serializeTeleconferenceDeviceQuality);
        writer.writeAdditionalData(logTeleconferenceDeviceQualityPostRequestBody.additionalData);
}
