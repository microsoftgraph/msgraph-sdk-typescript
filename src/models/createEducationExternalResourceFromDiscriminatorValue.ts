import {EducationExternalResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationExternalResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationExternalResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationExternalResource();
}
