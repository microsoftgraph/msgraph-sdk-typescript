import {DirectoryObject} from './directoryObject';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryObject(directoryObject: DirectoryObject | undefined = {} as DirectoryObject, writer: SerializationWriter) : void {
        serializeEntity(writer, directoryObject)
        writer.writeDateValue("deletedDateTime", directoryObject.deletedDateTime);
}
