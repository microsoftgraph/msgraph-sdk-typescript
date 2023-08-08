import type {AppIdentity} from './appIdentity';
import type {AuditActivityInitiator} from './auditActivityInitiator';
import {serializeAppIdentity} from './serializeAppIdentity';
import {serializeUserIdentity} from './serializeUserIdentity';
import type {UserIdentity} from './userIdentity';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuditActivityInitiator(writer: SerializationWriter, auditActivityInitiator: AuditActivityInitiator | undefined = {} as AuditActivityInitiator) : void {
        writer.writeObjectValue<AppIdentity>("app", auditActivityInitiator.app, serializeAppIdentity);
        writer.writeStringValue("@odata.type", auditActivityInitiator.odataType);
        writer.writeObjectValue<UserIdentity>("user", auditActivityInitiator.user, serializeUserIdentity);
        writer.writeAdditionalData(auditActivityInitiator.additionalData);
}
