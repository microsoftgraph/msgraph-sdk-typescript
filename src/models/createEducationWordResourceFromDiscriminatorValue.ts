import {EducationWordResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationWordResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationWordResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationWordResource();
}
