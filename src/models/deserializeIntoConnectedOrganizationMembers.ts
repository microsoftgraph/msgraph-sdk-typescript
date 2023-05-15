import {ConnectedOrganizationMembers} from './connectedOrganizationMembers';
import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConnectedOrganizationMembers(connectedOrganizationMembers: ConnectedOrganizationMembers | undefined = {} as ConnectedOrganizationMembers) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(connectedOrganizationMembers),
        "connectedOrganizationId": n => { connectedOrganizationMembers.connectedOrganizationId = n.getStringValue(); },
        "description": n => { connectedOrganizationMembers.description = n.getStringValue(); },
    }
}
