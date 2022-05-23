import {SignInFrequencySessionControlImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSignInFrequencySessionControlFromDiscriminatorValue(parseNode: ParseNode | undefined) : SignInFrequencySessionControlImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SignInFrequencySessionControlImpl();
}
