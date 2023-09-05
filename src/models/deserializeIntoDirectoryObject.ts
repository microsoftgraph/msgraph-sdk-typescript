import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type DirectoryObject } from './directoryObject';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryObject(directoryObject: DirectoryObject | undefined = {} as DirectoryObject) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(directoryObject),
        "deletedDateTime": n => { directoryObject.deletedDateTime = n.getDateValue(); },
    }
}
