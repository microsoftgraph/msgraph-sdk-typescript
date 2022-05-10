import {EducationUserImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationUserFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationUserImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationUserImpl();
}
