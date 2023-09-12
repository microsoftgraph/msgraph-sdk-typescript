import { deserializeIntoEducationOutcomeCollectionResponse } from './deserializeIntoEducationOutcomeCollectionResponse';
import { type EducationOutcomeCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationOutcomeCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationOutcomeCollectionResponse;
}
