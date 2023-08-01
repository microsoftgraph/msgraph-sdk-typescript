import {deserializeIntoSubjectSet} from './deserializeIntoSubjectSet';
import type {TargetApplicationOwners} from './targetApplicationOwners';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTargetApplicationOwners(targetApplicationOwners: TargetApplicationOwners | undefined = {} as TargetApplicationOwners) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoSubjectSet(targetApplicationOwners),
    }
}
