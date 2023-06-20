import {IosVppEBookAssignment} from './iosVppEBookAssignment';
import {serializeManagedEBookAssignment} from './serializeManagedEBookAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosVppEBookAssignment(iosVppEBookAssignment: IosVppEBookAssignment | undefined = {} as IosVppEBookAssignment, writer: SerializationWriter) : void {
        serializeManagedEBookAssignment(writer, iosVppEBookAssignment)
}
