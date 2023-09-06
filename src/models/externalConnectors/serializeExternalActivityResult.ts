import { type PublicError } from '../publicError';
import { serializePublicError } from '../serializePublicError';
import { type ExternalActivityResult } from './externalActivityResult';
import { serializeExternalActivity } from './serializeExternalActivity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeExternalActivityResult(writer: SerializationWriter, externalActivityResult: ExternalActivityResult | undefined = {} as ExternalActivityResult) : void {
        serializeExternalActivity(writer, externalActivityResult)
        writer.writeObjectValue<PublicError>("error", externalActivityResult.errorEscaped, serializePublicError);
}
