import {deserializeIntoAuthenticationMethod} from './deserializeIntoAuthenticationMethod';
import {TemporaryAccessPassAuthenticationMethod} from './temporaryAccessPassAuthenticationMethod';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTemporaryAccessPassAuthenticationMethod(temporaryAccessPassAuthenticationMethod: TemporaryAccessPassAuthenticationMethod | undefined = {} as TemporaryAccessPassAuthenticationMethod) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAuthenticationMethod(temporaryAccessPassAuthenticationMethod),
        "createdDateTime": n => { temporaryAccessPassAuthenticationMethod.createdDateTime = n.getDateValue(); },
        "isUsable": n => { temporaryAccessPassAuthenticationMethod.isUsable = n.getBooleanValue(); },
        "isUsableOnce": n => { temporaryAccessPassAuthenticationMethod.isUsableOnce = n.getBooleanValue(); },
        "lifetimeInMinutes": n => { temporaryAccessPassAuthenticationMethod.lifetimeInMinutes = n.getNumberValue(); },
        "methodUsabilityReason": n => { temporaryAccessPassAuthenticationMethod.methodUsabilityReason = n.getStringValue(); },
        "startDateTime": n => { temporaryAccessPassAuthenticationMethod.startDateTime = n.getDateValue(); },
        "temporaryAccessPass": n => { temporaryAccessPassAuthenticationMethod.temporaryAccessPass = n.getStringValue(); },
    }
}
