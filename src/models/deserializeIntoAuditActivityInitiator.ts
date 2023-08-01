import type {AppIdentity} from './appIdentity';
import type {AuditActivityInitiator} from './auditActivityInitiator';
import {createAppIdentityFromDiscriminatorValue} from './createAppIdentityFromDiscriminatorValue';
import {createUserIdentityFromDiscriminatorValue} from './createUserIdentityFromDiscriminatorValue';
import {serializeAppIdentity} from './serializeAppIdentity';
import {serializeUserIdentity} from './serializeUserIdentity';
import type {UserIdentity} from './userIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuditActivityInitiator(auditActivityInitiator: AuditActivityInitiator | undefined = {} as AuditActivityInitiator) : Record<string, (node: ParseNode) => void> {
    return {
        "app": n => { auditActivityInitiator.app = n.getObjectValue<AppIdentity>(createAppIdentityFromDiscriminatorValue); },
        "@odata.type": n => { auditActivityInitiator.odataType = n.getStringValue(); },
        "user": n => { auditActivityInitiator.user = n.getObjectValue<UserIdentity>(createUserIdentityFromDiscriminatorValue); },
    }
}
