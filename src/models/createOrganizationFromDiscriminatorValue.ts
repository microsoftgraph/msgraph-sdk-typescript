import {OrganizationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrganizationFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrganizationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OrganizationImpl();
}
