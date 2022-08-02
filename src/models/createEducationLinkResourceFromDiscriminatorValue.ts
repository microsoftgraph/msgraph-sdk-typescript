import {EducationLinkResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationLinkResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationLinkResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationLinkResource();
}
