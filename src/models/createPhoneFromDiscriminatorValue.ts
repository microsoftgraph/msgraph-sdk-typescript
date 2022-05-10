import {PhoneImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPhoneFromDiscriminatorValue(parseNode: ParseNode | undefined) : PhoneImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PhoneImpl();
}
