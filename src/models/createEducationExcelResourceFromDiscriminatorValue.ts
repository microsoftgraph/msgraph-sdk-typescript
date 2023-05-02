import {deserializeIntoEducationExcelResource} from './deserializeIntoEducationExcelResource';
import {EducationExcelResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationExcelResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationExcelResource;
}
