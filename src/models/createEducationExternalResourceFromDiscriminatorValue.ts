import {EducationExternalResourceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationExternalResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationExternalResourceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationExternalResourceImpl();
}
