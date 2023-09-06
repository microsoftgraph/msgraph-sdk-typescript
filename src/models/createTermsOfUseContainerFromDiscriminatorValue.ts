import { deserializeIntoTermsOfUseContainer } from './deserializeIntoTermsOfUseContainer';
import { type TermsOfUseContainer } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTermsOfUseContainerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTermsOfUseContainer;
}
