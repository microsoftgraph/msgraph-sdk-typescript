import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DirectoryObject} from './directoryObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDirectoryObject(directoryObject: DirectoryObject | undefined = {} as DirectoryObject) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(directoryObject),
        "deletedDateTime": n => { directoryObject.deletedDateTime = n.getDateValue(); },
    }
}
