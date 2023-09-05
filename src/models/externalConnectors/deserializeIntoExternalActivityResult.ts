import { createPublicErrorFromDiscriminatorValue } from '../createPublicErrorFromDiscriminatorValue';
import { type PublicError } from '../publicError';
import { serializePublicError } from '../serializePublicError';
import { deserializeIntoExternalActivity } from './deserializeIntoExternalActivity';
import { type ExternalActivityResult } from './externalActivityResult';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoExternalActivityResult(externalActivityResult: ExternalActivityResult | undefined = {} as ExternalActivityResult) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoExternalActivity(externalActivityResult),
        "error": n => { externalActivityResult.errorEscaped = n.getObjectValue<PublicError>(createPublicErrorFromDiscriminatorValue); },
    }
}
