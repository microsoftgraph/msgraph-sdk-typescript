import {serializeSubjectSet} from './serializeSubjectSet';
import {TargetApplicationOwners} from './targetApplicationOwners';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetApplicationOwners(writer: SerializationWriter, targetApplicationOwners: TargetApplicationOwners | undefined = {} as TargetApplicationOwners) : void {
        serializeSubjectSet(writer, targetApplicationOwners)
}
