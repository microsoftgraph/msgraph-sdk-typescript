import {deserializeIntoContact} from './deserializeIntoContact';
import {Contact} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContactFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContact;
}
