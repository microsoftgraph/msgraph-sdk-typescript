import {EducationPowerPointResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationPowerPointResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationPowerPointResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationPowerPointResource();
}
