import {EducationLinkResourceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationLinkResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationLinkResourceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationLinkResourceImpl();
}
