import {deserializeIntoEducationFileResource} from './deserializeIntoEducationFileResource';
import {EducationFileResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationFileResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationFileResource;
}
