import {EducationExcelResourceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationExcelResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationExcelResourceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationExcelResourceImpl();
}
