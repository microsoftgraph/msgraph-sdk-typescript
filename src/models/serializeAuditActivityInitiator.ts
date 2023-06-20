import {AppIdentity} from './appIdentity';
import {AuditActivityInitiator} from './auditActivityInitiator';
import {serializeAppIdentity} from './serializeAppIdentity';
import {serializeUserIdentity} from './serializeUserIdentity';
import {UserIdentity} from './userIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuditActivityInitiator(auditActivityInitiator: AuditActivityInitiator | undefined = {} as AuditActivityInitiator, writer: SerializationWriter) : void {
        writer.writeObjectValue<AppIdentity>("app", auditActivityInitiator.app, serializeAppIdentity);
        writer.writeStringValue("@odata.type", auditActivityInitiator.odataType);
        writer.writeObjectValue<UserIdentity>("user", auditActivityInitiator.user, serializeUserIdentity);
        writer.writeAdditionalData(auditActivityInitiator.additionalData);
}
