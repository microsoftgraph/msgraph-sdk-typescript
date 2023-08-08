import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {GroupLifecyclePolicy} from './groupLifecyclePolicy';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupLifecyclePolicy(groupLifecyclePolicy: GroupLifecyclePolicy | undefined = {} as GroupLifecyclePolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(groupLifecyclePolicy),
        "alternateNotificationEmails": n => { groupLifecyclePolicy.alternateNotificationEmails = n.getStringValue(); },
        "groupLifetimeInDays": n => { groupLifecyclePolicy.groupLifetimeInDays = n.getNumberValue(); },
        "managedGroupTypes": n => { groupLifecyclePolicy.managedGroupTypes = n.getStringValue(); },
    }
}
