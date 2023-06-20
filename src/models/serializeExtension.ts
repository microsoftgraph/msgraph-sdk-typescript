import {Extension} from './extension';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExtension(extension: Extension | undefined = {} as Extension, writer: SerializationWriter) : void {
        serializeEntity(writer, extension)
}
