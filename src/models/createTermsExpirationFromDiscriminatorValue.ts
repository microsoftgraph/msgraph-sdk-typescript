import {TermsExpirationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsExpirationFromDiscriminatorValue(parseNode: ParseNode | undefined) : TermsExpirationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TermsExpirationImpl();
}
