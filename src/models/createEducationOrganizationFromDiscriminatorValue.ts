import {EducationOrganizationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationOrganizationFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationOrganizationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationOrganizationImpl();
}
