import {EducationClassImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationClassFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationClassImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationClassImpl();
}
