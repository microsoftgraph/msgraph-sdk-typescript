import { deserializeIntoEducationItemBody } from './deserializeIntoEducationItemBody';
import { type EducationItemBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationItemBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationItemBody;
}
