import { deserializeIntoEducationExcelResource } from './deserializeIntoEducationExcelResource';
import { type EducationExcelResource } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationExcelResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationExcelResource;
}
