import { deserializeIntoTeleconferenceDeviceMediaQuality } from './deserializeIntoTeleconferenceDeviceMediaQuality';
import { type TeleconferenceDeviceVideoQuality } from './teleconferenceDeviceVideoQuality';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeleconferenceDeviceVideoQuality(teleconferenceDeviceVideoQuality: TeleconferenceDeviceVideoQuality | undefined = {} as TeleconferenceDeviceVideoQuality) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeleconferenceDeviceMediaQuality(teleconferenceDeviceVideoQuality),
        "averageInboundBitRate": n => { teleconferenceDeviceVideoQuality.averageInboundBitRate = n.getNumberValue(); },
        "averageInboundFrameRate": n => { teleconferenceDeviceVideoQuality.averageInboundFrameRate = n.getNumberValue(); },
        "averageOutboundBitRate": n => { teleconferenceDeviceVideoQuality.averageOutboundBitRate = n.getNumberValue(); },
        "averageOutboundFrameRate": n => { teleconferenceDeviceVideoQuality.averageOutboundFrameRate = n.getNumberValue(); },
    }
}
