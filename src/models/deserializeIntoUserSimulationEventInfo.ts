import {UserSimulationEventInfo} from './userSimulationEventInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserSimulationEventInfo(userSimulationEventInfo: UserSimulationEventInfo | undefined = {} as UserSimulationEventInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "browser": n => { userSimulationEventInfo.browser = n.getStringValue(); },
        "eventDateTime": n => { userSimulationEventInfo.eventDateTime = n.getDateValue(); },
        "eventName": n => { userSimulationEventInfo.eventName = n.getStringValue(); },
        "ipAddress": n => { userSimulationEventInfo.ipAddress = n.getStringValue(); },
        "@odata.type": n => { userSimulationEventInfo.odataType = n.getStringValue(); },
        "osPlatformDeviceDetails": n => { userSimulationEventInfo.osPlatformDeviceDetails = n.getStringValue(); },
    }
}
