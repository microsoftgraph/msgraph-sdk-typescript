import { type ConnectedOrganizationMembers } from './connectedOrganizationMembers';
import { serializeSubjectSet } from './serializeSubjectSet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeConnectedOrganizationMembers(writer: SerializationWriter, connectedOrganizationMembers: ConnectedOrganizationMembers | undefined = {} as ConnectedOrganizationMembers) : void {
        serializeSubjectSet(writer, connectedOrganizationMembers)
        writer.writeStringValue("connectedOrganizationId", connectedOrganizationMembers.connectedOrganizationId);
        writer.writeStringValue("description", connectedOrganizationMembers.description);
}
