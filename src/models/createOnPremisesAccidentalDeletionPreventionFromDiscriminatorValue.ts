import { deserializeIntoOnPremisesAccidentalDeletionPrevention } from './deserializeIntoOnPremisesAccidentalDeletionPrevention';
import { type OnPremisesAccidentalDeletionPrevention } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnPremisesAccidentalDeletionPreventionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnPremisesAccidentalDeletionPrevention;
}
