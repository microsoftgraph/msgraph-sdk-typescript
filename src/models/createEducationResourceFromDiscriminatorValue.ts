import {EducationResourceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationResourceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationResourceImpl();
}
