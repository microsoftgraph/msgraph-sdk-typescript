import {IdleSessionSignOut} from './idleSessionSignOut';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdleSessionSignOut(idleSessionSignOut: IdleSessionSignOut | undefined = {} as IdleSessionSignOut, writer: SerializationWriter) : void {
        writer.writeBooleanValue("isEnabled", idleSessionSignOut.isEnabled);
        writer.writeStringValue("@odata.type", idleSessionSignOut.odataType);
        writer.writeNumberValue("signOutAfterInSeconds", idleSessionSignOut.signOutAfterInSeconds);
        writer.writeNumberValue("warnAfterInSeconds", idleSessionSignOut.warnAfterInSeconds);
        writer.writeAdditionalData(idleSessionSignOut.additionalData);
}
