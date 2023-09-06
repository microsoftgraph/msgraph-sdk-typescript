import { deserializeIntoEducationOnPremisesInfo } from './deserializeIntoEducationOnPremisesInfo';
import { type EducationOnPremisesInfo } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationOnPremisesInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationOnPremisesInfo;
}
