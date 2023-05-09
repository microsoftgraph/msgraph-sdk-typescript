import {deserializeIntoSectionGroup} from './deserializeIntoSectionGroup';
import {SectionGroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSectionGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSectionGroup;
}
