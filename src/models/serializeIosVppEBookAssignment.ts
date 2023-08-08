import type {IosVppEBookAssignment} from './iosVppEBookAssignment';
import {serializeManagedEBookAssignment} from './serializeManagedEBookAssignment';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosVppEBookAssignment(writer: SerializationWriter, iosVppEBookAssignment: IosVppEBookAssignment | undefined = {} as IosVppEBookAssignment) : void {
        serializeManagedEBookAssignment(writer, iosVppEBookAssignment)
}
