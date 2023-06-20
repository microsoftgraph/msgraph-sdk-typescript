import {ConnectedOrganizationMembers} from './connectedOrganizationMembers';
import {serializeSubjectSet} from './serializeSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConnectedOrganizationMembers(connectedOrganizationMembers: ConnectedOrganizationMembers | undefined = {} as ConnectedOrganizationMembers, writer: SerializationWriter) : void {
        serializeSubjectSet(writer, connectedOrganizationMembers)
        writer.writeStringValue("connectedOrganizationId", connectedOrganizationMembers.connectedOrganizationId);
        writer.writeStringValue("description", connectedOrganizationMembers.description);
}
