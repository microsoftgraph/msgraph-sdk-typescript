import {TermsOfUseContainerImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsOfUseContainerFromDiscriminatorValue(parseNode: ParseNode | undefined) : TermsOfUseContainerImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TermsOfUseContainerImpl();
}
