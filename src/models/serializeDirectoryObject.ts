import {DirectoryObject} from './directoryObject';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDirectoryObject(writer: SerializationWriter, directoryObject: DirectoryObject | undefined = {} as DirectoryObject) : void {
        serializeEntity(writer, directoryObject)
        writer.writeDateValue("deletedDateTime", directoryObject.deletedDateTime);
}
