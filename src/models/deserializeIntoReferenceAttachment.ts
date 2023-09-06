import { deserializeIntoAttachment } from './deserializeIntoAttachment';
import { type ReferenceAttachment } from './referenceAttachment';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoReferenceAttachment(referenceAttachment: ReferenceAttachment | undefined = {} as ReferenceAttachment) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAttachment(referenceAttachment),
    }
}
