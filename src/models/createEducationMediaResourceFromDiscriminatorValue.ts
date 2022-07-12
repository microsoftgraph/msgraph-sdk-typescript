import {EducationMediaResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationMediaResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationMediaResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationMediaResource();
}
