import { deserializeIntoSubjectSet } from './deserializeIntoSubjectSet';
import { type TargetApplicationOwners } from './targetApplicationOwners';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetApplicationOwners(targetApplicationOwners: TargetApplicationOwners | undefined = {} as TargetApplicationOwners) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(targetApplicationOwners),
    }
}
