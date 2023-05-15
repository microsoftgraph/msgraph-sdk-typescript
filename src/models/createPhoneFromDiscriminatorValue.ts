import {deserializeIntoPhone} from './deserializeIntoPhone';
import {Phone} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhoneFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPhone;
}
