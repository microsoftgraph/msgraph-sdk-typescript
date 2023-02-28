import {OnPremisesAccidentalDeletionPrevention} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnPremisesAccidentalDeletionPreventionFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnPremisesAccidentalDeletionPrevention {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnPremisesAccidentalDeletionPrevention();
}
