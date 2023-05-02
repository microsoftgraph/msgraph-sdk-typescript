import {deserializeIntoOnenoteSection} from './deserializeIntoOnenoteSection';
import {OnenoteSection} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteSectionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenoteSection;
}
