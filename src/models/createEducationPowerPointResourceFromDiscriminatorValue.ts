import {deserializeIntoEducationPowerPointResource} from './deserializeIntoEducationPowerPointResource';
import {EducationPowerPointResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationPowerPointResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationPowerPointResource;
}
