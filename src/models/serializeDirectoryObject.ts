import { type DirectoryObject } from './directoryObject';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeDirectoryObject(writer: SerializationWriter, directoryObject: DirectoryObject | undefined = {} as DirectoryObject) : void {
        serializeEntity(writer, directoryObject)
        writer.writeDateValue("deletedDateTime", directoryObject.deletedDateTime);
}
