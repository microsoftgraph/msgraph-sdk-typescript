import {deserializeIntoOrganization} from './deserializeIntoOrganization';
import {Organization} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOrganization;
}
