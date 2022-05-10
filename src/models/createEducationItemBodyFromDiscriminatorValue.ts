import {EducationItemBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationItemBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationItemBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationItemBodyImpl();
}
