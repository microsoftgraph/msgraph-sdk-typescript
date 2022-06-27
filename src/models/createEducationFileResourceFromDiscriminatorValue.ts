import {EducationFileResourceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationFileResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationFileResourceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationFileResourceImpl();
}
