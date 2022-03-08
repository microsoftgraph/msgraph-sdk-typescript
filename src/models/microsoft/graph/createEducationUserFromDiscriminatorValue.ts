import {EducationUser} from './educationUser';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationUserFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationUser {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationUser();
}
