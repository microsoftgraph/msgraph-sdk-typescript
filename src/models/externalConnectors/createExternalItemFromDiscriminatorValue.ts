import {ExternalItemImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalItemImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalItemImpl();
}
