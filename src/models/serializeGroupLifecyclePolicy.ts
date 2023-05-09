import {GroupLifecyclePolicy} from './groupLifecyclePolicy';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupLifecyclePolicy(writer: SerializationWriter, groupLifecyclePolicy: GroupLifecyclePolicy | undefined = {} as GroupLifecyclePolicy) : void {
        serializeEntity(writer, groupLifecyclePolicy)
        writer.writeStringValue("alternateNotificationEmails", groupLifecyclePolicy.alternateNotificationEmails);
        writer.writeNumberValue("groupLifetimeInDays", groupLifecyclePolicy.groupLifetimeInDays);
        writer.writeStringValue("managedGroupTypes", groupLifecyclePolicy.managedGroupTypes);
}
