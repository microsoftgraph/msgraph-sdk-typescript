import {ConnectedOrganizationMembers} from './connectedOrganizationMembers';
import {serializeSubjectSet} from './serializeSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConnectedOrganizationMembers(writer: SerializationWriter, connectedOrganizationMembers: ConnectedOrganizationMembers | undefined = {} as ConnectedOrganizationMembers) : void {
        serializeSubjectSet(writer, connectedOrganizationMembers)
        writer.writeStringValue("connectedOrganizationId", connectedOrganizationMembers.connectedOrganizationId);
        writer.writeStringValue("description", connectedOrganizationMembers.description);
}
