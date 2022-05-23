import {SectionGroupImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSectionGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : SectionGroupImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SectionGroupImpl();
}
