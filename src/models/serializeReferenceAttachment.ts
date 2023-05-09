import {ReferenceAttachment} from './referenceAttachment';
import {serializeAttachment} from './serializeAttachment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReferenceAttachment(writer: SerializationWriter, referenceAttachment: ReferenceAttachment | undefined = {} as ReferenceAttachment) : void {
        serializeAttachment(writer, referenceAttachment)
}
