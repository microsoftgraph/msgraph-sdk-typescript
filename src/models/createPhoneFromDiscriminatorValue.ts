import { deserializeIntoPhone } from './deserializeIntoPhone';
import { type Phone } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPhoneFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPhone;
}
