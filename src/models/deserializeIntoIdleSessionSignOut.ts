import { type IdleSessionSignOut } from './idleSessionSignOut';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIdleSessionSignOut(idleSessionSignOut: IdleSessionSignOut | undefined = {} as IdleSessionSignOut) : Record<string, (node: ParseNode) => void> {
    return {
        "isEnabled": n => { idleSessionSignOut.isEnabled = n.getBooleanValue(); },
        "@odata.type": n => { idleSessionSignOut.odataType = n.getStringValue(); },
        "signOutAfterInSeconds": n => { idleSessionSignOut.signOutAfterInSeconds = n.getNumberValue(); },
        "warnAfterInSeconds": n => { idleSessionSignOut.warnAfterInSeconds = n.getNumberValue(); },
    }
}
