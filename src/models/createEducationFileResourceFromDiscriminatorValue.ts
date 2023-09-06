import { deserializeIntoEducationFileResource } from './deserializeIntoEducationFileResource';
import { type EducationFileResource } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationFileResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationFileResource;
}
