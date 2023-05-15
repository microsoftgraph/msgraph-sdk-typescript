import {deserializeIntoEducationUser} from './deserializeIntoEducationUser';
import {EducationUser} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationUserFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationUser;
}
