import {createTeleconferenceDeviceQualityFromDiscriminatorValue} from '../../../models/createTeleconferenceDeviceQualityFromDiscriminatorValue';
import {serializeTeleconferenceDeviceQuality} from '../../../models/serializeTeleconferenceDeviceQuality';
import {TeleconferenceDeviceQuality} from '../../../models/teleconferenceDeviceQuality';
import {LogTeleconferenceDeviceQualityPostRequestBody} from './logTeleconferenceDeviceQualityPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLogTeleconferenceDeviceQualityPostRequestBody(logTeleconferenceDeviceQualityPostRequestBody: LogTeleconferenceDeviceQualityPostRequestBody | undefined = {} as LogTeleconferenceDeviceQualityPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "quality": n => { logTeleconferenceDeviceQualityPostRequestBody.quality = n.getObjectValue<TeleconferenceDeviceQuality>(createTeleconferenceDeviceQualityFromDiscriminatorValue); },
    }
}
