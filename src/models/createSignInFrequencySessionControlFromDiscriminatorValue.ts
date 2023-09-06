import { deserializeIntoSignInFrequencySessionControl } from './deserializeIntoSignInFrequencySessionControl';
import { type SignInFrequencySessionControl } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSignInFrequencySessionControlFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSignInFrequencySessionControl;
}
