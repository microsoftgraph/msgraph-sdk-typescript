import {ExternalItem} from './externalItem';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExternalItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExternalItem();
}
