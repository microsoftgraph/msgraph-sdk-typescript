import { deserializeIntoEducationUser } from './deserializeIntoEducationUser';
import { type EducationUser } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationUserFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationUser;
}
