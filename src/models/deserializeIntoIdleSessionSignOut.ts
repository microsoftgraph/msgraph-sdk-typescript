import {IdleSessionSignOut} from './idleSessionSignOut';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdleSessionSignOut(idleSessionSignOut: IdleSessionSignOut | undefined = {} as IdleSessionSignOut) : Record<string, (node: ParseNode) => void> {
    return {
        "isEnabled": n => { idleSessionSignOut.isEnabled = n.getBooleanValue(); },
        "@odata.type": n => { idleSessionSignOut.odataType = n.getStringValue(); },
        "signOutAfterInSeconds": n => { idleSessionSignOut.signOutAfterInSeconds = n.getNumberValue(); },
        "warnAfterInSeconds": n => { idleSessionSignOut.warnAfterInSeconds = n.getNumberValue(); },
    }
}
