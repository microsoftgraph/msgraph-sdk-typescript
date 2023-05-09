import {deserializeIntoAttachment} from './deserializeIntoAttachment';
import {ReferenceAttachment} from './referenceAttachment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoReferenceAttachment(referenceAttachment: ReferenceAttachment | undefined = {} as ReferenceAttachment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAttachment(referenceAttachment),
    }
}
