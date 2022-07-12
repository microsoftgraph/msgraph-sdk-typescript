import {EducationExcelResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationExcelResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationExcelResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationExcelResource();
}
