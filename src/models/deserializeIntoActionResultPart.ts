import { type ActionResultPart } from './actionResultPart';
import { createPublicErrorFromDiscriminatorValue } from './createPublicErrorFromDiscriminatorValue';
import { type PublicError } from './publicError';
import { serializePublicError } from './serializePublicError';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoActionResultPart(actionResultPart: ActionResultPart | undefined = {} as ActionResultPart) : Record<string, (node: ParseNode) => void> {
    return {
        "error": n => { actionResultPart.errorEscaped = n.getObjectValue<PublicError>(createPublicErrorFromDiscriminatorValue); },
        "@odata.type": n => { actionResultPart.odataType = n.getStringValue(); },
    }
}
