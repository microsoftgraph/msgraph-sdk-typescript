import { serializeSubjectSet } from './serializeSubjectSet';
import { type TargetApplicationOwners } from './targetApplicationOwners';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTargetApplicationOwners(writer: SerializationWriter, targetApplicationOwners: TargetApplicationOwners | undefined = {} as TargetApplicationOwners) : void {
        serializeSubjectSet(writer, targetApplicationOwners)
}
