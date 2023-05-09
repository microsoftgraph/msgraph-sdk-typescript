import {createPhoneFromDiscriminatorValue} from './createPhoneFromDiscriminatorValue';
import {OnlineMeetingInfo} from './onlineMeetingInfo';
import {Phone} from './phone';
import {serializePhone} from './serializePhone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnlineMeetingInfo(onlineMeetingInfo: OnlineMeetingInfo | undefined = {} as OnlineMeetingInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "conferenceId": n => { onlineMeetingInfo.conferenceId = n.getStringValue(); },
        "joinUrl": n => { onlineMeetingInfo.joinUrl = n.getStringValue(); },
        "@odata.type": n => { onlineMeetingInfo.odataType = n.getStringValue(); },
        "phones": n => { onlineMeetingInfo.phones = n.getCollectionOfObjectValues<Phone>(createPhoneFromDiscriminatorValue); },
        "quickDial": n => { onlineMeetingInfo.quickDial = n.getStringValue(); },
        "tollFreeNumbers": n => { onlineMeetingInfo.tollFreeNumbers = n.getCollectionOfPrimitiveValues<string>(); },
        "tollNumber": n => { onlineMeetingInfo.tollNumber = n.getStringValue(); },
    }
}
