import {OrgContactCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOrgContactCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OrgContactCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OrgContactCollectionResponseImpl();
}
