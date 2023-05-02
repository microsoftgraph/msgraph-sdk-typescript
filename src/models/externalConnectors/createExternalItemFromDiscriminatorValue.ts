import {deserializeIntoExternalItem} from './deserializeIntoExternalItem';
import {ExternalItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExternalItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExternalItem;
}
