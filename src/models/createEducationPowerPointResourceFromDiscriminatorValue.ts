import {EducationPowerPointResourceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationPowerPointResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationPowerPointResourceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationPowerPointResourceImpl();
}
