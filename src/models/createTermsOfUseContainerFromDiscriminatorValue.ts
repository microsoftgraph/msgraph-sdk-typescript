import {deserializeIntoTermsOfUseContainer} from './deserializeIntoTermsOfUseContainer';
import {TermsOfUseContainer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTermsOfUseContainerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTermsOfUseContainer;
}
