import { type ActionResultPart } from './actionResultPart';
import { type PublicError } from './publicError';
import { serializePublicError } from './serializePublicError';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeActionResultPart(writer: SerializationWriter, actionResultPart: ActionResultPart | undefined = {} as ActionResultPart) : void {
        writer.writeObjectValue<PublicError>("error", actionResultPart.errorEscaped, serializePublicError);
        writer.writeStringValue("@odata.type", actionResultPart.odataType);
        writer.writeAdditionalData(actionResultPart.additionalData);
}
