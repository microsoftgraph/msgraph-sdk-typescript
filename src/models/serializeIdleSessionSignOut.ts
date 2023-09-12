import { type IdleSessionSignOut } from './idleSessionSignOut';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIdleSessionSignOut(writer: SerializationWriter, idleSessionSignOut: IdleSessionSignOut | undefined = {} as IdleSessionSignOut) : void {
        writer.writeBooleanValue("isEnabled", idleSessionSignOut.isEnabled);
        writer.writeStringValue("@odata.type", idleSessionSignOut.odataType);
        writer.writeNumberValue("signOutAfterInSeconds", idleSessionSignOut.signOutAfterInSeconds);
        writer.writeNumberValue("warnAfterInSeconds", idleSessionSignOut.warnAfterInSeconds);
        writer.writeAdditionalData(idleSessionSignOut.additionalData);
}
