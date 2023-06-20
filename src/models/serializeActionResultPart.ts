import {ActionResultPart} from './actionResultPart';
import {PublicError} from './publicError';
import {serializePublicError} from './serializePublicError';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeActionResultPart(actionResultPart: ActionResultPart | undefined = {} as ActionResultPart, writer: SerializationWriter) : void {
        writer.writeObjectValue<PublicError>("error", actionResultPart.errorEscaped, serializePublicError);
        writer.writeStringValue("@odata.type", actionResultPart.odataType);
        writer.writeAdditionalData(actionResultPart.additionalData);
}
