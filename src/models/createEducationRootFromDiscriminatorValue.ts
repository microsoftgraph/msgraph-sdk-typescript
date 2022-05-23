import {EducationRootImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationRootFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationRootImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationRootImpl();
}
