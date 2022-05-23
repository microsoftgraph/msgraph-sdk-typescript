import {ExternalItemContentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalItemContentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalItemContentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalItemContentImpl();
}
