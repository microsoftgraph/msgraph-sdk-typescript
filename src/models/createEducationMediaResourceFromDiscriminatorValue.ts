import {EducationMediaResourceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationMediaResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationMediaResourceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationMediaResourceImpl();
}
